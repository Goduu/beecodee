import { z } from "zod"
import { TranslatedTextSchema } from "../formSchemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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
export type ActivityType = (typeof activityTypes)[number]

const LessonSchema = z.object({
  name: TranslatedTextSchema,
  description: TranslatedTextSchema,
  activityType: z.enum(activityTypes),
  singleChoiceActivity: SingleChoiceActivitySchema,
  multipleChoiceActivity: MultipleChoiceActivitySchema,
  pairMatchingActivity: PairMatchingActivitySchema,
  codeOutputActivity: CodeOutputActivitySchema,
})

export type LessonFormValues = z.infer<typeof LessonSchema>

export const useLessonForm = () => {
  const form = useForm<LessonFormValues>({
    resolver: zodResolver(LessonSchema),
    defaultValues: {
      name: {
        en: "",
        pt: "",
        fr: "",
        de: "",
        es: "",
      },
      description: {
        en: "",
        pt: "",
        fr: "",
        de: "",
        es: "",
      },
    },
  })

  return { form }
}
