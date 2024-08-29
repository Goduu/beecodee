import { useSortable } from "@dnd-kit/sortable"
import React, { FC } from "react"
import { TokenGroupChip } from "../TokenChip/TokenGroupChip"
import { OptionWithTokens } from "@/components/TokenColors/highlightCode"

type DraggableTokenChipProps = {
  optionWithToken: OptionWithTokens
  className?: string
  removeOptionFromAnswer: (option: OptionWithTokens) => void
}
export const DraggableTokenChip: FC<DraggableTokenChipProps> = ({
  optionWithToken,
  className,
  removeOptionFromAnswer,
}) => {
  const { attributes, listeners, setNodeRef, isOver } = useSortable({ id: optionWithToken.id })

  return (
    <>
      {isOver && <span className="w-1 bg-blue-200">.</span>}
      <span ref={setNodeRef} {...attributes} {...listeners}>
        <TokenGroupChip
          key={`answer-${optionWithToken.id}`}
          onClick={() => removeOptionFromAnswer(optionWithToken)}
          optionWithToken={optionWithToken}
          type="answer"
          className={className}
        />
      </span>
    </>
  )
}
