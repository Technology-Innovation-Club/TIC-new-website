import { NextRequest, NextResponse } from "next/server";
import { api } from "@/convex/_generated/api";
import { adminPasswordOk, convexClient } from "../../route";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const password = req.headers.get("x-admin-password");
  if (!adminPasswordOk(password)) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  const { id } = await context.params;
  try {
    const file = await convexClient().query(api.submissions.getFile, {
      tid: id,
      password: password as string,
    });
    if (!file) {
      return NextResponse.json(
        { error: "Document not found." },
        { status: 404 },
      );
    }
    const download = await fetch(file.fileUrl);
    if (!download.ok) {
      return NextResponse.json(
        { error: "Document not found." },
        { status: 404 },
      );
    }
    const data = new Uint8Array(await download.arrayBuffer());
    return new NextResponse(data, {
      headers: {
        "Content-Type": file.mime || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${file.originalName.replace(/["\\\r\n]+/g, "").slice(0, 120) || "brief"}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Document not found." }, { status: 404 });
  }
}
