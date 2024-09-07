import React, { FC, useEffect, useState } from "react"
import { BugFightQuestion } from "@contentlayer/generated"
import { TokenGroupChip } from "../TokenChip/TokenGroupChip"
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core"
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable"
import { DraggableTokenChip } from "./DraggableTokenChip"
import { useBugFightAnswersStates } from "./BugFightAnswers.states"
import { BeeVsBug } from "@/components/Svgs/Animations/BeeVsBug"
import { LuListRestart } from "@/components/Svgs/Icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useLocaleContext } from "@/components/Localization/LocaleContext"

type BugFightAnswersProps = {
  question: BugFightQuestion
  language: string
  isActionDisabled: boolean
  setLessonState: (state: "none" | "correct" | "wrong" | "completed") => void
}

export const BugFightAnswers: FC<BugFightAnswersProps> = ({ question, language, isActionDisabled, setLessonState }) => {
  const {
    status,
    options,
    answer,
    addTokenToAnswer,
    resetStates,
    removeOptionFromAnswer,
    createFormattingToken,
    handleDragStart,
    handleDragEnd,
    sensors,
    activeId,
  } = useBugFightAnswersStates(question, language, isActionDisabled, setLessonState)
  const [opening, setOpening] = useState(true)
  const { locale } = useLocaleContext()

  useEffect(() => {
    setTimeout(() => {
      setOpening(false)
    }, 6000)
  }, [])

  const statusClass =
    status === "correct" ? "border-lime-500" : status === "wrong" ? "border-red-600" : "border-gray-500"

  return (
    <>
      {opening && (
        <div
          className={`fixed left-0 top-0  z-50 h-screen w-screen items-center justify-center bg-white py-10 dark:bg-slate-800 `}
        >
          <div className="flex h-full flex-col items-center justify-center gap-0">
            <BeeVsBug className="h-96" />
          </div>
        </div>
      )}
      <div className={`flex touch-none select-none flex-col items-center gap-10 sm:gap-16`}>
        <div className="flex w-full flex-col  gap-2 sm:flex-row ">
          <div
            className={`relative flex min-h-96 w-full flex-col justify-start rounded-xl border-2 p-2 ${statusClass}`}
          >
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
                          className={isActionDisabled ? "cursor-default px-1" : "px-1"}
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
            <TooltipProvider>
              <div className="absolute bottom-1 right-1">
                <Tooltip>
                  <TooltipTrigger>
                    <LuListRestart className="w-8" onClick={resetStates} />
                  </TooltipTrigger>
                  <TooltipContent>{T[locale].restart}</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          <div className="flex w-1/6 flex-row gap-1 text-xs sm:flex-col sm:text-sm">
            <span
              className={`items-center rounded-3xl border p-1 text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => addTokenToAnswer(createFormattingToken("\t"))}
            >
              Tab
            </span>
            <span
              className={`items-center rounded-3xl border p-1 text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => addTokenToAnswer(createFormattingToken("\n"))}
            >
              Enter
            </span>
            <span
              className={`items-center rounded-3xl border p-1 text-center ${isActionDisabled ? "cursor-default" : "cursor-pointer"}`}
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

const en = {
  restart: "Restart",
}
const pt: typeof en = {
  restart: "Reiniciar",
}
const fr: typeof en = {
  restart: "Redémarrer",
}
const de: typeof en = {
  restart: "Neustart",
}
const es: typeof en = {
  restart: "Reiniciar",
}
export const T = { en, pt, fr, de, es }
