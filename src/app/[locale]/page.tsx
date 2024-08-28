import { BeeLocale } from "@/components/Localization/localization"
import { HomePage } from "@/components/Pages/HomePage"

type HomeProps = {
  params: {
    locale: BeeLocale
  }
}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <HomePage locale={params.locale} />
    </main>
  )
}
