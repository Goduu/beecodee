import { de, faker } from "@faker-js/faker"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TranslatedTextSchema } from "./formSchemas"
import { Topic } from "@/ogm-resolver/ogm-types"

const ContentSchema = z.object({
    name: TranslatedTextSchema,
    description: TranslatedTextSchema.nullable(),
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

const mapTopicToPrerequisite = (topic?: Topic): FormValues["prerequisites"][number] | FormValues["prerequisiteTo"][number] | undefined => {
    if (!topic) {
        return
    }

    return {
        id: topic.id,
        name: topic.name,
        description: topic.description || newTopic.description,
        difficulty: topic.difficulty,
    }
}

const mapTopicDifficulty = (difficulty: Topic["difficulty"]): FormValues["difficulty"] => {
    switch (difficulty) {
        case "BEGINNER":
            return "BEGINNER"
        case "INTERMEDIATE":
            return "INTERMEDIATE"
        case "ADVANCED":
            return "ADVANCED"
        default:
            return "BEGINNER"
    }
}

export const useTopicForm = (topic?: Topic) => {

    const form = useForm<FormValues>({
        resolver: zodResolver(TopicSchema),
        defaultValues: topic ? {
            name: topic.name,
            description: topic.description || newTopic.description,
            difficulty: mapTopicDifficulty(topic.difficulty),
            content: undefined,
            prerequisites: topic.prerequisites.map(mapTopicToPrerequisite),
            prerequisiteTo: topic.prerequisiteTo.map(mapTopicToPrerequisite),
            tags: topic.tags,
        } : {
            ...newTopic
        }
    })

    return { form }
}


const newTopic = {
    name: {
        en: "",
        fr: "",
        pt: "",
        de: "",
        es: "",
    },
    description: {
        en: "",
        fr: "",
        pt: "",
        de: "",
        es: "",
    },
    difficulty: "BEGINNER" as FormValues["difficulty"],
}