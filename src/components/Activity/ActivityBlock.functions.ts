import { insertXpollen } from "@/lib/supabase/api/insertXpollen";
import { finishLesson } from "../Unit/unitStore";


export const saveFinishedLesson = async (unitId: string | null | undefined, lessonId: string, lessonXp: number) => {
    if (!unitId) return

    try {
        await insertXpollen({
            unitId,
            lessonId,
            xpollen: lessonXp
        })
    } catch (error) {
        console.error('Error finishing lesson:', error)
    }
    finally {
        finishLesson();
    }

}