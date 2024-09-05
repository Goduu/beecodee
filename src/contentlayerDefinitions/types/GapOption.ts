import { defineNestedType } from "contentlayer/source-files"

export const GapOption = defineNestedType(() => ({
  name: "GapOption",
  fields: {
    id: {
      type: "enum",
      options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "ft", "fn", "fs"],
      required: true,
    },
    content: { type: "string" },
    size: { type: "number", required: true },
  },
}))
