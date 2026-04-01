import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA Policy — Instagram Reels Downloader",
  description: "Our DMCA takedown policy. If you are a content creator and need to request removal, contact us here.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/dmca",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "DMCA Policy", "item": "https://insta-downloader-kappa.vercel.app/dmca" }
  ]
};

export default function DmcaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>DMCA Policy</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">DMCA Policy</h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          InstaSaver respects the intellectual property rights of creators and complies with the Digital Millennium
          Copyright Act (DMCA).
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Reporting Copyright Infringement</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          If you are a copyright owner or authorised agent and believe that content accessible through this tool
          infringes your copyright, please submit a notice with:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-zinc-600 dark:text-zinc-400 mb-6">
          <li>Your full legal name and contact information.</li>
          <li>A description of the copyrighted work you claim has been infringed.</li>
          <li>The specific URL of the content in question.</li>
          <li>A statement that you have a good-faith belief that the disputed use is not authorised by the copyright owner, its agent, or the law.</li>
          <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf.</li>
          <li>Your physical or electronic signature.</li>
        </ol>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Send your notice to:{" "}
          <a href="mailto:warismuhammad652@gmail.com" className="text-indigo-500 hover:underline">
            warismuhammad652@gmail.com
          </a>
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Response Time</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          We will review all valid DMCA notices and respond within 5 business days. Repeat infringers will have
          access to this tool blocked.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Counter-Notices</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
          If you believe your content was removed or restricted in error, you may submit a counter-notice with the
          information required under 17 U.S.C. § 512(g)(3).
        </p>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-indigo-500">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-indigo-500">Terms of Service</Link>
            <Link href="/" className="hover:text-indigo-500">← Back to Downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
