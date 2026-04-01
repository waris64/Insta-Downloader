import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Instagram Reels Downloader",
  description: "Our privacy policy explaining what data we collect, how we use it, and your rights as a user.",
  alternates: {
    canonical: "https://insta-downloader-kappa.vercel.app/privacy-policy",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insta-downloader-kappa.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://insta-downloader-kappa.vercel.app/privacy-policy" }
  ]
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-black tracking-tight mb-2 leading-tight">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: April 2025</p>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          This Privacy Policy describes how InstaSaver ("we," "us," or "our") collects, uses, and shares information
          when you use our website at{" "}
          <a href="https://insta-downloader-kappa.vercel.app" className="text-indigo-500 hover:underline">
            insta-downloader-kappa.vercel.app
          </a>{" "}
          (the "Site").
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Information We Collect</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">
          We collect minimal information necessary to provide the service:
        </p>
        <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 mb-10">
          <li><strong className="text-zinc-800 dark:text-zinc-200">Log data:</strong> Like most websites, our servers automatically record standard log data when you visit, including your IP address, browser type, pages visited, and the time of your visit. This data is used solely for security and performance monitoring.</li>
          <li><strong className="text-zinc-800 dark:text-zinc-200">Cookies:</strong> We use essential cookies to maintain basic site functionality. We do not use tracking or advertising cookies.</li>
          <li><strong className="text-zinc-800 dark:text-zinc-200">URLs you submit:</strong> When you paste an Instagram URL into the download tool, that URL is processed server-side to retrieve the media file. We do not log, store, or analyse the URLs you submit beyond the immediate processing required to return your download.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-10">Information We Do Not Collect</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          We do not collect your name, email address, phone number, or any personally identifiable information unless
          you choose to contact us. We do not collect payment information. We do not create user accounts. We do not
          track your activity across other websites.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Third-Party Services</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">We may use third-party services for:</p>
        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-10 space-y-1">
          <li>Hosting (Vercel — see <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Vercel's privacy policy</a>)</li>
          <li>Analytics (Vercel Analytics — anonymised usage data only)</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-10">Your Rights</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Depending on your location, you may have rights under GDPR (EU), CCPA (California), or similar laws,
          including the right to access, correct, or delete your personal data. To exercise these rights, contact us at{" "}
          <a href="mailto:warismuhammad652@gmail.com" className="text-indigo-500 hover:underline">warismuhammad652@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Changes to This Policy</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          We may update this policy occasionally. The "Last updated" date at the top of this page reflects the most
          recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-10">Contact</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          <a href="mailto:warismuhammad652@gmail.com" className="text-indigo-500 hover:underline">
            warismuhammad652@gmail.com
          </a>
        </p>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-10">
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <Link href="/terms-of-service" className="hover:text-indigo-500">Terms of Service</Link>
            <Link href="/dmca" className="hover:text-indigo-500">DMCA Policy</Link>
            <Link href="/" className="hover:text-indigo-500">← Back to Downloader</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
