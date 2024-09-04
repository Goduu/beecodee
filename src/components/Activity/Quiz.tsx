"use client"
import React, { FC } from "react"
import { LessonHeader } from "../LessonHeader"
import { LessonFooter } from "./Answer/LessonFooter"
import { cn } from "@/lib/utils"
import { Activity } from "@contentlayer/generated"
import { ActivitySwitcher } from "./ActivitySwitcher"
import { useQuizState } from "./Quiz.state"
import { EndLessonXpPage } from "../XPollen/EndLessonXpPage"
import { useQuizContext } from "./Quiz.context"

type ActivityProps = {
  lessonXp: number
  activityMap: Map<string, Activity>
}

export const Quiz: FC<ActivityProps> = ({ lessonXp, activityMap }) => {
  const {
    locale,
    onGoingActivityData,
    lessonState,
    isActionDisabled,
    setLessonState,
    handleGotToNextActivity,
    handleFinishLesson,
  } = useQuizState({ lessonXp, activityMap })
  const { toggleCheckFlag } = useQuizContext()

  const isButtonDisabled =
    onGoingActivityData?.question.type === "PairMatchingQuestion" &&
    !["correct", "result", "completed"].includes(lessonState)

  return (
    <>
      <LessonHeader size="medium" />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
            <h1 className="text-center text-lg font-bold text-neutral-700 dark:text-neutral-200 lg:text-start lg:text-3xl">
              {!(lessonState === "completed") && onGoingActivityData?.question.description[locale]}
            </h1>
            <div>
              <div className={cn("grid gap-2")}>
                {lessonState === "completed" ? (
                  <EndLessonXpPage lessonXp={lessonXp} />
                ) : (
                  <ActivitySwitcher
                    activity={onGoingActivityData}
                    isActionDisabled={isActionDisabled}
                    setLessonState={setLessonState}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LessonFooter
        disabled={isButtonDisabled}
        onCheck={
          lessonState === "correct"
            ? handleGotToNextActivity
            : lessonState === "completed"
              ? handleFinishLesson
              : lessonState === "wrong"
                ? () => setLessonState("none")
                : toggleCheckFlag
        }
        status={lessonState}
      />
    </>
  )
}
