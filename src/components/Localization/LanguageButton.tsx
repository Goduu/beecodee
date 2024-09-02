"use client"
import React, { ReactNode, useRef, useState } from "react"
import { useDetectOuterClickAndEsc } from "../useDetectOuterClickAndEsc"
import { BR, DE, ES, FR, US } from "../Svgs/Flags"
import { useLocaleContext } from "./LocaleContext"
import { BeeLocale } from "./localization"
import { upsertUserCurrentData } from "@/lib/supabase/api/upsertUserCurrentData"
import { usePathname, useRouter } from "next/navigation"

export const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { locale } = useLocaleContext()
  useDetectOuterClickAndEsc({ onOuterClick: () => setIsOpen(false), ref: menuRef })
  const pathName = usePathname()
  const router = useRouter()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickLanguage = (newLocale: BeeLocale) => {
    if (newLocale !== locale) {
      const newPathName = pathName.replace(locale, newLocale)
      upsertUserCurrentData({ language: newLocale })
      router.push(newPathName)
    }
    toggleDropdown()
  }

  return (
    <div className="relative hidden text-left sm:inline-block" ref={menuRef}>
      <button
        id="dropdownTopButton"
        onClick={toggleDropdown}
        className="mb-3 inline-flex items-center rounded-lg  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-100 dark:hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mb-0 dark:focus:ring-blue-800"
        type="button"
      >
        {languagesOptions.find((option) => option.locale === locale)?.icon}
      </button>

      {isOpen && (
        <div
          id="dropdownTop"
          className="absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
            {languagesOptions.map((option, index) => (
              <li key={index}>
                <div
                  role="button"
                  onClick={() => handleClickLanguage(option.locale)}
                  className="flex gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {option.icon} {option.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

type LanguageOption = {
  locale: BeeLocale
  icon: ReactNode
  label: string
}

const languagesOptions = [
  { locale: "fr", icon: <FR />, label: "Français" },
  { locale: "de", icon: <DE />, label: "Deutsch" },
  { locale: "pt", icon: <BR />, label: "Português" },
  { locale: "en", icon: <US />, label: "English" },
  { locale: "es", icon: <ES />, label: "Español" },
] satisfies LanguageOption[]
