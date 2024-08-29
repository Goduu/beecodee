import React from "react"
import { fetchUserData } from "@/lib/supabase/api/fetchUserData"
import { XpollenHeader } from "./XPollen/XpollenHeader"
import { allCourses } from "@contentlayer/generated"
import { CourseMenu } from "./CourseMenu"

export const Header = async () => {
  const userData = await fetchUserData()

  return (
    <header className="absolute top-2 flex w-full items-center justify-center px-10 sm:justify-between">
      <div className="flex w-screen items-center justify-end gap-2">
        <CourseMenu userData={userData} />
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
