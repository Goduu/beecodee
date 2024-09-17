import React, { FC } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Badge } from "../ui/badge"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { TranslatedStringField } from "./useTopicForm"
import { capitalize } from "lodash"

export type TranslatedTextInputProps<T extends TranslatedStringField> = {
  name: T
  description: string
  label?: string
  form: UseFormReturn<any>
}

export const TranslatedTextInput: FC<TranslatedTextInputProps<TranslatedStringField>> = ({
  name,
  description,
  label,
  form,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label || capitalize(name)}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Badge variant="outline" className="cursor-pointer text-xl">
                {field.value?.en || "Click to edit"}
              </Badge>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">{label || capitalize(name)}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <div className="grid gap-2">
                  {(["en", "pt", "fr", "de", "es"] as const).map((lang) => (
                    <div key={lang} className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor={`${name}-${lang}`}>{lang.toUpperCase()}</Label>
                      <FormControl>
                        <Input
                          id={`${name}-${lang}`}
                          value={field.value?.[lang] || ""}
                          className="col-span-2 h-8"
                          onChange={(e) => field.onChange({ ...field.value, [lang]: e.target.value })}
                        />
                      </FormControl>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
