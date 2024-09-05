import { defineDocumentType } from "contentlayer/source-files"
import { MultipleChoiceQuestion } from "../types/questions/MultipleChoiceQuestion"
import { SingleChoiceQuestion } from "../types/questions/SingleChoiceQuestion"
import { FillInTheBlankQuestion } from "../types/questions/FillInTheBlankQuestion"
import { PairMatchingQuestion } from "../types/questions/PairMatchingQuestion"
import { CodeOutputQuestion } from "../types/questions/CodeOutputQuestion"
import { BugFightQuestion } from "../types/questions/BugFightQuestion"

// Define the Activity document type
export const Activity = defineDocumentType(() => ({
  name: "Activity",
  filePathPattern: "courses/**/sections/**/units/**/lessons/**/activities/**/activity_metadata.json",
  fields: {
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    language: {
      type: "enum",
      options: ["javascript"],
      default: "javascript",
      required: true,
    },
    question: {
      type: "nested",
      of: [
        MultipleChoiceQuestion,
        SingleChoiceQuestion,
        FillInTheBlankQuestion,
        PairMatchingQuestion,
        CodeOutputQuestion,
        BugFightQuestion,
      ],
      required: true,
    },
  },
  computedFields: {
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/activities/")[1].split("/")[0],
    },
    lesson: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/lessons/")[1].split("/")[0],
    },
    unit: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/units/")[1].split("/")[0],
    },
    course: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0],
    },
  },
}))
