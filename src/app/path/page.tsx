import { Loading } from "@/components/Loading";
import { Bee } from "@/components/Svgs/Bee";
import { UnitPath } from "@/components/Unit/UnitPath";
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons";
import { allUnits } from "@contentlayer/generated";
import { Suspense } from "react";

export default async function Home() {

  const completedLessonByUnitId = await fetchUserCompletedLessonByUnitId()

  return (
    <main className="flex flex-col items-center gap-2 w-screen py-4">
      <Bee className="w-44 pt-20 hover:animate-pulse ease-in-out duration-300" />
      <Suspense fallback={<Loading visible />}>

        {allUnits.sort((a, b) => a.id - b.id).map((unit, index) => {
          return <UnitPath key={unit._id} unit={unit} pathPosition={unit.id} completedLessons={completedLessonByUnitId?.get(unit.slugAsParams)} />
        })}
      </Suspense>

    </main>
  );
}
