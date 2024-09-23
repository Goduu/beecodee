import { z } from "zod";
import { TranslatedTextSchema } from "../formSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const ContentSchema = z.object({
    name: TranslatedTextSchema,
    description: TranslatedTextSchema,
    content: TranslatedTextSchema,
})

export type ContentFormValues = z.infer<typeof ContentSchema>

export const useContentForm = () => {
    const form = useForm<ContentFormValues>({
        resolver: zodResolver(ContentSchema),
        defaultValues: {
            name: {
                en: "",
                pt: "",
                fr: "",
                de: "",
                es: "",
            },
            description: {
                en: "",
                pt: "",
                fr: "",
                de: "",
                es: "",
            },
            content: {
                en: "",
                pt: "",
                fr: "",
                de: "",
                es: "",
            }
        }
    })

    return { form }
}