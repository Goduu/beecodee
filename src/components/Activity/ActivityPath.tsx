"use client"
import React, { FC, useRef, useState } from "react"
import { Button } from "../Button"
import { Lesson, Unit, UnitContent } from "@contentlayer/generated"
import { useRouter } from "next/navigation"
import { useDetectOuterClickAndEsc } from "../useDetectOuterClickAndEsc"
import { startLesson } from "../Unit/unitStore"
import { PathwayButton } from "./PathwayButton"
import { Pollen } from "../Svgs/Pollen"
import { HoneyComb } from "../HoneyComb/HoneyComb"
import { useLocaleContext } from "../Localization/LocaleContext"
import { routes } from "@/lib/routes"
import { useTransitionContext } from "../Loading.store"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type ActivityPathProps = {
  lesson: Lesson
  unit: Unit
  unitContent: UnitContent | undefined
  className?: string
}

export const ActivityPath: FC<ActivityPathProps> = ({ lesson, unit, unitContent, className }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const clickOutSideRef = useRef<HTMLDivElement>(null)
  useDetectOuterClickAndEsc({
    ref: clickOutSideRef,
    onOuterClick: () => setTooltipVisible(false),
  })

  return (
    <div ref={clickOutSideRef}>
      <Popover open={tooltipVisible}>
        <PopoverTrigger>
          <PathwayButton
            size="small"
            type={unit.unitType}
            className={className || ""}
            onClick={() => setTooltipVisible((prev) => !prev)}
          />
        </PopoverTrigger>
        <PopoverContent>
          <ActivityPopoverContent
            lesson={lesson}
            unit={unit}
            unitContent={unitContent}
            onStart={() => setTooltipVisible(false)}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

type ActivityPopoverContentProps = {
  lesson: Lesson
  unit: Unit
  unitContent: UnitContent | undefined
  onStart: () => void
  className?: string
}

const ActivityPopoverContent: FC<ActivityPopoverContentProps> = ({ lesson, unit, unitContent, onStart }) => {
  const { locale } = useLocaleContext()
  const router = useRouter()
  const { startTransition } = useTransitionContext()

  const handleStartLesson = () => {
    startTransition(async () => {
      startLesson(unit)
      await router.push(routes.lessons(lesson.slugAsParams))
      onStart()
    })
  }

  return (
    <div className="relative gap-2">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="text-lg">{lesson.description[locale]}</div>
        <div className="flex items-center gap-2 text-sm">
          <Pollen className="w-7" /> {T[locale].getXPollen(lesson.xp)}
        </div>
        <Button onClick={handleStartLesson}>Start Lesson</Button>
      </div>
      <div className="absolute bottom-0 right-0">
        <HoneyComb unit={unit} unitContent={unitContent} size="small" />
      </div>
    </div>
  )
}
const en = {
  getXPollen: (x: number) => `Get ${x} XPollen`,
}
const pt: typeof en = {
  getXPollen: (x: number) => `Ganhe ${x} XPollen`,
}
const es: typeof en = {
  getXPollen: (x: number) => `Obtén ${x} XPollen`,
}
const fr: typeof en = {
  getXPollen: (x: number) => `Obtenez ${x} XPollen`,
}
const de: typeof en = {
  getXPollen: (x: number) => `Erhalten Sie ${x} XPollen`,
}

const T = { en, pt, es, fr, de }
