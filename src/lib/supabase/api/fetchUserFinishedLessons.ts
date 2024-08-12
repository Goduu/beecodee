"use server"
import { userMetadata } from "@/lib/auth";
import { revalidateTag } from "next/cache";
import { createClient } from "src/lib/supabase/server";

export type CompletedLessonByUnitId = {
    [unitId: string]: string[],
}
export const fetchUserFinishedLessons = async () => {
    const userData = await userMetadata()
    if (!userData) return
    const supabase = createClient();
    const { data, error } = await supabase.from('xpollen').select('unit_id, lesson_id').eq('user_id', userData.id)

    if (error) {
        console.error('Error fetching user finished lessons', error)
        return
    }

    const completedLessonByUnitId = data.reduce((acc: CompletedLessonByUnitId, curr) => {
        if (acc[curr.unit_id]) {
            acc[curr.unit_id].push(curr.lesson_id)
        } else {
            acc[curr.unit_id] = [curr.lesson_id]
        }
        return acc
    }, {})

    return completedLessonByUnitId

}

export const revalidateUserXpollen = async () => {
    revalidateTag('user-xpollen-tag');
}