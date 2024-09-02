"use client"
import React, { FC } from "react"
import { CollectingBee } from "./Svgs/Animations/CollectingBee"
import { TypingText } from "./Svgs/Animations/TypingText"
import { useLocaleContext } from "./Localization/LocaleContext"

type LoadingBeeProps = {
  visible: boolean
}

export const LoadingBee: FC<LoadingBeeProps> = ({ visible }) => {
  const { locale } = useLocaleContext()
  if (!visible) return null

  return (
    <div className={`fixed left-0 top-0  z-50 h-screen w-screen items-center justify-center bg-white dark:bg-slate-800 py-10 `}>
      <div className="flex h-full flex-col items-center justify-center gap-0">
        <CollectingBee className="h-96" />
        <TypingText
          text={`${T[locale].loading}...`}
          animationType="slow"
          className="text-4xl font-bold sm:text-5xl md:text-8xl"
        />
      </div>
    </div>
  )
}

const en = {
  loading: "Loading",
}
const pt: typeof en = {
  loading: "Carregando",
}
const es: typeof en = {
  loading: "Cargando",
}
const fr: typeof en = {
  loading: "En chargement",
}
const de: typeof en = {
  loading: "Laden",
}
export const T = {
  en,
  pt,
  es,
  fr,
  de,
}
