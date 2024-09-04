import { Carousel } from "@/components/Home/Carousel"
import { LoginInButton } from "../Home/LoginInButton"
import { FindYourPath } from "../Home/FindYourPath"
import { BeeSlogan } from "../Home/BeeSlogan"
import { HomeFooter } from "../Home/HomeFooter"
import { GetStartedButton } from "../GetStarted/GetStartedButton"
import { SiteNumbers } from "../Home/SiteNumbers"
import { BeeLocale } from "../Localization/localization"
import { FC } from "react"
import { FlyingBee } from "../Svgs/Animations/FlyingBee"
import { TypingText } from "../Svgs/Animations/TypingText"
import { AnimatedCircles } from "./AnimatedCircles"
import { fetchUserData } from "@/lib/supabase/api/fetchUserData"

type HomePageProps = {
  locale: BeeLocale
}

export const HomePage: FC<HomePageProps> = async ({ locale = "en" }) => {
  const userData = await fetchUserData()

  return (
    <>
      <div className="mt-20 flex flex-col items-center gap-14 sm:gap-20">
        <FlyingBee className="w-72" />
        <div role="h1" className="flex max-w-96 text-center text-3xl font-extrabold leading-relaxed">
          <TypingText text={T[locale].title} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <GetStartedButton userData={userData} />
          <LoginInButton />
        </div>
        <AnimatedCircles />
        <Carousel />
        <div className="flex flex-col gap-20 sm:gap-44">
          <FindYourPath locale={locale} />
          <BeeSlogan locale={locale} />
          <SiteNumbers locale={locale} />
        </div>
      </div>
      <div className="z-50 flex animate-bounce flex-col items-center ">
        <GetStartedButton userData={userData} />
      </div>
      <HomeFooter />
    </>
  )
}

const en = {
  title: "The free interactive way to learn to code and have fun!",
}
const pt: typeof en = {
  title: "A maneira interativa e gratuita de aprender a programar e se divertir!",
}
const es: typeof en = {
  title: "¡La forma interactiva y gratuita de aprender a programar y divertirse!",
}
const fr: typeof en = {
  title: "Apprendre à coder gratuitement tout en s'amusant !",
}
const de: typeof en = {
  title: "Der kostenlose interaktive Weg, programmieren zu lernen und dabei Spaß zu haben!",
}

const T = { en, pt, es, fr, de }
