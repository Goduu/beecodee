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
              <div>
                <h2 className="">Content</h2>
                <ScrollArea className="w-[50rem] whitespace-nowrap rounded-md border p-4">
                  <div className="flex w-max space-x-4 p-4">
                    <div className="flex cursor-pointer items-center justify-center transition-all duration-200 hover:scale-105">
                      <LessonSelector />
                    </div>
                    {new Array(5).fill(0).map((_, i) => (
                      <div className="shrink-0">
                        <div className="flex gap-4 overflow-hidden">
                          <div className="w-96">
                            <Card>
                              <CardHeader>
                                <CardTitle>Card 2Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p>Card Content</p>
                              </CardContent>
                              <CardFooter>
                                <p>Card Footer</p>
                              </CardFooter>
                            </Card>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              <div>
                <h2 className="">Lessons</h2>
                <ScrollArea className="w-[50rem] whitespace-nowrap rounded-md border p-4">
                  <div className="flex w-max space-x-4 p-4">
                    <div className="flex cursor-pointer items-center justify-center transition-all duration-200 hover:scale-105">
                      <LessonSelector />
                    </div>
                    {new Array(5).fill(0).map((_, i) => (
                      <div className="shrink-0">
                        <div className="flex gap-4 overflow-hidden">
                          <div className="w-96">
                            <Card>
                              <CardHeader>
                                <CardTitle>Card 2Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p>Card Content</p>
                              </CardContent>
                              <CardFooter>
                                <p>Card Footer</p>
                              </CardFooter>
                            </Card>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
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
