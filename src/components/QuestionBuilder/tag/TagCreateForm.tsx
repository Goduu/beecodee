import React, { FC } from "react"
import { TagFormValues, useTagForm } from "./useTagForm"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { TagCategorySelect } from "./TagCategorySelec"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { capitalize } from "lodash"
import { Button } from "@/components/ui/button"
import { CREATE_TAG, GET_TAGS } from "./tagGQLs"
import { useMutation } from "@apollo/client"
import { useToast } from "@/hooks/use-toast"

export const TagCreateForm: FC = () => {
  const { form } = useTagForm()
  const { toast } = useToast()

  const [createTag] = useMutation(CREATE_TAG, {
    refetchQueries: [{ query: GET_TAGS }],
  })

  const handleCreateTag = async (data: TagFormValues) => {
    await createTag({
      variables: {
        input: [
          {
            category: data.category,
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
          },
        ],
      },
    })
    form.reset()
    toast({
      title: "Tag Created",
      description: JSON.stringify(data),
    })
  }

  const onSubmit = (data: TagFormValues) => {
    console.log(data)
    handleCreateTag(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col items-center justify-center space-y-6 px-4"
      >
        <h1>Tag Creator</h1>
        <div className="grid gap-4 py-4">
          <FormLabel>Name</FormLabel>
          <div className="flex flex-wrap gap-4">
            {(["en", "pt", "fr", "de", "es"] as const).map((lang) => (
              <FormField
                control={form.control}
                name={`name.${lang}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <>
                        <Label>{capitalize(lang)}</Label>
                        <Input placeholder="Tag name" {...field} value={field.value || ""} />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <TagCategorySelect form={form} />
          <Button type="submit">Create Tag</Button>
        </div>
      </form>
    </Form>
  )
}
