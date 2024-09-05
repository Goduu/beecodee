import { defineDocumentType } from "contentlayer/source-files"
import { TranslatedText } from "../types/TranslatedText"
import { LessonReference } from "../types/LessonReference"

// Define the Unit document type
export const Unit = defineDocumentType(() => ({
  name: "Unit",
  filePathPattern: "courses/**/sections/**/units/**/unit_metadata.json",
  fields: {
    id: { type: "number", required: true },
    title: { type: "nested", of: TranslatedText, required: true },
    description: { type: "nested", of: TranslatedText, required: true },
    language: { type: "string", required: true },
    unitType: { type: "enum", options: ["theory", "bugFight"], required: true, default: "theory" },
    lessonRefs: {
      type: "list",
      of: LessonReference,
      required: true,
    },
  },
  computedFields: {
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/units/")[1].split("/")[0],
    },
    course: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0],
    },
  },
}))

export const UnitContent = defineDocumentType(() => ({
  name: "UnitContent",
  filePathPattern: "courses/**/units/**/unit_content.mdx",
  contentType: "mdx",
  fields: {},
  computedFields: {
    unit: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/units/")[1].split("/")[0],
    },
  },
}))
