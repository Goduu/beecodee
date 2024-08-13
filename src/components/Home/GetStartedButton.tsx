"use client"
import React from 'react'
import { Button } from '../Button'
import { redirect } from 'next/navigation'

export const GetStartedButton = () => {
    return (
        <Button color="primary" className="w-64" onClick={() => redirect("/getStarted")}>
            GET STARTED
        </Button>
    )
}
