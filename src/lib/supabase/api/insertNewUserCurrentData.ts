"use server"
import { cache } from "react"
import { createClient } from "../server"
import { revalidateUserData } from "@/lib/supabase/api/fetchUserData"
import { BeeLocale } from "@/components/Localization/localization"

type upsertActivityParams = {
  userId: string
  courseId: string
  language: BeeLocale
}

export const insertNewUserCurrentData = cache(async ({ userId, courseId, language }: upsertActivityParams) => {
  const supabase = createClient()

  const { error } = await supabase.from("user_current_data").insert([
    {
      user_id: userId,
      course: courseId,
      language: language,
    },
  ])

  if (error) {
    console.error("Error upsertUserCurrentData:", error)
    return false
  }

  revalidateUserData()

  return true
})
