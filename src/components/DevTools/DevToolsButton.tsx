"use client"
import React from "react"
import { FaTools } from "../Svgs/Icons"
import { open } from "./DevToolsModal.store"

export const DevToolsButton = () => {
  return (
    <div className="fixed right-2 top-2 z-50 cursor-pointer opacity-20 sm:bottom-2 sm:top-auto" onClick={open}>
      <FaTools className="w-8" />
    </div>
  )
}
