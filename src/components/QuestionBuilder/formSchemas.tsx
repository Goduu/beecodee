import { z } from "zod"

export const TranslatedTextSchema = z.object({
  en: z.string().min(2, {
    message: "Text must be at least 2 characters long",
  }),
  fr: z.string().optional().nullable(),
  pt: z.string().optional().nullable(),
  de: z.string().optional().nullable(),
  es: z.string().optional().nullable(),
})
