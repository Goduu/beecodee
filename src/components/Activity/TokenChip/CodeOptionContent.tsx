import { Token } from "@/components/TokenColors/highlightCode"
import React, { FC } from "react"
type CodeOptionContentProps = {
  token: Token
  onClick?: () => void
  className?: string
}

export const CodeOptionContent: FC<CodeOptionContentProps> = ({ token, onClick, className }) => {
  return (
    <div onClick={onClick} className={className + " inline-flex "}>
      {token.content.toString().replace(/ /g, "\u00A0")}
    </div>
  )
}
