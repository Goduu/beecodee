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
      type: 'enum',
      options: ['text', 'gap'],
      required: true,
    },
    content: {
      type: 'string',
      required: true,
    },
  },
}));

export const MultipleChoiceQuestion = defineNestedType(() => ({
  name: "MultipleChoiceQuestion",
  fields: {
    description: {
      type: 'string',
      required: true,
    },
    options: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const SingleChoiceQuestion = defineNestedType(() => ({
  name: "SingleChoiceQuestion",
  fields: {
    description: {
      type: 'string',
      required: true,
    },
    options: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const CompleteCodeQuestion = defineNestedType(() => ({
  name: "CompleteCodeQuestion",
  fields: {
    description: {
      type: 'string',
      required: true,
    },
    segments: {
      type: 'list',
      of: Segment,
    },
    options: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const Activity = defineNestedType(() => ({
  name: "Activity",
  filePathPattern: `activities/*.mdx`,
  contentType: "mdx",
  fields: {
    id: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    language: {
      type: 'enum',
      options: ['javascript'],
      default: 'javascript',
      required: true
    },
    question: {
      type: 'nested',
      of: [MultipleChoiceQuestion, SingleChoiceQuestion, CompleteCodeQuestion],
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
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    activities: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields,
}))

export const Unit = defineNestedType(() => ({
  name: "Unit",
  filePathPattern: `units/*.mdx`,
  contentType: "mdx",
  fields: {
    id: { type: 'number', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    lessons: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Lesson, Activity, Unit],
})