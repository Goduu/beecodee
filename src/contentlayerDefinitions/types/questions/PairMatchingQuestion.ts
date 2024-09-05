import { defineNestedType } from "contentlayer/source-files"
import { TranslatedText } from "../TranslatedText"
import { Option } from "../Option"

export const PairMatchingQuestion = defineNestedType(() => ({
  name: "PairMatchingQuestion",
  fields: {
    description: {
      type: "nested",
      of: TranslatedText,
      required: true,
    },
    options: {
      type: "list",
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: "list",
      of: { type: "json" },
      required: true,
    },
  },
}))
