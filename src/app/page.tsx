"use client"

import { UrlInput } from "@/components/url-input";
import { VideoCard } from "@/components/video-card";
import { FeatureSection } from "@/components/feature-section";
import { ResultSkeleton } from "@/components/result-skeleton";
import { useDownloader } from "@/hooks/use-downloader";
import { AlertCircle, Camera, Sparkles, Video } from "lucide-react";
import { RecentDownloads } from "@/components/recent-downloads";
import { useRecentDownloads } from "@/hooks/use-recent-downloads";

export default function Home() {
  const { downloadVideo, isLoading, error, data } = useDownloader();
  const { recentDownloads, addRecentDownload, removeRecentDownload } = useRecentDownloads();

  const handleDownload = (url: string) => {
    downloadVideo(url, {
        onSuccess: (videoData) => {
            addRecentDownload({
                id: videoData.id,
                url: url,
                thumbnail: videoData.thumbnail,
                title: videoData.title
            });
        }
    });
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b-none py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform">
                    <Video className="w-5 h-5 text-white" />
                </div>
                <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                    Insta<span className="text-indigo-500">Saver</span>
                </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
                 <a href="#" className="text-sm font-bold text-zinc-500 hover:text-indigo-500 transition-colors">How it works</a>
                 <a href="#" className="text-sm font-bold text-zinc-500 hover:text-indigo-500 transition-colors">Pricing</a>
                 <div className="px-5 py-2 rounded-full glass text-xs font-bold border-white/5">v2.0 Beta</div>
            </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1 container mx-auto px-6 pt-32 pb-24 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className={`text-center space-y-8 max-w-4xl transition-all duration-1000 ${data || isLoading ? 'mt-0' : 'mt-12 mb-16'}`}>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold text-indigo-400 border-indigo-500/10 mb-4 animate-in fade-in zoom-in duration-700">
             <Sparkles className="w-3.5 h-3.5 fill-indigo-400/20" />
             AI-Powered Reel Extraction
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] animate-in fade-in slide-in-from-top-8 duration-700 delay-100">
            Download Anything from <br/>
            <span className="text-gradient">Instagram</span>
          </h1>
          
          {!data && !isLoading && (
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                The fastest way to download Instagram reels, photos, and stories in full HD quality. 
                Experience a clean, ad-free environment.
            </p>
          )}
        </div>

        {/* Input & Search Section */}
        <div className="w-full flex flex-col items-center gap-10">
            <UrlInput onSubmit={handleDownload} isLoading={isLoading} />
            
            {/* Error Message */}
            {error && (
                <div className="flex items-center text-sm font-bold text-red-500 bg-red-500/10 px-6 py-3 rounded-2xl glass border-red-500/20 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {error}
                </div>
            )}

            {/* Content Display: Skeleton or Results */}
            <div className="w-full flex justify-center pt-8">
                 {isLoading ? (
                     <ResultSkeleton />
                 ) : (
                     <VideoCard data={data} />
                 )}
            </div>
        </div>

        {/* Recent Downloads Section */}
        {!isLoading && !data && recentDownloads.length > 0 && (
            <div className="w-full mt-24">
                <RecentDownloads 
                    items={recentDownloads} 
                    onRemove={removeRecentDownload} 
                    onSelect={handleDownload}
                />
            </div>
        )}

        {/* Features Grid - Only show if no results yet */}
        {(!data && !isLoading) && (
            <div className="mt-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-zinc-400 uppercase tracking-widest">Why use InstaSaver?</h2>
                </div>
                <FeatureSection />
            </div>
        )}

      </main>
      
      <footer className="relative z-10 w-full py-12 border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 grayscale brightness-50 contrast-200">
                <Camera className="w-5 h-5" />
                <span className="font-bold text-lg tracking-tight">InstaSaver</span>
            </div>
            <p className="text-sm font-medium text-zinc-500">
                © 2026 Crafted with ❤️ for the community.
            </p>
            <div className="flex gap-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <a href="#" className="hover:text-indigo-500">Privacy</a>
                <a href="#" className="hover:text-indigo-500">Terms</a>
                <a href="#" className="hover:text-indigo-500">Contact</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
