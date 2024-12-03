"use client"

import { UseFormReturn } from "react-hook-form"

import { FormField, FormItem, FormLabel } from "@/components/ui/form"
import { ActivityFormValues, ActivityType } from "./useActivityForm"
import { FC } from "react"
import { optionIds } from "../OptionsCreator"

type AnswerSelectorProps = {
  form: UseFormReturn<ActivityFormValues>
}

export const AnswerSelector: FC<AnswerSelectorProps> = ({ form }) => {
  const activityType = form.watch(`type`)
  const options = form.watch(`${activityType}.options`)
  const answer = form.watch(`${activityType}.answer`)
  const isMultiple = activityType === "multipleChoice" || activityType === "pairMatching"

  return (
    <FormField
      control={form.control}
      name={`${activityType}.answer`}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>Answer</FormLabel>
          <ToggleGroup
            type={isMultiple ? "multiple" : "single"}
            variant="outline"
            onValueChange={field.onChange}
            className={"justify-start"}
          >
            {options.map((option, index) => {
              return (
                <ToggleGroupItem value={optionIds[index]} aria-label="Toggle bold">
                  <div
                    className={`flex w-7 justify-center rounded-full border text-lg font-black  text-white dark:text-slate-800 ${getBgColor(activityType, optionIds[index], answer)}`}
                  >
                    {optionIds[index]}
                  </div>
                </ToggleGroupItem>
              )
            })}
          </ToggleGroup>
        </FormItem>
      )}
    />
  )
}

const pairMatchingColors = ["bg-red-500", "bg-lime-500", "bg-indigo-500", "bg-amber-500", "bg-cyan-500"]

const getBgColor = (activityType: ActivityType, optionId: string, answer: string | string[]) => {
  if (activityType === "pairMatching" && Array.isArray(answer)) {
    const index = answer.indexOf(optionId)
    return index >= 0 ? `${pairMatchingColors[Math.floor(index / 2)]} ` : "dark:bg-white bg-slate-800"
  } else {
    return "dark:bg-white bg-slate-800"
  }
}

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupDemo() {}
