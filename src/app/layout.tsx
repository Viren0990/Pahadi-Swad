import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "Pahadi Swad - Authentic Homemade Pickles, Masalas & Papads from Bageshwar",
    template: "%s | Pahadi Swad" // For page-specific titles
  },
  description: "Discover authentic homemade pickles, masalas, and papads from Bageshwar, Uttarakhand. Made by 25 women artisans with traditional recipes. No preservatives, 100% natural. Shop traditional Pahadi flavors online.",
  
  // Keywords for SEO
  keywords: [
    "pahadi swad",
    "bageshwar pickles",
    "homemade achaar",
    "uttarakhand pickles",
    "pahadi achar",
    "homemade masala",
    "traditional indian pickles",
    "natural pickles online",
    "pahadi papad",
    "women empowerment food business",
    "himalayan pickles",
    "preservative free pickles",
    "bageshwar food products"
  ],

  // Author & Creator
  authors: [{ name: "Pahadi Swad" }],
  creator: "Pahadi Swad - Women's Empowerment Initiative",

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pahadi-swad.in", // Replace with your actual domain
    siteName: "Pahadi Swad",
    title: "Pahadi Swad - Authentic Homemade Pickles & Masalas from Bageshwar",
    description: "Traditional homemade pickles, masalas & papads from Bageshwar, Uttarakhand. Made by 25 women artisans. 100% natural, no preservatives.",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "Pahadi Swad - Traditional Homemade Pickles from Bageshwar"
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Pahadi Swad - Authentic Homemade Pickles from Bageshwar",
    description: "Traditional homemade pickles, masalas & papads. Made by 25 women artisans in Bageshwar, Uttarakhand.",
    images: ["/og-image.png"], // Same as Open Graph
  },

  // Robots (allow indexing)
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

  // Verification (add later when you set up)
  // verification: {
  //   google: "your-google-verification-code",
  // },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest for PWA (optional)
  manifest: "/manifest.json",

  // Additional metadata
  category: "Food & Beverages",
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pahadi Swad",
              description: "Authentic homemade pickles, masalas and papads from Bageshwar, Uttarakhand",
              url: "https://pahadi-swad.in",
              telephone: "+91-9410774291",
              email: "sunitav.4291@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "D.N.U.L.M. Nagar Palika Parishad",
                addressLocality: "Bageshwar",
                addressRegion: "Uttarakhand",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.8390",
                longitude: "79.7719"
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00"
              },
              priceRange: "₹₹",
              servesCuisine: "Indian",
              founder: {
                "@type": "Person",
                name: "Sunita Verma"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
