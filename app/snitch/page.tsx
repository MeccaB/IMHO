import Link from 'next/link';
import { businesses } from '@/lib/data';

export default function Snitch() {
  return <main className="mx-auto max-w-5xl px-4 py-12"><p className="eyebrow text-[#b85036]">FILE COMMUNITY INTELLIGENCE</p><h1 className="mt-3 font-serif text-5xl font-semibold">Snitch</h1><p className="mt-4 max-w-2xl text-lg leading-7 text-stone-600">Pick a business, then put the facts on its Jacket. Keep the intel specific, honest, and useful to the next person.</p><section className="mt-10 grid gap-5 sm:grid-cols-2">{businesses.map(business => <Link key={business.id} href={`/business/${business.id}/review/new`} className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="text-3xl">{business.image}</p><p className="mt-4 text-sm font-bold text-[#b85036]">Registry file · {business.category} · {business.location}</p><h2 className="mt-1 text-xl font-bold">{business.name}</h2><span className="mt-5 inline-block rounded-full bg-[#10221e] px-4 py-2 text-sm font-bold text-white">Update Jacket</span></Link>)}</section></main>;
}
