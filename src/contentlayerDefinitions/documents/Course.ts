import { defineDocumentType } from "contentlayer/source-files"
import { SectionReference } from "../types/SectionReference"
import { TranslatedText } from "../types/TranslatedText"

export const Course = defineDocumentType(() => ({
  name: "Course",
  filePathPattern: "courses/**/course_metadata.json",
  fields: {
    label: { type: "string", required: true },
    identifier: { type: "string", required: true },
    sectionRefs: {
      type: "list",
      of: SectionReference,
      required: true,
    },
  },
  computedFields: {
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0],
    },
  },
}))
