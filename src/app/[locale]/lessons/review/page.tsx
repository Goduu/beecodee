import { Activity, allActivities } from "@contentlayer/generated"
import { ReviewPage } from "@/components/Pages/ReviewPage"
import { Suspense } from "react"
import { Loading } from "@/components/Loading"

export default async function LessonPage() {
  const activityMap = new Map<string, Activity>()

  allActivities.forEach((activity) => {
    activityMap.set(activity.slugAsParams, activity)
  })

  return (
    <div className="flex justify-center text-center">
      <div className="flex min-h-[450px] w-[398px] flex-col items-center gap-8 sm:w-[600px]">
        <Suspense fallback={<Loading visible />}>
          <ReviewPage activityMap={activityMap} />
        </Suspense>
      </div>
    </div>
  )
}
