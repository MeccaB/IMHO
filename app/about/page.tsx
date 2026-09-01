import Link from 'next/link';

export const metadata = { title: 'About Us | Unsolicited Advice' };

export default function AboutPage() {
  return <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
    <Link href="/" className="text-sm font-bold text-brand">← Back to Unsolicited Advice</Link>
    <section className="mt-8">
      <p className="eyebrow text-brand">ABOUT US</p>
      <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">The Public Suggestion Box for the Real World</h1>
      <p className="mt-8 text-lg leading-8 text-stone-700">Unsolicited Advice is a modern, transparent community board where everyday consumers and residents share honest observations about the businesses they patronize and the communities they live in. Equal parts neighborhood town hall, open accountability forum, and public suggestion box, our platform transforms day-to-day friction into collective progress.</p>
    </section>
    <section className="mt-12">
      <p className="eyebrow text-brand">OUR MISSION</p>
      <h2 className="mt-3 font-serif text-4xl font-semibold">Community-moderated accountability</h2>
      <p className="mt-5 text-lg leading-8 text-stone-700">To eliminate the gap between customer reality and institutional action by hosting public, community-moderated discussions that drive real-world accountability for businesses, independent providers, and civic leaders.</p>
    </section>
    <section className="mt-12">
      <p className="eyebrow text-brand">CORE VALUES</p>
      <div className="mt-5 grid gap-5">
        <article className="rounded-3xl border border-stone-200 bg-white p-7"><h2 className="text-2xl font-black">Keep It Factual</h2><p className="mt-3 leading-7 text-stone-600">Anchor every issue in concrete details, real dates, and firsthand accounts.</p></article>
        <article className="rounded-3xl border border-stone-200 bg-white p-7"><h2 className="text-2xl font-black">Propose Solutions</h2><p className="mt-3 leading-7 text-stone-600">State the problem clearly and present an obvious, common-sense resolution.</p></article>
        <article className="rounded-3xl border border-stone-200 bg-white p-7"><h2 className="text-2xl font-black">Operate in the Open</h2><p className="mt-3 leading-7 text-stone-600">Transparency protects consumers and offers accountable businesses an opportunity to earn genuine community respect.</p></article>
      </div>
    </section>
  </main>;
}
