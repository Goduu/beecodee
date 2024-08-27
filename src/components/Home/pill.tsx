import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pillVariants = cva(
  "inline-flex items-center justify-center border-2 whitespace-nowrap rounded-full text-base tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-opacity-20 bg-lime-500 dark:bg-foreground/85 dark:text-background",
        primary: "border-opacity-30 bg-amber-500 dark:text-background",
        secondary: "border-opacity-40 bg-indigo-500 dark:text-background",
        highlight: "border-opacity-60 bg-inherit dark:text-background",
        primaryOutline: "border-current bg-primary/20 text-primary",
        secondaryOutline: "border-current bg-indigo-500/20 text-secondary",
        highlightOutline: "border-current bg-lime-500/20 text-highlight",
      },
      size: {
        default: "px-8 py-2 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface PillProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(({ className, variant, size, ...props }, ref) => {
  return <div className={cn(pillVariants({ variant, size, className }))} ref={ref} {...props} />
})
Pill.displayName = "Pill"

export { Pill, pillVariants }
