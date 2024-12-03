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
import { ItemSearcher } from "../ItemSearcher"
import { FiPlusCircle } from "@/components/Svgs/Icons"
import { Content } from "@/ogm-resolver/ogm-types"
import { useQuery } from "@apollo/client"
import { FC, useState } from "react"
import { FormValues } from "../useTopicForm"
// import { GET_CONTENT } from "../content/contentGQLs"

type LessonSelectorProps = {
  onAdd: (newTag: FormValues["lessons"][number]) => void
}

export const LessonSelector: FC<LessonSelectorProps> = ({ onAdd }) => {
  // const { loading, error, data } = useQuery<{ contents: Content[] }>(GET_CONTENT)
  // const [selectedContent, setSelectedContent] = useState<Content | null>(null)

  // const contentItems = data?.contents.map((content) => ({ id: content.id, label: content.name.en })) ?? []

  // const handleSelectContent = (item: Content) => {}

  // const handleAdd = () => {
  //   selectedContent &&
  //     onAdd({
  //       id: selectedContent.id,
  //       name: selectedContent.name,
  //       description: selectedContent.description,
  //     })
  // }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-24">
          {" "}
          <FiPlusCircle className="w-20" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Lesson</DialogTitle>
          <DialogDescription>Select a lesson to add to the topic.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid w-full flex-1 gap-2">
            {/* {data?.contents && (
              <ItemSearcher
                items={data?.contents}
                selectedItem={selectedContent}
                labelKey={"name"}
                onSelect={setSelectedContent}
              />
            )} */}
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            {/* <Button type="button" variant="secondary" onClick={handleAdd}>
              Add
            </Button> */}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
