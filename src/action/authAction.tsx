'use server';

import { createClient } from '@/utility/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function logInWithKakao() {
    const supabase = createClient();

    const { data, error } = await supabase
    .auth
    .signInWithOAuth({
        provider: 'kakao',
        options: {
        redirectTo: `${process.env.NEXT_PUBLIC_ROUTER_URL}/auth/callback?next=/affirmation/transcribe`,

       },
    });
    return redirect(data.url || '/affirmation/edit');
}

export async function logOut() {
    const supabase = createClient();
    const response = await supabase
    .auth
    .signOut();
    revalidatePath('/', 'layout');
    return redirect('/home');
}
