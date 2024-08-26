import { Carousel } from "@/components/Home/Carousel"
import { LoginInButton } from "../Home/LoginInButton"
import { FindYourPath } from "../Home/FindYourPath"
import { BeeSlogan } from "../Home/BeeSlogan"
import { HomeFooter } from "../Home/HomeFooter"
import { GetStartedButton } from "../Home/GetStartedButton"
import { Bee } from "../Svgs/Bee"
import { SiteNumbers } from "../Home/SiteNumbers"
import { BeeLocale } from "../Localization/localization"
import { FC } from "react"

type HomePageProps = {
  locale: BeeLocale
}

export const HomePage: FC<HomePageProps> = async ({ locale = "en" }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-20">
        <Bee className="w-44 pt-20 duration-300 ease-in-out hover:animate-pulse" />
        <div role="h1" className="flex max-w-96 text-center text-3xl font-extrabold leading-relaxed">
          {T[locale].title}
        </div>
        <div className="flex flex-col items-center gap-4">
          <GetStartedButton />
          <LoginInButton />
        </div>
        <Carousel />
        <div className="flex flex-col gap-44">
          <FindYourPath />
          <BeeSlogan />
          <SiteNumbers />
          <div className="z-10 flex flex-col items-center">
            <GetStartedButton />
          </div>
        </div>
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
  title: "La façon interactive et gratuite d'apprendre à coder et de s'amuser!",
}
const de: typeof en = {
  title: "Die kostenlose interaktive Möglichkeit, programmieren zu lernen und Spaß zu haben!",
}

const T = { en, pt, es, fr, de }
