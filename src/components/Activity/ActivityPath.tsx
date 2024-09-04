"use client"
import React, { FC, useRef, useState } from "react"
import { TooltipClick } from "../TooltipClick"
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

type ActivityLinkProps = {
  lesson: Lesson
  unit: Unit
  unitContent: UnitContent | undefined
}
export const ActivityPath: FC<ActivityLinkProps> = ({ lesson, unit, unitContent }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const clickOutSideRef = useRef<HTMLDivElement>(null)
  useDetectOuterClickAndEsc({
    ref: clickOutSideRef,
    onOuterClick: () => setTooltipVisible(false),
  })

  return (
    <div ref={clickOutSideRef}>
      <TooltipClick
        content={<ActivityTooltipContent lesson={lesson} unit={unit} unitContent={unitContent} />}
        visible={tooltipVisible}
      >
        <PathwayButton size="large" type={unit.unitType} onClick={() => setTooltipVisible(!tooltipVisible)} />
      </TooltipClick>
    </div>
  )
}

const ActivityTooltipContent: FC<ActivityLinkProps> = ({ lesson, unit, unitContent }) => {
  const { locale } = useLocaleContext()
  const router = useRouter()
  const handleStartLesson = () => {
    startLesson(unit)
    router.push(routes.lessons(lesson.slugAsParams))
  }

  return (
    <div className="relative gap-2">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="text-lg">{lesson.description[locale]}</div>
        <div className="flex items-center gap-2 text-sm">
          <Pollen className="w-7" /> Get {lesson.xp} XPollen
        </div>
        <Button onClick={handleStartLesson}>Start Lesson</Button>
      </div>
      <div className="absolute bottom-0 right-0">
        <HoneyComb unit={unit} unitContent={unitContent} size="small" />
      </div>
    </div>
  )
}
