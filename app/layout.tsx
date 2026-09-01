import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { AuthProvider } from '@/components/auth-provider';

const description = 'No corporate filters. No bought-off stars. Just CIs dropping verified paperwork on local businesses so you know who to trust!';

export const metadata: Metadata = {
  metadataBase: new URL('https://my2cents-ten.vercel.app'),
  title: 'Unsolicited Advice | Give us your two cents',
  description,
  manifest: '/manifest.json',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png' },
  openGraph: {
    url: '/',
    title: 'Unsolicited Advice | Community-driven feedback platform',
    description,
    images: [{ url: '/ytbannerUA.png', width: 2106, height: 506, alt: 'Unsolicited Advice — Drop a Dime, My Two Cents.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unsolicited Advice | Community-driven feedback platform',
    description,
    images: [{ url: '/ytbannerUA.png', width: 2106, height: 506, alt: 'Unsolicited Advice — Drop a Dime, My Two Cents.' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><AuthProvider><SiteHeader />{children}<SiteFooter /></AuthProvider><script dangerouslySetInnerHTML={{ __html: "if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')" }} /></body></html>;
}
