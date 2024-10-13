import React from 'react'
import { UseFormReturn, useFieldArray, useWatch } from 'react-hook-form'
import { capitalize } from 'lodash'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { FormField, FormItem } from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
import { TranslatedOption } from './TranslatedOption'
import { TranslatedText } from '@contentlayer/generated'
import { ActivityFormValues } from './activity/useActivityForm'
import { FaRegTrashAlt } from '@/components/Svgs/Icons'

const types = ["text", "code"] as const
type OptionType = typeof types[number]

interface Option {
  type: OptionType
  code: string | null
  text: TranslatedText | null
}

interface ActivityOptions {
  options: Option[]
}

type ActivityType = "singleChoice" | "multipleChoice" | "pairMatching" | "codeOutput"

interface FormValues {
  [key: string]: ActivityOptions
}

export const optionIds = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

type OptionsCreatorProps = {
  activityType: ActivityType
  form: UseFormReturn<ActivityFormValues>
}

export const OptionsCreator: React.FC<OptionsCreatorProps> = ({ activityType, form }) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `${activityType}.options` as const,
  })

  const addOption = () => {
    if (fields.length < 10) {
      append({ type: 'text', code: null, text: null })
    }
  }

  return (
    <div className="space-y-2 w-fit">
      <Button onClick={addOption}>Add Option</Button>
      {fields.map((field, index) => (
        <OptionField
          optionId={optionIds[index]}
          key={field.id}
          form={form}
          activityType={activityType}
          index={index}
          remove={() => remove(index)}
        />
      ))}
    </div>
  )
}

interface OptionFieldProps {
  optionId: string
  form: UseFormReturn<ActivityFormValues>
  activityType: ActivityType
  index: number
  remove: () => void
}


const OptionField: React.FC<OptionFieldProps> = ({ optionId, form, activityType, index, remove }) => {
  const optionType = useWatch({
    control: form.control,
    name: `${activityType}.options.${index}.type` as const,
  })

  return (
    <Card>
      <CardContent className="p-4">
        <div className='flex gap-2 items-center'>
          <div className='font-black text-lg rounded-full border min-w-7 justify-center flex dark:bg-white bg-slate-800 dark:text-slate-800 text-white'>
            {optionId}
          </div>
          <FormField
            control={form.control}
            name={`${activityType}.options.${index}.type` as const}
            render={({ field: typeField }) => (
              <FormItem>
                <RadioGroup
                  value={typeField.value}
                  onValueChange={typeField.onChange}
                  className="flex space-x-1"
                >
                  {types.map((t) => (
                    <div key={t} className="flex items-center space-x-2">
                      <RadioGroupItem value={t} id={`${typeField.name}-${t}`} />
                      <Label htmlFor={`${typeField.name}-${t}`}>{capitalize(t)}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormItem>
            )}
          />
          <TranslatedOption
            type={optionType}
            form={form}
            name={`${activityType}.options.${index}`}
            description={`Option Text`}
          />
          <Button
            variant="destructive"
            size="sm"
            onClick={remove}
          >
            <FaRegTrashAlt className="w-15" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}