"use client"
import React, { FC } from "react"
import { CollectingBee } from "./Svgs/Animations/CollectingBee"
import { TypingText } from "./Svgs/Animations/TypingText"
import { useLocaleContext } from "./Localization/LocaleContext"
import { useTransitionContext } from "./Loading.store"

export const LoadingBee: FC = () => {
  const { locale } = useLocaleContext()
  const { isPending } = useTransitionContext()
  if (!isPending) return null

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-white py-10 dark:bg-slate-800 `}
    >
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
