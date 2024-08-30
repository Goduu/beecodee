"use client"

import { type PropsWithChildren, ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Pill, PillProps } from "./pill"
import { useLocaleContext } from "../Localization/LocaleContext"
import { TranslatedText } from "@contentlayer/generated"

export type PillVariant = PillProps["variant"]

type LanguagePillProps = {
  title: string
  word: { en: string; pt: string; es: string; fr: string; de: string }
  flag: ReactNode
  tilt?: -1 | 0 | 1
  variant?: PillVariant
  className?: string
}

export function LanguagePill({
  word,
  flag,
  tilt = 0,
  variant = "primary",
  className,
}: PropsWithChildren<LanguagePillProps>) {
  const ref = useRef<HTMLElement>(null!)
  const { locale } = useLocaleContext()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `end start`],
  })

  //   const progress = useSpring(scrollYProgress, { stiffness: 25 })

  const progress = scrollYProgress

  const opacity = useTransform(progress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(progress, [0, 0.2, 0.9, 1], [0.5, 1, 1, 0.75])
  const rotate = useTransform(progress, [0.2, 0.4], [0, 3 * tilt])
  const skewX = useTransform(progress, [0.2, 0.4], [0, -3 * tilt])
  const x = useTransform(progress, [0.2, 0.4], ["0%", `${-50 * tilt}%`])
  const left = useTransform(progress, [0.2, 0.4], ["0%", `${50 * tilt}%`])

  return (
    <motion.div ref={ref} style={{ opacity, scale, rotate, skewX, x, left, position: "relative" }}>
      <Pill variant={variant} className="gap-2 sm:gap-4 px-2 sm:px-4 text-lg shadow-2xl sm:pl-8 sm:text-xl lg:text-4xl">
        <span className="">{word[locale]}</span>
        <span className="flex items-center justify-center rounded-full border p-2 sm:p-3 shadow-md">
          {flag}
        </span>
      </Pill>
    </motion.div>
  )
}
