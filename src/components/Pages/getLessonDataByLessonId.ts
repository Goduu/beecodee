"use server"

import { allLessons, Lesson } from "@contentlayer/generated"
import { cache } from "react"

export const getLessonDataByLessonId = cache((): Map<string, Lesson> => {
  return allLessons.reduce((acc, lesson) => {
    acc.set(lesson.slugAsParams, lesson)
    return acc
  }, new Map<string, any>())
})
