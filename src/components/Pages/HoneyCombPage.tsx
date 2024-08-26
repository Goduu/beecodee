import { allUnits } from "@contentlayer/generated"
import React from "react"
import { HoneyComb } from "../HoneyComb/HoneyComb"

export const HoneyCombPage = () => {
  return (
    <div className="flex min-h-[450px] w-[450px] flex-wrap items-center justify-center gap-2 px-5 py-20 sm:w-[600px]">
      {allUnits.map((unit) => {
        return <HoneyComb key={unit.id} unit={unit} />
      })}
    </div>
  )
}
