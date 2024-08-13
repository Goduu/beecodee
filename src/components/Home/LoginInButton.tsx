"use client"
import React, { FC } from 'react'
import { Button } from '../Button'
import { open } from '../LoginModal.store'

export const LoginInButton:FC = () => {
    return (
        <Button color="secondary" onClick={open} className="w-64">
            LOGIN INTO MY ACCOUNT
        </Button>
    )
}
