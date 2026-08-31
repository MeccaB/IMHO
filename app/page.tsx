import Link from 'next/link';
import { businesses } from '@/lib/data';
import { BusinessCard, SearchBox } from '@/components/ui';

const categories = [
  ['Restaurants & Food', 'From corner cafes to dinner reservations'],
  ['Retail & Shopping', 'Spend smarter, shop better'],
  ['Hair & Beauty', 'The details are in the chair'],
  ['Auto & Services', 'Straight answers, no runaround'],
  ['Health & Medical', 'Care worth talking about'],
  ['Event Services', 'The people behind the moment'],
];

export default function Home() {
  return <main>
    <section className="hero-grid overflow-hidden bg-[#10221e] px-4 py-6 text-white md:py-10">
      <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 py-12 lg:py-0">
          <p className="eyebrow text-[#c8f169]">CUSTOMER INTELLIGENCE, UNFILTERED</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[.98] tracking-tight md:text-7xl">Give advice. <em className="font-normal text-[#c8f169]">Help businesses</em> get better.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Welcome to Unsolicited Advice — the place where real customers leave honest reviews and unsolicited advice for the businesses they use every day. Retail, restaurants, beauty, auto, medical, events, and more. Speak up. Be useful. Make a difference.</p>
          <p className="mt-5 max-w-xl border-l-2 border-[#c8f169] pl-4 text-sm leading-6 text-white/60">Not just ratings. Real talk that helps customers choose wisely and businesses improve.</p>
          <div className="mt-8 max-w-2xl"><SearchBox /></div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold"><Link href="/signup" className="rounded-full bg-[#c8f169] px-5 py-3 text-[#10221e]">Add your voice</Link><Link href="#story" className="rounded-full border border-white/25 px-5 py-3">Why we exist</Link></div>
        </div>
        <div className="relative h-[480px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#e8b48a] shadow-2xl lg:h-[560px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,#fff1d5_0,transparent_25%),radial-gradient(circle_at_78%_35%,#7d3f57_0,transparent_35%),linear-gradient(145deg,#e9aa80,#833e58_55%,#193f38)]" />
          <div className="absolute -left-12 bottom-0 h-80 w-72 rotate-[-8deg] rounded-t-[9rem] bg-[#f5c8a6]/90" />
          <div className="absolute bottom-12 left-24 h-44 w-44 rounded-full border-[18px] border-[#241a22] bg-[#5a2942] shadow-xl" />
          <div className="absolute right-8 top-14 h-64 w-48 rotate-[10deg] rounded-[7rem_7rem_3rem_3rem] bg-[#241a22]" />
          <div className="absolute right-20 top-36 h-28 w-24 rounded-full bg-[#c4775e]" />
          <div className="absolute bottom-7 left-7 rounded-2xl bg-[#10221e]/90 p-4 backdrop-blur"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#c8f169]">Word of mouth</p><p className="mt-1 max-w-44 font-serif text-lg leading-tight">“Hey, let me tell you the deal…”</p></div>
          <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#10221e]" aria-label="Video coming soon"><span className="ml-0.5 text-sm">▶</span></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-[#b85036]">START WITH WHAT YOU KNOW</p><h2 className="mt-3 font-serif text-4xl font-semibold">Everyday places. Better conversations.</h2></div><Link href="/search" className="font-bold underline decoration-[#b85036] decoration-2 underline-offset-4">Explore all businesses</Link></div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([name,description],i)=><Link key={name} href={`/search?q=${encodeURIComponent(name)}`} className="group bg-[#fffdf9] p-7 transition hover:bg-[#c8f169]"><span className="text-sm font-bold text-[#b85036]">0{i+1}</span><h3 className="mt-8 font-serif text-2xl font-semibold">{name}</h3><p className="mt-2 text-sm text-stone-600">{description}</p><span className="mt-7 block font-bold">Explore →</span></Link>)}</div>
    </section>

    <section className="bg-[#f1ede5] px-4 py-20"><div className="mx-auto max-w-6xl"><p className="eyebrow text-[#b85036]">WHAT PEOPLE ARE TALKING ABOUT</p><div className="mt-3 flex items-end justify-between"><h2 className="font-serif text-4xl font-semibold">Advice worth sharing</h2><Link href="/search" className="hidden font-bold underline md:block">See every review</Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{businesses.map(b=><BusinessCard key={b.id} business={b}/>)}</div></div></section>

    <section id="story" className="bg-[#b85036] px-4 py-20 text-[#fffaf2]"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[#ffd4a7]">OUR STORY / HOW WE GOT STARTED</p><h2 className="mt-4 font-serif text-5xl leading-none">No fluff. No corporate filter.</h2></div><div className="space-y-6 text-lg leading-8 text-white/90"><p>Hey there! We’re the folks behind Unsolicited Advice — a small but passionate crew who got tired of the usual review sites that felt more like popularity contests than real talk. We started this because consumers deserved a place to share honest opinions, practical advice, and direct feedback with the businesses they actually use every day.</p><p>Not just star ratings and “great service!” comments, but useful feedback: what works, what doesn’t, and what would bring you back. We built Unsolicited Advice as a Glassdoor-style space for consumer goods and services — a place where everyday people can speak up, help businesses improve, and help other customers make smarter choices.</p><p>Our mission is simple: give consumers a stronger voice and give businesses the honest feedback they need to get better. Come share your advice. The world — and that business around the corner — will be better for it.</p></div></div></section>
  </main>;
}
