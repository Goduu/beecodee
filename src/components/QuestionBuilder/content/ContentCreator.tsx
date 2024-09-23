import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import { marked } from "marked";
import { highlightAll } from 'prismjs';
import { BeeLocale, LOCALES } from '@/components/Localization/localization';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { ContentFormValues, useContentForm } from './useContentForm';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useMutation } from '@apollo/client';
import { CREATE_CONTENT, GET_CONTENT } from './contentGQLs';
import { toast } from '@/hooks/use-toast';

export const ContentCreator = () => {
    const { form } = useContentForm()

    const [createContents] = useMutation(CREATE_CONTENT, {
        refetchQueries: [{ query: GET_CONTENT }],
    })

    const handleCreateContent = async (data: ContentFormValues) => {
        await createContents({
            variables: {
                input: [
                    {
                        name: {
                            create: {
                                node: {
                                    en: data.name.en,
                                    pt: data.name.pt,
                                    fr: data.name.fr,
                                    de: data.name.de,
                                    es: data.name.es,
                                },
                            },
                        },
                        description: {
                            create: {
                                node: {
                                    en: data.description.en,
                                    pt: data.description.pt,
                                    fr: data.description.fr,
                                    de: data.description.de,
                                    es: data.description.es,
                                },
                            },
                        },
                        content: {
                            create: {
                                node: {
                                    en: data.content.en,
                                    pt: data.content.pt,
                                    fr: data.content.fr,
                                    de: data.content.de,
                                    es: data.content.es,
                                },
                            },
                        },
                    },
                ],
            },
        })

    }
    const onSubmit = (data: ContentFormValues) => {
        // form.reset()
        handleCreateContent(data)
        toast({
            title: "Content Created",
            description: data.name.en,
        })
    }

    return (
        <Form {...form}>
            <h1>Content Creator / Editor</h1>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
            >

                <Tabs defaultValue="en" className="w-full">
                    <div className='flex gap-4'>
                        <TabsList>
                            {LOCALES.map((lang) => (
                                <TabsTrigger key={lang} value={lang}>
                                    {lang.toUpperCase()}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <Button type='submit' >Submit</Button>
                    </div>
                    {LOCALES.map((lang) => (
                        <LocalizedContent locale={lang} form={form} />
                    ))}
                </Tabs>
            </form>
        </Form>
    )
}

const LocalizedContent = ({ locale, form }: { locale: BeeLocale, form: UseFormReturn<ContentFormValues> }) => {
    const [parsedContent, setParsedContent] = useState("");
    const formValue = form.watch(`content.${locale}`);

    useEffect(() => {
        // Parse markdown to HTML and then highlight code
        const html = marked(formValue || "");
        typeof html === "string" && setParsedContent(html);

        // After setting the content, apply PrismJS highlighting
        highlightAll();
    }, [formValue]);

    return (
        <TabsContent value={locale} className=''>
            <FormField
                control={form.control}
                name={`name.${locale}`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input value={field.value || ""} type='text' onChange={field.onChange} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={`description.${locale}`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea value={field.value || ""} onChange={field.onChange} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={`content.${locale}`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Content</FormLabel>
                        <div className='flex gap-4 w-full'>
                            <FormControl>
                                <Textarea
                                    value={field.value || ""}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    className='w-1/2 text-lg h-screen p-3'
                                />
                            </FormControl>
                            <div
                                className='w-1/2 overflow-y-scroll p-10 bg-gray-800 text-white'
                                dangerouslySetInnerHTML={{ __html: parsedContent }} // This is safe since we handle the user input
                            />
                        </div>
                    </FormItem>
                )}
            />
        </TabsContent>
    )
}
