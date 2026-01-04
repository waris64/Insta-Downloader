"use client"

import { UrlInput } from "@/components/url-input";
import { VideoCard } from "@/components/video-card";
import { useDownloader } from "@/hooks/use-downloader";
import { AlertCircle } from "lucide-react";

export default function Home() {
  const { downloadVideo, isLoading, error, data } = useDownloader();

  return (
    <div className="flex flex-col min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-zinc-100 to-indigo-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar Placeholder */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                InstaSaver
            </div>
            <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                v1.0
            </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 pt-32 pb-16 flex flex-col items-center justify-center gap-12">
        {/* Hero Section */}
        <div className={`text-center space-y-6 max-w-3xl transition-all duration-700 ${data ? 'mt-0' : 'mt-10'}`}>
          <div className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/30 px-3 py-1 text-sm text-indigo-800 dark:text-indigo-300 mb-4 animate-in fade-in zoom-in duration-500">
             <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
             Fast, Free, & Secure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 drop-shadow-sm">
            Instagram Reels <br/>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Downloader</span>
          </h1>
          {!data && (
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Download Reels, Videos, Photos, and Stories from Instagram in high quality. 
                No login required. Just paste the link.
            </p>
          )}
        </div>

        {/* Input Section */}
        <div className="w-full flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <UrlInput onSubmit={downloadVideo} isLoading={isLoading} />
            
            {/* Global Error Display */}
            {error && (
                <div className="flex items-center text-red-500 bg-red-50 dark:bg-red-900/10 px-4 py-2 rounded-lg border border-red-200 dark:border-red-900/50 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {error}
                </div>
            )}
        </div>

        {/* Result Section */}
        <div className="w-full flex justify-center pb-20">
             <VideoCard data={data} />
        </div>

      </main>
      
      <footer className="w-full py-6 text-center text-zinc-500 text-sm">
        © 2026 InstaSaver. Not affiliated with Instagram.
      </footer>
    </div>

  );
}
