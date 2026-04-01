import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels on Android — Free & Fast 2025",
  description: "Download Instagram Reels to your Android phone in HD MP4. Works on Samsung, Pixel, OnePlus, and all Android browsers.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels-on-android",
  },
  openGraph: {
    title: "How to Download Instagram Reels on Android — Free & Fast 2025",
    description: "Download Instagram Reels to your Android phone in HD MP4. Works on Samsung, Pixel, OnePlus, and all Android browsers.",
    url: "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels-on-android",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "How to Download Instagram Reels", "item": "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels" },
    { "@type": "ListItem", "position": 3, "name": "Android Guide", "item": "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels-on-android" }
  ]
};

export default function AndroidGuidePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/how-to-download-instagram-reels" className="hover:text-indigo-500 transition-colors">How to Download</Link>
          <span className="mx-2">/</span>
          <span>Android</span>
        </nav>

        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">Android Guide · Last updated: April 2025</p>
        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">
          How to Download Instagram Reels on Android (All Brands, 2025)
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Android is generally more flexible than iPhone when it comes to downloading files from the browser. Most Android
          browsers save MP4 files directly to the Downloads folder, which you can access from Files or Gallery.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Step-by-Step on Android (Chrome)</h2>
        <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400 mb-10">
          <li>Copy the Reel link from Instagram (tap <strong>...</strong> &gt; Copy Link).</li>
          <li>Open Chrome and go to <Link href="/" className="text-indigo-500 hover:underline">our free Instagram Reels downloader</Link>.</li>
          <li>Paste the link and tap Download.</li>
          <li>Chrome will show a download notification in the status bar.</li>
          <li>When complete, open your Files app or Gallery. The video appears in the Downloads folder.</li>
          <li>If it does not appear in Gallery automatically, open Files, find the MP4 in Downloads, long-press it, and move it to your DCIM folder so Gallery picks it up.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4 mt-10">Step-by-Step on Samsung Internet</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Samsung Internet browser handles downloads identically to Chrome but saves to Samsung's My Files app instead.
          Follow the same steps above and find the file in <strong>My Files &gt; Downloads</strong>.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Step-by-Step on Firefox for Android</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Firefox on Android has its own download manager. After tapping Download on the tool page, Firefox shows a
          progress bar at the bottom. Tap the completed download to open it directly in your video player, or navigate
          to it via <strong>Files &gt; Downloads</strong>.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Allowing Downloads on Android (Permissions)</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          If your browser asks for storage permission when you tap Download, tap <strong>Allow</strong>. Without this
          permission, the browser cannot write the file to your storage. You can manage these permissions later under
          Settings &gt; Apps &gt; [Browser Name] &gt; Permissions &gt; Storage.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Android vs iPhone — Key Differences</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
          Android saves to a Downloads folder that is accessible by all apps. iPhone keeps downloads inside the
          browser's sandbox unless you explicitly share them to Photos or Files. This makes Android slightly faster
          to use for downloading multiple Reels.
        </p>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10 mt-10">
          <p className="font-bold mb-4">Related Guides</p>
          <div className="flex flex-col gap-3">
            <Link href="/how-to-download-instagram-reels-on-iphone" className="text-indigo-500 hover:underline font-medium">→ Download Reels on iPhone</Link>
            <Link href="/how-to-download-instagram-reels-without-watermark" className="text-indigo-500 hover:underline font-medium">→ Download without watermark</Link>
            <Link href="/" className="text-indigo-500 hover:underline font-medium">→ Use our free Instagram Reels downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
