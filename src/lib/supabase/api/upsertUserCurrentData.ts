"use server"
import { cache } from "react"
import { createClient } from "../server"
import { userMetadata } from "@/lib/auth"
import { BeeLocale } from "@/components/Localization/localization"
import { revalidateUserCurrentData } from "./fetchUserCurrentData"

type upsertActivityParams = {
  courseId?: string
  language?: BeeLocale
}

export const upsertUserCurrentData = cache(async ({ courseId, language }: upsertActivityParams) => {
  const userData = await userMetadata()
  const supabase = createClient()

  if (!userData) return false

  const { error } = await supabase.from("user_current_data").upsert([
    {
      user_id: userData?.id,
      course: courseId,
      language,
    },
  ])

  if (error) {
    console.error("Error upsertUserCurrentData:", error)
    return false
  }

  revalidateUserCurrentData()

  return true
})
