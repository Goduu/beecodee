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

export const Activity = defineNestedType(() => ({
  name: "Activity",
  filePathPattern: `activities/*.mdx`,
  contentType: "mdx",
  fields: {
    description: { type: 'string', required: true },
    language: {
      type: 'enum',
      options: ['javascript'],
      default: 'javascript',
      required: true
    },
    questionType: {
      type: 'enum',
      options: ['multipleChoice', 'singleChoice'],
      default: 'singleChoice',
      required: true
    },
    options: {
      type: 'list',
      of: { type: 'string' }
    },
    answer: {
      type: 'list',
      of: { type: 'string' }
    }
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