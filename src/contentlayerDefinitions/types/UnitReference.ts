import { defineNestedType } from "contentlayer/source-files"

export const UnitReference = defineNestedType(() => ({
  name: "UnitReference",
  fields: {
    id: { type: "number", required: true },
    unit: { type: "string", required: true },
  },
}))
