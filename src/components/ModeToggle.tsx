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
      className="mb-3 z-20 inline-flex items-center rounded-lg  px-5 h-8 text-center text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mb-0 dark:focus:ring-blue-800" >
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  )
}
