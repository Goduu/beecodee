import { useSortable } from "@dnd-kit/sortable"
import React, { FC } from "react"
import { TokenGroupChip } from "../TokenGroupChip"
import { OptionWithTokens } from "@/components/TokenColors/highlightCode"

type DraggableTokenChipProps = {
  optionWithToken: OptionWithTokens
  removeOptionFromAnswer: (option: OptionWithTokens) => void
}
export const DraggableTokenChip: FC<DraggableTokenChipProps> = ({ optionWithToken, removeOptionFromAnswer }) => {
  const { attributes, listeners, setNodeRef, isOver } = useSortable({ id: optionWithToken.id })

  return (
    <>
      {isOver && <span className="w-1 bg-blue-200">.</span>}
      <span ref={setNodeRef} {...attributes} {...listeners}>
        <TokenGroupChip
          id="answer"
          key={`answer-${optionWithToken.id}`}
          onClick={() => removeOptionFromAnswer(optionWithToken)}
          optionWithToken={optionWithToken}
          className="px-2"
        />
      </span>
    </>
  )
}
