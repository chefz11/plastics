import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Plastics - Zach Albright',
  description: 'Personal catalogue of building and learning with AI',
  keywords: ['portfolio', 'web development', 'vibe-coded', 'projects'],
  authors: [{ name: 'Zach Albright' }],
  openGraph: {
    title: 'Plastics Portfolio',
    description: 'AI projects by Zach Albright',
    url: 'https://plastics.zalbright.com',
    siteName: 'Plastics',
    type: 'website',
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
