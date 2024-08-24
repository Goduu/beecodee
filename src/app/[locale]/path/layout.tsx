import { ReactNode } from "react"
import { Header } from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import { MountChecker } from "@/lib/MountChecker"
import { UnitHoneyCombModal } from "@/components/HoneyComb/UnitHoneyCombModal"


type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <>
      <Header />
      <UnitHoneyCombModal />
      <div className="flex flex-col px-4 py-2 place-items-center min-h-screen leading-relaxed pl-0 md:ml-40">
        {children}
        <MountChecker />
        <Analytics />
      </div>
    </>
  )
}
