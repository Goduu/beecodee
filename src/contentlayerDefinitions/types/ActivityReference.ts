import { defineNestedType } from "contentlayer/source-files"

export const ActivityReference = defineNestedType(() => ({
  name: "ActivityReference",
  fields: {
    id: { type: "number", required: true },
    activity: { type: "string", required: true },
  },
}))
