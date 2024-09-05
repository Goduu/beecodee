import React, { ReactNode } from "react"
import { FlowerAmber1 } from "../Svgs/Animations/FlowerAmber1"
import { FlowerAmber2 } from "../Svgs/Animations/FlowerAmber2"
import { FlowerGreen1 } from "../Svgs/Animations/FlowerGreen1"
import { FlowerGreen2 } from "../Svgs/Animations/FlowerGreen2"
import { FlowerIndigo1 } from "../Svgs/Animations/FlowerIndigo1"
import { FlowerIndigo2 } from "../Svgs/Animations/FlowerIndigo2"
import { FlowerRed2 } from "../Svgs/Animations/FlowerRed2"
import { FlowerRed1 } from "../Svgs/Animations/FlowerRed1"

export const getUnitCompanion = (pathIndex: number, sectionPosition: number, position: "left" | "right") => {
  const pathCompanion = getTopicCompanion(sectionPosition)
  switch (pathIndex % 8) {
    case 0:
      return null
    case 7:
      return null
    case 6:
      return position === "left" ? getCompanionIcon(pathCompanion, "1", position) : null
    case 5:
      return null
    case 4:
      return null
    case 3:
      return null
    case 2:
      return position === "right" ? getCompanionIcon(pathCompanion, "2", position) : null
    case 1:
      return null
    default:
      return null
  }
}

const getTopicCompanion = (topicPosition: number) => {
  switch (topicPosition % 4) {
    case 0:
      return "lime"
    case 3:
      return "indigo"
    case 2:
      return "red"
    case 1:
      return "amber"
    default:
      return ""
  }
}

const getCompanionIcon = (companion: string, version: "1" | "2", position: "left" | "right"): ReactNode => {
  switch (companion) {
    case "lime":
      return version === "1" ? (
        <FlowerGreen1 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      ) : (
        <FlowerGreen2 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      )
    case "amber":
      return version === "1" ? (
        <FlowerAmber1 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      ) : (
        <FlowerAmber2 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      )
    case "red":
      return version === "1" ? (
        <FlowerRed1 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      ) : (
        <FlowerRed2 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      )
    case "indigo":
      return version === "1" ? (
        <FlowerIndigo1 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      ) : (
        <FlowerIndigo2 className={`absolute w-32 ${position === "right" ? "right-1/4" : "left-1/4"}`} />
      )
    default:
      return null
  }
}
