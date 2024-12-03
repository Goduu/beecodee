"use client"
import * as React from "react"
import { motion, useTransform, useCycle, useScroll, useSpring } from "framer-motion"
import { allActivities, allCourses, allLessons, allUnits } from "@contentlayer/generated"
import { CounterUp } from "../CounterUp"
import { FaceFour, FaceOne, FaceThree, FaceTwo } from "../Svgs/Icons"
import { cn } from "@/lib/utils"
import { useLocaleContext } from "../Localization/LocaleContext"
import { BeeLocale } from "../Localization/localization"

const courseSize = allCourses.length
const lessonSize = allLessons.length
const activitySize = allActivities.length
const unitSize = allUnits.length
type SiteNumber = {
  label: keyof typeof en
  number: number
}
const numbers = [
  { label: "units", number: unitSize },
  { label: "lessons", number: lessonSize },
  { label: "activities", number: activitySize },
  { label: "courses", number: courseSize },
] satisfies SiteNumber[]
const itemsA = [0, 1, 2, 3]
const itemsB = [1, 2, 3, 0]
const itemsC = [2, 3, 0, 1]
const itemsD = [3, 0, 1, 2]

export default function BeeContent() {
  const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD)

  const { locale } = useLocaleContext()

  return (
    <div className="flex items-center justify-center gap-20">
      {items.map((item) => {
        const className = { className: `w-52 aspect-square rounded-full items-center justify-center ${getClass(item)}` }

        return (
          <div key={item} {...className}>
            <div
              className={cn(
                "flex aspect-square scale-125 flex-col items-center justify-center gap-2 overflow-hidden rounded-full p-8 text-center dark:text-background",
                { ...className },
              )}
            >
              <div className="top-0 w-1/2">{getFace(item)}</div>
              <div className="text-2xl font-bold text-white">
                <CounterUp countTo={numbers[item].number} scrollSpyDelay={300} />
              </div>
              <div className="text-balance text-center text-xs text-white sm:text-sm">
                {getLabel(locale, numbers[item].label)}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function getLabel<K extends keyof (typeof T)[BeeLocale]>(locale: BeeLocale, label: K): string {
  return T[locale][label]
}

const getFace = (index: number) => {
  switch (index) {
    case 0:
      return <FaceOne />
    case 1:
      return <FaceTwo />
    case 2:
      return <FaceFour />
    case 3:
      return <FaceThree />
  }
}
const getClass = (index: number) => {
  switch (index) {
    case 0:
      return "bg-red-500"
    case 1:
      return "bg-lime-500"
    case 2:
      return "bg-amber-500"
    case 3:
      return "bg-indigo-500"
  }
}

const en = {
  our: "Our",
  content: "content",
  courses: "Course",
  units: "Units",
  lessons: "Lessons",
  activities: "Activities",
}
const pt: typeof en = {
  our: "Nosso",
  content: "conteúdo",
  courses: "Curso",
  units: "Unidades",
  lessons: "Lições",
  activities: "Atividades",
}
const es: typeof en = {
  our: "Nuestro",
  content: "contenido",
  courses: "Curso",
  units: "Unidades",
  lessons: "Lecciones",
  activities: "Actividades",
}
const fr: typeof en = {
  our: "Notre",
  content: "contenu",
  courses: "Cours",
  units: "Unités",
  lessons: "Leçons",
  activities: "Activités",
}
const de: typeof en = {
  our: "Unser",
  content: "Inhalt",
  courses: "Kurs",
  units: "Einheiten",
  lessons: "Lektionen",
  activities: "Aktivitäten",
}

export const T = {
  en,
  pt,
  es,
  fr,
  de,
}
