import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TranslatedTextSchema } from "../../formSchemas"

const OptionSchema = z.object({
  type: z.enum(["text", "code"]),
  code: z.string().nullable(),
  text: TranslatedTextSchema.nullable(),
})

const SingleChoiceActivitySchema = z.object({
  description: TranslatedTextSchema,
  options: z.array(OptionSchema),
  answer: z.string(),
})

const MultipleChoiceActivitySchema = z.object({
  description: TranslatedTextSchema,
  options: z.array(OptionSchema),
  answer: z.array(z.string()),
})

const PairMatchingActivitySchema = z.object({
  description: TranslatedTextSchema,
  options: z.array(OptionSchema),
  answer: z.array(z.string()),
})

const CodeOutputActivitySchema = z.object({
  description: TranslatedTextSchema,
  codeSnippet: z.string(),
  options: z.array(OptionSchema),
  answer: z.string(),
})

export const activityTypes = ["singleChoice", "multipleChoice", "pairMatching", "codeOutput"] as const

const ActivitySchema = z.object({
  type: z.enum(activityTypes),
  singleChoice: SingleChoiceActivitySchema,
  multipleChoice: MultipleChoiceActivitySchema,
  pairMatching: PairMatchingActivitySchema,
  codeOutput: CodeOutputActivitySchema,
})

export type ActivityType = (typeof activityTypes)[number]

export type ActivityFormValues = z.infer<typeof ActivitySchema>

export const useActivityForm = () => {
  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(ActivitySchema),
    defaultValues: {
      type: "singleChoice",
      singleChoice: activityDefault,
      multipleChoice: { ...activityDefault, answer: [] },
      pairMatching: { ...activityDefault, answer: [] },
      codeOutput: activityDefault,
    },
  })

  return { form }
}

const activityDefault = {
  description: {
    en: "",
    fr: "",
    de: "",
    es: "",
    pt: "",
  },
  options: [],
}
