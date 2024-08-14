import React, { FC } from 'react'
import { Button } from '../Button'
import { signInWithGithub } from '@/lib/auth'
import { FaGithub } from '../Svgs/Icons'

export const GithubButton:FC = () => {
    return (
        <Button onClick={signInWithGithub} className="flex gap-2 items-center">
            <FaGithub className="w-5" />
            Continue with GitHub
        </Button>
    )
}
