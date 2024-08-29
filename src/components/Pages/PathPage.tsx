import { Bee } from "../Svgs/Bee"
import { UnitPath } from "../Unit/UnitPath"
import { allUnitContents, allUnits, Unit } from "@contentlayer/generated"
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"

const getUnitContent = (unit: Unit) => {
  return allUnitContents.find((unitContent) => unitContent.unit === unit.slugAsParams)
}

export const PathPage = async () => {
  const completedLessonByUnitId = await fetchUserCompletedLessonByUnitId()
  const sortedUnits = allUnits.sort((a, b) => a.id - b.id)
  const firstUncompletedUnit = sortedUnits.find(
    (unit) => (completedLessonByUnitId?.get(unit.slugAsParams)?.size || 0) < unit.lessonRefs.length,
  )

  return (
    <div className="flex w-screen flex-col items-center gap-2 py-4">
      <Bee className="w-44 pt-20 duration-300 ease-in-out hover:animate-pulse" />
      {sortedUnits.map((unit) => {
        return (
          <UnitPath
            key={unit._id}
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
