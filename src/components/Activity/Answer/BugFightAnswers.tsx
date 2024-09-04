import React, { FC, useEffect, useState } from "react"
import { BugFightQuestion } from "@contentlayer/generated"
import { TokenGroupChip } from "../TokenChip/TokenGroupChip"
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core"
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable"
import { DraggableTokenChip } from "./DraggableTokenChip"
import { useBugFightAnswersStates } from "./BugFightAnswers.states"
import { BeeVsBug } from "@/components/Svgs/Animations/BeeVsBug"

type BugFightAnswersProps = {
  question: BugFightQuestion
  language: string
  isActionDisabled: boolean
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const BugFightAnswers: FC<BugFightAnswersProps> = ({
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
  } = useBugFightAnswersStates(question, language, isActionDisabled, setLessonState)
  const [opening, setOpening] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOpening(false)
    }, 6000)
  }, [])

  const statusClass =
    status === "correct" ? "border-lime-500" : status === "wrong" ? "border-red-600" : "border-gray-500"

  return (
    <>
      {opening &&
        <div className={`fixed left-0 top-0  z-50 h-screen w-screen items-center justify-center bg-white dark:bg-slate-800 py-10 `}>
          <div className="flex h-full flex-col items-center justify-center gap-0">
            <BeeVsBug className="h-96" />
          </div>
        </div>
      }
      <div className={`flex touch-none select-none flex-col items-center gap-10 sm:gap-16`}>
        <div className="flex flex-col sm:flex-row  w-full gap-2 ">
          <div className={`flex w-full flex-col min-h-96 justify-start p-2 rounded-xl border-2 ${statusClass}`}>
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
                        <TokenGroupChip onClick={() => { }} optionWithToken={answer.find((a) => a.id === activeId)!} />
                      ) : null}
                    </DragOverlay>
                  </>
                )}
              </DndContext>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col text-xs sm:text-sm w-1/6 gap-1">
            <span
              className={`items-center p-1 rounded-3xl border text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => addTokenToAnswer(createFormattingToken("\t"))}
            >
              Tab
            </span>
            <span
              className={`items-center p-1 rounded-3xl border text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => addTokenToAnswer(createFormattingToken("\n"))}
            >
              Enter
            </span>
            <span
              className={`items-center p-1 rounded-3xl border text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
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
    </>
  )
}
