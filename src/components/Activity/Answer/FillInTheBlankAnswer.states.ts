import { useCallback, useEffect, useState } from "react"
import { AnswerStatus } from "./types"
import { useAudio } from "@/components/useAudio"
import { FillInTheBlankQuestion } from "@contentlayer/generated"
import { highlightCode, OptionWithTokens } from "@/components/TokenColors/highlightCode"
import { useLocaleContext } from "@/components/Localization/LocaleContext"
import { useQuizContext } from "../Quiz.context"

export const useFillInTheBlankAnswerStates = (
  question: FillInTheBlankQuestion,
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
    const optionTokens: OptionWithTokens[] = []
    question.options?.forEach((item) => {
      if (item.option.type === "CodeOption") {
        optionTokens.push(highlightCode(item.option, language || "text", locale))
      } else {
        optionTokens.push({
          ...item.option,
          tokens: [{ content: item.option.content[locale], type: "text" }],
        })
      }
    })
    setOptions(optionTokens)
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

  const removeTokenFromAnswer = useCallback(
    (optionToRemove: OptionWithTokens) => {
      if (status === "correct") return
      setOptions((prev) =>
        prev.map((option) => {
          if (option.id === optionToRemove.id) {
            option.status = "neutral"
          }
          return option
        }),
      )

      setAnswer((prevAnswer) => prevAnswer.filter((t) => t !== optionToRemove))
      setStatus("neutral")
    },
    [status],
  )

  const addTokenToAnswer = (token: OptionWithTokens) => {
    if (status === "correct") return

    const questionGapsLength = question.segments?.filter((segment) => segment.segment.type === "GapOption").length || 0
    if (answer.length >= questionGapsLength) return
    else {
      setAnswer((prevAnswer) => [...prevAnswer, { ...token, status: "filled" }])
    }

    setOptions((prev) =>
      prev.map((option) => {
        if (option === token) {
          option.status = "used"
        }
        return option
      }),
    )

    setStatus("neutral")
  }

  const handleCheckStatus = useCallback(() => {
    const correctAnswer = question.correctAnswer
    if (correctAnswer && answer.every((token, index) => token.id === correctAnswer[index])) {
      playSound(correctAnswerSound)
      setStatus("correct")
      setLessonState("correct")
    } else {
      playSound(wrongAnswerSound)
      setStatus("wrong")
      setLessonState("wrong")
    }
  }, [question, answer])

  return {
    answer,
    options,
    status,
    handleCheckStatus,
    addTokenToAnswer,
    removeTokenFromAnswer,
  }
}
