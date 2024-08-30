import { Carousel } from "@/components/Home/Carousel"
import { LoginInButton } from "../Home/LoginInButton"
import { FindYourPath } from "../Home/FindYourPath"
import { BeeSlogan } from "../Home/BeeSlogan"
import { HomeFooter } from "../Home/HomeFooter"
import { GetStartedButton } from "../Home/GetStartedButton"
import { SiteNumbers } from "../Home/SiteNumbers"
import { BeeLocale } from "../Localization/localization"
import { FC } from "react"
import { AnimatedCircle } from "./AnimatedCircle"
import { IoMdFlower } from "../Svgs/Icons"
import { FlyingBee } from "./FlyingBee"

type HomePageProps = {
  locale: BeeLocale
}

export const HomePage: FC<HomePageProps> = async ({ locale = "en" }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-20">
        <FlyingBee className="w-72 pt-20" />
        <div role="h1" className="flex max-w-96 text-center text-3xl font-extrabold leading-relaxed">
          {T[locale].title}
        </div>

        <div className="flex flex-col items-center gap-4">
          <GetStartedButton />
          <LoginInButton />
        </div>
        <div>
          <div className="absolute -left-[2%] top-[13%] -z-10 sm:left-[10%]">
            <AnimatedCircle className="origin-bottom-right" delay={0.8}>
              <div className="size-20 -rotate-12 rounded-full bg-gradient-to-br from-primary-500/70  to-transparent p-2 text-white sm:size-24  lg:size-32 dark:text-slate-900">
                <IoMdFlower className="w-32" />
              </div>
            </AnimatedCircle>
          </div>
          <div className="absolute right-[10%] top-[13%] -z-10 max-md:hidden">
            <AnimatedCircle className="origin-bottom-left" move={60} delay={1}>
              <div className="size-24 rotate-12 rounded-full bg-gradient-to-bl from-quaternary-500/70  to-transparent p-2 text-white lg:size-32  dark:text-slate-900">
                <IoMdFlower className="w-32" />
              </div>
            </AnimatedCircle>
          </div>
          <div className="absolute bottom-[10%] left-[10%] -z-10 max-md:hidden">
            <AnimatedCircle className="origin-top-right" move={60} delay={1.2}>
              <div className="size-24 -rotate-6 rounded-full bg-gradient-to-r from-tertiary-500/30  to-transparent p-2 text-white lg:size-32 dark:text-slate-900">
                <IoMdFlower className="w-32" />
              </div>
            </AnimatedCircle>
          </div>
          <div className="absolute -right-[2%] top-1/3 -z-10 sm:right-[10%] md:top-2/3">
            <AnimatedCircle className="origin-top-left" delay={1.4}>
              <div className="size-20 rotate-12 rounded-full bg-gradient-to-l from-secondary-500/30  to-transparent p-2 text-white sm:size-24  lg:size-32 dark:text-slate-900">
                <IoMdFlower className="w-24 sm:w-32" />
              </div>
            </AnimatedCircle>
          </div>
        </div>

        <Carousel />
        <div className="-z-10 flex flex-col gap-44 ">
          <FindYourPath locale={locale} />
          <BeeSlogan locale={locale} />
          <SiteNumbers locale={locale} />
        </div>
      </div>
      <div className="z-50 flex animate-bounce flex-col items-center ">
        <GetStartedButton />
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
