"use client"
import React, { FC, useRef } from "react"
import { CounterUp } from "../CounterUp"
import { allActivities, allLessons, allUnits } from "@contentlayer/generated"
import { BeeKnowledge } from "../Svgs/BeeKnowledge"
import { BeeLocale } from "../Localization/localization"
import { useScroll, motion, useSpring, useTransform } from "framer-motion"

type SiteNumbersProps = {
  locale: BeeLocale
}

export const SiteNumbers: FC<SiteNumbersProps> = ({ locale }) => {
  const lessonSize = allLessons.length
  const activitySize = allActivities.length
  const unitSize = allUnits.length
  const ref = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', `end 0.7`],
  })
  const opacity = useSpring(useTransform(scrollYProgress, [0.14, 0.525, 0.98, 1], [0, 0.5, 1, 1]))

  const siteNumbers = [
    {
      label: {
        en: "Course",
        pt: "Curso",
        es: "Curso",
        fr: "Cours",
        de: "Kurs",
      }, countTo: 1
    },
    {
      label: {
        en: "Units",
        pt: "Unidades",
        es: "Unidades",
        fr: "Unités",
        de: "Einheiten",
      }, countTo: unitSize
    },
    {
      label: {
        en: "Lessons",
        pt: "Lições",
        es: "Lecciones",
        fr: "Leçons",
        de: "Lektionen",
      }, countTo: lessonSize
    },
    {
      label: {
        en: "Activities",
        pt: "Atividades",
        es: "Actividades",
        fr: "Activités",
        de: "Aktivitäten",
      }, countTo: activitySize
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center -z-10 ">
      <div className="flex w-4/5 flex-col items-center gap-10 sm:flex-row sm:gap-4">
        {siteNumbers.map((siteNumber) => (
          <div
            key={siteNumber.label.en}
            className="flex w-4/5 select-none flex-col flex-wrap items-center gap-1 text-start text-5xl font-black leading-loose"
          >
            <CounterUp countTo={siteNumber.countTo} scrollSpyDelay={300} />
            <p className="text-center text-4xl sm:text-start">
              <span className="text-amber-500">bee</span>
              {siteNumber.label[locale]}
            </p>
          </div>
        ))}
      </div>
      <div ref={ref} className="relative mt-24 grid grid-cols-12 pb-40 sm:grid-cols-9 lg:px-[15%]">

        <div className="sticky top-[20%] col-start-1 col-end-13 pb-8 sm:col-start-2 sm:col-end-9 sm:pb-16 lg:top-[5%] lg:pb-40">
          <BeeKnowledge className="w-96" />
        </div>
      </div>
      <motion.div style={{ opacity }}>
        <div className="bg-amber-500 opacity-80 fixed inset-0 -z-10 w-full h-full" />
      </motion.div>
    </div>
  )
}
