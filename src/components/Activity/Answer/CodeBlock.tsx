import React from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-okaidia.css"

type CodeBlockProps = {
  code: string
  language: string
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}
