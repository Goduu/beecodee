"use client"
import React, { FC, useRef, useState } from "react"
import { Unit } from "@contentlayer/generated"
import { TooltipClick } from "../TooltipClick"
import { useDetectOuterClickAndEsc } from "../useDetectOuterClickAndEsc"
import { PathWayCompleteButton } from "./PathWayCompleteButton"
import { ReviewUnitTooltipContent } from "./ReviewUnitTooltipContent"

type ReviewUnitProps = {
  unit: Unit
  className: string
}

export const ReviewUnit: FC<ReviewUnitProps> = ({ unit, className }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const clickOutSideRef = useRef<HTMLDivElement>(null)
  useDetectOuterClickAndEsc({
    ref: clickOutSideRef,
    onOuterClick: () => setTooltipVisible(false),
  })

  return (
    <div ref={clickOutSideRef} className="flex items-center justify-center ">
      <TooltipClick content={<ReviewUnitTooltipContent unit={unit} />} visible={tooltipVisible}>
        <PathWayCompleteButton onClick={() => setTooltipVisible(!tooltipVisible)} className="" />
      </TooltipClick>
    </div>
  )
}
