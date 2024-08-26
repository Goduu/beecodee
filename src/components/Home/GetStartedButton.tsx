"use client"
import React from "react"
import { Button } from "../Button"
import { redirect } from "next/navigation"
import { useLocaleContext } from "../Localization/LocaleContext"

export const GetStartedButton = () => {
  const { locale } = useLocaleContext()

  return (
    <Button color="primary" className="w-64 uppercase" onClick={() => redirect("/getStarted")}>
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
  getStarted: "Los get's",
}
export const T = {
  en,
  pt,
  es,
  fr,
  de,
}
