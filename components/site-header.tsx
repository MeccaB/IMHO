import Image from 'next/image';
import Link from 'next/link';

export function SiteHeader() {
  return <header className="sticky top-0 z-20 border-b border-stone-200 bg-[#fffaf5]/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight">
        <Image src="/icon.svg" alt="" width={30} height={30} priority />
        <span>Undercover <span className="text-brand">Fact Police</span></span>
      </Link>
      <nav className="hidden gap-6 text-sm font-semibold md:flex" aria-label="Primary navigation">
        <Link href="/tea">What&apos;s the Tea?</Link>
        <Link href="/offender-registry">Offender Registry</Link>
        <Link href="/the-deal">The Deal</Link>
      </nav>
      <div className="flex gap-2">
        <Link className="rounded-full px-4 py-2 text-sm font-semibold" href="/login">Log in</Link>
        <Link className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white" href="/snitch">Snitch</Link>
      </div>
    </div>
  </header>;
}
