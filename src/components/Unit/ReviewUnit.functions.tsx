import { allLessons, Unit } from "@contentlayer/generated"

export const choseRandomActivities = (unit: Unit) => {
  const lessons = unit.lessonRefs.map((l) => l.lesson)
  const activities = allLessons
    .filter((lesson) => lessons.includes(lesson.slugAsParams))
    .flatMap((lesson) => lesson.activityRefs.map((a) => a.activity))
  const randomActivities = activities.sort(() => Math.random() - 0.5).slice(0, 10)
  return randomActivities
}
