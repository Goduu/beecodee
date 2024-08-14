"use client"
import { useMDXComponent } from "next-contentlayer/hooks"
import { highlightAll } from "prismjs"
import { FC, useEffect } from "react"
import "prismjs/themes/prism-okaidia.css" // Import the default Prism theme
import "prismjs/components/prism-jsx.min" // Import additional language support as needed

interface MdxProps {
  code: string
}

export const Mdx: FC<MdxProps> = ({ code }) => {
  const MDXContent = useMDXComponent(code)

  useEffect(() => {
    highlightAll()
  }, [])


  return <MDXContent components={{}} />
}
