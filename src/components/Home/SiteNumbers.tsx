"use client"
import React, { FC, useRef } from "react"
import { allActivities, allCourses, allLessons, allUnits } from "@contentlayer/generated"
import { BeeLocale } from "../Localization/localization"
import { useScroll, motion, useSpring, useTransform } from "framer-motion"
import { MetricsItem } from "./MetricsItem"
import { Antenna, FaceFour, FaceOne, FaceThree, FaceTwo } from "../Svgs/Icons"
import { Flags } from "./Flags"

type SiteNumbersProps = {
  locale: BeeLocale
}

export const SiteNumbers: FC<SiteNumbersProps> = ({ locale }) => {
  const courseSize = allCourses.length
  const lessonSize = allLessons.length
  const activitySize = allActivities.length
  const unitSize = allUnits.length
  const ref = useRef<HTMLUListElement>(null!)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", `end 0.7`],
  })
  const opacity = useSpring(useTransform(scrollYProgress, [0.14, 0.525, 0.98, 1], [0, 0.5, 1, 1]))

  return (
    <section className="max-w-screen-sm pb-8 pt-16 md:max-w-screen-md md:py-20 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <h2 className="flex w-full flex-col items-center justify-center gap-4 text-6xl sm:flex-row">
        {T[locale].our}
        <span>
          <span className="text-amber-500">bee</span>
          <span className="decoration-wavy">{T[locale].content}</span>
        </span>
      </h2>
      <ul ref={ref} className="relative mt-24 grid grid-cols-12 pb-40 text-white sm:grid-cols-9 lg:px-[15%] ">
        <li className="sticky top-[20%] col-start-2 col-end-12 pb-8 sm:col-start-3 sm:col-end-8 sm:pb-16 lg:top-[10%] lg:pb-40">
          <MetricsItem
            className="bg-red-500"
            countTo={courseSize}
            description={T[locale].course}
            offset={20}
            progress={scrollYProgress}
          >
            <FaceOne />
          </MetricsItem>
        </li>
        <li className="sticky top-[22.5%] col-start-2 col-end-12 pb-8 sm:col-start-1 sm:col-end-5 sm:pb-16 lg:pb-40">
          <MetricsItem
            className="bg-lime-500"
            countTo={unitSize}
            description={T[locale].units}
            offset={22.5}
            progress={scrollYProgress}
          >
            <FaceTwo />
          </MetricsItem>
        </li>
        <li className="sticky top-[25%] col-start-2 col-end-12 pb-8 sm:col-start-6 sm:col-end-10 sm:pb-16 lg:pb-40">
          <MetricsItem
            className="bg-indigo-500"
            countTo={lessonSize}
            description={T[locale].lessons}
            offset={25}
            progress={scrollYProgress}
          >
            <FaceThree />
          </MetricsItem>
        </li>
        <li className="sticky top-[20%] col-start-1 col-end-13 pb-8 sm:col-start-2 sm:col-end-9 sm:pb-16 lg:top-[5%] lg:pb-40">
          <MetricsItem
            className="gap-0 bg-gradient-to-b from-amber-500 to-amber-600 to-90%"
            countTo={activitySize}
            description={T[locale].activities}
            offset={20}
            progress={scrollYProgress}
            last
          >
            <Antenna className="absolute -top-36 z-10 flex aspect-square h-96 w-full flex-col items-center justify-center text-center md:-top-28" />
            <FaceFour />
          </MetricsItem>
        </li>
        <li className="col-start-1 col-end-13 sm:col-end-10">
          <Flags />
        </li>
        <motion.div style={{ opacity, zIndex: -20 }}>
          <div className="fixed inset-0 h-full w-full bg-amber-500 opacity-80" />
        </motion.div>
      </ul>
    </section>
  )
}

const en = {
  our: "Our",
  content: "content",
  course: "Course",
  units: "Units",
  lessons: "Lessons",
  activities: "Activities",
}
const pt: typeof en = {
  our: "Nosso",
  content: "conteúdo",
  course: "Curso",
  units: "Unidades",
  lessons: "Lições",
  activities: "Atividades",
}
const es: typeof en = {
  our: "Nuestro",
  content: "contenido",
  course: "Curso",
  units: "Unidades",
  lessons: "Lecciones",
  activities: "Actividades",
}
const fr: typeof en = {
  our: "Notre",
  content: "contenu",
  course: "Cours",
  units: "Unités",
  lessons: "Leçons",
  activities: "Activités",
}
const de: typeof en = {
  our: "Unser",
  content: "Inhalt",
  course: "Kurs",
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
