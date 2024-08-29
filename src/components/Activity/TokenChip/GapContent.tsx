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

  return (
    <span
      onClick={token.content ? onClick : undefined}
      className={`rounded-md py-1 ${tokenTypeClass} ${className} ${isFilled ? "inline-flex !bg-opacity-50" : "text-slate-50 text-opacity-0"} `}
    >
      {token.content ? (
        <span onClick={onClick} className={tokenTypeClass}>
          {token.content.toString().replace(/ /g, "\u00A0")}
        </span>
      ) : (
        "_".repeat(Number(token.size))
      )}
    </span>
  )
}
