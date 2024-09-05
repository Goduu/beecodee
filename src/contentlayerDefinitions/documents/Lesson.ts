import { defineDocumentType } from "contentlayer/source-files"
import { TranslatedText } from "../types/TranslatedText"
import { ActivityReference } from "../types/ActivityReference"

// Define the Lesson document type
export const Lesson = defineDocumentType(() => ({
  name: "Lesson",
  filePathPattern: "courses/**/sections/**/units/**/lessons/**/lesson_metadata.json",
  fields: {
    title: { type: "nested", of: TranslatedText, required: true },
    description: { type: "nested", of: TranslatedText, required: true },
    xp: { type: "number", required: true },
    activityRefs: {
      type: "list",
      of: ActivityReference,
      required: true,
    },
  },
  computedFields: {
    slugAsParams: {
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
