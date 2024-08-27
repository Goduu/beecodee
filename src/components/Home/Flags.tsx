import React from "react"
import { LanguagePill, PillVariant } from "./LanguagePill"
import { FaGithub, SiCss3, SiHtml5, SiJavascript, SiPython, SiReact, SiTypescript } from "../Svgs/Icons"

const variants: NonNullable<PillVariant>[] = [
  "secondary",
  "highlightOutline",
  "secondaryOutline",
  "primary",
  "highlight",
  "default",
  "primaryOutline",
]

export const Flags = () => {
  return (
    <ul className="flex flex-col gap-8 px-[5%] lg:px-0">
      {languages.map(({ flag, title, word }, index) => (
        <li key={title} className="flex justify-center">
          <LanguagePill
            title={title}
            word={word}
            flag={flag}
            tilt={index % 2 === 0 ? -1 : 1}
            variant={variants[index % variants.length]}
          />
        </li>
      ))}
    </ul>
  )
}

export const languages = [
  {
    title: "Javascript",
    flag: <SiJavascript className="w-10 text-yellow-300" />,
    word: {
      en: 'const start = "now"',
      pt: 'const iniciar = "agora"',
      fr: 'const commencer = "maintenant"',
      de: 'const starten = "jetzt"',
      es: 'const iniciar = "ahora"',
    },
  },
  {
    title: "HTML",
    flag: <SiHtml5 className="w-10 text-orange-500" />,
    word: {
      en: "<p>Start now</p>",
      pt: "<p>Comece agora</p>",
      fr: "<p>Commencez maintenant</p>",
      de: "<p>Starte jetzt</p>",
      es: "<p>Comienza ahora</p>",
    },
  },
  {
    title: "Typescript",
    flag: <SiTypescript className="w-10 text-blue-600" />,
    word: {
      en: 'type Start = "now" | "never"',
      pt: 'type Iniciar = "agora" | "nunca"',
      fr: 'type Debut = "maintenant" | "jamais"',
      de: 'type Starten = "jetzt" | "nie"',
      es: 'type Iniciar = "ahora" | "nunca"',
    },
  },
  {
    title: "Css3",
    flag: <SiCss3 className="w-10 text-blue-600" />,
    word: {
      en: ".start: now",
      pt: ".iniciar: agora",
      fr: ".commencer: maintenant",
      de: ".starten: jetzt",
      es: ".iniciar: ahora",
    },
  },
  {
    title: "React",
    flag: <SiReact className="w-10 text-teal-400" />,
    word: {
      en: "useStart(now)",
      pt: "useIniciar(agora)",
      fr: "useCommencer(maintenant)",
      de: "useStarten(jetzt)",
      es: "useIniciar(ahora)",
    },
  },
  {
    title: "Python",
    flag: <SiPython className="w-10" />,
    word: {
      en: "def lets_start():",
      pt: "def vamos_iniciar():",
      fr: "def commencons():",
      de: "def lass_uns_starten():",
      es: "def vamos_iniciar():",
    },
  },
  {
    title: "Github",
    flag: <FaGithub className="w-10 text-slate-900 dark:text-white" />,
    word: {
      en: "git start --now",
      pt: "git iniciar --agora",
      fr: "git commencer --maintenant",
      de: "git starten --jetzt",
      es: "git iniciar --ahora",
    },
  },
]
