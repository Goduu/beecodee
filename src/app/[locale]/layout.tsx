import "./globals.css"
import { Varela_Round } from "next/font/google"
import { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { MountChecker } from "@/lib/MountChecker"
import { HomeHeader } from "@/components/Home/HomeHeader"
import { LoginModal } from "@/components/LoginModal"
import { DevToolsButton } from "@/components/DevTools/DevToolsButton"
import { DevToolsModal } from "@/components/DevTools/DevToolsModal"
import { Sidebar } from "@/components/Sidebar"
import { BeeLocale } from "@/components/Localization/localization"
import { LocaleContextWrapper } from "@/components/Localization/LocaleContext"
import { upsertUserCurrentData } from "@/lib/supabase/api/upsertUserCurrentData"
import { fetchCachedUserData } from "@/lib/supabase/api/fetchUserData"
import { ThemeProvider } from "@/components/ThemeProvider"
import { TransitionProvider } from "@/components/Loading.store"

const varela = Varela_Round({ subsets: ["latin"], weight: "400" })

type RootLayoutProps = {
  children: ReactNode
  params: {
    locale: BeeLocale
    course: string
  }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale, course } = params
  const userData = await fetchCachedUserData()

  if (locale !== userData?.currentLanguage || course !== userData?.currentCourse) {
    await upsertUserCurrentData({ language: locale, courseId: course })
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white text-gray-500 antialiased dark:bg-gray-900 dark:text-slate-50 ${varela.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LocaleContextWrapper locale={params.locale}>
            <TransitionProvider>
              <HomeHeader />
              <Sidebar userData={userData} />
              <LoginModal />
              {children}
              <MountChecker />
              <DevToolsModal />
              <DevToolsButton />
            </TransitionProvider>
          </LocaleContextWrapper>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
