import { ReactNode } from "react"
import { Header } from "@/components/Header"


type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <>
      <Header />  
      <div className="flex flex-col px-4 py-4 place-items-center min-h-screen leading-relaxed pl-0 md:ml-40">
        {children}
      </div>
    </>
  )
}
