"use client"

import { Clock, X, ExternalLink } from "lucide-react"
import { RecentDownload } from "@/hooks/use-recent-downloads"
import { Button } from "@/components/ui/button"

interface RecentDownloadsProps {
  items: RecentDownload[]
  onRemove: (id: string) => void
  onSelect: (url: string) => void
}

export function RecentDownloads({ items, onRemove, onSelect }: RecentDownloadsProps) {
  if (items.length === 0) return null

  return (
    <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center justify-between mb-6 px-2">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-500" />
          Recent Downloads
        </h3>
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
            History
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="group relative glass rounded-2xl p-3 flex items-center gap-4 hover:bg-white/10 dark:hover:bg-black/20 transition-all duration-300 border-none overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100 dark:bg-zinc-900 shadow-inner">
                {item.thumbnail ? (
                    <img src={item.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-indigo-500/10">
                        <Clock className="w-6 h-6 text-indigo-500/30" />
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 pr-6">
                <h4 className="text-sm font-bold truncate mb-1">{item.title || "Instagram Post"}</h4>
                <p className="text-[10px] text-zinc-500 font-medium mb-2">
                    {new Date(item.timestamp).toLocaleDateString()}
                </p>
                <button 
                    onClick={() => onSelect(item.url)}
                    className="text-[10px] font-black uppercase tracking-tighter text-indigo-500 hover:text-indigo-400 flex items-center gap-1 transition-colors"
                >
                    Redownload <ExternalLink className="w-2.5 h-2.5" />
                </button>
            </div>

            {/* Remove Action */}
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onRemove(item.id)}
                className="absolute top-2 right-2 h-6 w-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10 hover:text-red-500"
            >
                <X className="w-3.5 h-3.5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
