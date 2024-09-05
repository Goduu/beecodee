import { defineNestedType } from "contentlayer/source-files"
import { CodeOption } from "./CodeOption"
import { TextOption } from "./TextOption"
import { GapOption } from "./GapOption"

export const Segment = defineNestedType(() => ({
  name: "Segment",
  fields: {
    segment: {
      type: "nested",
      of: [TextOption, CodeOption, GapOption],
      required: true,
    },
  },
}))
