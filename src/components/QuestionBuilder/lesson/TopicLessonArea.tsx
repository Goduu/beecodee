

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FormField, FormItem } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { FormValues } from '../useTopicForm'
import { LessonSelector } from '../LessonSelector'

export const TopicLessonArea = ({ form }: { form: UseFormReturn<FormValues> }
) => {
    const handleAddContent = (prev: FormValues["lessons"], newContent: FormValues["lessons"][number]) => {
        console.log('prev', prev)
        return [...(prev || []), newContent]
    }

    return (
        <div>
            <h2 className="">Lessons</h2>
            <ScrollArea className="w-[50rem] whitespace-nowrap rounded-md border p-4">
                <div className="flex w-max space-x-4 p-4 h-48">
                    <FormField
                        control={form.control}
                        name="lessons"
                        render={({ field }) => (
                            <>
                                <div className="flex cursor-pointer items-center justify-center transition-all duration-200 hover:scale-105">
                                    <FormItem>
                                        <LessonSelector onAdd={(newContent: FormValues["lessons"][number]) => field.onChange((prev: FormValues["lessons"]) => handleAddContent(prev, newContent))} />
                                    </FormItem>
                                </div>
                                {field.value?.map((value) => (
                                    <div className="shrink-0">
                                        <div className="flex gap-4 overflow-hidden">
                                            <div className="w-96">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>{value.name.en}</CardTitle>
                                                        <CardDescription>{value.description?.en}</CardDescription>
                                                    </CardHeader>
                                                    <CardFooter>
                                                        <p>Card Footer</p>
                                                    </CardFooter>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )} />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div >
    )
}
