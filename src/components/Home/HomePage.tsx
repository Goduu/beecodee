import { Carousel } from "@/components/Home/Carousel";
import { Button } from "@/components/Button";
import { Bee } from "@/components/Icons";
import { redirect } from "next/navigation";
import { userMetadata } from "@/lib/auth";
import { LoginInButton } from "./LoginInButton";
import { FindYourPath } from "./FindYourPath";
import { BeeSlogan } from "./BeeSlogan";
import { HomeFooter } from "./HomeFooter";

export const HomePage = async () => {
    const userData = await userMetadata()

    if (userData) {
        redirect('/path')
    }

    return (
        <>
            <div className="flex flex-col items-center gap-20">
                <Bee className="w-44 pt-20 hover:animate-pulse ease-in-out duration-300" />
                <div role="h1" className="flex text-3xl font-extrabold max-w-96 text-center leading-relaxed">
                    The free interactive way to learn to code and have fun!
                </div>
                <div className="flex flex-col gap-4 items-center">

                    <Button color="primary" className="w-64" >
                        GET STARTED
                    </Button>
                    <LoginInButton />
                </div>
                <Carousel />
                <div className="flex flex-col gap-44">

                    <FindYourPath />
                    <BeeSlogan />
                    <div className="flex flex-col items-center z-10">
                        <Button color="primary" className="w-64" >
                            GET STARTED
                        </Button>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}
