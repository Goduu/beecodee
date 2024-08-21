import { ReactNode } from "react"
import { Header } from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import { MountChecker } from "@/lib/MountChecker"
import { userMetadata } from "@/lib/auth"
import { redirect } from "next/navigation"
import { UnitHoneyCombModal } from "@/components/HoneyComb/UnitHoneyCombModal"


type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const userData = await userMetadata()

  if (!userData) {
    redirect('/')
  }

  return (
    <>
      <Header />  
      <div className="flex flex-col px-4 py-4 place-items-center min-h-screen leading-relaxed pl-0 md:ml-40">
        {children}
      </div>
    </>
  )
}
