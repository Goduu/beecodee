import React, { FC } from "react"
import { FormField, FormItem } from "../../ui/form"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../useTopicForm"
import { Badge } from "../../ui/badge"
import { TagSelector } from "./TagsSelector"

type TagsAreaProps = {
  form: UseFormReturn<FormValues>
  name: Extract<keyof FormValues, "tags">
}

export const TagsArea: FC<TagsAreaProps> = ({ form, name }) => {
  const handleAddTag = (prev: FormValues["tags"], newTag: FormValues["tags"][number]) => {
    const hasPrevNewTag = prev?.findIndex((tag) => tag.id === newTag.id) !== -1

    if (hasPrevNewTag) {
      return prev
    }

    return [...prev, newTag]
  }

  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {field.value?.map((topic, index) => (
              <div key={index} className="flex w-20 flex-col items-center gap-2">
                <Badge variant="secondary" className="text-center">
                  {topic.name.en}
                </Badge>
              </div>
            ))}
            <div className="flex w-20 cursor-pointer flex-col items-center gap-2 hover:scale-105">
              <TagSelector
                onAdd={(newTag: FormValues["tags"][number]) =>
                  field.onChange((prev: FormValues["tags"]) => handleAddTag(prev || [], newTag))
                }
              />
            </div>
          </div>
        </FormItem>
      )}
    />
  )
}
