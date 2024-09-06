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

export default function BeeContent({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) {
  const [items, setItems] = useCycle(itemsA, itemsB, itemsC, itemsD)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["75% 75%", `end end`],
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [0, 8, 8, 2]), {
    stiffness: 100,
  })
  const y = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0, 0, 0, -300]), {
    stiffness: 100,
  })
  const { locale } = useLocaleContext()
  React.useEffect(() => {
    // The scrollYProgress is between 0 and 1, we divide it to change items
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.25) {
        setItems(0) // First cycle: itemsA
      } else if (latest >= 0.25 && latest < 0.5) {
        setItems(1) // Second cycle: itemsB
      } else if (latest >= 0.5 && latest < 0.75) {
        setItems(2) // Third cycle: itemsC
      } else {
        setItems(3) // Fourth cycle: itemsD
      }
    })

    // Cleanup on unmount
    return () => unsubscribe()
  }, [scrollYProgress, setItems])

  return (
    <div className="fixed left-1/2 top-1/2 z-20 flex h-96 -translate-x-1/2 -translate-y-1/2 transform flex-wrap items-center justify-center gap-20">
      {items.map((item) => {
        const className = { className: `w-20 aspect-square rounded-full items-center justify-center ${getClass(item)}` }

        return (
          <motion.div
            style={{ scale, y }}
            key={item}
            layout
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            {...className}
          >
            <div
              className={cn(
                "flex aspect-square flex-col items-center justify-center overflow-hidden rounded-full p-4 text-center dark:text-background",
                { ...className },
              )}
            >
              <span className="absolute top-0 w-1/2">{getFace(item)}</span>
              <span className="absolute top-1/2 font-bold text-white sm:text-lg">
                <CounterUp countTo={numbers[item].number} scrollSpyDelay={300} />
              </span>
              <span className="block text-balance text-center text-xs text-white sm:text-sm">
                {getLabel(locale, numbers[item].label)}
              </span>
            </div>
          </motion.div>
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
