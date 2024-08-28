import React, { FC } from "react"
import { CodeOutputQuestion } from "@contentlayer/generated"
import { TokenGroupChip } from "../TokenChip/TokenGroupChip"
import { CodeBlock } from "./CodeBlock"
import { useCodeOutputAnswerStates } from "./CodeOutputAnswer.states"

type CodeOutputAnswerProps = {
  question: CodeOutputQuestion
  language: string
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const CodeOutputAnswer: FC<CodeOutputAnswerProps> = ({ question, language, setLessonState }) => {
  const { selectAnswer, options } = useCodeOutputAnswerStates(question, language, setLessonState)

  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex flex-col items-center">
        <CodeBlock code={question.codeSnippet} language={language} />
      </div>
      <div className="flex min-w-20 flex-col flex-wrap items-center justify-center gap-4">
        {options.map((token, index) => (
          <TokenGroupChip
            onClick={() => selectAnswer(token)}
            key={index}
            optionWithToken={token}
            isOneLined={true}
          />
        ))}
      </div>
    </div>
  )
}
