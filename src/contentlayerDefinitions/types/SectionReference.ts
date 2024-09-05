import { defineNestedType } from "contentlayer/source-files"

export const SectionReference = defineNestedType(() => ({
  name: "SectionReference",
  fields: {
    id: { type: "number", required: true },
    section: { type: "string", required: true },
  },
}))
