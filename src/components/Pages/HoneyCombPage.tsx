"use client"
import { allUnitContents, allUnits, UnitContent } from "@contentlayer/generated"
import React from "react"
import { HoneyComb } from "../HoneyComb/HoneyComb"

type UnitContentByUnitId = {
  [unitId: string]: UnitContent
}

const unitContentByUnitId = allUnitContents.reduce((acc, unitContent) => {
  acc[unitContent.unit] = unitContent
  return acc
}, {} as UnitContentByUnitId)

export const HoneyCombPage = () => {
  return (
    <div className="flex min-h-[450px] w-[450px] flex-wrap items-center justify-center gap-2 px-5 py-20 sm:w-[600px]">
      {allUnits.map((unit) => {
        const unitContent = unitContentByUnitId[unit.slugAsParams]
        return <HoneyComb key={unit.id} unit={unit} unitContent={unitContent} />
      })}
    </div>
  )
}
