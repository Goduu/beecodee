"use server"
import { createClient } from "../supabase/server"
import { redirect } from "next/navigation"
import { FirsLoginData } from "@/components/LoginModal.store"
import { routes } from "../routes"

export async function signInWithGithub() {
  const supabase = createClient()
  const URL = process.env.NEXT_PUBLIC_URL
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${URL}/api/auth/callback`,
    },
  })

  if (error) {
    console.error(data, error)
  } else {
    if (data.url) {
      redirect(data.url)
    }
  }
}

export async function firstLogInWithGithub(firsLoginData: FirsLoginData) {
  const supabase = createClient()
  const URL = process.env.NEXT_PUBLIC_URL
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${URL}/api/auth/callback?language=${firsLoginData.language}&course=${firsLoginData.course}`,
    },
  })

  if (error) {
    console.error(data, error)
  } else {
    if (data.url) {
      redirect(data.url)
    }
  }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error("Error logging out:", error)
  }
  redirect(routes.home("en"))
}
