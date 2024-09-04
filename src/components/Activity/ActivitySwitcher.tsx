import { Activity } from "@contentlayer/generated"
import React, { FC } from "react"
import { FillInTheBlankAnswer } from "./Answer/FillInTheBlankAnswer"
import { MultipleChoiceAnswer } from "./Answer/MultipleChoiceAnswer"
import { SingleChoiceAnswer } from "./Answer/SingleChoiceAnswer"
import { CodeOutputAnswer } from "./Answer/CodeOutputAnswer"
import { PairMatchingAnswer } from "./Answer/PairMatchingAnswer"
import { LessonState } from "./types"
import { BugFightAnswers } from "./Answer/BugFightAnswers"

type ActivitySwitcherProps = {
  activity: Activity | null
  isActionDisabled: boolean
  setLessonState: (state: LessonState) => void
}

export const ActivitySwitcher: FC<ActivitySwitcherProps> = ({ activity, isActionDisabled, setLessonState }) => {
  if (!activity) return null

  return activity.question.type === "FillInTheBlankQuestion" ? (
    <FillInTheBlankAnswer
      question={activity.question}
      language={activity.language}
      isActionDisabled={isActionDisabled}
      setLessonState={setLessonState}
    />
  ) : activity.question.type === "MultipleChoiceQuestion" ? (
    <MultipleChoiceAnswer
      question={activity.question}
      language={activity.language}
      isActionDisabled={isActionDisabled}
      setLessonState={setLessonState}
    />
  ) : activity.question.type === "SingleChoiceQuestion" ? (
    <SingleChoiceAnswer
      question={activity.question}
      language={activity.language}
      isActionDisabled={isActionDisabled}
      setLessonState={setLessonState}
    />
  ) : activity.question.type === "CodeOutputQuestion" ? (
    <CodeOutputAnswer
      question={activity.question}
      language={activity.language}
      isActionDisabled={isActionDisabled}
      setLessonState={setLessonState}
    />
  ) : activity.question.type === "BugFightQuestion" ? (
    <BugFightAnswers
      question={activity.question}
      language={activity.language}
      isActionDisabled={isActionDisabled}
      setLessonState={setLessonState}
    />
  ) : (<PairMatchingAnswer
    question={activity.question}
    language={activity.language}
    isActionDisabled={isActionDisabled}
    setLessonState={setLessonState}
  />
  )
}
