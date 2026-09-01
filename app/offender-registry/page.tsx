import { BusinessCard, SearchBox } from '@/components/ui';
import { businesses } from '@/lib/data';

export default async function OffenderRegistry({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const matches = businesses.filter(b => `${b.name} ${b.category} ${b.location}`.toLowerCase().includes(q.toLowerCase()));
  return <main className="mx-auto max-w-6xl px-4 py-10"><p className="eyebrow text-[#b85036]">COMMUNITY INTELLIGENCE DATABASE</p><h1 className="mt-3 font-serif text-5xl font-semibold">Offender Registry</h1><p className="mt-3 text-lg text-stone-600">Run the file before you spend your time or money.</p><div className="mt-6 max-w-2xl"><SearchBox /></div><section className="mt-10"><p className="mb-5 text-stone-500">{matches.length} Jackets {q && `for “${q}”`}</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{matches.map(b => <BusinessCard business={b} key={b.id} />)}</div></section></main>;
}
