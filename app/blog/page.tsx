import Link from 'next/link';

export const metadata = { title: 'Launch Blog Post | Unsolicited Advice' };

export default function BlogPage() {
  return <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
    <Link href="/" className="text-sm font-bold text-brand">← Back to Unsolicited Advice</Link>
    <article className="mt-8">
      <p className="eyebrow text-brand">LAUNCH BLOG POST</p>
      <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">Why We Built Unsolicited Advice (And Why the World Needs It)</h1>
      <div className="mt-10 space-y-6 text-lg leading-8 text-stone-700">
        <p>Every day, consumers encounter unnecessary hurdles: calling a local business during business hours only to hear endless ringing, watching a contractor walk off a job unfinished, or dodging the exact same pothole at 2nd and Main for six months straight. In standard feedback setups, complaints disappear into automated ticket portals or get flattened into meaningless star ratings.</p>
        <p>We built Unsolicited Advice to give communities an unvarnished, high-impact microphone. Here is the operational philosophy powering our platform:</p>
        <section className="space-y-5 rounded-3xl bg-[#f1ede5] p-7 text-base leading-7">
          <div><h2 className="font-bold text-ink">Unfiltered Transparency</h2><p className="mt-1">Real experiences belong out in the open so future patrons can make informed decisions without sanitized censorship.</p></div>
          <div><h2 className="font-bold text-ink">Constructive Focus</h2><p className="mt-1">It is not just about blowing off steam; it is about providing plain, straightforward direction—whether that means fixing operational logistics or addressing public safety.</p></div>
          <div><h2 className="font-bold text-ink">Civic &amp; Commercial Scope</h2><p className="mt-1">From private enterprises and repair shops to public transit and municipal works, every service that impacts daily life is welcome.</p></div>
        </section>
      </div>
    </article>
  </main>;
}
