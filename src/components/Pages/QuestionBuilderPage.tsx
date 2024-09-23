"use client"
import React, { useState } from "react"
import { Button } from "../Button"
import { TbPencilQuestion } from "../Svgs/Icons"
import { TopicEditor } from "../QuestionBuilder/TopicEditor"
import { TagCreateForm } from "../QuestionBuilder/tag/TagCreateForm"
import { ContentCreator } from "../QuestionBuilder/content/ContentCreator"
import { LessonCreator } from "../QuestionBuilder/lesson/LessonCreator"

export const QuestionBuilderPage = () => {
  const [objectType, setObjectType] = useState<"topic" | "tag" | "content" | "lesson">("topic")

  return (
    <div className="">
      <div className="flex gap-2 text-3xl font-bold">
        Question Builder <TbPencilQuestion className="w-8" />
      </div>
      <div className="w-full justify-self-start">
        <div className="flex flex-wrap items-start gap-2">
          Templates:
          <Button size="small" color="secondary" onClick={() => setObjectType("topic")}>
            Topic
          </Button>
          <Button size="small" color="secondary" onClick={() => setObjectType("tag")}>
            Tag
          </Button>
          <Button size="small" color="secondary" onClick={() => setObjectType("content")}>
            Content
          </Button>
          <Button size="small" color="secondary" onClick={() => setObjectType("lesson")}>
            Lesson
          </Button>
        </div>
      </div>
      <div className="">
        {objectType === "topic" && <TopicEditor />}
        {objectType === "tag" && <TagCreateForm />}
        {objectType === "content" && <ContentCreator />}
        {objectType === "lesson" && <LessonCreator />}
      </div>
    </div>
  )
}
