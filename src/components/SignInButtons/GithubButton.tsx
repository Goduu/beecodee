"use client"
import React, { FC } from "react"
import { Button } from "../Button"
import { signInWithGithub } from "@/lib/auth"
import { FaGithub } from "../Svgs/Icons"
import { useLocaleContext } from "../Localization/LocaleContext"

export const GithubButton: FC = () => {
  const { locale } = useLocaleContext()

  return (
    <Button onClick={signInWithGithub} className="flex items-center gap-2">
      <FaGithub className="w-5" />
      {T[locale].continueWithGithub}
    </Button>
  )
}

const en = {
  continueWithGithub: "Continue with GitHub",
}
const es = {
  continueWithGithub: "Continuar con GitHub",
}
const fr = {
  continueWithGithub: "Continuer avec GitHub",
}
const de = {
  continueWithGithub: "Mit GitHub fortfahren",
}
const pt = {
  continueWithGithub: "Continuar com o GitHub",
}
const T = {
  en,
  es,
  fr,
  de,
  pt,
}
