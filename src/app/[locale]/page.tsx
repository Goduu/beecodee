import { BeeLocale } from "@/components/Localization/localization"
import { HomePage } from "@/components/Pages/HomePage"
import { SwapyTest } from "@/components/Swapy/SwapyTest"

type HomeProps = {
  params: {
    locale: BeeLocale
  }
}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <SwapyTest />
      <HomePage locale={params.locale} />
    </main>
  )
}
