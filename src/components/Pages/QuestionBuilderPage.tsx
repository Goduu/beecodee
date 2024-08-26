"use client"
import React, { useState } from "react"
import { CodeEditor } from "../QuestionBuilder/CodeEditor"
import { QuestionVisualizer } from "../QuestionBuilder/QuestionVisualizer"
import { Activity } from "@contentlayer/generated"
import { Button } from "../Button"
import { TbPencilQuestion } from "../Svgs/Icons"

export const QuestionBuilderPage = () => {
  const [code, setCode] = useState("")
  const [questionType, setQuestionType] = useState<Activity["question"]["type"]>("CodeOutputQuestion")

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 px-5 py-20 sm:pl-52">
      <div className="flex gap-2 text-3xl font-bold">
        Question Builder <TbPencilQuestion className="w-8" />
      </div>
      <div className="w-full justify-self-start">
        <div className="flex flex-wrap items-start gap-2">
          Templates:
          <Button size="small" color="secondary" onClick={() => setQuestionType("CodeOutputQuestion")}>
            Code Output
          </Button>
          <Button size="small" color="secondary" onClick={() => setQuestionType("FillInTheBlankQuestion")}>
            Fill in the Blank
          </Button>
          <Button size="small" color="secondary" onClick={() => setQuestionType("SingleChoiceQuestion")}>
            Single Choice
          </Button>
          <Button size="small" color="secondary" onClick={() => setQuestionType("MultipleChoiceQuestion")}>
            Multiple Choice
          </Button>
          <Button size="small" color="secondary" onClick={() => setQuestionType("PairMatchingQuestion")}>
            Pair Matching
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <CodeEditor code={code} setCode={setCode} questionType={questionType} />
        <div className="w-1/2">
          <QuestionVisualizer code={code} questionType={questionType} />
        </div>
      </div>
    </div>
  )
}
