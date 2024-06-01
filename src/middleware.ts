import { updateSession } from '@/utility/supabase/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './utility/supabase/server';

export async function middleware(request: NextRequest) {
  const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    const { origin } = new URL(request.url);
    // 비로그인시 홈으로 redirect
    if (!data.user?.id && request.url !== `${origin}/home` && !request.url.includes('auth')) {
      return NextResponse.redirect(`${origin}/home`);
    }
    return updateSession(request);
  }

  export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * Feel free to modify this pattern to include more paths.
       */
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  };
