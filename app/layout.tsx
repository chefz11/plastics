import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://plastics.zalbright.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Plastics - Zach Albright',
    template: '%s - Plastics',
  },
  description: 'Personal catalogue of building and learning with AI',
  keywords: ['AI projects', 'web development', 'vibe-coded', 'creative coding', 'experiments'],
  authors: [{ name: 'Zach Albright', url: 'https://zalbright.com' }],
  creator: 'Zach Albright',
  openGraph: {
    title: 'Plastics',
    description: 'Personal catalogue of building and learning with AI',
    url: siteUrl,
    siteName: 'Plastics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Plastics - AI Projects by Zach Albright',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plastics',
    description: 'Personal catalogue of building and learning with AI',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased">{children}</body>
    </html>
  );
}
