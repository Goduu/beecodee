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
  const [status, setStatus] = useState<AnswerStatus>("neutral")
  const [segments, setSegments] = useState<OptionWithTokens[]>([])
  const { playSound, correctAnswerSound, wrongAnswerSound } = useAudio()
  const { checkFlag, toggleCheckFlag } = useQuizContext()
  const answer = segments.filter(segment => segment.type === "GapOption").map(segment => segment.content)
  
  useEffect(() => {
    if (checkFlag) {
      handleCheckStatus()
      toggleCheckFlag()
    }
  }, [checkFlag])

  const initializeOptionsAndSegments = useCallback(() => {
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
    const segmentTokens: OptionWithTokens[] = []
    question.segments?.forEach((segment) => {
      if (segment.segment.type === "TextOption") {
        segmentTokens.push({
          ...segment.segment,
          tokens: [{ content: segment.segment.content[locale], type: "text" }],
        })
      } else if (segment.segment.type === "CodeOption") {
        segmentTokens.push(highlightCode(segment.segment, language || "text", locale))
      } else {
        segmentTokens.push({
          ...segment.segment,
          status: "neutral",
          content: segment.segment.content || "",
          tokens: [{ ...gapToken, size: segment.segment.size || 0 }],
        })
      }
    })

    setSegments(segmentTokens)

  }, [question, language])

  const resetStates = () => {
    initializeOptionsAndSegments()
    setStatus("neutral")
  }

  useEffect(() => {
    if (question) {
      initializeOptionsAndSegments()
    }
    resetStates()
  }, [question, initializeOptionsAndSegments])

  const removeTokenFromAnswer = (optionToRemove: OptionWithTokens): void => {
    if (status === "correct") return;
    setOptions(prev => {
      return prev.map((option) => {
        if (option.id === optionToRemove.id) {
          return { ...option, status: "neutral" }
        }
        return option
      })
    });

    setStatus("neutral");
    setSegments((prevSegments) =>
      prevSegments.map((segment) => {
        if (segment.id !== optionToRemove.id) return segment;

        return {
          ...segment,
          status: "neutral",
          content: "",
          tokens: [{ ...gapToken, size: optionToRemove.tokens[0]?.size || 0 }],
        };
      })
    );
  };

  const addTokenToAnswer = (token: OptionWithTokens): void => {
    if (status === "correct") return;

    const questionGapsLength = question.segments?.filter(segment => segment.segment.type === "GapOption").length || 0;
    const filledGaps = segments.filter(segment => segment.type === "GapOption" && segment.status === "filled");
    if (filledGaps.length >= questionGapsLength) return;

    setSegments(prevSegments => {
      const segmentIndex = prevSegments.findIndex(segment => segment.type === "GapOption" && segment.status === "neutral");

      if (segmentIndex === -1) return prevSegments;

      return prevSegments.map((segment, index) =>
        index === segmentIndex
          ? {
            ...segment,
            status: "filled",
            type: "GapOption",
            content: token.id,
            tokens: token.tokens.map(t => ({
              ...t,
              size: segment.tokens[0]?.size || 0,
            })),
          }
          : segment
      );
    });

    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === token.id
          ? {
            ...option,
            status: "used",
          }
          : option
      )
    );

    setStatus("neutral");
  };


  const handleCheckStatus = useCallback(() => {
    const correctAnswer = question.correctAnswer
    if (correctAnswer && answer.every((token, index) => token === correctAnswer[index])) {
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
    options,
    status,
    segments,
    handleCheckStatus,
    addTokenToAnswer,
    removeTokenFromAnswer,
  }
}

const gapToken = { content: "", type: "gap" }