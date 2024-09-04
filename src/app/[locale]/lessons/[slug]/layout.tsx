import { ReactNode } from "react"

type RootLayoutProps = {
  children: ReactNode
  params: {
    slug: string[]
  }
}

export default async function Layout({ children, params }: RootLayoutProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  )
}
