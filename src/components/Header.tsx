import React from "react"
import { XpollenHeader } from "./XPollen/XpollenHeader"
import { allCourses } from "@contentlayer/generated"
import { CourseMenu } from "./CourseMenu"

export const Header = async () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-center bg-white px-10 dark:bg-slate-900 sm:justify-between">
      <div className="flex w-full items-center justify-end gap-2">
        <CourseMenu />
        <XpollenHeader />
      </div>
    </header>
  )
}

const coursesOptions = allCourses
  .map((course) => course.slugAsParams)
  .map((course) => ({
    label: course,
    value: course,
  }))
