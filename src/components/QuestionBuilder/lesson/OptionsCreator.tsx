import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Option } from '@/ogm-resolver/ogm-types'
import React, { FC, useState } from 'react'
import { TranslatedOption } from './TranslatedOption'
import { UseFormReturn } from 'react-hook-form'
import { LessonFormValues } from './useLessonForm'
import { capitalize } from 'lodash'

type OptionsCreatorProps = {
  form: UseFormReturn<LessonFormValues>
}

const types = ["text", "code"] as const

export const OptionsCreator: FC<OptionsCreatorProps> = ({ form }) => {
  const [type, setType] = useState<typeof types[number]>("text")

  const handleChange = (type: string) => {
    if (type === "text" || type === "code") {
      setType(type)
    }
  }

  return (
    <div>
      <div className='p-2 flex'>
        <RadioGroup value={type} className='flex' onValueChange={handleChange}>
          {types.map((t) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={t} key={t} />
              <Label htmlFor="r1">{capitalize(t)}</Label>
            </div>
          ))}

        </RadioGroup>
      </div>
      <TranslatedOption form={form} name='singleChoiceActivity' description={`Option ${type}`} type={type} />
    </div>
  )
}
