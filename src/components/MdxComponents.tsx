"use client"
import { useMDXComponent } from "next-contentlayer/hooks"
import { FC } from "react"

interface MdxProps {
  code: string
}

export const Mdx: FC<MdxProps> = ({ code }) => {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={{}} />
}
