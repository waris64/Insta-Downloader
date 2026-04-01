import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels on iPhone — iOS Guide 2025",
  description: "Save Instagram Reels directly to your iPhone camera roll. Works on iOS 16, 17, and 18 without jailbreaking or extra apps.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels-on-iphone",
  },
  openGraph: {
    title: "How to Download Instagram Reels on iPhone — iOS Guide 2025",
    description: "Save Instagram Reels directly to your iPhone camera roll. Works on iOS 16, 17, and 18 without jailbreaking or extra apps.",
    url: "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels-on-iphone",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "How to Download Instagram Reels", "item": "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels" },
    { "@type": "ListItem", "position": 3, "name": "iPhone Guide", "item": "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels-on-iphone" }
  ]
};

export default function IphoneGuidePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/how-to-download-instagram-reels" className="hover:text-indigo-500 transition-colors">How to Download</Link>
          <span className="mx-2">/</span>
          <span>iPhone</span>
        </nav>

        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">iPhone Guide · Last updated: April 2025</p>
        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">
          How to Download Instagram Reels on iPhone (iOS 2025)
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Saving an Instagram Reel to your iPhone's camera roll is slightly different from Android because of how iOS
          handles file downloads in Safari and Chrome. This guide walks you through the cleanest method for each browser.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Downloading with Safari on iPhone</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Safari does not automatically play video downloads in the browser. When you tap Download on{" "}
          <Link href="/" className="text-indigo-500 hover:underline">our free Instagram Reels downloader</Link>:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400 mb-10">
          <li>A download indicator appears in the top-right of Safari (a down-arrow icon in the address bar area).</li>
          <li>Tap that icon to open Downloads.</li>
          <li>Long-press the downloaded .mp4 file.</li>
          <li>Tap <strong>"Share"</strong> and then <strong>"Save Video."</strong></li>
          <li>The Reel is now in your Photos app under Recents.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4 mt-10">Downloading with Chrome on iPhone</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Chrome on iOS saves files to the app's internal Files folder:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400 mb-10">
          <li>Tap the Download button on the tool page.</li>
          <li>Chrome will show a <strong>"Download Complete"</strong> banner at the bottom.</li>
          <li>Tap the banner to open the file in Chrome's Downloads section.</li>
          <li>Tap the share icon (box with arrow) and select <strong>"Save Video"</strong> to move it to Photos, or <strong>"Save to Files"</strong> for the Files app.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4 mt-10">Downloading with Firefox on iPhone</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Firefox prompts you immediately: select <strong>"Download File."</strong> Then open the Downloads panel from
          the menu and tap <strong>"Share"</strong> to save to Photos.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Tips for iPhone Users</h2>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 mb-10">
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> <span><strong>Keep enough storage free:</strong> MP4 files from Instagram are typically between 5MB and 50MB depending on Reel length and quality.</span></li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> <span><strong>Use WiFi:</strong> Downloading over mobile data works but may be slower and count against your data plan.</span></li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> <span><strong>iOS 17+ shortcut:</strong> In iOS 17 and later, you can long-press any video playing in Safari and select "Download Video" directly, bypassing the share sheet steps.</span></li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-10">Frequently Asked Questions — iPhone</h2>
        <div className="space-y-4 mb-12">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5">
            <p className="font-bold mb-1">Can I download Reels without the Instagram app installed?</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Yes. The downloader tool works entirely in your browser. You do not need the Instagram app installed.</p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5">
            <p className="font-bold mb-1">Why does my download save as a .bin or unknown file type?</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">This sometimes happens when iOS mis-identifies the MIME type. Open Files app, find the downloaded file, rename it with a .mp4 extension, and it should play correctly.</p>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10 mt-10">
          <p className="font-bold mb-4">Related Guides</p>
          <div className="flex flex-col gap-3">
            <Link href="/how-to-download-instagram-reels-on-android" className="text-indigo-500 hover:underline font-medium">→ Download Reels on Android</Link>
            <Link href="/how-to-download-instagram-reels-without-watermark" className="text-indigo-500 hover:underline font-medium">→ Download without watermark</Link>
            <Link href="/" className="text-indigo-500 hover:underline font-medium">→ Use our free Instagram Reels downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
