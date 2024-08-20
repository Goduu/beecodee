'use server'
import { userMetadata } from "@/lib/auth";
import { revalidateTag } from "next/cache";
import { createClient } from "src/lib/supabase/server";

export type CompletedLessonIdsByUnitId = Map<string, Set<string>>

export const fetchUserCompletedLessonByUnitId = async () => {
    const userData = await userMetadata()
    if (!userData) return

    const supabase = createClient();
    const { data, error } = await supabase.from('xpollen').select('unit_id, lesson_id').eq('user_id', userData.id)

    if (error) {
        console.error('Error fetching user finished lessons', error)
        return
    }

    const completedLessonByUnitId = data.reduce((acc: CompletedLessonIdsByUnitId, { unit_id: unitId, lesson_id: lessonId }) => {
        if (!acc.has(unitId)) {
            acc.set(unitId, new Set());
        }
        acc.get(unitId)?.add(lessonId);
        return acc
    }, new Map<string, Set<string>>())

    return completedLessonByUnitId

}

export const revalidateUserXpollen = async () => {
    revalidateTag('user-xpollen-tag');
}