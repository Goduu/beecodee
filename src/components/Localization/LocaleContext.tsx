"use client"
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react"
import { BeeLocale } from "./localization"

type LocaleContextProps = {
  locale: BeeLocale
}

type LocaleContextWrapperProps = {
  children: ReactNode
  locale: BeeLocale
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: "en",
})

export const LocaleContextWrapper: FC<LocaleContextWrapperProps> = ({ children, locale }) => {
  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>
}

export function useLocaleContext() {
  return useContext(LocaleContext)
}
