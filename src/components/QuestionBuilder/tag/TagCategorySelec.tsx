import React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { TagCategory } from "@/ogm-resolver/ogm-types"
import { UseFormReturn } from "react-hook-form"
import { TagFormValues } from "./useTagForm"

type TagCategorySelectProps = {
  form: UseFormReturn<TagFormValues>
  label?: string
}

export const TagCategorySelect: React.FC<TagCategorySelectProps> = ({ form, label = "Category" }) => {
  return (
    <FormField
      control={form.control}
      name={"category"}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(TagCategory).map(([category, value]) => (
                  <SelectItem key={value} value={value}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
