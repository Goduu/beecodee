import React, { FC } from "react"
import { CircularProgress } from "../Activity/CircularProgress"
import { PathwayButton } from "../Activity/PathwayButton"
import { TranslatedTextInput } from "./TranslatedTextInput"
import { useTopicForm } from "./useTopicForm"
import { Form } from "../ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { LessonSelector } from "./LessonSelector"
import { PrerequisiteArea } from "./PrerequisiteArea"
import { TagsArea } from "./tag/TagsArea"
import { Topic } from "@/ogm-resolver/ogm-types"
import { TopicContentArea } from "./content/TopicContentArea"
import { TopicLessonArea } from "./lesson/TopicLessonArea"

type TopicEditorProps = {
  topic?: Topic
}
export const TopicEditor: FC<TopicEditorProps> = ({ topic }) => {
  const { form } = useTopicForm(topic)

  return (
    <div className="flex max-w-max flex-col items-start justify-start gap-4">
      <h1>TopicEditPage</h1>
      <div className="flex items-center gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => console.log("paha", form))} className="flex w-screen space-y-6">
            <div className="flex w-1/4 flex-col items-center gap-4 px-4">
              <CircularProgress size="medium" percent={50}>
                <PathwayButton
                  size="medium"
                  type={"theory"}
                  className="border-lime-600 bg-lime-500"
                  onClick={() => console.log("clicked")}
                />
              </CircularProgress>
              <TranslatedTextInput name="name" description="This is the topic name" form={form} />
              <TranslatedTextInput name="description" description="This is the topic description" form={form} />
              <TagsArea form={form} name="tags" />
              <PrerequisiteArea form={form} name="prerequisites" />
              <PrerequisiteArea form={form} name="prerequisiteTo" />
            </div>
            <div className="flex flex-col gap-4">
              <TopicContentArea form={form} />
              <TopicLessonArea form={form} />
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

type Type1 = {
  name: string
  xongas: number
}
type Type2 = {
  paha: string
  xongas: number
}

type Type3 = Type1 | Type2

const a: Type3 = {
  name: "paha",
  xongas: 1,
  paha: "paha",
}
