import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const next = url.searchParams.get('next') ?? '/my-case-file';
  const response = NextResponse.redirect(new URL(next, url.origin));
  if (code) {
    const supabase = createServerClient(process.env.NEXT_SUPABASE_URL!, process.env.NEXT_SUPABASE_ANON_KEY!, { cookies: { getAll: () => request.headers.get('cookie')?.split('; ').map((value) => { const [name, ...rest] = value.split('='); return { name, value: rest.join('=') }; }) ?? [], setAll: (items: { name: string; value: string; options: CookieOptions }[]) => items.forEach(({ name, value, options }) => response.cookies.set(name, value, options)) } });
    await supabase.auth.exchangeCodeForSession(code);
  }
  return response;
}
