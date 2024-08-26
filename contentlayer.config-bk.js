import { defineDocumentType, makeSource, defineNestedType } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Segment = defineNestedType(() => ({
  name: "Segment",
  fields: {
    sType: {
      type: "enum",
      options: ["code", "text", "gap", "filledGap"],
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
  },
}))

const Option = defineNestedType(() => ({
  name: "Option",
  fields: {
    content: {
      type: "string",
      required: true,
    },
    oType: {
      type: "enum",
      options: ["code", "text"],
      default: "code",
    },
  },
}))

const PairMatchingOption = defineNestedType(() => ({
  name: "PairMatchingOption",
  fields: {
    content: {
      type: "string",
      required: true,
    },
    oType: {
      type: "enum",
      options: ["code", "text"],
      default: "code",
    },
    position: {
      type: "enum",
      options: ["up", "down"],
      required: true,
    },
  },
}))

export const PairMatchingQuestion = defineNestedType(() => ({
  name: "PairMatchingQuestion",
  fields: {
    description: {
      type: "string",
      required: true,
    },
    pairMatchingOptions: {
      type: "list",
      of: PairMatchingOption,
      required: true,
    },
    correctAnswer: {
      type: "list",
      of: { type: "json" },
      required: true,
    },
  },
}))

export const MultipleChoiceQuestion = defineNestedType(() => ({
  name: "MultipleChoiceQuestion",
  fields: {
    description: {
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

export const CodeOutputQuestion = defineNestedType(() => ({
  name: "CodeOutputQuestion",
  fields: {
    description: {
      type: "string",
      required: true,
    },
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

export const SingleChoiceQuestion = defineNestedType(() => ({
  name: "SingleChoiceQuestion",
  fields: {
    description: {
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

export const FillInTheBlankQuestion = defineNestedType(() => ({
  name: "FillInTheBlankQuestion",
  fields: {
    description: {
      type: "string",
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

export const CodeRewritingQuestion = defineNestedType(() => ({
  name: "CodeRewritingQuestion",
  fields: {
    description: {
      type: "string",
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

export const DebuggingQuestion = defineNestedType(() => ({
  name: "DebuggingQuestion",
  fields: {
    description: {
      type: "string",
      required: true,
    },
    segments: {
      type: "list",
      of: Segment,
    },
    expectedOutput: {
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

export const Activity = defineNestedType(() => ({
  name: "Activity",
  filePathPattern: `activities/*.mdx`,
  contentType: "mdx",
  fields: {
    id: { type: "string", required: true },
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
      ],
      required: true,
    },
  },
  computedFields,
}))

export const Lesson = defineNestedType(() => ({
  name: "Lesson",
  filePathPattern: `lessons/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    xp: { type: "number", required: true },
    activityRefs: {
      type: "list",
      of: ActivityReference,
      required: true,
    },
  },
  computedFields,
}))

export const ActivityReference = defineNestedType(() => ({
  name: "ActivityReference",
  fields: {
    id: { type: "number", required: true },
    activity: { type: "string", required: true },
  },
}))

export const LessonReference = defineNestedType(() => ({
  name: "LessonReference",
  fields: {
    id: { type: "number", required: true },
    lesson: { type: "string", required: true },
  },
}))

export const Unit = defineNestedType(() => ({
  name: "Unit",
  filePathPattern: `units/*.mdx`,
  contentType: "mdx",
  fields: {
    id: { type: "number", required: true },
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    lessonRefs: {
      type: "list",
      of: LessonReference,
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Lesson, Activity, Unit],
})
