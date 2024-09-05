import { defineNestedType } from "contentlayer/source-files"

export const TranslatedText = defineNestedType(() => ({
  name: "TranslatedText",
  fields: {
    en: { type: "string", required: true },
    pt: { type: "string", required: true },
    fr: { type: "string", required: true },
    de: { type: "string", required: true },
    es: { type: "string", required: true },
  },
}))
