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
        text-md font-extrabold
        ${isOneLined && " min-w-20 justify-center"}
        ${hasClickFunction ? "cursor-pointer" : ""}
        ${status && type === "option" ? getStatusClass(status) : ""}
  `
}

export const getStatusClass = (status: AnswerStatus) => {
  switch (status) {
    case "selected":
      return "rounded-lg p-1 px-2 border-2 border-b-2 border-blue-500 mt-[2px]"
    case "correct":
      return "rounded-lg p-1 px-2 border-2 border-b-2 mt-[2px] border-lime-500"
    case "wrong":
      return "rounded-lg p-1 px-2 border-2 border-b-2 mt-[2px] border-red-500"
    case "used":
      return "rounded-lg p-1 px-2 border-2 border-b-2 mt-[2px] border-gray-800"
    case "filled":
      return "rounded-lg p-1 px-2 border-0"
    default:
      return "rounded-lg p-1 px-2 border-2 border-b-4 border-gray-500"
  }
}
