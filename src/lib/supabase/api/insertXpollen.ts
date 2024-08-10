"use server"
import { cache } from 'react'
import { createClient } from '../server';
import { userMetadata } from '@/lib/auth';
import { revalidateUserXpollen } from './fetchUserXpollen';

type upsertActivityParams = {
    unitId: string;
    lessonId: string;
    xpollen: number;
}

export const insertXpollen = cache(async ({ unitId, lessonId, xpollen }: upsertActivityParams) => {
    const userData = await userMetadata()
    const supabase = createClient();

    if (!userData) return false

    const { error } = await supabase
        .from('xpollen')
        .insert([{ user_id: userData?.id, unit_id: unitId, lesson_id: lessonId, xpollen }]);

    if (error) {
        console.error('Error inserting xpollen:', error)
        return false
    }

    revalidateUserXpollen()

    return true

})
