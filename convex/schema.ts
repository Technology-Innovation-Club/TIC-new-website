import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  submissions: defineTable({
    tid: v.string(),
    createdAt: v.string(),
    late: v.boolean(),
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    track: v.string(),
    projectTitle: v.string(),
    prototypeUrl: v.string(),
    processDocLink: v.string(),
    processDocFile: v.union(
      v.null(),
      v.object({
        storageId: v.id("_storage"),
        originalName: v.string(),
        size: v.number(),
        mime: v.string(),
      }),
    ),
    portfolioUrl: v.string(),
    statement: v.string(),
    agreements: v.object({
      inactive: v.boolean(),
      participate: v.boolean(),
      conduct: v.boolean(),
    }),
  })
    .index("by_created", ["createdAt"])
    .index("by_tid", ["tid"]),
});
