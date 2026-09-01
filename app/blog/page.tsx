import Link from 'next/link';

export const metadata = { title: 'Blog | Unsolicited Advice' };

const articles = [
  {
    href: '/blog/why-we-built-unsolicited-advice',
    category: 'LAUNCH POST',
    title: 'Why We Built Unsolicited Advice (And Why the World Needs It)',
    excerpt: 'Why an open, constructive community forum gives consumers and residents a stronger voice.',
  },
];

export default function BlogPage() {
  return <main className="mx-auto max-w-5xl px-4 py-14 md:py-20">
    <Link href="/" className="text-sm font-bold text-brand">← Back to Unsolicited Advice</Link>
    <section className="mt-8">
      <p className="eyebrow text-brand">THE BLOG</p>
      <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">The latest intelligence</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">Updates, ideas, and practical guidance from Unsolicited Advice.</p>
    </section>
    <section className="mt-12 grid gap-6 md:grid-cols-2">
      {articles.map((article) => <Link key={article.href} href={article.href} className="group rounded-3xl border border-stone-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
        <p className="eyebrow text-brand">{article.category}</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight group-hover:text-brand">{article.title}</h2>
        <p className="mt-4 leading-7 text-stone-600">{article.excerpt}</p>
        <span className="mt-7 inline-block font-bold text-brand">Read article →</span>
      </Link>)}
    </section>
  </main>;
}
