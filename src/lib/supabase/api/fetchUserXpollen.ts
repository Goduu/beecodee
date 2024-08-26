"use server"
import { revalidateTag } from "next/cache"
import { createClient } from "src/lib/supabase/server"

export const fetchUserXpollen = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.rpc("get_user_xpollen_sum")

  if (error) {
    console.error("Error fetching xpollen", error)
    return
  }

  return data
}

export const revalidateUserXpollen = async () => {
  revalidateTag("user-xpollen-tag")
}
