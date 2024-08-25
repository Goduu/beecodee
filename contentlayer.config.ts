import { defineDocumentType, makeSource, defineNestedType, ComputedFields } from 'contentlayer/source-files'

const computedFields: ComputedFields<"Activity" | "Unit" | "Lesson"> = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
}

const Segment = defineNestedType(() => ({
  name: "Segment",
  fields: {
    segment: {
      type: "nested",
      of: [TextOption, CodeOption, GapOption],
      required: true,
    }
  },
}));

const GapOption = defineNestedType(() => ({
  name: "GapOption",
  fields: {
    id: { type: "enum", options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "ft", "fn", "fs"], required: true },
    content: { type: 'string' },
    size: { type: 'number', required: true },
  },
}));

const TextOption = defineNestedType(() => ({
  name: "TextOption",
  fields: {
    id: { type: "enum", options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "ft", "fn", "fs"], required: true },
    content: { type: 'nested', of: TranslatedText, required: true },
  },
}));

const CodeOption = defineNestedType(() => ({
  name: "CodeOption",
  fields: {
    id: { type: "enum", options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "ft", "fn", "fs"], required: true },
    content: {
      type: 'string',
      required: true,
    },
  },
}));

const Option = defineNestedType(() => ({
  name: "Option",
  fields: {
    option: {
      type: 'nested',
      of: [TextOption, CodeOption],
      required: true,
    },
  },
}));

export const PairMatchingQuestion = defineNestedType(() => ({
  name: "PairMatchingQuestion",
  fields: {
    description: {
      type: 'nested',
      of: TranslatedText,
      required: true,
    },
    options: {
      type: 'list',
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: "json" },
      required: true,
    },
  },
}));

export const MultipleChoiceQuestion = defineNestedType(() => ({
  name: "MultipleChoiceQuestion",
  fields: {
    description: { type: 'nested', of: TranslatedText, required: true },
    options: {
      type: 'list',
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const CodeOutputQuestion = defineNestedType(() => ({
  name: "CodeOutputQuestion",
  fields: {
    description: { type: 'nested', of: TranslatedText, required: true },
    codeSnippet: {
      type: 'string',
      required: true,
    },
    options: {
      type: 'list',
      of: Option,
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
      type: 'nested',
      of: TranslatedText,
      required: true,
    },
    options: {
      type: 'list',
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const FillInTheBlankQuestion = defineNestedType(() => ({
  name: "FillInTheBlankQuestion",
  fields: {
    description: { type: 'nested', of: TranslatedText, required: true },
    segments: {
      type: 'list',
      of: Segment,
    },
    options: {
      type: 'list',
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const CodeRewritingQuestion = defineNestedType(() => ({
  name: "CodeRewritingQuestion",
  fields: {
    description: {
      type: 'nested',
      of: TranslatedText,
      required: true,
    },
    segments: {
      type: 'list',
      of: Segment,
    },
    options: {
      type: 'list',
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

export const DebuggingQuestion = defineNestedType(() => ({
  name: "DebuggingQuestion",
  fields: {
    description: {
      type: 'nested',
      of: TranslatedText,
      required: true,
    },
    segments: {
      type: 'list',
      of: Segment,
    },
    expectedOutput: {
      type: 'string',
      required: true,
    },
    options: {
      type: 'list',
      of: Option,
      required: true,
    },
    correctAnswer: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

const Course = defineDocumentType(() => ({
  name: 'Course',
  filePathPattern: 'courses/**/course_metadata.json',
  fields: {
    title: { type: 'string', required: true },
    // prerequisites: { type: 'string', required: false },
  },
}))

const TranslatedText = defineNestedType(() => ({
  name: "TranslatedText",
  fields: {
    en: { type: 'string', required: true },
    pt: { type: 'string', required: true },
    fr: { type: 'string', required: true },
    de: { type: 'string', required: true },
    es: { type: 'string', required: true },
  },
}))

export const ActivityReference = defineNestedType(() => ({
  name: "ActivityReference",
  fields: {
    id: { type: 'number', required: true },
    activity: { type: 'string', required: true },
  },
}));

export const LessonReference = defineNestedType(() => ({
  name: "LessonReference",
  fields: {
    id: { type: 'number', required: true },
    lesson: { type: 'string', required: true },
  },
}));

// Define the Unit document type
const Unit = defineDocumentType(() => ({
  name: 'Unit',
  filePathPattern: 'courses/**/units/**/unit_metadata.json',
  fields: {
    id: { type: 'number', required: true },
    title: { type: 'nested', of: TranslatedText, required: true },
    description: { type: 'nested', of: TranslatedText, required: true },
    language: { type: 'string', required: true },
    lessonRefs: {
      type: 'list',
      of: LessonReference,
      required: true
    }
  },
  computedFields: {
    ...computedFields,
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/units/")[1].split("/")[0]
    },
    course: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0]
    }
  }
}))

// Define the Lesson document type
const Lesson = defineDocumentType(() => ({
  name: 'Lesson',
  filePathPattern: 'courses/**/units/**/lessons/**/lesson_metadata.json',
  fields: {
    title: { type: "nested", of: TranslatedText, required: true },
    description: { type: "nested", of: TranslatedText, required: true },
    xp: { type: 'number', required: true },
    activityRefs: {
      type: 'list',
      of: ActivityReference,
      required: true
    }
  },
  computedFields: {
    ...computedFields,
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/lessons/")[1].split("/")[0]
    },
    unit: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/units/")[1].split("/")[0]
    },
    course: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0]
    }
  }
}))

// Define the Activity document type
const Activity = defineDocumentType(() => ({
  name: 'Activity',
  filePathPattern: 'courses/**/units/**/lessons/**/activities/**/activity_metadata.json',
  fields: {
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
      of: [MultipleChoiceQuestion, SingleChoiceQuestion, FillInTheBlankQuestion, PairMatchingQuestion, CodeOutputQuestion],
      required: true,
    },
  },
  computedFields: {
    ...computedFields,
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/activities/")[1].split("/")[0]
    },
    lesson: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/lessons/")[1].split("/")[0]
    },
    unit: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/units/")[1].split("/")[0]
    },
    course: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0]
    }
  }
}))

// Make the source with all document types
export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Course, Unit, Lesson, Activity],
})
