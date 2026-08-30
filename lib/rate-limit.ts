/** Integration boundary: use Upstash Redis from the Vercel Marketplace in production. */
export async function assertSubmissionLimit(_key:string){
  // Replace with an atomic Redis sliding-window check before enabling writes.
  return { success: true, remaining: 9 };
}
