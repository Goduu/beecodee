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
import { FiPlusCircle } from "../Svgs/Icons"
import { ItemSearcher } from "./ItemSearcher"

export function LessonSelector() {
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
            {/* <ItemSearcher items={lessons} /> */}
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const lessons: any[] = [
  {
    id: "lesson1",
    label: "Lesson1",
    tags: ["lesson1", "tag8", "tag10", "tag91"],
  },
  {
    id: "lesson2",
    label: "Lesson2",
    tags: ["lesson9", "tag0", "tag20", "tag9"],
  },
  {
    id: "lesson3",
    label: "Lesson3",
    tags: ["lesson20", "tag30", "tag2", "tag6"],
  },
  {
    id: "lesson4",
    label: "Lesson4",
    tags: ["lesson2", "tag3", "tag5", "tag6"],
  },
  {
    id: "lesson5",
    label: "Lesson5",
    tags: ["lesson", "tag1", "tag2", "tag3"],
  },
]
