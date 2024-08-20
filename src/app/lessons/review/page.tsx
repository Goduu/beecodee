
import { Activity, allActivities } from "@contentlayer/generated"
import { ReviewPage } from "@/components/Pages/ReviewPage"


export default async function LessonPage() {

  const activityMap = new Map<string, Activity>()

  allActivities.forEach((activity) => {
    activityMap.set(activity.slugAsParams, activity)
  })


  return (
    <div className="flex text-center justify-center">
      <div className="flex flex-col items-center gap-8 min-h-[450px] w-[398px] sm:w-[600px]">
        <ReviewPage activityMap={activityMap} />
      </div>
    </div>
  )
}
