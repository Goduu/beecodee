import React, { FC } from "react"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "./useTopicForm"
import { FormField, FormItem } from "../ui/form"
import { PathwayButton } from "../Activity/PathwayButton"
import { Badge } from "../ui/badge"

type PrerequisiteAreaProps = {
  form: UseFormReturn<FormValues>
  name: Extract<keyof FormValues, "prerequisites" | "prerequisiteTo">
}

export const PrerequisiteArea: FC<PrerequisiteAreaProps> = ({ form, name }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-center gap-2">
            {field.value?.map((topic, index) => (
              <div key={index} className="flex h-32 w-20 flex-col items-center gap-2">
                <PathwayButton
                  size="small"
                  type={"theory"}
                  className={
                    name === "prerequisiteTo" ? " border-indigo-600 bg-indigo-500" : "border-red-600 bg-red-500"
                  }
                  onClick={() => console.log("clicked")}
                />
                <Badge variant="outline" className="text-center">
                  {topic.name.en}
                </Badge>
              </div>
            ))}
          </div>
        </FormItem>
      )}
    />
  )
}
