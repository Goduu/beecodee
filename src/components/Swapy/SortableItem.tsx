import { useSortable } from "@dnd-kit/sortable"
import { Item } from "./Item"

export function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, isOver } = useSortable({
    id: props.id,
  })

  return (
    <>
      {isOver && <div className="h-full min-w-1 bg-blue-200"></div>}
      <Item ref={setNodeRef} {...attributes} {...listeners} id={props.id} isActive={props.isActive}>
        {props.id}
      </Item>
    </>
  )
}
