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

        <div className="flex w-screen items-center mx-4  gap-1 backdrop-blur-md">
          <ModeToggle className="z-20"/>
          <LanguageButton />
          <div className="flex w-screen items-center -ml-10 sm:-ml-28 justify-center">
            <Beecodee className="w-64 sm:w-72" />
          </div>
        </div>
        <hr />
      </motion.div>
    </div>
  )
}
