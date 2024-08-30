"use client"
import React, { ReactNode, useRef, useState } from "react"
import { upsertUserCurrentData } from "@/lib/supabase/api/upsertUserCurrentData"
import { usePathname, useRouter } from "next/navigation"
import { useDetectOuterClickAndEsc } from "./useDetectOuterClickAndEsc"
import { SiHtml5, SiJavascript } from "./Svgs/Icons"
import { allCourses } from "@contentlayer/generated"
import { User } from "@/lib/auth/types"
import { routes } from "@/lib/routes"
import { useLocaleContext } from "./Localization/LocaleContext"

export const CourseMenu = ({ userData }: { userData?: User | null }) => {
  const { locale } = useLocaleContext()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const course = userData?.currentCourse

  useDetectOuterClickAndEsc({ onOuterClick: () => setIsOpen(false), ref: menuRef })

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickLanguage = (newCourse: string) => {
    if (course && newCourse !== course) {
      upsertUserCurrentData({ courseId: newCourse })
      router.push(routes.path(locale, newCourse))
    }
    toggleDropdown()
  }

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        id="dropdownTopButton"
        onClick={toggleDropdown}
        className="mb-3 inline-flex items-center rounded-lg  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mb-0 dark:focus:ring-indigo-800"
        type="button"
      >
        {courseOptions.find((option) => option.course === course)?.icon}
      </button>

      {isOpen && (
        <div
          id="dropdownTop"
          className="absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
            {courseOptions.map((option, index) => (
              <li key={index}>
                <div
                  role="button"
                  onClick={() => handleClickLanguage(option.course)}
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

type CourseSlugs = (typeof allCourses)[number]["slugAsParams"]

type CourseOptions = {
  course: CourseSlugs
  icon: ReactNode
  label: string
}

const courseOptions = [
  { course: "javascript", icon: <SiJavascript className="w-8" />, label: "Javacript" },
  { course: "html", icon: <SiHtml5 className="w-8" />, label: "HTML5" },
] satisfies CourseOptions[]
