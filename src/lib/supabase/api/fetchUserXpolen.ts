"use server"
import { revalidateTag } from "next/cache";
import { createClient } from "src/lib/supabase/server";

export const fetchUserXpolen = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
        .rpc('get_user_xpolen_sum')

    if (error) {
        console.error('Error fetching xpolen', error)
        return
    }

    return data

}

export const revalidateUserXpolen = async () => {
    revalidateTag('user-xpolen-tag');
}