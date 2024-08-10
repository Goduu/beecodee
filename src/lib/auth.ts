"use server"
import { createClient } from './supabase/server';
import { redirect } from 'next/navigation';

export async function signInWithGithub() {
  const supabase = createClient();
  const URL = process.env.NEXT_PUBLIC_URL
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${URL}/api/auth/callback`,
    },
  })

  if (error) {
    console.error(data, error)
  } else {
    if (data.url) {
      redirect(data.url)
    }
  }
}


export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error logging out:', error)
  }
}


export type User = {
  id: string
  name: string
  email?: string
  avatarUrl: string
}

export const userMetadata = async () => {
  const supabase = createClient();
  const session = await supabase.auth.getUser()
  const metadata = session.data.user?.user_metadata
  if (!metadata) {
    return null
  }

  if (!session.data.user?.id) return null

  const userData: User = {
    id: session.data.user?.id,
    name: metadata?.full_name || metadata.name,
    email: session.data.user?.email || metadata.email,
    avatarUrl: metadata.avatar_url,
  }

  return userData
}
