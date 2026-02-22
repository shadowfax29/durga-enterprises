import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Durga Enterprises - Premium Furnishing & Flooring Solutions',
  description: 'Transform your space with expert craftsmanship. We provide chairs, sofas, blinds, vinyl flooring, tiles, and carpet solutions for homes and corporate spaces.',
  openGraph: {
    title: 'Durga Enterprises - Premium Furnishing & Flooring Solutions',
    description: 'Transform your space with expert craftsmanship. Quality furniture and flooring for homes and businesses.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durga Enterprises - Premium Furnishing & Flooring Solutions',
    description: 'Quality furniture and flooring for homes and businesses.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
