"use client"
import React, { useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Beecodee } from "../Svgs/Beecodee"
import { LOCALES } from "../Localization/localization"
import { motion, useScroll, useMotionValueEvent, Variants } from "framer-motion"
import { ModeToggle } from "../ModeToggle"
import { LanguageButton } from "../Localization/LanguageButton"

export const HomeHeader = () => {
  const pathname = usePathname()
  const isPathHome = LOCALES.some((locale) => pathname === `/${locale}`)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0)
      lastYRef.current = y
    }
  })

  return (
    <div className={`fixed top-0 z-50 w-screen ${!isPathHome && "hidden"}`}>
      <motion.div
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        whileHover={hidden ? "peeking" : "visible"}
        variants={
          {
            visible: { y: "0%" },
            hidden: { y: "-90%" },
          } as Variants
        }
        transition={{ duration: 0.2 }}
      >
        <div className="absolute left-4 top-5 flex items-center">
          <LanguageButton />
          <ModeToggle className="z-20" />
        </div>
        <div className="flex w-screen items-center backdrop-blur-md">
          <div className="flex w-screen items-center justify-center">
            <Beecodee className="w-64 sm:w-72" />
          </div>
        </div>
        <hr />
      </motion.div>
    </div>
  )
}
