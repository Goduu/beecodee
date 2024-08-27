"use client"
import React from "react"
import { usePathname } from "next/navigation"
import { Beecodee } from "../Svgs/Beecodee"
import { LOCALES } from "../Localization/localization"

export const HomeHeader = () => {
  const pathname = usePathname()
  const isPathHome = LOCALES.some((locale) => pathname === `/${locale}`)

  return (
    <div className={`fixed top-0 z-50 w-screen backdrop-blur-md ${!isPathHome && "hidden"}`}>
      <div className="flex w-screen items-center justify-center">
        <Beecodee className="w-64" />
      </div>
      <hr />
    </div>
  )
}
