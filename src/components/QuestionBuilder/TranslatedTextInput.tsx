import React from "react"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Badge } from "../ui/badge"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { FieldPath, FieldValues, Path, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { TranslatedText } from "@contentlayer/generated"

type TranslatedTextInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  description: string
  label?: string
  form: UseFormReturn<TFieldValues>
}

const LANGUAGES = ["en", "pt", "fr", "de", "es"] as const

export const TranslatedTextInput = <TFieldValues extends FieldValues>({
  name,
  description,
  label,
  form,
}: TranslatedTextInputProps<TFieldValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label || name.split(".").pop()}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Badge variant="outline" className="cursor-pointer text-xl">
                {(field.value as TranslatedText)?.en || "Click to edit"}
              </Badge>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">{label || name.split(".").pop()}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <div className="grid gap-2">
                  {LANGUAGES.map((lang) => (
                    <div key={lang} className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor={`${name}-${lang}`}>{lang.toUpperCase()}</Label>
                      <FormControl>
                        <Input
                          id={`${name}-${lang}`}
                          value={(field.value as TranslatedText)?.[lang] || ""}
                          className="col-span-2 h-8"
                          onChange={(e) => {
                            const updatedValue = {
                              ...(field.value as TranslatedText),
                              [lang]: e.target.value,
                            }
                            field.onChange(updatedValue)
                          }}
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
