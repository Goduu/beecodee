"use client"
import { allUnitContents, allUnits, UnitContent } from "@contentlayer/generated"
import React from "react"
import { HoneyComb } from "../HoneyComb/HoneyComb"
import { useLocaleContext } from "../Localization/LocaleContext"

type UnitContentByUnitId = {
  [unitId: string]: UnitContent
}

const unitContentByUnitId = allUnitContents.reduce((acc, unitContent) => {
  acc[unitContent.unit] = unitContent
  return acc
}, {} as UnitContentByUnitId)

export const HoneyCombPage = () => {
  const { locale } = useLocaleContext()

  return (
    <div className="flex min-h-[450px] w-[450px] flex-col flex-wrap items-center justify-center gap-16 px-5 sm:w-[600px]">
      <h2 className="text-4xl font-black text-amber-500">{T[locale].title}</h2>
      <div className="flex gap-2">
        {allUnits.map((unit) => {
          const unitContent = unitContentByUnitId[unit.slugAsParams]
          return <HoneyComb key={`${unit.course}-${unit.id}`} unit={unit} unitContent={unitContent} />
        })}
      </div>
    </div>
  )
}
const en = {
  title: "Bee Hive",
}
const fr: typeof en = {
  title: "Rouche",
}
const pt: typeof en = {
  title: "Colmeia",
}
const de: typeof en = {
  title: "Bienenstock",
}
const es: typeof en = {
  title: "Colmena",
}
const T = { en, fr, pt, de, es }
