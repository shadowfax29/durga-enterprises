import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Durga Enterprises - Premium Furnishing & Flooring Solutions | Chairs, Sofas, Blinds, Vinyl Flooring',
  description: 'Transform your space with expert craftsmanship. We provide chairs, sofas, rolling blinds, vertical blinds, vinyl flooring, tiles, carpet rolls, and carpet tiles for residential and corporate spaces. Professional installation, competitive pricing, and warranty protection.',
  keywords: [
    'furniture supplier',
    'office chairs',
    'ergonomic chairs',
    'executive chairs',
    'sofas',
    'office sofas',
    'home furniture',
    'rolling blinds',
    'vertical blinds',
    'window blinds',
    'vinyl flooring',
    'vinyl flooring installation',
    'floor tiles',
    'wall tiles',
    'ceramic tiles',
    'carpet rolls',
    'carpet tiles',
    'commercial flooring',
    'residential flooring',
    'office furniture',
    'corporate furniture',
    'interior design',
    'home renovation',
    'office renovation',
    'flooring contractor',
    'furniture installation',
    'window treatments',
    'blinds installation',
    'carpet installation',
    'tile installation',
    'premium furniture',
    'quality flooring',
    'affordable furniture',
    'durga enterprises',
  ],
  authors: [{ name: 'Durga Enterprises' }],
  creator: 'Durga Enterprises',
  publisher: 'Durga Enterprises',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://durgaenterprises.com',
    siteName: 'Durga Enterprises',
    title: 'Durga Enterprises - Premium Furnishing & Flooring Solutions',
    description: 'Transform your space with expert craftsmanship. Quality furniture and flooring for homes and businesses. Chairs, sofas, blinds, vinyl flooring, tiles, and carpets.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Durga Enterprises - Premium Furnishing & Flooring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durga Enterprises - Premium Furnishing & Flooring Solutions',
    description: 'Quality furniture and flooring for homes and businesses. Professional installation and warranty protection.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        alt: 'Durga Enterprises',
      },
    ],
  },
  alternates: {
    canonical: 'https://durgaenterprises.com',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Durga Enterprises',
    description: 'Premium furnishing and flooring solutions for residential and corporate spaces',
    url: 'https://durgaenterprises.com',
    telephone: '+1-555-123-4567',
    email: 'info@durgaenterprises.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Design Avenue',
      addressLocality: 'Business District',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    image: 'https://bolt.new/static/og_default.png',
    sameAs: [
      'https://facebook.com/durgaenterprises',
      'https://instagram.com/durgaenterprises',
      'https://linkedin.com/company/durgaenterprises',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Furnishing and Flooring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office Chairs and Furniture',
            description: 'Premium office chairs, executive chairs, and sofas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Blinds',
            description: 'Rolling blinds and vertical blinds installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Flooring Solutions',
            description: 'Vinyl flooring, tiles, carpet rolls, and carpet tiles',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
