"use client"
import React, { useTransition } from "react"
import { BeeHead, GiHoneypot, IoMdFlower, IoMdLogOut } from "./Svgs/Icons"
import { BeecodeeIcon } from "./Svgs/BeecodeeIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "@/lib/auth/auth"
import { BeeLocale, LOCALES } from "./Localization/localization"
import { LanguageButton } from "./Localization/LanguageButton"
import { User } from "@/lib/auth/types"
import { routes } from "@/lib/routes"
import { LoadingBee } from "./LoadingBee"

const HIDDEN_PATHS = ["/lessons", "/get-started", "/review"]

export const Sidebar = ({ userData }: { userData?: User | null }) => {
  const pathname = usePathname()
  const isHomePathname = LOCALES.some((locale) => pathname === `/${locale}`)
  const [isPending, startTransition] = useTransition()

  const handleLogout = () => {
    startTransition(async () => {
      await signOut()
    })
  }

  const isHidden = isHomePathname || HIDDEN_PATHS.find((path) => pathname.includes(path))
  if (!userData?.currentLanguage || !userData.currentCourse) return null

  const menuOptions = getMenuOptions(userData.currentLanguage, userData.currentCourse)

  return (
    <>
      <div
        className={`fixed inset-x-0 z-40 ${isHidden && "hidden scale-0"}
        sm:t-0 bottom-0 w-full bg-slate-100
        sm:left-0 sm:h-screen sm:w-fit dark:bg-slate-800`}
      >
        <LanguageButton />
        <aside className="flex items-center py-1 shadow sm:h-full sm:flex-col sm:pb-0 sm:pt-10 ">
          <div className="flex items-center justify-center pl-2 sm:h-16 sm:w-full sm:py-5 sm:pb-10 sm:pl-0">
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
                  <span className="hidden text-xs font-black uppercase md:block">{option.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden items-center pr-2 sm:mb-10 sm:mt-auto sm:block sm:h-16 sm:w-full sm:pr-0">
            <button
              onClick={handleLogout}
              className="flex h-16 items-center justify-center gap-2 rounded-lg hover:bg-red-900 
            focus:outline-none sm:mx-auto sm:w-full"
            >
              <IoMdLogOut className="w-12" />
              <span className="hidden text-xs font-black md:block">LOGOUT</span>
            </button>
          </div>
        </aside>
      </div>
      <LoadingBee visible={isPending} />
    </>
  )
}

const getMenuOptions = (locale: BeeLocale, course: string) => [
  { icon: <IoMdFlower className="w-10" />, label: T[locale].path, link: routes.path(locale) },
  {
    icon: <GiHoneypot className="w-10" />,
    label: T[locale].honeycomb,
    link: routes.honeycomb(locale),
  },
  { icon: <BeeHead className="w-10" />, label: T[locale].profile, link: routes.profile(locale) },
]

const en = {
  path: "Path",
  honeycomb: "Honeycomb",
  profile: "Profile",
}
const pt: typeof en = {
  path: "Caminho",
  honeycomb: "Colmeia",
  profile: "Perfil",
}
const fr: typeof en = {
  path: "Chemin",
  honeycomb: "Ruche",
  profile: "Profil",
}
const de: typeof en = {
  path: "Pfad",
  honeycomb: "Bienenstock",
  profile: "Profil",
}
const es: typeof en = {
  path: "Camino",
  honeycomb: "Colmena",
  profile: "Perfil",
}
const T = { en, pt, fr, de, es }
