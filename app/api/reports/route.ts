import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !user.email_confirmed_at) return NextResponse.json({ error: 'Verify your email before filing a Report.' }, { status: 401 });
  const body = await request.json();
  if (!Array.isArray(body.evidence) || body.evidence.length === 0) return NextResponse.json({ error: 'At least one evidence file is required.' }, { status: 400 });
  if (typeof body.story !== 'string' || body.story.trim().length < 300) return NextResponse.json({ error: 'Your story must be at least 300 characters.' }, { status: 400 });
  return NextResponse.json({ error: 'Evidence scanning and storage must be configured before Reports can be filed.' }, { status: 503 });
}
