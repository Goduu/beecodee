"use client"
import { Activity } from "@contentlayer/generated"
import { useSearchParams } from "next/navigation"
import React, { FC, useEffect } from "react"
import { initiateReviewUnitVariables } from "../Unit/unitStore"
import { Quiz } from "../Activity/Quiz"

const REVIEW_LESSON_XP = 5

type ReviewPageProps = {
  activityMap: Map<string, Activity>
}

export const ReviewPage: FC<ReviewPageProps> = ({ activityMap }) => {
  const searchParams = useSearchParams()

  useEffect(() => {
    const activities = JSON.parse(searchParams.get("activities") || "")
    activities && initiateReviewUnitVariables(activities)
  }, [searchParams])

  return <Quiz activityMap={activityMap} lessonXp={REVIEW_LESSON_XP} />
}
