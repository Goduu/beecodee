"use client"
import { Unit } from "@contentlayer/generated"
import React, { FC, useEffect, useState } from "react"
import { LinkButton } from "../LinkButton"
import { choseRandomActivities } from "./ReviewUnit.functions"
import { useLocaleContext } from "../Localization/LocaleContext"

type ReviewUnitTooltipContentProps = {
  unit: Unit
}

export const ReviewUnitTooltipContent: FC<ReviewUnitTooltipContentProps> = ({ unit }) => {
  const { locale } = useLocaleContext()
  const [randomActivities, setRandomActivities] = useState<string[]>([])

  useEffect(() => {
    setRandomActivities(choseRandomActivities(unit))
  }, [unit])

  return (
    <div className="flex flex-col items-center gap-4">
      {unit.description[locale]}
      <LinkButton
        href={{
          pathname: "/lessons/review",
          query: { activities: JSON.stringify(randomActivities) },
        }}
      >
        Review Unit
      </LinkButton>
    </div>
  )
}
