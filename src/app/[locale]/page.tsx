import { BeeLocale } from "@/components/Localization/localization"
import { HomePage } from "@/components/Pages/HomePage"
// import { DndKit } from "@/components/Swapy/DnDKit"
// import { SwapyTest } from "@/components/Swapy/SwapyTest"

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

//   <SwapyTest />
//   <div className="py-32 pl-10">{/* <DndKit /> */}</div>
