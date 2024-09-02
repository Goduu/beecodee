export type BeeLocale = "en" | "pt" | "fr" | "de" | "es"

export const LOCALES: BeeLocale[] = ["en", "pt", "fr", "de", "es"]

export const isBeeLocale = (value?: string | null): value is BeeLocale => {
  if (!value) return false
  return LOCALES.includes(value as BeeLocale)
}
