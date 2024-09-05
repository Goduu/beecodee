import { defineNestedType } from "contentlayer/source-files"
import { TextOption } from "./TextOption"
import { CodeOption } from "./CodeOption"

export const Option = defineNestedType(() => ({
  name: "Option",
  fields: {
    option: {
      type: "nested",
      of: [TextOption, CodeOption],
      required: true,
    },
  },
}))
