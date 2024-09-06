import { GetStartedPage } from "@/components/GetStarted/GetStartedPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Started",
  keywords: ["profile", "page", "beecodee", "first step", "coding"],
}

export default async function Page() {
  return <GetStartedPage />
}
