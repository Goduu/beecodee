import { Bee } from '../Svgs/Bee'
import { UnitPath } from '../Unit/UnitPath'
import { allUnits } from '@contentlayer/generated'
import { fetchUserCompletedLessonByUnitId } from '@/lib/supabase/api/fetchUserFinishedLessons'

export const PathPage = async () => {

    const completedLessonByUnitId = await fetchUserCompletedLessonByUnitId()

    return (
        <div className="flex flex-col items-center gap-2 w-screen py-4">
            <Bee className="w-44 pt-20 hover:animate-pulse ease-in-out duration-300" />
            {allUnits.sort((a, b) => a.id - b.id).map((unit) => {
                return <UnitPath key={unit._id} unit={unit} pathPosition={unit.id} completedLessons={completedLessonByUnitId?.get(unit.slugAsParams)} />
            })}
        </div>
    )
}
