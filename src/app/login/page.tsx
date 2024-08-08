import { Button } from "@/components/Button"
import { Bee2, FaGithub } from "@/components/Icons"
import { signInWithGithub } from "@/lib/auth"

export default function Home() {

  return (
    <div className="text-center content-center h-96">
      <div className="flex flex-col gap-10 items-center">
        <Bee2 className="w-32 hover:animate-pulse transition delay-1000" />
        <div className="text-xl">
          Sign in to save your progress.
        </div>
        <div className="flex gap-10 items-center">
          <Button onClick={signInWithGithub} className="flex gap-2">
            <FaGithub className="w-5" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
