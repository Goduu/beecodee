import React, { FC } from "react"
import { CounterUp } from "../CounterUp"
import { Pollen } from "../Svgs/Pollen"
import { MdStar } from "../Svgs/Icons"
import { BeeKnowledge } from "../Svgs/BeeKnowledge"

type EndLessonXpPageProps = {
  lessonXp: number
}

export const EndLessonXpPage: FC<EndLessonXpPageProps> = ({ lessonXp }) => {
  return (
    <div className="flex flex-col  items-center justify-center gap-12 font-black">
      <BeeKnowledge className="w-56" />
      <div className="flex gap-4">
        <div className="flex h-28 w-44 flex-col gap-1 rounded-lg bg-amber-500">
          <div className="mt-2 px-3 text-sm">COLLECTED XPOLEN</div>
          <div className="flex h-full items-center justify-center gap-2 rounded-lg border-4 border-amber-500 bg-white text-xl dark:bg-gray-900">
            <Pollen className="w-8" />
            <CounterUp countTo={lessonXp} />
          </div>
        </div>
        <div className="flex h-28 w-44 flex-col gap-1 rounded-lg bg-lime-500">
          <div className="mt-2 px-3 text-sm">NICE</div>
          <div className="flex h-full items-center justify-center gap-2 rounded-lg border-4 border-lime-500 bg-white text-xl dark:bg-gray-900">
            <MdStar className="w-8" />
            <CounterUp countTo={96} /> %
          </div>
        </div>
      </div>
    </div>
  )
}
