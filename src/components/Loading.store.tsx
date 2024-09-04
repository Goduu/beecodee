"use client"
import { createContext, useContext, useTransition, ReactNode } from "react"
import { LoadingBee } from "./LoadingBee"

interface TransitionContextProps {
  isPending: boolean
  startTransition: (callback: () => void) => void
}

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined)

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <TransitionContext.Provider value={{ isPending, startTransition }}>
      <LoadingBee />
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransitionContext = () => {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error("useTransitionContext must be used within a TransitionProvider")
  }
  return context
}
