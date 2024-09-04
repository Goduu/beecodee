"use server"
import { cache } from "react"
import { createClient } from "../server"
import { fetchCachedUserData, revalidateUserData } from "@/lib/supabase/api/fetchUserData"
import { BeeLocale } from "@/components/Localization/localization"

type upsertActivityParams = {
  courseId?: string
  language?: BeeLocale
}

export const upsertUserCurrentData = cache(async ({ courseId, language }: upsertActivityParams) => {
  const userData = await fetchCachedUserData()
  const supabase = createClient()

  if (!userData) return false

  const { error } = await supabase.from("user_current_data").upsert([
    {
      user_id: userData?.id,
      course: courseId || userData?.currentCourse,
      language: language || userData?.currentLanguage,
    },
  ])

  if (error) {
    console.error("Error upsertUserCurrentData:", error)
    return false
  }

  revalidateUserData()

  return true
})
