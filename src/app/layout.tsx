import "./globals.css"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"
import { MountChecker } from "@/lib/MountChecker"
import { HomeHeader } from "@/components/Home/HomeHeader"
import { LoginModal } from "@/components/LoginModal"

const inter = Inter({ subsets: ["latin"] })

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body
        className={`antialiased bg-white dark:bg-cyan-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <HomeHeader />
        <div className="flex flex-col py-10 px-4 place-items-center min-h-screen leading-relaxed ">
          <main>
            <div className="absolute z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]" />
            <LoginModal />
            {children}
            <MountChecker />
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  )
}
