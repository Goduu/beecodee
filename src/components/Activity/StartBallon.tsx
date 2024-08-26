"use client"
import React from "react"
import { useLocaleContext } from "../Localization/LocaleContext"

export const StartBallon = () => {
  const { locale } = useLocaleContext()
  return (
    <div className="absolute -top-16 left-auto z-10 animate-bounce rounded-xl border-2 bg-white px-3 py-2.5 font-bold uppercase tracking-wide text-green-500">
      {T[locale].start}
      <div
        className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent"
        aria-hidden
      />
    </div>
  )
}

const en = {
  start: "Start",
}
const pt: typeof en = {
  start: "Iniciar",
}
const es: typeof en = {
  start: "Comenzar",
}
const fr: typeof en = {
  start: "Commencer",
}
const de: typeof en = {
  start: "Starten",
}
export const T = { en, pt, es, fr, de }
