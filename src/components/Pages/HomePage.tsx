import { Carousel } from "@/components/Home/Carousel";
import { LoginInButton } from "../Home/LoginInButton";
import { FindYourPath } from "../Home/FindYourPath";
import { BeeSlogan } from "../Home/BeeSlogan";
import { HomeFooter } from "../Home/HomeFooter";
import { GetStartedButton } from "../Home/GetStartedButton";
import { Bee } from "../Svgs/Bee";
import { SiteNumbers } from "../Home/SiteNumbers";
import { BeeLocale } from "../Localization/localization";
import { FC } from "react";

type HomePageProps = {
    locale: BeeLocale
}

export const HomePage: FC<HomePageProps> = async ({ locale = "en" }) => {

    return (
        <>
            <div className="flex flex-col items-center gap-20">
                <Bee className="w-44 pt-20 hover:animate-pulse ease-in-out duration-300" />
                <div role="h1" className="flex text-3xl font-extrabold max-w-96 text-center leading-relaxed">
                    {T[locale].title}
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <GetStartedButton />
                    <LoginInButton />
                </div>
                <Carousel />
                <div className="flex flex-col gap-44">

                    <FindYourPath />
                    <BeeSlogan />
                    <SiteNumbers />
                    <div className="flex flex-col items-center z-10">
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