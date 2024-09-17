import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TagCategory } from "@/ogm-resolver/ogm-types"
import { TranslatedTextSchema } from "../formSchemas"

const TagSchema = z.object({
  name: TranslatedTextSchema,
  category: z.enum(Object.values(TagCategory) as [TagCategory]),
})

// Infer the type from the Zod schema
export type TagFormValues = z.infer<typeof TagSchema>

export const useTagForm = () => {
  const form = useForm<TagFormValues>({
    resolver: zodResolver(TagSchema),
    defaultValues: {
      name: {
        en: "",
        fr: "",
        pt: "",
        de: "",
        es: "",
      },
      category: TagCategory.Concept,
    },
  })

  return { form }
}
