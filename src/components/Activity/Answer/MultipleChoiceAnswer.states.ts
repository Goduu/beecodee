import { useCallback, useEffect, useState } from "react"
import { AnswerStatus } from "./types"
import { useAudio } from "@/components/useAudio"
import { MultipleChoiceQuestion } from "@contentlayer/generated"
import { highlightArray, OptionWithTokens } from "@/components/TokenColors/highlightCode"
import { useLocaleContext } from "@/components/Localization/LocaleContext"
import { useQuizContext } from "../Quiz.context"

export const useMultipleChoiceAnswerStates = (
  question: MultipleChoiceQuestion,
  language: string,
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void,
) => {
  const { locale } = useLocaleContext()
  const [options, setOptions] = useState<OptionWithTokens[]>([])
  const [answer, setAnswer] = useState<OptionWithTokens[]>([])
  const [status, setStatus] = useState<AnswerStatus>("neutral")
  const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()
  const { checkFlag, toggleCheckFlag } = useQuizContext()

  useEffect(() => {
    if (checkFlag) {
      handleCheckStatus()
      toggleCheckFlag()
    }
  }, [checkFlag])

  const initializeOptions = useCallback(() => {
    if (!("options" in question)) return
    const questionOptions = question.options.map((o) => o.option)
    const optionTokens = highlightArray(questionOptions, language || "text", locale)
    setOptions(optionTokens.map((o) => ({ ...o })))
  }, [question, language])

  const resetStates = () => {
    setAnswer([])
    setStatus("neutral")
  }

  useEffect(() => {
    if (question) {
      initializeOptions()
    }
    resetStates()
  }, [question, initializeOptions])

  const removeOptionFromAnswer = useCallback(
    (option: OptionWithTokens) => {
      if (status === "correct") return

      setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== option))
      setOptions((prevOptions) =>
        prevOptions.map((o) => {
          if (o.id === option.id) {
            return { ...o, status: "neutral" }
          }
          return o
        }),
      )
      setStatus("neutral")
    },
    [status],
  )

  const addTokenToAnswer = (token: OptionWithTokens) => {
    if (status === "correct") return

    if (token.status === "used") return
    setAnswer((prevAnswer) => [...prevAnswer, token])
    setOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option === token) {
          return { ...option, status: "used" }
        }
        return option
      }),
    )
    setStatus("neutral")
  }

  const handleCheckStatus = useCallback(() => {
    const correctAnswer = question.correctAnswer
    if (answer.length === correctAnswer.length && answer.every((token, index) => token.id === correctAnswer[index])) {
      playSound(correctAnswerSound)
      setStatus("correct")
      setLessonState("correct")
    } else {
      playSound(wrongAnswerSound)
      setStatus("wrong")
      setLessonState("wrong")
    }
  }, [question, answer, playSound])

  return {
    answer,
    options,
    status,
    handleCheckStatus,
    addTokenToAnswer,
    removeOptionFromAnswer,
  }
}
