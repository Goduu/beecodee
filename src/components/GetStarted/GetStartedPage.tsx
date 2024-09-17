"use client"
import React, { ReactNode, useEffect, useState } from "react"
import {
  FaTools,
  GiStarsStack,
  MdStar,
  MdStarHalf,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
} from "../Svgs/Icons"
import { TooltipHover } from "../TooltipHover"
import { ProgressBar } from "../ProgressBar"
import { openFirstLogin } from "../LoginModal.store"
import { useRouter } from "next/navigation"
import { LessonFooter } from "../Activity/Answer/LessonFooter"
import { GetStartedAnswer } from "./types"
import { useLocaleContext } from "../Localization/LocaleContext"
import { routes } from "@/lib/routes"
import { useAudio } from "../useAudio"
import { useTransitionContext } from "../Loading.store"

export const GetStartedPage = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<GetStartedAnswer[]>([])
  const [questionState, setQuestionState] = useState<"none" | "correct" | "wrong" | "completed">("none")
  const currentQuestion = questions[currentQuestionIndex]
  const { locale } = useLocaleContext()
  const router = useRouter()
  const { startTransition } = useTransitionContext()
  const { correctAnswerSound, playSound } = useAudio()

  const handlesContinue = () => {
    if (currentQuestionIndex <= questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      if (!selected) return
      setAnswers((prevAnswers) => [...prevAnswers, { questionId: currentQuestion.id, answer: selected }])
      setSelected(null)
    }
    setQuestionState("none")
  }
  const handleCheck = () => {
    playSound(correctAnswerSound)
    setQuestionState("correct")
  }

  useEffect(() => {
    if (!currentQuestion) {
      const course = answers.find((answer) => answer.questionId === "course")?.answer
      course &&
        openFirstLogin({
          course: course,
          language: locale,
        })
    }
  }, [currentQuestion])

  if (!currentQuestion) return null

  const handleClose = () => {
    startTransition(async () => {
      await router.push(routes.home(locale))
    })
  }

  return (
    <div className="flex max-h-screen flex-col gap-2">
      <ProgressBar onClose={handleClose} size="medium" progress={(currentQuestionIndex / questions.length) * 100} />
      <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
        <h1 className="text-center text-lg font-bold text-neutral-700 dark:text-neutral-200 lg:text-start lg:text-3xl">
          {currentQuestion.description[locale]}
        </h1>
        <div>
          <div className="flex flex-wrap justify-start gap-16 sm:gap-8">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => option.released && setSelected(option.id)}
                className={`
                            relative flex w-32 flex-col items-center gap-2 rounded-md border p-4
                            ${option.released ? "cursor-pointer" : "cursor-not-allowed"}
                            ${selected === option.id ? "border-blue-500 text-blue-500" : "border-gray-300"}`}
              >
                {option.icon}
                <div className="text-lg font-bold">{option.label[locale]}</div>
                {!option.released && (
                  <div className="absolute right-2 top-2 overflow-visible">
                    <TooltipHover text="Coming soon">
                      <FaTools className="w-4" />
                    </TooltipHover>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <LessonFooter
        disabled={!selected}
        onCheck={questionState === "correct" ? handlesContinue : handleCheck}
        status={questionState}
      />
    </div>
  )
}

type GetStartedQuestion = {
  id: "course" | "level"
  description: {
    en: string
    pt: string
    fr: string
    de: string
    es: string
  }
  options: {
    id: string
    label: {
      en: string
      pt: string
      fr: string
      de: string
      es: string
    }
    icon: ReactNode
    released: boolean
  }[]
}

const questions = [
  {
    id: "course",
    description: {
      en: "What would you love to learn?",
      pt: "O que você gostaria de aprender?",
      fr: "Qu'aimeriez-vous apprendre?",
      de: "Was möchtest du lernen?",
      es: "¿Qué te gustaría aprender?",
    },
    options: [
      {
        id: "javascript",
        label: {
          en: "Javascript",
          pt: "Javascript",
          fr: "Javascript",
          de: "Javascript",
          es: "Javascript",
        },
        icon: <SiJavascript className="w-16" />,
        released: true,
      },
      {
        id: "html5",
        label: {
          en: "HTML5",
          pt: "HTML5",
          fr: "HTML5",
          de: "HTML5",
          es: "HTML5",
        },
        icon: <SiHtml5 className="w-16" />,
        released: true,
      },
      {
        id: "typescript",
        label: {
          en: "Typescript",
          pt: "Typescript",
          fr: "Typescript",
          de: "Typescript",
          es: "Typescript",
        },
        icon: <SiTypescript className="w-16" />,
        released: false,
      },
      {
        id: "css",
        label: {
          en: "CSS",
          pt: "CSS",
          fr: "CSS",
          de: "CSS",
          es: "CSS",
        },
        icon: <SiCss3 className="w-16" />,
        released: false,
      },
      {
        id: "react",
        label: {
          en: "React",
          pt: "React",
          fr: "React",
          de: "React",
          es: "React",
        },
        icon: <SiReact className="w-16" />,
        released: false,
      },
      {
        id: "python",
        label: {
          en: "Python",
          pt: "Python",
          fr: "Python",
          de: "Python",
          es: "Python",
        },
        icon: <SiPython className="w-16" />,
        released: false,
      },
    ],
  },
  {
    id: "level",
    description: {
      en: "What is your current level?",
      pt: "Qual é o seu nível atual?",
      fr: "Quel est votre niveau actuel?",
      de: "Was ist dein aktuelles Level?",
      es: "¿Cuál es tu nivel actual?",
    },
    options: [
      {
        id: "beginner",
        label: {
          en: "Beginner",
          pt: "Iniciante",
          fr: "Débutant",
          de: "Anfänger",
          es: "Principiante",
        },
        icon: <MdStarHalf className="w-16" />,
        released: true,
      },
      {
        id: "intermediary",
        label: {
          en: "Intermediary",
          pt: "Intermediário",
          fr: "Intermédiaire",
          de: "Mittelstufe",
          es: "Intermedio",
        },
        icon: <MdStar className="w-16" />,
        released: true,
      },
      {
        id: "advanced",
        label: {
          en: "Advanced",
          pt: "Avançado",
          fr: "Avancé",
          de: "Fortgeschritten",
          es: "Avanzado",
        },
        icon: <GiStarsStack className="w-16" />,
        released: true,
      },
    ],
  },
] satisfies GetStartedQuestion[]
