import { OptionWithTokens } from "@/components/TokenColors/highlightCode"
import React, { FC } from "react"
import { OptionTokensContent } from "./OptionTokensContent"
import { TokenType } from "./types"

type OneLineContentProps = {
  optionWithToken: OptionWithTokens
  onClick?: () => void
  className?: string
  type: TokenType
}
export const OneLineContent: FC<OneLineContentProps> = ({ optionWithToken, onClick, className, type }) => {
  return (
    <span onClick={onClick} className={`flex  ${className}`}>
      <OptionTokensContent optionWithToken={optionWithToken} />
    </span>
  )
}
