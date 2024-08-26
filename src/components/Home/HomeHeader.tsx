"use client"
import React from "react"
import { usePathname } from "next/navigation"
import { Beecodee } from "../Svgs/Beecodee"

export const HomeHeader = () => {
  const pathname = usePathname()

  return (
    <div className={`fixed top-0 z-50 w-screen backdrop-blur-md ${pathname !== "/" && "hidden"}`}>
      <div className="flex w-screen items-center justify-center">
        <Beecodee className="w-64" />
      </div>
      <hr />
    </div>
  )
}
