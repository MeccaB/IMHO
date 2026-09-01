'use client';

import { useState } from 'react';
import type { ChangeEvent } from 'react';

const maxEvidenceBytes = 25 * 1024 * 1024;
const acceptedTypes = new Set(['image/jpeg', 'image/png', 'video/mp4', 'application/pdf']);
type Jacket = { id: string; name: string; location: string };

export function SnitchForm({ businesses }: { businesses: Jacket[] }) {
  const [creatingJacket, setCreatingJacket] = useState(false);
  const [evidenceError, setEvidenceError] = useState('');

  function validateEvidence(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    const invalid = files.find((file) => !acceptedTypes.has(file.type) || file.size > maxEvidenceBytes);
    if (invalid) {
      event.target.value = '';
      setEvidenceError('Use JPG/JPEG, PNG, MP4, or PDF evidence only; each file must be 25 MB or smaller. Executable files are not accepted.');
      return;
    }
    setEvidenceError('');
  }

  return <form className="mt-10 space-y-5 rounded-3xl bg-white p-6 ring-1 ring-stone-200 md:p-8">
    <label className="block font-bold">Which Jacket is this about?
      <select name="businessId" required disabled={creatingJacket} className="mt-2 block w-full rounded-lg border border-stone-300 bg-white p-3 disabled:bg-stone-100" defaultValue="">
        <option value="" disabled>Select an existing Jacket</option>
        {businesses.map((business) => <option key={business.id} value={business.id}>{business.name} · {business.location}</option>)}
      </select>
    </label>
    <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-[#f7f1e8] p-4 font-bold"><input name="createJacket" type="checkbox" checked={creatingJacket} onChange={(event) => setCreatingJacket(event.target.checked)} /> I need to create a new Jacket</label>
    {creatingJacket && <fieldset className="space-y-5 rounded-2xl border border-stone-200 bg-[#f7f1e8] p-5"><legend className="px-2 font-bold">New Jacket details</legend><label className="block font-bold">Business or service name<input name="businessName" required className="mt-2 w-full rounded-lg border border-stone-300 bg-white p-3" placeholder="Name of the business or service" /></label><label className="block font-bold">Street address<input name="address" required className="mt-2 w-full rounded-lg border border-stone-300 bg-white p-3" placeholder="Street address" /></label><div className="grid gap-5 sm:grid-cols-[1fr_120px]"><label className="block font-bold">City and state<input name="cityState" required className="mt-2 w-full rounded-lg border border-stone-300 bg-white p-3" placeholder="City, ST" /></label><label className="block font-bold">ZIP code<input name="zip" required inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" className="mt-2 w-full rounded-lg border border-stone-300 bg-white p-3" placeholder="00000" /></label></div><label className="block font-bold">Phone number<input name="phone" required type="tel" className="mt-2 w-full rounded-lg border border-stone-300 bg-white p-3" placeholder="(555) 555-5555" /></label></fieldset>}
    <label className="block font-bold">Report title<input name="title" required minLength={3} maxLength={120} className="mt-2 w-full rounded-lg border border-stone-300 p-3" placeholder="Sum up your experience" /></label>
    <label className="block font-bold">Your story <span className="font-normal text-stone-500">(minimum 300 characters)</span><textarea name="story" required minLength={300} maxLength={5000} className="mt-2 min-h-48 w-full rounded-lg border border-stone-300 p-3" placeholder="What happened? Include the details, dates, and resolution that the next person should know." /></label>
    <label className="block font-bold">Your field rating<select name="rating" required className="mt-2 block w-full rounded-lg border border-stone-300 bg-white p-3" defaultValue=""><option value="" disabled>Select a rating</option><option value="5">★★★★★ Excellent</option><option value="4">★★★★ Good</option><option value="3">★★★ Fair</option><option value="2">★★ Poor</option><option value="1">★ Needs attention</option></select></label>
    <label className="block font-bold">Evidence files <span className="text-[#b85036]">(required)</span><input name="evidence" required className="mt-2 block w-full text-sm" type="file" accept="image/jpeg,image/png,video/mp4,application/pdf" multiple onChange={validateEvidence} /><span className="mt-2 block text-sm font-normal text-stone-500">JPG/JPEG, PNG, MP4 video, or PDF receipts/documents only. Maximum 25 MB per file. Executable files, including .exe, are blocked.</span>{evidenceError && <span className="mt-2 block text-sm text-[#b85036]" role="alert">{evidenceError}</span>}</label>
    <label className="block font-bold">TikTok or YouTube link <span className="font-normal text-stone-500">(optional)</span><input name="videoUrl" type="url" className="mt-2 w-full rounded-lg border border-stone-300 p-3" placeholder="https://www.tiktok.com/... or https://youtube.com/..." /><span className="mt-2 block text-sm font-normal text-stone-500">Provide a public TikTok or YouTube URL. Video links do not replace the required evidence file.</span></label>
    <a href="/login" className="block w-full rounded-xl bg-[#10221e] py-3 text-center font-bold text-white">Sign in to file your report</a>
    <p className="text-center text-xs leading-5 text-stone-500">Virus scanning will be enforced before uploads are stored once the secure server upload flow is connected.</p>
  </form>;
}
