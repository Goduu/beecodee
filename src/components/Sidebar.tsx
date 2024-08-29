"use client"
import React from "react"
import { BeeHead, GiHoneypot, IoMdFlower, IoMdLogOut } from "./Svgs/Icons"
import { BeecodeeIcon } from "./Svgs/BeecodeeIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "@/lib/auth"
import { LOCALES } from "./Localization/localization"
import { LanguageButton } from "./Localization/LanguageButton"

const HIDDEN_PATHS = ["/lessons", "/getStarted"]

export const Sidebar = () => {
  const pathname = usePathname()
  const isHomePathname = LOCALES.some((locale) => pathname === `/${locale}`)

  const isHidden = isHomePathname || HIDDEN_PATHS.find((path) => pathname.includes(path))

  return (
    <div
      className={`fixed inset-x-0 z-40 ${isHidden && "hidden scale-0"}
      sm:t-0 bottom-0
      w-full sm:left-0 sm:h-screen sm:w-fit`}
    >
      <aside className="flex items-center bg-slate-100 py-1 shadow sm:h-full sm:flex-col sm:pb-0 sm:pt-10 dark:bg-slate-800">
        <div className="flex items-center justify-center pl-2 sm:h-16 sm:w-full sm:py-10 sm:pl-0">
          <Link href="/">
            <BeecodeeIcon className="w-14 md:hidden" />
            <span className="hidden text-3xl font-black text-amber-500 md:block">beecodee</span>
          </Link>
        </div>
        <ul className="flex w-full justify-evenly sm:flex-col sm:justify-center">
          {menuOptions.map((option, index) => (
            <li
              key={index}
              className={`rounded-lg p-1 px-1 hover:bg-gray-500 sm:px-6 ${pathname === option.link && "bg-gray-500"}`}
            >
              <Link href={option.link} className={`flex h-16 w-full items-center justify-start gap-2 `}>
                {option.icon}
                <span className="hidden text-xs font-black md:block">{option.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <LanguageButton />
        <div className="items-center pr-2 sm:mb-6 sm:mt-auto sm:h-16 sm:w-full sm:pr-0">
          <button
            onClick={() => signOut()}
            className="flex h-16 items-center justify-center gap-2 rounded-lg hover:bg-red-900 
				              focus:outline-none sm:mx-auto sm:w-full"
          >
            <IoMdLogOut className="w-12" />
            <span className="hidden text-xs font-black md:block">LOGOUT</span>
          </button>
        </div>
      </aside>
    </div>
  )
}

const menuOptions = [
  { icon: <IoMdFlower className="w-10" />, label: "PATH", link: "/path" },
  {
    icon: <GiHoneypot className="w-10" />,
    label: "HONEYCOMB",
    link: "/path/honeycomb",
  },
  { icon: <BeeHead className="w-10" />, label: "PROFILE", link: "/profile" },
]
