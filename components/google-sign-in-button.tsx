'use client';

import { signIn } from 'next-auth/react';

export function GoogleSignInButton() {
  return <button className="w-full rounded-xl bg-ink py-3 font-bold text-white" onClick={() => signIn('google', { callbackUrl: '/my-two-cents' })}>Continue with Google</button>;
}
