"use client"
import React, { FC, useRef, useState } from "react"
import { Unit, UnitContent } from "@contentlayer/generated"
import { useDetectOuterClickAndEsc } from "../useDetectOuterClickAndEsc"
import { PathWayCompleteButton } from "./PathWayCompleteButton"
import { ReviewUnitPopoverContent } from "./ReviewUnitPopoverContent"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type ReviewUnitProps = {
  unit: Unit
  unitContent: UnitContent | undefined
  className: string
}

export const ReviewUnit: FC<ReviewUnitProps> = ({ unit, unitContent, className }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const clickOutSideRef = useRef<HTMLDivElement>(null)
  useDetectOuterClickAndEsc({
    ref: clickOutSideRef,
    onOuterClick: () => setTooltipVisible(false),
  })

  return (
    <div ref={clickOutSideRef} className="h-16">
      <Popover open={tooltipVisible}>
        <PopoverTrigger>
          <PathWayCompleteButton
            size="small"
            type={unit.unitType}
            onClick={() => setTooltipVisible(!tooltipVisible)}
            className={className}
          />
        </PopoverTrigger>
        <PopoverContent>
          <ReviewUnitPopoverContent unit={unit} onStart={() => setTooltipVisible(false)} unitContent={unitContent} />
        </PopoverContent>
      </Popover>
    </div>
  )
}
