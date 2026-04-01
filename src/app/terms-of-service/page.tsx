import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Instagram Reels Downloader",
  description: "Terms and conditions for using our Instagram Reels downloader. Please read before using the tool.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/terms-of-service",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://insta-downloader-kappa.vercel.app/terms-of-service" }
  ]
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Terms of Service</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-2 leading-tight">Terms of Service</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: April 2025</p>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Please read these Terms of Service carefully before using InstaSaver. By using the Site, you agree to be
          bound by these terms.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Acceptable Use</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
          You may use this tool only for lawful purposes. Specifically, you agree:
        </p>
        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 mb-10">
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> Not to download content for redistribution, re-uploading, or commercial use without the explicit permission of the content creator.</li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> Not to use the tool to circumvent access controls on private content.</li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> Not to use automated scripts or bots to make bulk requests to the tool.</li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold flex-shrink-0">→</span> To respect Instagram's Terms of Service and the intellectual property rights of content creators.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-10">Disclaimer of Warranties</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          This service is provided "as is" without warranties of any kind. We do not guarantee that the tool will be
          available at all times, that downloads will always succeed, or that all Reels will be accessible. Instagram
          may change its platform structure at any time, which could temporarily affect the tool's functionality.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Limitation of Liability</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          To the maximum extent permitted by law, InstaSaver shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of or inability to use the tool.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Intellectual Property</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          We do not claim ownership over any content downloaded through this tool. All downloaded content remains
          the property of its original creator.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Changes to Terms</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          We may update these terms at any time. Continued use of the site constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Contact</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          <a href="mailto:warismuhammad652@gmail.com" className="text-indigo-500 hover:underline">
            warismuhammad652@gmail.com
          </a>
        </p>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-indigo-500">Privacy Policy</Link>
            <Link href="/dmca" className="hover:text-indigo-500">DMCA Policy</Link>
            <Link href="/" className="hover:text-indigo-500">← Back to Downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
