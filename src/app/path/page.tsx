import { Bee } from "@/components/Icons";
import { Loading } from "@/components/Loading";
import { UnitPath } from "@/components/Unit/UnitPath";
import { fetchUserFinishedLessons } from "@/lib/supabase/api/fetchUserFinishedLessons";
import { allLessons, allUnits } from "@contentlayer/generated";
import { Suspense } from "react";

export default async function Home() {

  const completedLessons = await fetchUserFinishedLessons()
  
  return (
    <main className="flex flex-col items-center gap-2 w-screen py-4">
      <Bee className="w-44 pt-20 hover:animate-pulse ease-in-out duration-300" />
      <Suspense fallback={<Loading visible/>}>

      {allUnits.map((unit, index) => {
        const unitLessons = allLessons.filter((lesson) => unit.lessons.includes(lesson.slugAsParams))
        
        return <UnitPath key={unit._id} unit={unit} lessons={unitLessons} pathPosition={unit.id} completedLessons={completedLessons?.[unit.slugAsParams] || []} />
      })}
      </Suspense>

    </main>
  );
}
