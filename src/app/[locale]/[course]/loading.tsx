import { CircleSkeleton } from "@/components/Skeletons/CircleSkeleton"
import { getPathZigzagClass } from "@/components/Unit/getPathZigzagClass"

export default function Loading() {
  return (
    <div className="flex w-screen flex-col items-center gap-2 py-4">
      <CircleSkeleton size="large" />
      {[0, 1, 2, 3, 4, 5].map((index) => {
        const zigZagClass = getPathZigzagClass(index)

        return <CircleSkeleton key={index} size="medium" className={zigZagClass} />
      })}
    </div>
  )
}
