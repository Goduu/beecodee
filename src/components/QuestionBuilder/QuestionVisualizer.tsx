"use client"
import React, { useState, FC } from "react"
import { ActivitySwitcher } from "../Activity/ActivitySwitcher"
import { Button } from "../Button"
import { parseAsQuestion } from "./QuestionVisualizer.functions"
import { Activity } from "@contentlayer/generated"

type QuestionVisualizerProps = {
  code: string
  questionType: Activity["question"]["type"]
}

export const QuestionVisualizer: FC<QuestionVisualizerProps> = ({ code, questionType }) => {
  const [activity, setActivity] = useState<Activity | null>(null)

  const refreshQuestion = () => {
    setActivity(parseAsQuestion(code, questionType))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <span className="text-2xl font-extrabold">Question</span>
        <Button onClick={refreshQuestion} size="small">
          RefreshQuestion
        </Button>
      </div>
      {activity && <ActivitySwitcher activity={activity} setLessonState={() => {}} />}
    </div>
  )
}
