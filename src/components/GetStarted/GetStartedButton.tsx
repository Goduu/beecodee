"use client"
import React, { FC } from "react"
import { Button } from "../Button"
import { useRouter } from "next/navigation"
import { useLocaleContext } from "../Localization/LocaleContext"
import { routes } from "@/lib/routes"
import { User } from "@/lib/auth/types"
import { useTransitionContext } from "../Loading.store"

type GetStartedButtonProps = {
  userData: User | null | undefined
}

export const GetStartedButton: FC<GetStartedButtonProps> = ({ userData }) => {
  const { locale } = useLocaleContext()
  const { startTransition } = useTransitionContext()
  const router = useRouter()
  const handleClick = () => {
    const nextRoute = userData ? routes.path(locale) : routes.getStarted(locale)
    startTransition(() => {
      router.push(nextRoute)
    })
  }

  return (
    <Button color="primary" className="w-64 uppercase" size="large" onClick={handleClick}>
      {userData ? T[locale].continueLearning : T[locale].getStarted}
    </Button>
  )
}

const en = {
  getStarted: "Get Started",
  continueLearning: "Continue Learning",
}
const pt: typeof en = {
  getStarted: "Vamos lá",
  continueLearning: "Continuar aprendendo",
}
const es: typeof en = {
  getStarted: "¡Vamos!",
  continueLearning: "Continuar aprendiendo",
}
const fr: typeof en = {
  getStarted: "C'est parti",
  continueLearning: "Continuer à apprendre",
}
const de: typeof en = {
  getStarted: "Los geht's",
  continueLearning: "Weiterlernen",
}
export const T = {
  en,
  pt,
  es,
  fr,
  de,
}
