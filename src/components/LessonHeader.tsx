"use client"
import React, { FC } from "react"
import { unitStore } from "./Unit/unitStore"
import { useStore } from "zustand"
import { ProgressBar } from "./ProgressBar"
import { useRouter } from "next/navigation"
import { routes } from "@/lib/routes"
import { useLocaleContext } from "./Localization/LocaleContext"

type LessonHeaderProps = {
  size: "small" | "medium" | "large"
}

export const LessonHeader: FC<LessonHeaderProps> = ({ size = "medium" }) => {
  const { locale } = useLocaleContext()
  const router = useRouter()
  const toDoActivitiesSize = useStore(unitStore, (state) => state.onGoingLessonToDoActivities).size
  const doneActivitiesSize = useStore(unitStore, (state) => state.onGoingLessonDoneActivities).size

  const progressWidth = ((doneActivitiesSize || 0) / (toDoActivitiesSize + doneActivitiesSize || 1)) * 100

  return <ProgressBar progress={progressWidth} size={size} onClose={() => router.push(routes.path(locale))} />
}
