import React, { FC } from "react"
import { Button } from "../Button"
import { signInWithGithub } from "@/lib/auth"
import { FaGithub } from "../Svgs/Icons"

export const GithubButton: FC = () => {
  return (
    <Button onClick={signInWithGithub} className="flex items-center gap-2">
      <FaGithub className="w-5" />
      Continue with GitHub
    </Button>
  )
}
