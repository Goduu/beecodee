import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FiPlusCircle } from "../../Svgs/Icons"
import { Badge } from "../../ui/badge"
import { TagSearcher } from "./TagSearcher"
import { useQuery } from "@apollo/client"
import { Tag } from "@/ogm-resolver/ogm-types"
import { GET_TAGS } from "./tagGQLs"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../useTopicForm"
import { FC, useState } from "react"

type TagSelectorProps = {
    onAdd: (newTag: FormValues["tags"][number]) => void
}

export const TagSelector: FC<TagSelectorProps> = ({ onAdd }) => {
    const { loading, error, data } = useQuery<{ tags: Array<Tag> }>(GET_TAGS)
    const [selectedTag, setSelectedTag] = useState<Tag | null>(null)

    const handleAdd = () => {
        selectedTag && onAdd({
            id: selectedTag.id,
            name: selectedTag.name,
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Badge variant="secondary" className="text-center">
                    <FiPlusCircle className="w-4" />
                </Badge>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Select Tag</DialogTitle>
                    <DialogDescription>Select a tag to add to the topic.</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid w-full flex-1 gap-2">
                        {data && <TagSearcher tags={data.tags} selectedTag={selectedTag} onSelect={setSelectedTag} onCreateNew={() => { }} />}
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={handleAdd}>
                            Add
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
