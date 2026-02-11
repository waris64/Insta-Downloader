import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://insta-downloader-kappa.vercel.app'),
  title: {
    default: "InstaSaver - Premium Instagram Reel Downloader",
    template: "%s | InstaSaver"
  },
  description: "Download Instagram reels, stories, and carousels in full HD quality. Fast, secure, free, and no login required. The best tool for saving Instagram content.",
  keywords: ["instagram downloader", "reels downloader", "download instagram videos", "instagram story saver", "instagram carousel downloader", "save reels", "insta video saver"],
  authors: [{ name: "InstaSaver Team" }],
  creator: "InstaSaver Team",
  publisher: "InstaSaver",
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
  verification: {
    other: {
      'msvalidate.01': 'PLACEHOLDER_BING_VERIFICATION_CODE', // User to replace this
    },
  },
  openGraph: {
    title: 'InstaSaver - Premium Instagram Reel Downloader',
    description: 'Download Instagram reels, stories, and carousels in full HD quality. Fast, secure, and easy to use.',
    url: 'https://insta-downloader-kappa.vercel.app',
    siteName: 'InstaSaver',
    images: [
      {
        url: '/og-image.png', // Needs to be added to public
        width: 1200,
        height: 630,
        alt: 'InstaSaver - Download Instagram Reels',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaSaver - Premium Instagram Reel Downloader',
    description: 'The fastest way to download Instagram reels, photos, and stories.',
    images: ['/og-image.png'],
    creator: '@instasaver', // Placeholder
  },
  appleWebApp: {
    title: 'InstaSaver',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  alternates: {
    canonical: 'https://insta-downloader-kappa.vercel.app',
  },
  applicationName: 'InstaSaver',
  category: 'utilities',
};

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://scontent.cdninstagram.com" />
        <link rel="preconnect" href="https://instagram.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

