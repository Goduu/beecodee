import { Token } from "@/components/TokenColors/highlightCode"
import React, { FC } from "react"

type TextOptionContentProps = {
  token: Token
  onClick?: () => void
  className?: string
}

export const TextOptionContent: FC<TextOptionContentProps> = ({ token, onClick, className }) => {
  return (
    <span onClick={onClick} className={className}>
      {token.content.toString()}
    </span>
  )
}
