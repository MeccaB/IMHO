import Link from 'next/link';
import { BusinessCard } from '@/components/ui';
import { businesses } from '@/lib/data';

const perPage = 12;

type JacketsPageProps = { searchParams: Promise<{ q?: string; page?: string }> };

export default async function JacketsPage({ searchParams }: JacketsPageProps) {
  const { q = '', page = '1' } = await searchParams;
  const query = q.trim().toLowerCase();
  const matches = businesses.filter((business) => `${business.name} ${business.location}`.toLowerCase().includes(query));
  const pageCount = Math.max(1, Math.ceil(matches.length / perPage));
  const requestedPage = Number.parseInt(page, 10);
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), pageCount) : 1;
  const jackets = matches.slice((currentPage - 1) * perPage, currentPage * perPage);
  const hrefForPage = (nextPage: number) => `/jackets?${new URLSearchParams({ ...(q ? { q } : {}), page: String(nextPage) })}`;

  return <main className="mx-auto max-w-6xl px-4 py-10">
    <p className="eyebrow text-brand">JACKET DIRECTORY</p>
    <h1 className="mt-3 font-serif text-5xl font-semibold">Every Jacket on file</h1>
    <p className="mt-3 text-lg text-stone-600">Search the community record by business name or ZIP code.</p>
    <form action="/jackets" className="mt-6 flex max-w-2xl gap-2 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-stone-200">
      <input name="q" defaultValue={q} aria-label="Search jackets by business name or ZIP code" className="min-w-0 flex-1 px-3 outline-none" placeholder="Business name or ZIP code" />
      <button className="rounded-xl bg-brand px-5 py-3 font-bold text-white">Search</button>
    </form>
    <section className="mt-10">
      <p className="mb-5 text-stone-500">{matches.length} Jackets{q && ` for “${q}”`}</p>
      {jackets.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{jackets.map((business) => <BusinessCard business={business} key={business.id} />)}</div> : <p className="rounded-2xl bg-white p-6 text-stone-600 ring-1 ring-stone-200">No Jackets match that search.</p>}
    </section>
    {pageCount > 1 && <nav className="mt-10 flex items-center justify-center gap-3" aria-label="Jacket directory pages">
      {currentPage > 1 && <Link href={hrefForPage(currentPage - 1)} className="rounded-full border border-stone-300 px-4 py-2 font-bold">Previous</Link>}
      <span className="text-sm font-semibold text-stone-600">Page {currentPage} of {pageCount}</span>
      {currentPage < pageCount && <Link href={hrefForPage(currentPage + 1)} className="rounded-full border border-stone-300 px-4 py-2 font-bold">Next</Link>}
    </nav>}
  </main>;
}
