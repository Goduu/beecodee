import { HoneyCombPage } from "@/components/Pages/HoneyCombPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Honeycomb Page",
  description: "This is the honeycomb page",
  keywords: ["honeycomb", "page", "beecodee"],
}

export default async function Home() {
  return <HoneyCombPage />
}
