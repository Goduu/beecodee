import { defineNestedType } from "contentlayer/source-files"
import { Segment } from "../Segment"
import { TranslatedText } from "../TranslatedText"
import { Option } from "../Option"

export const CodeRewritingQuestion = defineNestedType(() => ({
  name: "CodeRewritingQuestion",
  fields: {
    description: {
      type: "nested",
      of: TranslatedText,
      required: true,
    },
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
