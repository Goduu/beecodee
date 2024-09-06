"use client"
import { Unit, UnitContent } from "@contentlayer/generated"
import React, { FC, startTransition, useEffect, useState } from "react"
import { choseRandomActivities } from "./ReviewUnit.functions"
import { useLocaleContext } from "../Localization/LocaleContext"
import { useRouter } from "next/navigation"
import { routes } from "@/lib/routes"
import { Button } from "../Button"
import { Pollen } from "../Svgs/Pollen"
import { HoneyComb } from "../HoneyComb/HoneyComb"

type ReviewUnitPopoverContentProps = {
  unit: Unit
  unitContent: UnitContent | undefined
  onStart: () => void
}

export const ReviewUnitPopoverContent: FC<ReviewUnitPopoverContentProps> = ({ unit, unitContent, onStart }) => {
  const { locale } = useLocaleContext()
  const [randomActivities, setRandomActivities] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    setRandomActivities(choseRandomActivities(unit))
  }, [unit])

  const handleStartLesson = () => {
    startTransition(async () => {
      await router.push(routes.review(`?activities=${JSON.stringify(randomActivities)}`))
      onStart()
    })
  }

  return (
    <div className="relative z-10 gap-2">
      <div className="flex flex-col items-center gap-5 text-center">
        {unit.title[locale]}
        <div className="flex items-center gap-2 text-sm">
          <Pollen className="w-7" /> {T[locale].getXPollen(5)}
        </div>
        <Button onClick={handleStartLesson}> {T[locale].reviewUnit}</Button>
      </div>
      <div className="absolute bottom-0 right-0">
        <HoneyComb unit={unit} unitContent={unitContent} size="small" />
      </div>
    </div>
  )
}

const en = {
  reviewUnit: "Review Unit",
  getXPollen: (x: number) => `Get ${x} XPollen`,
}
const es = {
  reviewUnit: "Revisar Unidad",
  getXPollen: (x: number) => `Obtén ${x} XPollen`,
}
const fr = {
  reviewUnit: "Réviser l'unité",
  getXPollen: (x: number) => `Obtenez ${x} XPollen`,
}
const de = {
  reviewUnit: "Einheit überprüfen",
  getXPollen: (x: number) => `Erhalten Sie ${x} XPollen`,
}
const pt = {
  reviewUnit: "Rever a Unidade",
  getXPollen: (x: number) => `Ganhe ${x} XPollen`,
}

const T = { en, es, fr, de, pt }
