import React, { FC } from "react"
import { SingleChoiceQuestion } from "@contentlayer/generated"
import { useSingleChoiceAnswerStates } from "./SingleChoiceAnswer.states"
import { TokenGroupChip } from "../TokenChip/TokenGroupChip"

type SingleChoiceAnswerProps = {
  question: SingleChoiceQuestion
  language: string
  isActionDisabled: boolean
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const SingleChoiceAnswer: FC<SingleChoiceAnswerProps> = ({
  question,
  language,
  isActionDisabled,
  setLessonState,
}) => {
  const { selectAnswer, options } = useSingleChoiceAnswerStates(question, language, setLessonState)

  return (
    <div className={`flex flex-col items-center gap-16`}>
      <div className="flex min-w-48 flex-col flex-wrap justify-center gap-4">
        {options.map((option, index) => (
          <div className="flex" key={option.id}>
            <TokenGroupChip
              onClick={() => !isActionDisabled && selectAnswer(option)}
              key={index}
              optionWithToken={option}
              isOneLined={true}
              className={isActionDisabled ? "cursor-default" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
