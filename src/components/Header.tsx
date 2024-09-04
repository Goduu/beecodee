import React from "react"
import { XpollenHeader } from "./XPollen/XpollenHeader"
import { allCourses } from "@contentlayer/generated"
import { CourseMenu } from "./CourseMenu"

export const Header = async () => {
  return (
    <header className="absolute top-2 flex w-full items-center justify-center px-10 sm:justify-between">
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
