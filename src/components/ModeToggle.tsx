"use client"

import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "./Svgs/Icons"
import { useEffect, useState } from "react"

type ModeToggleProps = {
  className?: string
}

export function ModeToggle({ className }: ModeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="z-20 mb-3 inline-flex h-8 items-center  rounded-lg px-5 text-center text-sm font-medium hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-slate-500 dark:focus:ring-blue-800 md:mb-0"
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}
