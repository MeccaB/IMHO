import { SnitchForm } from '@/components/snitch-form';
import { businesses } from '@/lib/data';

export default function Snitch() {
  return <main className="mx-auto max-w-2xl px-4 py-12"><p className="eyebrow text-[#b85036]">FILE COMMUNITY INTELLIGENCE</p><h1 className="mt-3 font-serif text-5xl font-semibold">Snitch</h1><p className="mt-4 max-w-2xl text-lg leading-7 text-stone-600">Tell the community what happened. Keep your story specific, factual, and useful.</p><SnitchForm businesses={businesses} /></main>;
}
