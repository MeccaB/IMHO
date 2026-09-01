'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function SignupPage() {
  return <main className="mx-auto max-w-md px-4 py-14"><p className="eyebrow text-[#b85036]">YOUR VOICE MATTERS</p><h1 className="mt-3 font-serif text-4xl font-semibold">Create your account.</h1><div className="mt-7 rounded-2xl bg-white p-6 ring-1 ring-stone-200"><p className="text-sm leading-6 text-stone-600">New members are created automatically when you continue with Google or Apple. Then you can post, comment, and react in the community.</p><button onClick={() => signIn('google', { callbackUrl: '/community' })} className="mt-5 w-full rounded-xl bg-ink py-3 font-bold text-white">Sign up with Google</button><button onClick={() => signIn('apple', { callbackUrl: '/community' })} className="mt-3 w-full rounded-xl border border-stone-300 py-3 font-bold">Sign up with Apple</button><p className="mt-5 text-center text-sm text-stone-500">Already have an account? <Link href="/login" className="font-bold text-[#b85036] underline">Log in</Link></p></div></main>;
}
