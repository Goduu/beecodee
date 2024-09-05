import { defineNestedType } from "contentlayer/source-files"
import { TranslatedText } from "./TranslatedText"

export const TextOption = defineNestedType(() => ({
  name: "TextOption",
  fields: {
    id: {
      type: "string",
      required: true,
    },
    content: { type: "nested", of: TranslatedText, required: true },
  },
}))
