import { PathPage } from "@/components/Pages/PathPage"
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"

export default async function Home() {
  const completedLessonByUnitId = await fetchUserCompletedLessonByUnitId()

  return <PathPage />
}
