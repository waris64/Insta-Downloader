import Link from "next/link";
import { Camera } from "lucide-react";

const footerLinks = [
  { label: "How to Download", href: "/how-to-download-instagram-reels" },
  { label: "iPhone Guide", href: "/how-to-download-instagram-reels-on-iphone" },
  { label: "Android Guide", href: "/how-to-download-instagram-reels-on-android" },
  { label: "No Watermark", href: "/how-to-download-instagram-reels-without-watermark" },
  { label: "PC Guide", href: "/instagram-reels-downloader-for-pc" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "DMCA", href: "/dmca" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 w-full py-12 border-t border-zinc-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        {/* Nav Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-zinc-500 hover:text-indigo-500 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-100 dark:border-white/5 pt-8">
          <div className="flex items-center gap-2 grayscale brightness-50 contrast-200">
            <Camera className="w-5 h-5" />
            <span className="font-bold text-lg tracking-tight">InstaSaver</span>
          </div>
          <p className="text-sm font-medium text-zinc-500">
            © 2025 InstaSaver. Crafted for the community.
          </p>
          <p className="text-xs text-zinc-500">
            Not affiliated with Instagram or Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
