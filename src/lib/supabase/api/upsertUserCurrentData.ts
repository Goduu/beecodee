"use server"
import { cache } from "react"
import { createClient } from "../server"
import { fetchUserData, revalidateUserData } from "@/lib/supabase/api/fetchUserData"
import { BeeLocale } from "@/components/Localization/localization"

type upsertActivityParams = {
  courseId?: string
  language?: BeeLocale
}

export const upsertUserCurrentData = cache(async ({ courseId, language }: upsertActivityParams) => {
  const userData = await fetchUserData()
  const supabase = createClient()
  const currentData = await fetchUserData()

  if (!userData) return false

  const { error } = await supabase.from("user_current_data").upsert([
    {
      user_id: userData?.id,
      course: courseId || currentData?.currentCourse,
      language: language || currentData?.currentLanguage,
    },
  ])

  if (error) {
    console.error("Error upsertUserCurrentData:", error)
    return false
  }

  revalidateUserData()

  return true
})
