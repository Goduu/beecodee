import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Node Builder",
}

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full flex-col p-4">{children}</div>
    </div>
  )
}
