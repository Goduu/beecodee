import React, { FC } from 'react'
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { TranslatedTextInput } from '../../TranslatedTextInput'
import { ActivityFormValues, activityTypes, useActivityForm } from './useActivityForm'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { capitalize } from 'lodash'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { OptionsCreator } from '../OptionsCreator'
import { Popover } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

type ActivityCreatorProps = {
}

export const ActivityCreator: FC<ActivityCreatorProps> = () => {
    const { form } = useActivityForm()
    const activityType = form.watch(`type`);

    const onSubmit = (data: ActivityFormValues) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <h1>Activity Creator / Editor</h1>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-2'
                >
                <div>ActivityCreator {activityType}</div>
                <FormField
                    control={form.control}
                    name={"type"}
                    render={({ field }) => (
                        <FormItem>
                            <RadioGroup value={field.value} className='flex' onValueChange={field.onChange}>
                                {activityTypes.map((t) => (
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={t} key={t} />
                                        <Label htmlFor="r1">{capitalize(t)}</Label>
                                    </div>
                                ))}

                            </RadioGroup>
                        </FormItem>
                    )} />
                <TranslatedTextInput name={`${activityType}.description`} description="Activity description" form={form} />
                {activityType === 'codeOutput' && <TranslatedTextInput name={`${activityType}.codeSnippet`} description="Code Snippet" form={form} />}
                <OptionsCreator activityType={activityType} form={form} />
                <FormField
                    control={form.control}
                    name={`${activityType}.answer`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Answer</FormLabel>
                            <Input
                                value={field.value}
                                className="col-span-2 h-8"
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                        </FormItem>
                    )}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </Form >
    )
}
