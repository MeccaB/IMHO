import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';

function client(request: Request, response: NextResponse) {
  return createServerClient(process.env.NEXT_SUPABASE_URL!, process.env.NEXT_SUPABASE_ANON_KEY!, { cookies: { getAll: () => request.headers.get('cookie')?.split('; ').map((entry) => { const [name, ...rest] = entry.split('='); return { name, value: rest.join('=') }; }) ?? [], setAll: (items: { name: string; value: string; options: CookieOptions }[]) => items.forEach(({ name, value, options }) => response.cookies.set(name, value, options)) } });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const response = NextResponse.json({ ok: true });
  const supabase = client(request, response);
  if (payload.action === 'signIn') {
    const { error } = await supabase.auth.signInWithPassword({ email: payload.email, password: payload.password });
    return error ? NextResponse.json({ error: error.message }, { status: 400 }) : response;
  }
  if (payload.action === 'signUp') {
    const { error } = await supabase.auth.signUp({ email: payload.email, password: payload.password, options: { emailRedirectTo: `${new URL(request.url).origin}/auth/callback` } });
    return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json({ message: 'Check your email to verify your account.' });
  }
  if (payload.action === 'oauth' && (payload.provider === 'google' || payload.provider === 'apple')) {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: payload.provider, options: { redirectTo: `${new URL(request.url).origin}/auth/callback` } });
    return error ? NextResponse.json({ error: error.message }, { status: 400 }) : NextResponse.json({ url: data.url });
  }
  return NextResponse.json({ error: 'Unsupported authentication action.' }, { status: 400 });
}
