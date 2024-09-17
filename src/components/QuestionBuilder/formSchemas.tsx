import { z } from "zod"

export const TranslatedTextSchema = z.object({
  en: z.string().min(2, {
    message: "Text must be at least 2 characters long",
  }),
  fr: z.string(),
  pt: z.string(),
  de: z.string(),
  es: z.string(),
})
