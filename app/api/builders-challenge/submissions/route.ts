import { NextRequest, NextResponse } from "next/server";
import { randomInt, timingSafeEqual } from "node:crypto";
import { ConvexHttpClient } from "convex/browser";
import {
  ALLOWED_DOC_EXTS,
  ALLOWED_DOC_MIMES,
  DEADLINE_ISO,
  MAX_DOC_BYTES,
  TRACK_IDS,
  validateSubmission,
} from "@/lib/builders-challenge";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

const DEV_FALLBACK_PASSWORD = "tic-builders-2026";

export function adminPasswordOk(candidate: string | null): boolean {
  const expected = process.env.BUILDERS_CHALLENGE_PASSWORD;
  if (!candidate) return false;
  if (!expected) {
    if (process.env.NODE_ENV === "production") return false;
    return candidate === DEV_FALLBACK_PASSWORD;
  }
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function newSubmissionId(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 6; i += 1) {
    suffix += alphabet[randomInt(alphabet.length)];
  }
  return `TIC-${suffix}`;
}

function isLate(now: Date = new Date()): boolean {
  return now.getTime() > new Date(DEADLINE_ISO).getTime();
}

export function convexClient(): ConvexHttpClient {
  const url = process.env.CONVEX_URL;
  if (!url) {
    throw new Error("CONVEX_URL is not configured");
  }
  // Fresh instance per request: ConvexHttpClient is stateful (auth + mutation queue).
  return new ConvexHttpClient(url);
}

function extOf(name: string): string {
  const parts = name.toLowerCase().split(".");
  return parts.length > 1 ? parts[parts.length - 1] : "";
}

interface ConvexRow {
  tid: string;
  createdAt: string;
  late: boolean;
  fullName: string;
  email: string;
  phone: string;
  track: string;
  projectTitle: string;
  prototypeUrl: string;
  processDocLink: string;
  processDocFile: {
    storageId: string;
    originalName: string;
    size: number;
    mime: string;
  } | null;
  portfolioUrl: string;
  statement: string;
  agreements: { inactive: boolean; participate: boolean; conduct: boolean };
}

function toLegacyRow(row: ConvexRow) {
  return {
    id: row.tid,
    createdAt: row.createdAt,
    late: row.late,
    fullName: row.fullName,
    email: row.email,
    phone: row.phone,
    track: row.track,
    projectTitle: row.projectTitle,
    prototypeUrl: row.prototypeUrl,
    processDocLink: row.processDocLink,
    processDocFile: row.processDocFile
      ? {
          originalName: row.processDocFile.originalName,
          storedName: row.processDocFile.storageId,
          size: row.processDocFile.size,
          mime: row.processDocFile.mime,
        }
      : null,
    portfolioUrl: row.portfolioUrl,
    statement: row.statement,
    agreements: row.agreements,
  };
}

export async function GET(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (!adminPasswordOk(password)) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  try {
    const rows = (await convexClient().query(api.submissions.list, {
      password: password as string,
    })) as ConvexRow[];
    const submissions = rows.map(toLegacyRow);
    return NextResponse.json({ submissions, count: submissions.length });
  } catch {
    return NextResponse.json(
      { error: "Could not load submissions. Try again." },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Submit the form as multipart data." },
      { status: 400 },
    );
  }

  const str = (key: string) =>
    String(form.get(key) ?? "")
      .trim()
      .slice(0, 5000);

  const input = {
    fullName: str("fullName").slice(0, 120),
    email: str("email").slice(0, 160),
    phone: str("phone").slice(0, 40),
    track: str("track").slice(0, 40),
    projectTitle: str("projectTitle").slice(0, 160),
    prototypeUrl: str("prototypeUrl").slice(0, 500),
    processDocLink: str("processDocLink").slice(0, 500),
    portfolioUrl: str("portfolioUrl").slice(0, 500),
    statement: String(form.get("statement") ?? "").trim().slice(0, 2000),
    agreeInactive: form.get("agreeInactive") === "on",
    agreeParticipate: form.get("agreeParticipate") === "on",
    agreeConduct: form.get("agreeConduct") === "on",
    hasDocFile: false,
  };

  const file = form.get("processDocFile");
  const hasFile =
    typeof file !== "string" &&
    file !== null &&
    typeof (file as File).size === "number" &&
    (file as File).size > 0;
  input.hasDocFile = hasFile;

  if (!TRACK_IDS.includes(input.track)) {
    return NextResponse.json(
      { errors: { track: "Choose one of the 6 challenge streams." } },
      { status: 400 },
    );
  }

  const errors = validateSubmission(input);

  let fileBytes: Uint8Array | null = null;
  let fileMeta: { name: string; size: number; mime: string } | null = null;

  if (hasFile) {
    const f = file as File;
    if (f.size > MAX_DOC_BYTES) {
      errors.processDoc = "Process brief must be 10MB or less.";
    } else {
      const ext = extOf(f.name || "");
      const extOk = ALLOWED_DOC_EXTS.includes(ext);
      const mimeType = (f.type || "").toLowerCase();
      const mimeOk =
        !mimeType ||
        mimeType === "application/octet-stream" ||
        ALLOWED_DOC_MIMES.includes(f.type);
      if (!extOk || !mimeOk) {
        errors.processDoc = "Upload a PDF, DOC, DOCX, TXT, or MD file.";
      } else {
        const buf = new Uint8Array(await f.arrayBuffer());
        fileBytes = buf;
        fileMeta = { name: f.name || "brief", size: f.size, mime: f.type };
      }
    }
  }

  // Validation runs before any mint or upload, so invalid submits create no blobs.
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const id = newSubmissionId();

  let storedDoc: {
    storageId: Id<"_storage">;
    originalName: string;
    size: number;
    mime: string;
  } | null = null;

  try {
    const client = convexClient();
    if (fileBytes && fileMeta) {
      const uploadUrl = await client.mutation(
        api.submissions.generateUploadUrl,
        {},
      );
      const uploadRes = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          "Content-Type": fileMeta.mime || "application/octet-stream",
        },
        body: fileBytes as BodyInit,
      });
      if (!uploadRes.ok) {
        throw new Error("Upload failed");
      }
      const uploaded = (await uploadRes.json()) as { storageId: string };
      storedDoc = {
        storageId: uploaded.storageId as Id<"_storage">,
        originalName: (fileMeta.name || "brief").slice(0, 255),
        size: fileMeta.size,
        mime: (fileMeta.mime || "application/octet-stream").slice(0, 120),
      };
    }
    await client.mutation(api.submissions.create, {
      tid: id,
      late: isLate(),
      fullName: input.fullName,
      email: input.email,
      phone: input.phone,
      track: input.track,
      projectTitle: input.projectTitle,
      prototypeUrl: input.prototypeUrl,
      processDocLink: input.processDocLink,
      portfolioUrl: input.portfolioUrl,
      statement: input.statement,
      processDocFile: storedDoc,
      agreements: {
        inactive: input.agreeInactive,
        participate: input.agreeParticipate,
        conduct: input.agreeConduct,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Could not save your submission. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id }, { status: 201 });
}
