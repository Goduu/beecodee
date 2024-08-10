import { insertXpolen } from "@/lib/supabase/api/insertXpolen";
import { goToNextLesson } from "../Unit/unitStore";


export const handleFinishLesson = async (unitId: string | null | undefined, lessonId: string, lessonXp: number) => {
    if (!unitId) return

    try {
        await insertXpolen({
            unitId,
            lessonId,
            xpolen: lessonXp
        })
    } catch (error) {
        console.error('Error finishing lesson:', error)
    }
    finally {
        goToNextLesson();
    }

}