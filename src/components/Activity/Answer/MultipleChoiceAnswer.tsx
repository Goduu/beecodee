import React, { FC } from "react"
import { MultipleChoiceQuestion } from "@contentlayer/generated"
import { useMultipleChoiceAnswerStates } from "./MultipleChoiceAnswer.states"
import { TokenGroupChip } from "../TokenChip/TokenGroupChip"
import { OptionWithTokens } from "@/components/TokenColors/highlightCode"
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core"
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable"
import { DraggableTokenChip } from "./DraggableTokenChip"
type MultipleChoiceAnswerProps = {
  question: MultipleChoiceQuestion
  language: string
  isActionDisabled: boolean
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const MultipleChoiceAnswer: FC<MultipleChoiceAnswerProps> = ({
  question,
  language,
  isActionDisabled,
  setLessonState,
}) => {
  const {
    status,
    options,
    answer,
    addTokenToAnswer,
    removeOptionFromAnswer,
    createFormattingToken,
    handleDragStart,
    handleDragEnd,
    sensors,
    activeId,
  } = useMultipleChoiceAnswerStates(question, language, isActionDisabled, setLessonState)

  const statusClass =
    status === "correct" ? "border-lime-500" : status === "wrong" ? "border-red-600" : "border-gray-500"

  return (
    <div className={`flex touch-none select-none flex-col items-center gap-10 sm:gap-16`}>
      <div className="flex min-h-40 w-full gap-2 ">
        <div className={`flex w-full flex-col justify-center rounded-xl border-2 ${statusClass}`}>
          <div className="inline-block px-1 text-start">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {answer && (
                <>
                  <SortableContext items={answer.map((a) => a.id)} strategy={rectSortingStrategy}>
                    {answer.map((optionWithToken, index) => (
                      <DraggableTokenChip
                        key={optionWithToken.id}
                        optionWithToken={optionWithToken}
                        removeOptionFromAnswer={removeOptionFromAnswer}
                        className={isActionDisabled ? "cursor-default px-2" : "px-2"}
                      />
                    ))}
                  </SortableContext>
                  <DragOverlay>
                    {activeId ? (
                      <TokenGroupChip onClick={() => {}} optionWithToken={answer.find((a) => a.id === activeId)!} />
                    ) : null}
                  </DragOverlay>
                </>
              )}
            </DndContext>
          </div>
        </div>
        <div className="flex w-1/6 flex-col gap-1">
          <span
            className={`items-center rounded-3xl border text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => addTokenToAnswer(createFormattingToken("\t"))}
          >
            Tab
          </span>
          <span
            className={`items-center rounded-3xl border text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => addTokenToAnswer(createFormattingToken("\n"))}
          >
            Enter
          </span>
          <span
            className={`items-center rounded-3xl border text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => addTokenToAnswer(createFormattingToken(" "))}
          >
            Space
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {options.map((option) => (
          <TokenGroupChip
            key={option.id}
            optionWithToken={option}
            onClick={() => addTokenToAnswer(option)}
            className={isActionDisabled ? "cursor-default px-2" : "px-2"}
          />
        ))}
      </div>
    </div>
  )
}
