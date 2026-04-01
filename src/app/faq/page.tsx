import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Instagram Reels Downloader Questions Answered",
  description: "Answers to the most common questions about downloading Instagram Reels: legality, quality, privacy, device compatibility.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/faq",
  },
  openGraph: {
    title: "FAQ — Instagram Reels Downloader Questions Answered",
    description: "Answers to the most common questions about downloading Instagram Reels: legality, quality, privacy, device compatibility.",
    url: "https://insta-downloader-kappa.vercel.app/faq",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://insta-downloader-kappa.vercel.app/faq" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is it legal to download Instagram Reels?", "acceptedAnswer": { "@type": "Answer", "text": "Downloading Reels for personal offline viewing is generally considered fair use in most countries. However, redistributing, re-uploading, or monetizing someone else's content without their permission may violate Instagram's Terms of Service and copyright law. Always respect the original creator's rights." } },
    { "@type": "Question", "name": "Why is my download link not working?", "acceptedAnswer": { "@type": "Answer", "text": "The most common reason is a private account. This tool can only download Reels from public Instagram profiles. If the account is set to private, the link will not work. Also make sure you are pasting the full URL including 'https://'." } },
    { "@type": "Question", "name": "What video quality does the download come in?", "acceptedAnswer": { "@type": "Answer", "text": "The tool downloads the highest quality version Instagram makes available for that Reel, which is typically 1080p MP4." } },
    { "@type": "Question", "name": "Does this tool work on iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. On iPhone, after tapping Download, you may need to tap the share icon and choose Save to Files or Save Video depending on your iOS version and browser." } },
    { "@type": "Question", "name": "Is my data safe?", "acceptedAnswer": { "@type": "Answer", "text": "This tool does not store, log, or share the URLs you paste. The request is processed server-side and the video link is returned directly to your browser. No personal information is collected." } },
    { "@type": "Question", "name": "Can I download Reels without a watermark?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike some tools that re-encode the video with a watermark, this downloader fetches the original file from Instagram's servers." } },
    { "@type": "Question", "name": "How many Reels can I download per day?", "acceptedAnswer": { "@type": "Answer", "text": "There is no hard limit. You can download as many Reels as you need." } },
    { "@type": "Question", "name": "Does this work for Instagram Stories or Posts too?", "acceptedAnswer": { "@type": "Answer", "text": "Currently this tool is optimised specifically for Reels. Instagram Stories expire after 24 hours and have different URL structures." } },
    { "@type": "Question", "name": "Can I download Reels from private accounts?", "acceptedAnswer": { "@type": "Answer", "text": "No. Instagram does not provide access to content from private accounts to external tools. Only public Reels can be downloaded." } },
  ]
};

const faqs = [
  { q: "Is it legal to download Instagram Reels?", a: "Downloading Reels for personal offline viewing is generally considered fair use in most countries. However, redistributing, re-uploading, or monetizing someone else's content without their permission may violate Instagram's Terms of Service and copyright law. Always respect the original creator's rights." },
  { q: "Why is my download link not working?", a: "The most common reason is a private account. This tool can only download Reels from public Instagram profiles. If the account is set to private, the link will not work. Also make sure you are pasting the full URL including 'https://'." },
  { q: "What video quality does the download come in?", a: "The tool downloads the highest quality version Instagram makes available for that Reel, which is typically 1080p MP4. Quality depends on the original upload — if the creator uploaded in lower quality, the download will reflect that." },
  { q: "Does this tool work on iPhone?", a: "Yes. On iPhone, after tapping Download, you may need to tap the share icon and choose 'Save to Files' or 'Save Video' depending on your iOS version and browser. Safari users may need to long-press the video and select 'Download Linked File'." },
  { q: "Is my data safe?", a: "This tool does not store, log, or share the URLs you paste. The request is processed server-side and the video link is returned directly to your browser. No personal information is collected." },
  { q: "Can I download Reels without a watermark?", a: "Yes. Unlike some tools that re-encode the video with a watermark, this downloader fetches the original file from Instagram's servers. The video you receive is the original file with no modifications." },
  { q: "How many Reels can I download per day?", a: "There is no hard limit. You can download as many Reels as you need. However, avoid automating requests at very high speed, as Instagram may temporarily throttle access to their servers." },
  { q: "Does this work for Instagram Stories or Posts too?", a: "Currently this tool is optimised specifically for Reels. Instagram Stories expire after 24 hours and have different URL structures. Instagram photo and carousel posts do not have a video file to download unless they contain a video component." },
  { q: "What countries is this available in?", a: "The tool has no geographic restrictions. It works anywhere you can access Instagram. If Instagram is blocked in your country, the tool will also be unable to reach Instagram's servers." },
  { q: "Why is the download button not working?", a: "Check that JavaScript is enabled in your browser — the tool requires it. Also check that you are pasting a complete Instagram URL that includes 'https://www.instagram.com/reel/'. URLs from the app may look different — ensure you use 'Copy Link' rather than copying from the share sheet." },
  { q: "Can I download Reels from private accounts?", a: "No. Instagram does not provide access to content from private accounts to external tools. Only public Reels can be downloaded." },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>FAQ</span>
        </nav>

        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">Last updated: April 2025</p>
        <h1 className="text-4xl font-black tracking-tight mb-4 leading-tight">
          Frequently Asked Questions About Our Instagram Reels Downloader
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
          Everything you need to know about downloading Instagram content safely and for free.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-200 dark:border-white/10 rounded-2xl p-6 bg-zinc-50 dark:bg-white/5">
              <h2 className="font-bold text-lg mb-2">{faq.q}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10 mt-12">
          <p className="font-bold mb-4">Still have questions?</p>
          <div className="flex flex-col gap-3">
            <Link href="/about" className="text-indigo-500 hover:underline font-medium">→ Contact us on the About page</Link>
            <Link href="/" className="text-indigo-500 hover:underline font-medium">→ Use our free Instagram Reels downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
