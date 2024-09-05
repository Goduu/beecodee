import { defineDocumentType } from "contentlayer/source-files"
import { TranslatedText } from "../types/TranslatedText"
import { UnitReference } from "../types/UnitReference"

// Define the Lesson document type
export const Section = defineDocumentType(() => ({
    name: "Section",
    filePathPattern: "courses/**/sections/**/section_metadata.json",
    fields: {
        label: { type: "nested", of: TranslatedText, required: true },
        description: { type: "nested", of: TranslatedText, required: true },
        unitRefs: {
            type: "list",
            of: UnitReference,
            required: true,
        },
    },
    computedFields: {
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/sections/")[1].split("/")[0],
        },
        course: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("courses/")[1].split("/")[0],
        },
    },
}))
