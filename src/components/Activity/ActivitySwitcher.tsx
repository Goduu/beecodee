import { Activity } from "@contentlayer/generated"
import React, { FC } from "react"
import { FillInTheBlankAnswer } from "./Answer/FillInTheBlankAnswer"
import { MultipleChoiceAnswer } from "./Answer/MultipleChoiceAnswer"
import { SingleChoiceAnswer } from "./Answer/SingleChoiceAnswer"
import { CodeOutputAnswer } from "./Answer/CodeOutputAnswer"
import { PairMatchingAnswer } from "./Answer/PairMatchingAnswer"

type ActivitySwitcherProps = {
  activity: Activity | null
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const ActivitySwitcher: FC<ActivitySwitcherProps> = ({ activity, setLessonState }) => {
  if (!activity) return null

  return activity.question.type === "FillInTheBlankQuestion" ? (
    <FillInTheBlankAnswer question={activity.question} language={activity.language} setLessonState={setLessonState} />
  ) : activity.question.type === "MultipleChoiceQuestion" ? (
    <MultipleChoiceAnswer question={activity.question} language={activity.language} setLessonState={setLessonState} />
  ) : activity.question.type === "SingleChoiceQuestion" ? (
    <SingleChoiceAnswer question={activity.question} language={activity.language} setLessonState={setLessonState} />
  ) : activity.question.type === "CodeOutputQuestion" ? (
    <CodeOutputAnswer question={activity.question} language={activity.language} setLessonState={setLessonState} />
  ) : (
    <PairMatchingAnswer question={activity.question} language={activity.language} setLessonState={setLessonState} />
  )
}
