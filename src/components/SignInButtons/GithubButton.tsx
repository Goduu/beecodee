import React, { FC } from 'react'
import { Button } from '../Button'
import { signInWithGithub } from '@/lib/auth'
import { FaGithub } from '../Icons'

export const GithubButton:FC = () => {
    return (
        <Button onClick={signInWithGithub} className="flex gap-2">
            <FaGithub className="w-5" />
            With GitHub
        </Button>
    )
}
