import Link from 'next/link';
import { businesses } from '@/lib/data';
import { BusinessCard, SearchBox } from '@/components/ui';

const categories = [
  ['Restaurants & Food', 'Run the file before you spend your money'],
  ['Retail & Shopping', 'Check the paperwork before you check out'],
  ['Hair & Beauty', 'Get the inside story before you book'],
  ['Auto & Services', 'Find out who runs a tight ship'],
  ['Health & Medical', 'Community intelligence for serious decisions'],
  ['Event Services', 'Know the crew behind the moment'],
];

export default function Home() {
  return <main>
    <section className="hero-grid overflow-hidden bg-[#10221e] px-4 py-6 text-white md:py-10">
      <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 py-12 lg:py-0">
          <p className="eyebrow text-[#c8f169]">UNSOLICITED ADVICE</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[.98] tracking-tight md:text-7xl">Drop a dime on &apos;em. <em className="font-normal text-[#c8f169]">Intelligence, Unfiltered.</em></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">No corporate filters. No bought-off stars. Just CIs dropping verified paperwork on local businesses so you know who to trust and who is a certified offender.</p>
          <p className="mt-5 max-w-xl border-l-2 border-[#c8f169] pl-4 text-sm leading-6 text-white/60">Every report updates the record. Keep it factual, keep it useful, and keep the registry sharp.</p>
          <div className="mt-8 max-w-2xl"><SearchBox /></div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold"><Link href="/snitch" className="rounded-full bg-[#c8f169] px-5 py-3 text-[#10221e]">Snitch</Link><Link href="#story" className="rounded-full border border-white/25 px-5 py-3">Why we exist</Link></div>
        </div>
        <div className="relative h-[480px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#c9b08a] shadow-2xl lg:h-[560px]" aria-label="Illustration of an investigative dossier and magnifying glass">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#d8c39d,#9c7c58_55%,#4c342d)]" />
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[20px] border-[#10221e]/80" />
          <div className="absolute right-12 top-36 h-36 w-8 rotate-[-40deg] rounded-full bg-[#10221e]/80" />
          <div className="absolute left-10 top-12 h-[390px] w-[300px] rotate-[-6deg] rounded-xl bg-[#fffaf2] p-7 text-[#10221e] shadow-2xl md:left-16 md:w-[340px]">
            <p className="text-xs font-black tracking-[.22em] text-[#b85036]">CASE FILE 001</p>
            <div className="mt-7 h-3 w-3/4 rounded bg-[#10221e]" /><div className="mt-3 h-3 w-full rounded bg-stone-300" /><div className="mt-3 h-3 w-5/6 rounded bg-stone-300" />
            <div className="mt-8 border-y-2 border-dashed border-[#b85036] py-4 text-center text-xl font-black tracking-[.12em] text-[#b85036]">DOSSIER</div>
            <div className="mt-7 space-y-3"><div className="h-2 w-full rounded bg-stone-300" /><div className="h-2 w-11/12 rounded bg-stone-300" /><div className="h-2 w-4/5 rounded bg-stone-300" /></div>
            <div className="absolute bottom-7 right-7 rotate-[-8deg] rounded border-2 border-[#b85036] px-3 py-1 text-sm font-black text-[#b85036]">ON FILE</div>
          </div>
          <div className="absolute bottom-7 left-7 rounded-2xl bg-[#10221e]/90 p-4 backdrop-blur"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#c8f169]">Field intel</p><p className="mt-1 max-w-44 font-serif text-lg leading-tight">“The registry has the receipts.”</p></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-[#b85036]">START WITH WHAT YOU KNOW</p><h2 className="mt-3 flex items-center gap-3 font-serif text-4xl font-semibold"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#10221e] font-sans text-xl text-[#c8f169]" aria-label="Community conversations">◌</span>Everyday places. Better conversations.</h2></div><Link href="/my-two-cents" className="font-bold underline decoration-[#b85036] decoration-2 underline-offset-4">My Two Cents</Link></div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([name,description],i)=><Link key={name} href={`/my-two-cents?q=${encodeURIComponent(name)}`} className="group bg-[#fffdf9] p-7 transition hover:bg-[#c8f169]"><span className="text-sm font-bold text-[#b85036]">0{i+1}</span><h3 className="mt-8 font-serif text-2xl font-semibold">{name}</h3><p className="mt-2 text-sm text-stone-600">{description}</p><span className="mt-7 block font-bold">Open file →</span></Link>)}</div>
    </section>

    <section className="bg-[#f1ede5] px-4 py-20"><div className="mx-auto max-w-6xl"><p className="eyebrow text-[#b85036]">LATEST INTELLIGENCE</p><div className="mt-3 flex items-end justify-between"><h2 className="flex items-center gap-3 font-serif text-4xl font-semibold"><span className="text-[#b85036]" aria-hidden="true">⌕</span>Deep Dive into the Dossier</h2><Link href="/jackets" className="hidden font-bold underline md:block">Open Jackets</Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{businesses.map(b=><BusinessCard key={b.id} business={b}/>)}</div></div></section>

    <section className="mx-auto max-w-6xl px-4 py-20"><p className="eyebrow text-[#b85036]">FIELD GUIDE</p><h2 className="mt-3 flex items-center gap-3 font-serif text-4xl font-semibold"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#10221e] font-sans text-xl text-[#c8f169]" aria-label="Checklist">✓</span>Know the code before you file.</h2><div className="mt-10 grid gap-5 md:grid-cols-2"><article className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm"><p className="text-xs font-black uppercase tracking-[.16em] text-[#b85036]">Jackets</p><h3 className="mt-3 text-2xl font-black">The community rap sheet</h3><p className="mt-4 leading-7 text-stone-600">A &apos;Jacket&apos; is a business&apos;s community rap sheet. It&apos;s the unfiltered dossier of their real track record on the street. When you file a report, you are officially updating their Jacket. If a business runs a tight ship, their Jacket stays clean. If they pull nonsense, the community locks it in.</p></article><article className="rounded-3xl border border-stone-200 bg-[#10221e] p-7 text-white shadow-sm"><p className="text-xs font-black uppercase tracking-[.16em] text-[#c8f169]">CIs (Confidential Informants)</p><h3 className="mt-3 text-2xl font-black">Boots on the ground</h3><p className="mt-4 leading-7 text-white/75">CIs stand for Contributor-Initiated users. You start as a Lurker in the shadows, but the moment you drop intel or update a Jacket, you gain CI status. CIs are our boots on the ground—feeding real, unedited intelligence to the registry to keep Unsolicited Advice operational.</p></article></div></section>

    <section id="story" className="bg-[#b85036] px-4 py-20 text-[#fffaf2]"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[#ffd4a7]">OUR MISSION / HOW WE OPERATE</p><h2 className="mt-4 flex items-center gap-3 font-serif text-5xl leading-none"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#ffd4a7] font-sans text-sm font-black text-[#ffd4a7]" aria-label="Verified facts">100</span>No filters. Just the facts.</h2></div><div className="space-y-6 text-lg leading-8 text-white/90"><p>Unsolicited Advice is the community intelligence desk for local business decisions. We built it because people deserve a record that is more useful than a popularity contest and more honest than a corporate review feed.</p><p>This is not a star parade. It is a place to log the paperwork: what happened, what worked, what did not, and what the next person needs to know before they walk in.</p><p>Our mission is simple: give the community a clean line to the facts. File useful intelligence, keep Jackets accurate, and help everyone make better calls.</p></div></div></section>
  </main>;
}
