import Link from 'next/link';
import { businesses } from '@/lib/data';

export default function Snitch() {
  return <main className="mx-auto max-w-2xl px-4 py-12">
    <p className="eyebrow text-[#b85036]">FILE COMMUNITY INTELLIGENCE</p>
    <h1 className="mt-3 font-serif text-5xl font-semibold">Snitch</h1>
    <p className="mt-4 max-w-2xl text-lg leading-7 text-stone-600">Tell the community what happened. Keep your story specific, factual, and useful.</p>
    <form className="mt-10 space-y-5 rounded-3xl bg-white p-6 ring-1 ring-stone-200 md:p-8">
      <label className="block font-bold">Which Jacket is this about?
        <select name="businessId" required className="mt-2 block w-full rounded-lg border border-stone-300 bg-white p-3" defaultValue="">
          <option value="" disabled>Select a Jacket</option>
          {businesses.map((business) => <option key={business.id} value={business.id}>{business.name} · {business.location}</option>)}
        </select>
      </label>
      <label className="block font-bold">Report title
        <input name="title" required className="mt-2 w-full rounded-lg border border-stone-300 p-3" placeholder="Sum up your experience" />
      </label>
      <label className="block font-bold">Your story
        <textarea name="story" required className="mt-2 min-h-40 w-full rounded-lg border border-stone-300 p-3" placeholder="What happened? Include the details, dates, and resolution that the next person should know." />
      </label>
      <label className="block font-bold">Your field rating
        <select name="rating" required className="mt-2 block w-full rounded-lg border border-stone-300 bg-white p-3" defaultValue="">
          <option value="" disabled>Select a rating</option>
          <option value="5">★★★★★ Excellent</option>
          <option value="4">★★★★ Good</option>
          <option value="3">★★★ Fair</option>
          <option value="2">★★ Poor</option>
          <option value="1">★ Needs attention</option>
        </select>
      </label>
      <label className="block font-bold">Photos <span className="font-normal text-stone-500">(optional)</span>
        <input name="photos" className="mt-2 block text-sm" type="file" accept="image/*" multiple />
      </label>
      <Link href="/login" className="block w-full rounded-xl bg-[#10221e] py-3 text-center font-bold text-white">Sign in to file your report</Link>
      <p className="text-center text-xs leading-5 text-stone-500">Reports publish under your CI profile after sign-in. One report per Jacket; you can edit yours later.</p>
    </form>
  </main>;
}
