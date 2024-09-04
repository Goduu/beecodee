"use server"
import { cache } from "react"
import { createClient } from "../server"
import { fetchCachedUserData } from "@/lib/supabase/api/fetchUserData"
import { revalidateUserXpollen } from "./fetchUserXpollen"
import { revalidateTag } from "next/cache"

type upsertActivityParams = {
  courseId: string
  unitId: string
  lessonId: string
  xpollen: number
}

export const insertXpollen = cache(async ({ courseId, unitId, lessonId, xpollen }: upsertActivityParams) => {
  const userData = await fetchCachedUserData()
  const supabase = createClient()

  if (!userData) return false

  const { error } = await supabase.from("xpollen").insert([
    {
      user_id: userData?.id,
      course_id: courseId,
      unit_id: unitId,
      lesson_id: lessonId,
      xpollen,
    },
  ])

  if (error) {
    console.error("Error inserting xpollen:", error)
    return false
  }

  revalidateUserXpollen()
  revalidateTag("user-data")

  return true
})
