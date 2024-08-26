"use client"
import React, { useEffect, useState } from "react"
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
import { Button } from "../Button"
import { ProgressBar } from "../ProgressBar"
import { open } from "../LoginModal.store"
import { redirect } from "next/navigation"

export const WhatToLearn = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const currentQuestion = questions[currentQuestionIndex]

  const handlesContinue = () => {
    if (currentQuestionIndex <= questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      if (!selected) return
      setAnswers((prevAnswers) => [...prevAnswers, { questionId: currentQuestion.id, answer: selected }])
      setSelected(null)
    }
  }

  useEffect(() => {
    if (!currentQuestion) {
      open()
    }
  }, [currentQuestion])

  if (!currentQuestion) return null

  const handleClose = () => {
    redirect(process.env.NEXT_PUBLIC_URL || "/")
  }

  return (
    <div className="flex flex-col items-center gap-20">
      <ProgressBar onClose={handleClose} size="medium" progress={(currentQuestionIndex / questions.length) * 100} />
      <div className="text-2xl font-bold">{currentQuestion.description}</div>
      <div className="flex flex-wrap items-center justify-center gap-16">
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
            <div className="text-lg font-bold">{option.label}</div>
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
      <div className="flex gap-4 pb-10">
        <Button color="secondary" onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}>
          Back
        </Button>
        <Button onClick={handlesContinue} disabled={!selected}>
          Continue
        </Button>
      </div>
    </div>
  )
}

type Answer = {
  questionId: number
  answer: string
}

const questions = [
  {
    id: 0,
    description: "What would you love to learn?",
    options: [
      {
        id: "javascript",
        label: "Javascript",
        icon: <SiJavascript className="w-16" />,
        released: true,
      },
      {
        id: "typescript",
        label: "Typescript",
        icon: <SiTypescript className="w-16" />,
        released: false,
      },
      {
        id: "html5",
        label: "HTML5",
        icon: <SiHtml5 className="w-16" />,
        released: false,
      },
      {
        id: "css",
        label: "CSS",
        icon: <SiCss3 className="w-16" />,
        released: false,
      },
      {
        id: "react",
        label: "React",
        icon: <SiReact className="w-16" />,
        released: false,
      },
      {
        id: "python",
        label: "Python",
        icon: <SiPython className="w-16" />,
        released: false,
      },
    ],
  },
  {
    id: 1,
    description: "What is your current level?",
    options: [
      {
        id: "beginner",
        label: "Beginner",
        icon: <MdStarHalf className="w-16" />,
        released: true,
      },
      {
        id: "intermediary",
        label: "Intermediary",
        icon: <MdStar className="w-16" />,
        released: true,
      },
      {
        id: "advanced",
        label: "Advanced",
        icon: <GiStarsStack className="w-16" />,
        released: true,
      },
    ],
  },
]
