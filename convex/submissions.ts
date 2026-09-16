import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { TRACK_IDS } from "../lib/builders-challenge";

// Structural caps mirror the route's truncation. The route holds the single
// size/MIME master; this mutation only keeps the document shape bounded.
const CAPS = {
  tid: 40,
  fullName: 120,
  email: 160,
  phone: 40,
  track: 40,
  projectTitle: 160,
  prototypeUrl: 500,
  processDocLink: 500,
  portfolioUrl: 500,
  statement: 2000,
  originalName: 255,
  mime: 120,
} as const;

function bounded(value: string, max: number): string {
  if (value.length > max) {
    throw new Error("Field exceeds the allowed length.");
  }
  return value;
}

// Constant-time compare so a wrong credential leaks no prefix information.
function constantTimeEquals(candidate: string, expected: string | undefined): boolean {
  if (!expected) return false;
  if (candidate.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < candidate.length; i += 1) {
    diff |= candidate.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

function assertReviewer(password: string): void {
  if (!constantTimeEquals(password, process.env.BUILDERS_CHALLENGE_PASSWORD)) {
    throw new Error("Unauthorized.");
  }
}

// Only the Next route holds this server-side secret; it never reaches the
// browser. Without it, direct callers cannot mint upload URLs or insert rows.
function assertBackend(secret: string): void {
  if (!constantTimeEquals(secret, process.env.CONVEX_BACKEND_SECRET)) {
    throw new Error("Unauthorized.");
  }
}

export const generateUploadUrl = mutation({
  args: { secret: v.string() },
  handler: async (ctx, args) => {
    assertBackend(args.secret);
    return await ctx.storage.generateUploadUrl();
  },
});

export const create = mutation({
  args: {
    secret: v.string(),
    tid: v.string(),
    late: v.boolean(),
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    track: v.string(),
    projectTitle: v.string(),
    prototypeUrl: v.string(),
    processDocLink: v.string(),
    portfolioUrl: v.string(),
    statement: v.string(),
    processDocFile: v.union(
      v.null(),
      v.object({
        storageId: v.id("_storage"),
        originalName: v.string(),
        size: v.number(),
        mime: v.string(),
      }),
    ),
    agreements: v.object({
      inactive: v.boolean(),
      participate: v.boolean(),
      conduct: v.boolean(),
    }),
  },
  handler: async (ctx, args) => {
    assertBackend(args.secret);
    if (!TRACK_IDS.includes(args.track)) {
      throw new Error("Unknown track.");
    }
    await ctx.db.insert("submissions", {
      tid: bounded(args.tid, CAPS.tid),
      createdAt: new Date().toISOString(),
      late: args.late,
      fullName: bounded(args.fullName, CAPS.fullName),
      email: bounded(args.email, CAPS.email),
      phone: bounded(args.phone, CAPS.phone),
      track: bounded(args.track, CAPS.track),
      projectTitle: bounded(args.projectTitle, CAPS.projectTitle),
      prototypeUrl: bounded(args.prototypeUrl, CAPS.prototypeUrl),
      processDocLink: bounded(args.processDocLink, CAPS.processDocLink),
      processDocFile: args.processDocFile
        ? {
            storageId: args.processDocFile.storageId,
            originalName: bounded(
              args.processDocFile.originalName,
              CAPS.originalName,
            ),
            size: args.processDocFile.size,
            mime: bounded(args.processDocFile.mime, CAPS.mime),
          }
        : null,
      portfolioUrl: bounded(args.portfolioUrl, CAPS.portfolioUrl),
      statement: bounded(args.statement, CAPS.statement),
      agreements: args.agreements,
    });
  },
});

export const list = query({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    assertReviewer(args.password);
    return await ctx.db
      .query("submissions")
      .withIndex("by_created")
      .order("desc")
      .collect();
  },
});

export const getFile = query({
  args: { tid: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    assertReviewer(args.password);
    const doc = await ctx.db
      .query("submissions")
      .withIndex("by_tid", (q) => q.eq("tid", args.tid))
      .first();
    if (!doc || !doc.processDocFile) return null;
    const fileUrl = await ctx.storage.getUrl(doc.processDocFile.storageId);
    if (!fileUrl) return null;
    return {
      originalName: doc.processDocFile.originalName,
      size: doc.processDocFile.size,
      mime: doc.processDocFile.mime,
      fileUrl,
    };
  },
});

export const deleteSubmission = mutation({
  args: { tid: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    assertReviewer(args.password);
    const doc = await ctx.db
      .query("submissions")
      .withIndex("by_tid", (q) => q.eq("tid", args.tid))
      .first();
    if (!doc) return;
    if (doc.processDocFile) {
      await ctx.storage.delete(doc.processDocFile.storageId);
    }
    await ctx.db.delete(doc._id);
  },
});
