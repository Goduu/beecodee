import { CircleSkeleton } from "@/components/Skeletons/CircleSkeleton"
import { getPathZigzagClass } from "@/components/Unit/getPathZigzagClass"

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center gap-9">
      <CircleSkeleton size="medium" />
      <div className="relative flex w-full items-center justify-center">
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const zigZagClass = getPathZigzagClass(index)

          return <CircleSkeleton key={index} size="small" className={zigZagClass} />
        })}
      </div>
    </div>
  )
}
