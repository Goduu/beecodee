import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { FC } from "react"
import { LOCALES } from "@/components/Localization/localization"
import { Form } from "@/components/ui/form"
import { LessonFormValues, useLessonForm } from "./useLessonForm"
import { UseFormReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation } from "@apollo/client"
import { toast } from "@/hooks/use-toast"
import { CREATE_LESSON, GET_LESSONS } from "./lessonGQL"
import { Activity } from "@/ogm-resolver/ogm-types"
import { OptionsCreator } from "./OptionsCreator"

type ActivityType = Activity["__typename"]

const ACTIVITY_TYPES: NonNullable<ActivityType>[] = [
  "CodeOutputActivity",
  "FillInTheBlankActivity",
  "MultipleChoiceActivity",
  "PairMatchingActivity",
  "SingleChoiceActivity",
]

export const LessonCreator = () => {
  const { form } = useLessonForm()

  const [createLesson] = useMutation(CREATE_LESSON, {
    refetchQueries: [{ query: GET_LESSONS }],
  })

  const handleCreateLesson = async (data: LessonFormValues) => {
    await createLesson({
      variables: {
        input: [
          {
            name: {
              create: {
                node: {
                  en: data.name.en,
                  pt: data.name.pt,
                  fr: data.name.fr,
                  de: data.name.de,
                  es: data.name.es,
                },
              },
            },
            description: {
              create: {
                node: {
                  en: data.description.en,
                  pt: data.description.pt,
                  fr: data.description.fr,
                  de: data.description.de,
                  es: data.description.es,
                },
              },
            },
          },
        ],
      },
    })
  }
  const onSubmit = (data: LessonFormValues) => {
    // form.reset()
    handleCreateLesson(data)
    toast({
      title: "Lesson Created",
      description: data.name.en,
    })
  }

  return (
    <Form {...form}>
      <h1>Lesson Creator / Editor</h1>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="SingleChoiceActivity" className="w-full">
          <div className="flex gap-4">
            <TabsList>
              {ACTIVITY_TYPES.map((activityType) => (
                <TabsTrigger key={activityType} value={activityType}>
                  {activityType}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        <Tabs defaultValue="en" className="w-full">
          <div className="flex gap-4">
            <TabsList>
              {LOCALES.map((lang) => (
                <TabsTrigger key={lang} value={lang}>
                  {lang.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button type="submit">Submit</Button>
          </div>
        </Tabs>
      </form>
    </Form>
  )
}

type LocalizedLessonProps = {
  form: UseFormReturn<LessonFormValues>
}

const LocalizedLesson: FC<LocalizedLessonProps> = ({ form }) => {
  return (
    <div>
      {/* <OptionsCreator form={form} /> */}
    </div>
  )
}
