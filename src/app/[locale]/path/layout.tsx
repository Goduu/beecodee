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
      <div className="flex min-h-screen flex-col place-items-center px-4 py-2 pl-0 leading-relaxed md:ml-40">
        {children}
        <MountChecker />
        <Analytics />
      </div>
    </>
  )
}
