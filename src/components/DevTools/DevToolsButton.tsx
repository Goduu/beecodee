"use client"
import React from 'react'
import { FaTools } from '../Icons'
import { open } from './DevToolsModal.store'

export const DevToolsButton = () => {

    return (
        <div className='fixed bottom-2 right-2 cursor-pointer opacity-20' onClick={open}>
            <FaTools className='w-8' />
        </div>
    )
}
