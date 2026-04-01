import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GlobalNav } from "@/components/global-nav";

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
    default: "Instagram Reels Downloader — Save Reels as MP4 Free (No Watermark)",
    template: "%s | InstaSaver"
  },
  description: "Download Instagram Reels videos as MP4 in HD quality — free, fast, and without watermarks. Paste any Reel URL and save it instantly.",
  keywords: [
    "instagram reels downloader",
    "download instagram reels",
    "save reels as mp4",
    "instagram video downloader no watermark",
    "reels downloader free",
    "download instagram stories",
    "instagram carousel downloader",
    "save instagram reels",
    "insta video saver",
    "download reels without watermark"
  ],
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
    google: '3vUa3U0fsnV31T9u7roUOFEgI3L0FYeStxaqTkuLfkY',
    other: {
      'msvalidate.01': 'D03EB7B4842348EE60188204405EB893',
    },
  },
  openGraph: {
    title: 'Instagram Reels Downloader — Free MP4 Download',
    description: 'Download any Instagram Reel as MP4 in HD. No watermark, no login, free forever.',
    url: 'https://insta-downloader-kappa.vercel.app',
    siteName: 'InstaSaver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InstaSaver — Download Instagram Reels Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Reels Downloader — Free MP4 Download',
    description: 'Download any Instagram Reel in HD. No watermark. No login.',
    images: ['/og-image.png'],
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
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
};

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
        <GlobalNav />
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
