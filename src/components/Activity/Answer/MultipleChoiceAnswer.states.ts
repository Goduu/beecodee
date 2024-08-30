import { useCallback, useEffect, useState } from "react"
import { AnswerStatus } from "./types"
import { useAudio } from "@/components/useAudio"
import { MultipleChoiceQuestion } from "@contentlayer/generated"
import { highlightArray, OptionWithTokens } from "@/components/TokenColors/highlightCode"
import { useLocaleContext } from "@/components/Localization/LocaleContext"
import { useQuizContext } from "../Quiz.context"
import {
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"

export const useMultipleChoiceAnswerStates = (
  question: MultipleChoiceQuestion,
  language: string,
  isActionDisabled: boolean,
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
      if (isActionDisabled) return

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
    [status, isActionDisabled],
  )

  const addTokenToAnswer = (token: OptionWithTokens) => {
    if (isActionDisabled) return

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
    if (answer.length === correctAnswer.length && answer.every((token, index) => token.id.split("-")[0] === correctAnswer[index])) {
      playSound(correctAnswerSound)
      setStatus("correct")
      setLessonState("correct")
    } else {
      playSound(wrongAnswerSound)
      setStatus("wrong")
      setLessonState("wrong")
    }
  }, [question, answer, playSound])

  const createFormattingToken = (content: string): OptionWithTokens => {
    const answerId = answer.length
    return {
      id: content === "\t" ? `ft-${answerId}` : content === `\n` ? `fn-${answerId}` : `fs-${answerId}`,
      content: content,
      type: "TextOption",
      tokens: [{ content, type: "format" }],
    }
  }

  // ------------------------------
  //Draggable zone functions
  // ------------------------------
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),

    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragStart(event: DragStartEvent) {
    if (isActionDisabled) return
    const { active } = event

    // Prevent default handler from mobile on drag

    setActiveId(active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    if (isActionDisabled) return
    const { active, over } = event

    if (over && active.id !== over?.id) {
      setAnswer((prev) => {
        if (!prev) return []
        const activeElement = prev.find((item) => item.id === active.id)
        const overElement = prev.find((item) => item.id === over.id)
        if (!activeElement || !overElement) return []
        const oldIndex = prev?.indexOf(activeElement)
        const newIndex = prev?.indexOf(overElement)

        return arrayMove(prev, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  return {
    answer,
    options,
    status,
    setAnswer,
    handleCheckStatus,
    addTokenToAnswer,
    removeOptionFromAnswer,
    createFormattingToken,
    handleDragStart,
    handleDragEnd,
    sensors,
    activeId,
  }
}
