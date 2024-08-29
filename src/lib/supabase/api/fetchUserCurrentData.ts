"use server"
import { userMetadata } from "@/lib/auth"
import { revalidateTag } from "next/cache"
import { createClient } from "src/lib/supabase/server"

export const fetchUserCurrentData = async () => {
  const supabase = createClient()
  const userData = await userMetadata()

  if (!userData) return

  const { data, error } = await supabase
    .from("user_current_data")
    .select("course, language, theme")
    .eq("user_id", userData.id)

  if (error) {
    console.error("Error fetching xpollen", error)
    return
  }

  return data
}

export const revalidateUserXpollen = async () => {
  revalidateTag("user-xpollen-tag")
}
