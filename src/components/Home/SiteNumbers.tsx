"use client"
import React, { FC, useRef } from "react"
import { BeeLocale } from "../Localization/localization"
import BeeContent from "./BeeContent"

type SiteNumbersProps = {
  locale: BeeLocale
}

export const SiteNumbers: FC<SiteNumbersProps> = ({ locale }) => {
  const ref = useRef<HTMLDivElement>(null!)

  return (
    <div ref={ref} className="flex h-[600px] flex-col gap-16">
      <h2 className="top-[20%] flex w-full flex-col items-center justify-center gap-4 text-6xl sm:flex-row">
        {T[locale].our}
        <span>
          <span className="text-amber-500">bee</span>
          <span className="decoration-wavy">{T[locale].content}</span>
        </span>
      </h2>
      <BeeContent />
    </div>
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
