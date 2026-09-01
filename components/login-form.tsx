'use client';

import { FormEvent, useState } from 'react';

async function authenticate(payload: object) { const response = await fetch('/api/auth', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) }); return response.json(); }
export function LoginForm() {
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>, action: 'signIn' | 'signUp') { event.preventDefault(); const form = new FormData(event.currentTarget); const result = await authenticate({ action, email: String(form.get('email')), password: String(form.get('password')) }); if (result.error) setMessage(result.error); else if (action === 'signIn') location.assign('/my-case-file'); else setMessage(result.message); }
  async function oauth(provider: 'google' | 'apple') { const result = await authenticate({ action: 'oauth', provider }); if (result.error) setMessage(result.error); else location.assign(result.url); }
  return <div className="space-y-6"><form onSubmit={(event) => submit(event, 'signIn')} className="space-y-3"><input name="email" required type="email" className="w-full rounded-lg border p-3" placeholder="Email" /><input name="password" required minLength={8} type="password" className="w-full rounded-lg border p-3" placeholder="Password" /><button className="w-full rounded-xl bg-ink py-3 font-bold text-white">Sign in</button></form><form onSubmit={(event) => submit(event, 'signUp')}><button className="w-full rounded-xl border border-stone-300 py-3 font-bold">Create account</button></form><div className="grid gap-3 sm:grid-cols-2"><button onClick={() => oauth('google')} className="rounded-xl border border-stone-300 py-3 font-bold">Continue with Google</button><button onClick={() => oauth('apple')} className="rounded-xl border border-stone-300 py-3 font-bold">Continue with Apple</button></div>{message && <p role="status" className="text-sm text-brand">{message}</p>}</div>;
}
