import Link from 'next/link';
import { FactsBadge, Stars } from '@/components/ui';
import { businesses, reviews } from '@/lib/data';

export default async function MyTwoCentsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const query = q.trim().toLowerCase();
  const reports = reviews.filter((review) => `${review.name} ${review.author} ${review.title} ${review.businessName}`.toLowerCase().includes(query));

  return <main className="mx-auto max-w-5xl px-4 py-10">
    <p className="eyebrow text-brand">CI REPORTS</p>
    <h1 className="mt-3 font-serif text-5xl font-semibold">My Two Cents</h1>
    <p className="mt-3 text-lg text-stone-600">Reports from the community, organized by the CIs who filed them.</p>
    <form action="/my-two-cents" className="mt-6 flex max-w-2xl gap-2 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-stone-200">
      <input name="q" defaultValue={q} aria-label="Search reports by CI or Jacket" className="min-w-0 flex-1 px-3 outline-none" placeholder="CI name, report, or Jacket" />
      <button className="rounded-xl bg-brand px-5 py-3 font-bold text-white">Search</button>
    </form>
    <section className="mt-10 space-y-5">
      <p className="text-stone-500">{reports.length} reports{q && ` for “${q}”`}</p>
      {reports.length ? reports.map((report) => {
        const jacket = businesses.find((business) => business.id === report.businessId);
        return <article key={report.id} className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><Link href={`/profile/${report.author}`} className="font-bold text-brand underline">{report.name}</Link><p className="mt-1 text-sm text-stone-500">@{report.author} · {report.badge} · {report.date}</p></div>
            <Stars value={report.rating} />
          </div>
          <h2 className="mt-5 text-2xl font-black">{report.title}</h2>
          <p className="mt-3 leading-7 text-stone-700">{report.body}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t pt-4 text-sm font-bold"><FactsBadge count={report.helpful} />{jacket && <Link href={`/business/${jacket.id}`} className="text-brand underline">Jacket: {jacket.name} →</Link>}</div>
        </article>;
      }) : <p className="rounded-2xl bg-white p-6 text-stone-600 ring-1 ring-stone-200">No CI reports match that search.</p>}
    </section>
  </main>;
}
