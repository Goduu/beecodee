import { defineNestedType } from "contentlayer/source-files"
import { TranslatedText } from "../TranslatedText"
import { Segment } from "../Segment"
import { Option } from "../Option"

export const FillInTheBlankQuestion = defineNestedType(() => ({
  name: "FillInTheBlankQuestion",
  fields: {
    description: { type: "nested", of: TranslatedText, required: true },
    segments: {
      type: "list",
      of: Segment,
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
