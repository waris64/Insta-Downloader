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
  metadataBase: new URL('https://instasaver.example.com'),
  title: "InstaSaver - Premium Instagram Reel Downloader",
  description: "Download Instagram reels, stories, and carousels in full HD quality. Fast, secure, and easy to use.",
  keywords: ["instagram downloader", "reels downloader", "download instagram videos", "instagram story saver", "instagram carousel downloader"],
  authors: [{ name: "InstaSaver Team" }],
  openGraph: {
    title: 'InstaSaver - Premium Instagram Reel Downloader',
    description: 'Download Instagram reels, stories, and carousels in full HD quality.',
    url: 'https://instasaver.example.com', // Replace with actual domain later
    siteName: 'InstaSaver',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'InstaSaver Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaSaver - Premium Instagram Reel Downloader',
    description: 'The fastest way to download Instagram reels, photos, and stories.',
    images: ['/icon-512x512.png'],
  },
  appleWebApp: {
    title: 'InstaSaver',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  alternates: {
    canonical: '/',
  },
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

