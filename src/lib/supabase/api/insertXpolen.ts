"use server"
import { cache } from 'react'
import { createClient } from '../server';
import { userMetadata } from '@/lib/auth';
import { revalidateUserXpolen } from './fetchUserXpolen';

type upsertActivityParams = {
    unitId: string;
    lessonId: string;
    xpolen: number;
}

export const insertXpolen = cache(async ({ unitId, lessonId, xpolen }: upsertActivityParams) => {
    const userData = await userMetadata()
    const supabase = createClient();

    if (!userData) return false

    const { error } = await supabase
        .from('xpolen')
        .insert([{ user_id: userData?.id, unit_id: unitId, lesson_id: lessonId, xpolen }]);

    if (error) {
        console.error('Error inserting xpolen:', error)
        return false
    }

    revalidateUserXpolen()

    return true

})
