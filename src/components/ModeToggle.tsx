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
      className={`border rounded-md w-7 h-7 flex items-center justify-center ${className}`}>
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  )
}
