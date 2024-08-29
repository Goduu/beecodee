import { Activity, allActivities } from "@contentlayer/generated"
import { ReviewPage } from "@/components/Pages/ReviewPage"
import { QuizContextWrapper } from "@/components/Activity/Quiz.context"

export default async function Page() {
  const activityMap = new Map<string, Activity>()

  allActivities.forEach((activity) => {
    activityMap.set(activity.slugAsParams, activity)
  })

  return (
    <QuizContextWrapper>
      <ReviewPage activityMap={activityMap} />
    </QuizContextWrapper>
  )
}
