import { faker } from "@faker-js/faker"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TranslatedTextSchema } from "./formSchemas"

const ContentSchema = z.object({
  name: TranslatedTextSchema,
  description: TranslatedTextSchema,
  content: z.string(),
})

const PrerequisiteTopics = z.object({
  id: z.string(),
  name: TranslatedTextSchema,
  description: TranslatedTextSchema,
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
})

const TagSchema = z.object({
  id: z.string(),
  name: TranslatedTextSchema,
})

// Define the FormSchema
const TopicSchema = z.object({
  name: TranslatedTextSchema,
  description: TranslatedTextSchema,
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  content: ContentSchema,
  prerequisites: z.array(PrerequisiteTopics),
  prerequisiteTo: z.array(PrerequisiteTopics),
  tags: z.array(TagSchema),
})

const LessonSchema = z.object({
  name: TranslatedTextSchema,
  description: TranslatedTextSchema,
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
})

// Infer the type from the Zod schema
export type FormValues = z.infer<typeof TopicSchema>

// Define a type for the translated string fields
export type TranslatedStringField = Extract<keyof FormValues, "name" | "description">

export const useTopicForm = () => {
  const [topic, setTopic] = useState<FormValues>()

  const form = useForm<FormValues>({
    resolver: zodResolver(TopicSchema),
    defaultValues: {
      name: {
        en: faker.lorem.words(2),
        fr: faker.lorem.words(2),
        pt: faker.lorem.words(2),
        de: faker.lorem.words(2),
        es: faker.lorem.words(2),
      },
      description: {
        en: faker.lorem.words(5),
        fr: faker.lorem.words(5),
        pt: faker.lorem.words(5),
        de: faker.lorem.words(5),
        es: faker.lorem.words(5),
      },
      difficulty: "BEGINNER",
      prerequisites: [
        {
          id: faker.string.uuid(),
          name: {
            en: faker.lorem.words(2),
            fr: faker.lorem.words(2),
            pt: faker.lorem.words(2),
            de: faker.lorem.words(2),
            es: faker.lorem.words(2),
          },
          description: {
            en: faker.lorem.words(5),
            fr: faker.lorem.words(5),
            pt: faker.lorem.words(5),
            de: faker.lorem.words(5),
            es: faker.lorem.words(5),
          },
          difficulty: "BEGINNER",
        },
        {
          id: faker.string.uuid(),
          name: {
            en: faker.lorem.words(2),
            fr: faker.lorem.words(2),
            pt: faker.lorem.words(2),
            de: faker.lorem.words(2),
            es: faker.lorem.words(2),
          },
          description: {
            en: faker.lorem.words(5),
            fr: faker.lorem.words(5),
            pt: faker.lorem.words(5),
            de: faker.lorem.words(5),
            es: faker.lorem.words(5),
          },
          difficulty: "BEGINNER",
        },
        {
          id: faker.string.uuid(),
          name: {
            en: faker.lorem.words(2),
            fr: faker.lorem.words(2),
            pt: faker.lorem.words(2),
            de: faker.lorem.words(2),
            es: faker.lorem.words(2),
          },
          description: {
            en: faker.lorem.words(5),
            fr: faker.lorem.words(5),
            pt: faker.lorem.words(5),
            de: faker.lorem.words(5),
            es: faker.lorem.words(5),
          },
          difficulty: "BEGINNER",
        },
      ],
      prerequisiteTo: [
        {
          id: faker.string.uuid(),
          name: {
            en: faker.lorem.words(2),
            fr: faker.lorem.words(2),
            pt: faker.lorem.words(2),
            de: faker.lorem.words(2),
            es: faker.lorem.words(2),
          },
          description: {
            en: faker.lorem.words(5),
            fr: faker.lorem.words(5),
            pt: faker.lorem.words(5),
            de: faker.lorem.words(5),
            es: faker.lorem.words(5),
          },
          difficulty: "BEGINNER",
        },
        {
          id: faker.string.uuid(),
          name: {
            en: faker.lorem.words(2),
            fr: faker.lorem.words(2),
            pt: faker.lorem.words(2),
            de: faker.lorem.words(2),
            es: faker.lorem.words(2),
          },
          description: {
            en: faker.lorem.words(5),
            fr: faker.lorem.words(5),
            pt: faker.lorem.words(5),
            de: faker.lorem.words(5),
            es: faker.lorem.words(5),
          },
          difficulty: "BEGINNER",
        },
        {
          id: faker.string.uuid(),
          name: {
            en: faker.lorem.words(2),
            fr: faker.lorem.words(2),
            pt: faker.lorem.words(2),
            de: faker.lorem.words(2),
            es: faker.lorem.words(2),
          },
          description: {
            en: faker.lorem.words(5),
            fr: faker.lorem.words(5),
            pt: faker.lorem.words(5),
            de: faker.lorem.words(5),
            es: faker.lorem.words(5),
          },
          difficulty: "BEGINNER",
        },
      ],
      tags: [
        {
          id: "1",
          name: {
            en: "tag1",
            pt: "tag1",
            fr: "tag1",
            de: "tag1",
            es: "tag1",
          },
        },
        {
          id: "2",
          name: {
            en: "tag2",
            pt: "tag2",
            fr: "tag2",
            de: "tag2",
            es: "tag2",
          },
        },
        {
          id: "3",
          name: {
            en: "tag3",
            pt: "tag3",
            fr: "tag3",
            de: "tag3",
            es: "tag3",
          },
        },
      ],
    },
  })

  return { form, topic, setTopic }
}
