"use client"

import { Video, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function GlobalNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b-none py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {!isHome && (
            <button 
              onClick={() => router.back()} 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Insta<span className="text-indigo-500">Saver</span>
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/faq" className="text-sm font-bold text-zinc-500 hover:text-indigo-500 transition-colors">FAQ</Link>
          {isHome && <a href="#how-it-works" className="text-sm font-bold text-zinc-500 hover:text-indigo-500 transition-colors">How it works</a>}
          <div className="px-5 py-2 rounded-full glass text-xs font-bold border-white/5 shadow-sm">v2.0 Beta</div>
        </div>
      </div>
    </nav>
  );
}
