import React, { FC } from "react"
import { Token } from "@/components/TokenColors/highlightCode"
import { tokenTypeToTailwindClass } from "@/components/TokenColors/tokenToTailwindClass"

type GapContentProps = {
  token: Token
  onClick?: () => void
  isFilled?: boolean
  className?: string
}
export const GapContent: FC<GapContentProps> = ({ token, onClick, isFilled, className }) => {
  const tokenTypeClass = tokenTypeToTailwindClass(token.type)
  const gapClass = "border-b border-dashed border-gray-500"

  return (
    <span
      onClick={token.content ? onClick : undefined}
      className={`inline-flex items-center justify-center ${tokenTypeClass} ${className} ${gapClass} ${
        isFilled ? "inline-flex !bg-opacity-50" : "text-slate-50 text-opacity-0"
      }`}
      style={{ width: `${token.size}ch` }} // Reserve width for token size or minimum width
    >
      <span onClick={onClick}>
        {token.content ? token.content.toString().replace(/ /g, "\u00A0") : "&nbsp;"} {/* Preserve spaces */}
      </span>
    </span>
  )
}

const getWidth = (size: number) => {
  console.log(size)
  switch (size) {
    case 1:
      return "w-4"
    case 2:
      return "w-5"
    case 3:
      return "w-6"
    case 4:
      return "w-7"
    case 5:
      return "w-8"
    case 6:
      return "w-9"
    case 7:
      return "w-10"
    case 8:
      return "w-11"
    case 9:
      return "w-12"
    case 10:
      return "w-14"
    case 11:
      return "w-16"
    default:
      return "w-24"
  }
}
