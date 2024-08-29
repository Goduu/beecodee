import { AnswerStatus } from "../Answer/types"
import { TokenType } from "./types"

type ClassNameParams = {
  status?: AnswerStatus
  type?: TokenType
  hasClickFunction?: boolean
  isOneLined?: boolean
}
export const getClassNames = ({ status, type, hasClickFunction, isOneLined }: ClassNameParams) => {
  return `
        bg-gray-300 dark:bg-gray-800 py-1 px-2
        ${isOneLined ? "rounded-lg min-w-20 justify-center" : "rounded-md"}
        text-xl font-extrabold inline-block
        ${hasClickFunction ? "cursor-pointer" : ""}
        ${status && type === "option" ? getStatusClass(status) : ""}
  `
}

export const getStatusClass = (status: AnswerStatus) => {
  switch (status) {
    case "selected":
      return "border-2 border-b-2 border-blue-500 mt-[2px]"
    case "correct":
      return "border-2 border-b-2 mt-[2px] border-lime-500"
    case "wrong":
      return "border-2 border-b-2 mt-[2px] border-red-500"
    case "used":
      return "border-2 border-b-2 mt-[2px] border-gray-800"
    case "filled":
      return "border-0"
    default:
      return "border-2 border-b-4 border-gray-500"
  }
}
