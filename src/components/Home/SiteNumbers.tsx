import React, { FC } from "react"
import { Bee } from "../Svgs/Bee"
import { CounterUp } from "../CounterUp"
import { allActivities, allLessons, allUnits } from "@contentlayer/generated"
import { BeeKnowledge } from "../Svgs/BeeKnowledge"

export const SiteNumbers: FC = () => {
  const lessonSize = allLessons.length
  const activitySize = allActivities.length
  const unitSize = allUnits.length

  const siteNumbers = [
    { label: "Course", countTo: 1 },
    { label: "Units", countTo: unitSize },
    { label: "Lessons", countTo: lessonSize },
    { label: "Activities", countTo: activitySize },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <div className="flex w-4/5 flex-col items-center gap-10 sm:flex-row sm:gap-4">
        {siteNumbers.map((siteNumber) => (
          <div
            key={siteNumber.label}
            className="flex w-4/5 select-none flex-col flex-wrap items-center gap-1 text-start text-5xl font-black leading-loose"
          >
            <CounterUp countTo={siteNumber.countTo} scrollSpyDelay={300} />
            <p className="text-center text-4xl sm:text-start">
              <span className="text-amber-500">bee</span>
              {siteNumber.label}
            </p>
          </div>
        ))}
      </div>
      <BeeKnowledge className="w-96" />
    </div>
  )
}
