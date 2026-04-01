import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Instagram Reels Downloader",
  description: "Learn about our free Instagram Reels downloader tool, why we built it, and our commitment to user privacy.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://insta-downloader-kappa.vercel.app/about" }
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>About</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">About This Tool</h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          This Instagram Reels Downloader is a free, browser-based tool built for people who want to save videos
          they love without the friction of app installs, account creation, or paid subscriptions.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Why We Built This</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Reels are one of the fastest-growing content formats on the internet. Creators post tutorials, recipes,
          comedy sketches, educational explainers, and news commentary in 15 to 90-second clips. But Instagram does
          not offer a native download option for viewers. If a creator deletes their Reel, or if you want to save a
          video to show someone who is not on Instagram, you are out of luck — unless you use a downloader.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          We built this tool to solve that problem cleanly. No ads covering the screen. No email required. No countdown
          timers. Just paste, click, download.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Our Approach to Privacy</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          We do not log the URLs you paste into the tool. We do not store downloaded files on our servers after delivery.
          We do not sell or share any data with third parties. For a full breakdown, see our{" "}
          <Link href="/privacy-policy" className="text-indigo-500 hover:underline">Privacy Policy</Link>.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Contact</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
          If you encounter a bug, have a feature request, or want to report an issue with a specific download,
          you can reach us at:{" "}
          <a href="mailto:warismuhammad652@gmail.com" className="text-indigo-500 hover:underline">
            warismuhammad652@gmail.com
          </a>
        </p>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-indigo-500">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-indigo-500">Terms of Service</Link>
            <Link href="/dmca" className="hover:text-indigo-500">DMCA</Link>
            <Link href="/" className="hover:text-indigo-500">← Back to Downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
