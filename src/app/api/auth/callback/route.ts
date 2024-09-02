import { isBeeLocale } from "@/components/Localization/localization"
import { insertNewUserCurrentData } from "@/lib/supabase/api/insertNewUserCurrentData"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"
import { createClient } from "src/lib/supabase/server"
// The client you created from the Server-Side Auth instructions

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/"
  const language = searchParams.get("language")
  const course = searchParams.get("course")

  if (code) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    const { data: userCurrentData, error: userCurrentError } = await supabase
      .from("user_current_data")
      .select("course, language, theme")
      .eq("user_id", data.session?.user.id)
      .single()

    if (userCurrentError) console.error("Error user current data", userCurrentError)

    if (!userCurrentData) {
      if (course && isBeeLocale(language) && data.session?.user.id) {
        await insertNewUserCurrentData({ userId: data.session?.user.id, courseId: course, language })
      }

      const nextPath = `${next}${language}/${course}/path`
      redirect(nextPath)
    }

    if (!error) {
      const nextPath = `${next}${language || userCurrentData?.language}/${course || userCurrentData?.course}/path`
      const forwardedHost = request.headers.get("x-forwarded-host") // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development"
      if (isLocalEnv) {
        redirect(nextPath)
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        // return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        redirect(nextPath)
        // return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        redirect(nextPath)
        // return NextResponse.redirect(`${origin}${next}`)
      }
    } else {
      console.error("Error Exchanging code with database", error)
      // return the user to an error page with instructions
      return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    }
  }

  // // return the user to an error page with instructions
  // return NextResponse.redirect(`${origin}/auth/auth-code-error`)
  // return the user to an error page with instructions
  return NextResponse.redirect(`${next}${language}/${course}/path`)
}
