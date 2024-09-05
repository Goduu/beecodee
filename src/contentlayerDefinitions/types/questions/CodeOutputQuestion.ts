import { defineNestedType } from "contentlayer/source-files"
import { TranslatedText } from "../TranslatedText"
import { Option } from "../Option"

export const CodeOutputQuestion = defineNestedType(() => ({
  name: "CodeOutputQuestion",
  fields: {
    description: { type: "nested", of: TranslatedText, required: true },
    codeSnippet: {
      type: "string",
      required: true,
    },
    options: {
      type: "list",
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
}))
