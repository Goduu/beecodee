import { Token } from "@/components/TokenColors/highlightCode"
import React, { FC } from "react"

type TextOptionContentProps = {
  token: Token
  onClick?: () => void
  className?: string
}

export const TextOptionContent: FC<TextOptionContentProps> = ({ token, onClick, className }) => {
  return (
    <div onClick={onClick} className={className + " inline-flex "}>
      {token.content.toString()}
    </div>
  )
}
