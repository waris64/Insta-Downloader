import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels to Your Phone or PC (2025)",
  description: "Step-by-step guide to downloading Instagram Reels on iPhone, Android, and PC — save any Reel as MP4 for free without installing an app.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels",
  },
  openGraph: {
    title: "How to Download Instagram Reels to Your Phone or PC (2025)",
    description: "Step-by-step guide to downloading Instagram Reels on iPhone, Android, and PC — save any Reel as MP4 for free without installing an app.",
    url: "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "How to Download Instagram Reels", "item": "https://insta-downloader-kappa.vercel.app/how-to-download-instagram-reels" }
  ]
};

export default function HowToDownloadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>How to Download Instagram Reels</span>
        </nav>

        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">Guide · Last updated: April 2025</p>
        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">
          How to Download Instagram Reels — Complete Guide for 2025
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Instagram Reels are short-form videos that disappear from your feed the moment you scroll past them.
          Whether you want to save a recipe, a workout tutorial, or a funny clip to share with friends offline,
          downloading a Reel is simpler than most people realise. This guide covers every method — on iPhone,
          Android, desktop browser, and through an online downloader — so you can pick the one that fits your situation.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Method 1 — Using an Online Reels Downloader (Fastest)</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          The quickest way to save a Reel without installing anything is an online downloader tool. Here is how:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400 mb-6">
          <li>Open Instagram and find the Reel you want to save.</li>
          <li>Tap the three-dot menu (the <strong>...</strong> icon) in the bottom-right corner of the Reel.</li>
          <li>Select <strong>Copy Link</strong>.</li>
          <li>Open your browser and go to <Link href="/" className="text-indigo-500 hover:underline">our free Instagram Reels downloader</Link>.</li>
          <li>Paste the link into the input box.</li>
          <li>Tap or click the Download button.</li>
          <li>The video will save to your device's default download location.</li>
        </ol>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          This method works on every device and does not require an Instagram login or any browser extension.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Method 2 — Screenshot or Screen Recording</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          If you only want a clip for personal use and quality is not critical, iOS and Android both have built-in screen recording.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">
          <strong>On iPhone:</strong> Swipe into Control Centre and tap the screen record button. Play the Reel and stop recording when done. The video saves to Photos.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          <strong>On Android:</strong> Pull down the notification shade, find Screen Record, and follow the same steps. Exact steps vary slightly by manufacturer.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Note: Screen recordings capture the full screen, including any UI overlays. For a clean video file, the online downloader method above produces better results.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Method 3 — Instagram's Native Save Feature</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Instagram lets you bookmark Reels to a private collection inside the app. This does not download the file
          to your device — the saved Reel is only accessible within Instagram while the original is online.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          To save a Reel inside Instagram: tap the bookmark icon below the Reel. Access it later under your profile &gt; Saved.
          This is useful for re-watching Reels later but useless if you need the file for offline viewing or sharing outside Instagram.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Why MP4 Is the Best Format for Downloaded Reels</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Instagram stores Reels internally as MP4 files with H.264 encoding. When you download through an online tool
          that fetches the original file, you get the exact same format Instagram uses internally. MP4 is universally
          playable on iPhone, Android, Windows, Mac, smart TVs, and every major media player. No conversion is needed.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Common Problems and Fixes</h2>
        <div className="space-y-4 mb-12">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5">
            <p className="font-bold mb-1">Problem: "This video is unavailable"</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Fix: The account is set to private. Only Reels from public accounts can be downloaded externally.</p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5">
            <p className="font-bold mb-1">Problem: Download starts but file won't play</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Fix: The download may have been interrupted. Try again on a stable WiFi connection. If it still fails, try a different browser.</p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5">
            <p className="font-bold mb-1">Problem: Downloaded video has no sound</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Fix: Some Reels use copyrighted music that Instagram strips from external requests. The original Reel may still have audio in-app.</p>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10 mt-10">
          <p className="font-bold mb-4">Related Guides</p>
          <div className="flex flex-col gap-3">
            <Link href="/how-to-download-instagram-reels-on-iphone" className="text-indigo-500 hover:underline font-medium">
              → How to download Reels on iPhone (iOS 2025)
            </Link>
            <Link href="/how-to-download-instagram-reels-on-android" className="text-indigo-500 hover:underline font-medium">
              → How to download Reels on Android (All Brands)
            </Link>
            <Link href="/how-to-download-instagram-reels-without-watermark" className="text-indigo-500 hover:underline font-medium">
              → Download Instagram Reels without watermark
            </Link>
            <Link href="/" className="text-indigo-500 hover:underline font-medium">
              → Use our free Instagram Reels downloader
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
