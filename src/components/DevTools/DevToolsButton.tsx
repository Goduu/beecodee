"use client"
import React from 'react'
import { FaTools } from '../Svgs/Icons'
import { open } from './DevToolsModal.store'

export const DevToolsButton = () => {

    return (
        <div className='fixed top-2 sm:bottom-2 sm:top-auto right-2 cursor-pointer opacity-20 z-50' onClick={open}>
            <FaTools className='w-8' />
        </div>
    )
}
