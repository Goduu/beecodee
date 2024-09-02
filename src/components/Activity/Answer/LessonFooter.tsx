"use client"
import { useKey, useMedia } from "react-use"

import { cn } from "@/lib/utils"
import { LuCheckCircle, LuXCircle } from "@/components/Svgs/Icons"
import { Button } from "@/components/ButtonX"
import { useLocaleContext } from "@/components/Localization/LocaleContext"

type LessonFooterProps = {
  onCheck: () => void
  status: "correct" | "wrong" | "none" | "completed"
  disabled?: boolean
  lessonId?: number
}

export const LessonFooter = ({ onCheck, status, disabled }: LessonFooterProps) => {
  useKey("Enter", onCheck, {}, [onCheck])
  const { locale } = useLocaleContext()
  const isMobile = useMedia("(max-width: 1024px)", false)

  return (
    <footer
      className={cn(
        "h-[100px] border-t-2 lg:h-[140px]",
        status === "none" && "bg-slate-100 dark:bg-slate-800",
        status === "correct" && "border-transparent bg-lime-100 dark:bg-slate-700",
        status === "wrong" && "border-transparent bg-rose-100 dark:bg-slate-700",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="flex items-center text-base font-bold text-lime-500 lg:text-2xl">
            <LuCheckCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            {T[locale].nicelyDone}
          </div>
        )}

        {status === "wrong" && (
          <div className="flex items-center text-base font-bold text-rose-500 lg:text-2xl">
            <LuXCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            {T[locale].tryAgain}
          </div>
        )}

        {/* {status === "completed" && (
          <Button
            variant="default"
            size={isMobile ? "sm" : "lg"}
          // onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )} */}

        <Button
          disabled={disabled}
          aria-disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={status === "wrong" ? "danger" : "secondary"}
        >
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
          {status === "completed" && "Continue"}
        </Button>
      </div>
    </footer>
  )
}

const en = {
  nicelyDone: "Nicely Done",
  tryAgain: "Try Again",
}
const pt: typeof en = {
  nicelyDone: "Muito bem",
  tryAgain: "Tentar Novamente",
}
const es: typeof en = {
  nicelyDone: "Bien Hecho",
  tryAgain: "Intentar de Nuevo",
}
const fr: typeof en = {
  nicelyDone: "Bien Joué",
  tryAgain: "Réessayer",
}
const de: typeof en = {
  nicelyDone: "Gut gemacht",
  tryAgain: "Nochmal versuchen",
}
export const T = { en, pt, es, fr, de }
