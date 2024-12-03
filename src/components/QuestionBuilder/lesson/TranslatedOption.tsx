import React, { FC } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "../../ui/popover"
import { Badge } from "../../ui/badge"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { capitalize } from "lodash"
import { Textarea } from "@/components/ui/textarea"

export type TranslatedTextInputProps = {
  name: any
  type: "text" | "code"
  description: string
  label?: string
  form: UseFormReturn<any>
}

export const TranslatedOption: FC<TranslatedTextInputProps> = ({ name, type, description, label, form }) => {
  if (type === "text") {
    return (
      <FormField
        control={form.control}
        name={`${name}.text`}
        render={({ field }) => (
          <FormItem>
            <Popover>
              <PopoverTrigger asChild>
                <Badge variant="outline" className="min-w-96 cursor-pointer p-2">
                  {field.value?.en || "Click to edit"}
                </Badge>
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">{label || capitalize(name)}</h4>
                    <p className="text-muted-foreground">{description}</p>
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
          </FormItem>
        )}
      />
    )
  }

  return (
    <FormField
      control={form.control}
      name={`${name}.code`}
      render={({ field }) => (
        <FormItem className="w-full">
          <Textarea {...field} value={field.value || ""} placeholder="Enter code here" />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
