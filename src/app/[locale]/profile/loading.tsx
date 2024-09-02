import { CircleSkeleton } from "@/components/Skeletons/CircleSkeleton"
import { TextSkeleton } from "@/components/Skeletons/TextSkeleton"

export default function Loading() {
  return (
    <div className="flex min-h-[450px] w-[450px] flex-col flex-wrap items-center justify-center gap-16 px-5 sm:w-[600px]">
      <TextSkeleton size="large" />

      <CircleSkeleton size="medium" />
      <div className="flex  flex-col items-center gap-4 rounded-3xl p-4">
        <div className="flex flex-col gap-4">
          <TextSkeleton size="medium" />
          <TextSkeleton size="medium" />
          <TextSkeleton size="medium" />
          <TextSkeleton size="small" />
        </div>
      </div>
    </div>
  )
}
