"use client"
import React from "react"
import { Button } from "../Button"
import { useRouter } from "next/navigation"
import { useLocaleContext } from "../Localization/LocaleContext"
import { routes } from "@/lib/routes"

export const GetStartedButton = () => {
  const { locale } = useLocaleContext()
  const router = useRouter()

  return (
    <Button
      color="primary"
      className="w-64 uppercase"
      size="large"
      onClick={() => router.push(routes.getStarted(locale))}
    >
      {T[locale].getStarted}
    </Button>
  )
}

const en = {
  getStarted: "Get Started",
}
const pt: typeof en = {
  getStarted: "Vamos lá",
}
const es: typeof en = {
  getStarted: "¡Vamos!",
}
const fr: typeof en = {
  getStarted: "C'est parti",
}
const de: typeof en = {
  getStarted: "Los geht's",
}
export const T = {
  en,
  pt,
  es,
  fr,
  de,
}
