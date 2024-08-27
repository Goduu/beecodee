"use client"

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion"
import { FC, type PropsWithChildren, ReactNode, useRef } from "react"

import { cn } from "@/lib/utils"
import { CounterUp } from "../CounterUp"

type MetricsItemProps = {
  description: string
  progress: MotionValue<number>
  countTo: number
  last?: boolean
  offset?: number
  className?: string
  children: ReactNode
}

export const MetricsItem: FC<MetricsItemProps> = ({
  description,
  offset = 0,
  countTo,
  last,
  progress,
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `start ${offset}%`],
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.5, 1, 1, 0.85]), {
    stiffness: 25,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const exitOpacity = useTransform(progress, [last ? 0.38 : 0.34, 0.38], [1, last ? 1 : 0])
  const exitScale = useTransform(progress, last ? [0.42, 0.55] : [0.34, 0.425], [1, 0.65])

  const originTop = last && { className: "lg:origin-top mt-20" }

  return (
    <motion.div ref={ref} {...originTop} style={{ scale, opacity, borderRadius: 99999 }}>
      <motion.div {...originTop} style={{ scale: exitScale, opacity: exitOpacity }}>
        <div
          className={cn(
            "bg-muted flex aspect-square flex-col items-center justify-center overflow-hidden rounded-full p-4 text-center dark:text-background",
            className,
          )}
        >
          <span className="absolute top-[5%] w-1/2">{children}</span>
          <span className="z-1 pt-[40%] leading-none">
            <span className="block text-7xl font-bold sm:text-9xl">
              <CounterUp countTo={countTo} scrollSpyDelay={300} />
            </span>
            <span className="block max-w-52 text-balance text-center text-5xl sm:text-6xl">{description}</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
