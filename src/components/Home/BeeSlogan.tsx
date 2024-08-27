import React, { FC } from "react"
import { BeeLocale } from "../Localization/localization"
import { BeeKnowledge } from "../Svgs/BeeKnowledge"

type BeeSloganProps = {
  locale: BeeLocale
}

export const BeeSlogan: FC<BeeSloganProps> = ({ locale }) => {
  return (
    <div className="flex w-screen flex-col items-center gap-10 sm:flex-row sm:gap-4">
      <div className="flex flex-col items-center gap-4 text-center sm:w-1/2">
        <div className="flex w-4/5 select-none flex-col items-center gap-4 text-start leading-loose">
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">bee </span> {T[locale].creative}
          </p>
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">bee </span> {T[locale].innovative}
          </p>
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">bee </span> {T[locale].flexible}
          </p>
          <p className="flex text-5xl font-bold">
            <span className="text-amber-500">beecodee </span>
          </p>

          <p className="text-center text-xl sm:text-start"></p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <div className="flex flex-col items-center gap-2">
          <BeeKnowledge className="w-72" />
        </div>
      </div>
    </div>
  )
}

const en = {
  creative: "creative",
  innovative: "innovative",
  flexible: "flexible",
}
const pt: typeof en = {
  creative: "criativo",
  innovative: "inovador",
  flexible: "flexível",
}
const es: typeof en = {
  creative: "creativo",
  innovative: "innovador",
  flexible: "flexible",
}
const fr: typeof en = {
  creative: "créatif",
  innovative: "innovant",
  flexible: "flexible",
}
const de: typeof en = {
  creative: "kreativ",
  innovative: "innovativ",
  flexible: "flexibel",
}
export const T = {
  en,
  pt,
  es,
  fr,
  de,
}
