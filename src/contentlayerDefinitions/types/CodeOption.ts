import { defineNestedType } from "contentlayer/source-files"

export const CodeOption = defineNestedType(() => ({
  name: "CodeOption",
  fields: {
    id: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
  },
}))
