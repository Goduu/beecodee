import { PairMatchingQuestion } from "@contentlayer/generated"
import { AnswerStatus, TokenGroup } from "./types"
import { highlightCode, OptionWithTokens, Token } from "@/components/TokenColors/highlightCode"
import { isEqual } from "lodash"
import { BeeLocale } from "@/components/Localization/localization"

// Generate pair matching options based on the question and language
export const generatePairMatchingOptions = (
  question: PairMatchingQuestion,
  language: string,
  locale: BeeLocale,
): OptionWithTokens[] => {
  return question.options.reduce((acc, option) => {
    if (option.option.type === "TextOption") {
      const textOption: OptionWithTokens = {
        ...option.option,
        status: "neutral",
        tokens: [{ content: option.option.content[locale], type: "text" }],
      }
      acc.push({ ...textOption, isOneLined: true })
      return acc
    }
    if (option.option.type === "CodeOption") {
      const codeOption = highlightCode(option.option, language, locale)
      acc.push({ ...codeOption, isOneLined: true })
      return acc
    }
    return acc
  }, [] as OptionWithTokens[])
}

// Update the status of options based on the selected token group
export const updateOptionsStatus = (
  options: OptionWithTokens[],
  newlySelectedOption: OptionWithTokens,
  correctAnswer: string[][],
): OptionWithTokens[] => {
  let changeOtherStatusTo: AnswerStatus = "neutral"
  const alreadySelectedOption = options.find((option) => option.status === "selected")

  const updatedOptions = options.map((option) => {
    if (option.status === "correct") return option

    if (option.id === newlySelectedOption.id) {
      const newStatus = alreadySelectedOption
        ? determineStatus(alreadySelectedOption, option, correctAnswer)
        : "selected"
      changeOtherStatusTo = newStatus
      return { ...option, status: newStatus }
    }

    return option
  })

  // If there is already one selected, update its status based on the new selection
  return updatedOptions.map((tokenGroup) => {
    if (tokenGroup.status === "selected") {
      return { ...tokenGroup, status: changeOtherStatusTo }
    }
    return tokenGroup
  })
}

// Determine the new status of a token group based on the current selection
export const determineStatus = (
  alreadySelectedOption: OptionWithTokens,
  newlySelectedOption: OptionWithTokens,
  correctAnswer: string[][],
): AnswerStatus => {
  const alreadySelected = newlySelectedOption.status && ["selected", "wrong"].includes(newlySelectedOption.status)

  if (alreadySelected) return "neutral"

  const isCorrect = correctAnswer.some(
    (arr) =>
      isEqual(arr, [alreadySelectedOption.id, newlySelectedOption.id].filter(Boolean)) ||
      isEqual(arr, [newlySelectedOption.id, alreadySelectedOption.id].filter(Boolean)),
  )

  return isCorrect ? "correct" : "wrong"
}

// Get the concatenated content of multiple token groups
export const hasWrongStatus = (options: OptionWithTokens[]): boolean =>
  options.some((tokenGroup) => tokenGroup.status === "wrong")
