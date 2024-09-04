import { UnitPath } from "../Unit/UnitPath"
import { allUnitContents, allUnits, Unit } from "@contentlayer/generated"
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"
import { FlyingBee } from "../Svgs/Animations/FlyingBee"
import { cache, FC } from "react"

const getUnitContent = (unit: Unit) => {
  return allUnitContents.find((unitContent) => unitContent.unit === unit.slugAsParams)
}

const getSortedCourseUnits = cache((course: string) => {
  return allUnits.filter((unit) => unit.language === course).sort((a, b) => a.id - b.id)
})

type PageProps = {
  course: string
}

export const PathPage: FC<PageProps> = async ({ course }) => {
  const completedLessonByUnitId = await fetchUserCompletedLessonByUnitId()
  const sortedCourseUnits = getSortedCourseUnits(course)
  const firstUncompletedUnit = sortedCourseUnits.find(
    (unit) => (completedLessonByUnitId?.get(unit.slugAsParams)?.size || 0) < unit.lessonRefs.length,
  )

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <FlyingBee className="w-44" />
      {sortedCourseUnits.map((unit) => {
        return (
          <UnitPath
            key={unit.id}
            unit={unit}
            unitContent={getUnitContent(unit)}
            pathPosition={unit.id}
            completedLessons={completedLessonByUnitId?.get(unit.slugAsParams)}
            isFirstUncompletedUnit={firstUncompletedUnit?.id === unit.id}
          />
        )
      })}
    </div>
  )
}
