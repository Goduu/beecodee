import { defineNestedType } from "contentlayer/source-files"

export const LessonReference = defineNestedType(() => ({
  name: "LessonReference",
  fields: {
    id: { type: "number", required: true },
    lesson: { type: "string", required: true },
  },
}))
