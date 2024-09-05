import { defineNestedType } from "contentlayer/source-files"
import { TranslatedText } from "../TranslatedText"
import { Option } from "../Option"

export const BugFightQuestion = defineNestedType(() => ({
  name: "BugFightQuestion",
  fields: {
    description: { type: "nested", of: TranslatedText, required: true },
    segments: {
      type: "list",
      of: Option,
      required: true,
    },
    options: {
      type: "list",
      of: Option,
      required: true,
    },
    correctAnswers: {
      type: "json",
      required: true,
    },
  },
}))
