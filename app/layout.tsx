import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const description = 'No corporate filters. No bought-off stars. Just CIs dropping verified paperwork on local businesses so you know who to trust!';

export const metadata: Metadata = {
  title: 'Unsolicited Advice | Give us your two cents',
  description,
  manifest: '/manifest.json',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Unsolicited Advice | My Two Cents',
    description,
    images: ['/ytbannerUA.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unsolicited Advice | My Two Cents',
    description,
    images: ['/ytbannerUA.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /><script dangerouslySetInnerHTML={{ __html: "if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')" }} /></body></html>;
}
