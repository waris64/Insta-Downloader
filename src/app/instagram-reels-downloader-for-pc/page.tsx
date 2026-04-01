import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Reels Downloader for PC — Download on Windows & Mac",
  description: "Download Instagram Reels on your Windows PC or Mac. No software to install — works directly in Chrome, Firefox, and Edge.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/instagram-reels-downloader-for-pc",
  },
  openGraph: {
    title: "Instagram Reels Downloader for PC — Download on Windows & Mac",
    description: "Download Instagram Reels on your Windows PC or Mac. No software to install — works directly in Chrome, Firefox, and Edge.",
    url: "https://insta-downloader-kappa.vercel.app/instagram-reels-downloader-for-pc",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "Reels Downloader for PC", "item": "https://insta-downloader-kappa.vercel.app/instagram-reels-downloader-for-pc" }
  ]
};

export default function PcGuidePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Reels Downloader for PC</span>
        </nav>

        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">PC Guide · Last updated: April 2025</p>
        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">
          Instagram Reels Downloader for PC — Windows and Mac
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Downloading Instagram Reels on a desktop or laptop is often more convenient than on mobile — you get a larger
          screen, faster storage writes, and easier file management.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">How to Download Reels on Windows</h2>
        <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400 mb-10">
          <li>Open Chrome, Firefox, or Edge.</li>
          <li>Go to Instagram (instagram.com) and find the Reel you want.</li>
          <li>Copy the URL from the address bar (Ctrl+C or right-click &gt; Copy). Alternatively, click the three-dot menu on the Reel and select <strong>Copy Link</strong>.</li>
          <li>Open a new tab and go to <Link href="/" className="text-indigo-500 hover:underline">our free Instagram Reels downloader</Link>.</li>
          <li>Paste the URL into the input box (Ctrl+V).</li>
          <li>Click Download.</li>
          <li>Your browser's download manager saves the MP4 to your Downloads folder.</li>
        </ol>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          The file is ready immediately. No software installation, no browser extension, no account required.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">How to Download Reels on Mac</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          The process is identical to Windows. In Safari on Mac, the download appears in your Downloads folder
          (accessible via Finder &gt; Downloads or the arrow icon in the Safari toolbar).
          If Safari asks you what to do with the file, choose <strong>Allow</strong> and the download will proceed.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Organising Your Downloaded Reels on PC</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          If you download Reels regularly, consider creating a dedicated folder structure:
        </p>
        <div className="p-4 rounded-xl bg-zinc-100 dark:bg-white/5 font-mono text-sm text-zinc-700 dark:text-zinc-300 mb-10">
          <p>Documents/</p>
          <p className="ml-4">Instagram Reels/</p>
          <p className="ml-8">Recipes/</p>
          <p className="ml-8">Workouts/</p>
          <p className="ml-8">Funny/</p>
          <p className="ml-8">Saved for reference/</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-10">Can I Download Reels in 4K or Higher Resolution?</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Instagram does not store Reels in 4K. The maximum resolution Instagram uses for Reels is 1080 × 1920 pixels
          (1080p vertical). Any downloader claiming to provide 4K downloads is misleading you. The file you receive
          from an honest tool will be the same 1080p file Instagram stores.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Browser Extensions vs. Online Tools</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Browser extensions that download Instagram videos exist for Chrome and Firefox. They offer convenience
          (one-click from any Instagram page) but carry two risks:
        </p>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 mb-4">
          <li className="flex gap-2"><span className="text-red-400 font-bold flex-shrink-0">✗</span> Extensions require broad permissions to read page data — a poorly coded or malicious extension can read every page you visit.</li>
          <li className="flex gap-2"><span className="text-red-400 font-bold flex-shrink-0">✗</span> Extensions break when Instagram updates its internal page structure, leaving you with a broken tool until the developer pushes an update.</li>
        </ul>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
          An online tool like ours has neither problem. No permissions are granted to any extension, and updates are
          made server-side without requiring you to do anything.
        </p>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10 mt-10">
          <p className="font-bold mb-4">Related Guides</p>
          <div className="flex flex-col gap-3">
            <Link href="/how-to-download-instagram-reels" className="text-indigo-500 hover:underline font-medium">→ Complete guide to downloading Instagram Reels</Link>
            <Link href="/how-to-download-instagram-reels-without-watermark" className="text-indigo-500 hover:underline font-medium">→ Download without watermark</Link>
            <Link href="/" className="text-indigo-500 hover:underline font-medium">→ Use our free Instagram Reels downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
