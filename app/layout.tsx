import type { Metadata } from 'next'; import './globals.css'; import {SiteHeader} from '@/components/site-header';
export const metadata:Metadata={title:'My Two Cents | Reviews that help',description:'Find local businesses through honest community reviews.',manifest:'/manifest.json'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}<script dangerouslySetInnerHTML={{__html:"if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')"}} /></body></html>}
