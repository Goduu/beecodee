import { Bee } from "@/components/Icons";
import { UnitPath } from "@/components/Unit/UnitPath";
import { allLessons, allUnits } from "@contentlayer/generated";

export default function Home() {

  return (
    <main className="flex flex-col items-center gap-2">
      <Bee className="w-44 pt-20 hover:animate-pulse ease-in-out duration-300" />
      {allUnits.map((unit, index) => {
        const unitLessons = allLessons.filter((lesson) => unit.lessons.includes(lesson.slugAsParams))

        return <UnitPath key={unit._id} unit={unit} lessons={unitLessons} pathPosition={index} />
      })}

    </main>
  );
}
