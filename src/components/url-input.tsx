"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Link as LinkIcon, Loader2, AlertCircle } from "lucide-react"
import { isValidInstagramUrl } from "@/lib/instagram-validator"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface UrlInputProps {
    onSubmit: (url: string) => void;
    isLoading: boolean;
}

export function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [url, setUrl] = useState("")
  const [isTouched, setIsTouched] = useState(false)

  // Real-time validation status
  const isValid = isValidInstagramUrl(url)
  const showInvalidError = isTouched && url.length > 0 && !isValid

  const handleDownload = () => {
    if (!url) {
        toast.error("Please enter a link first")
        return
    }
    setIsTouched(true)
    if (isValid) {
        onSubmit(url)
    } else {
        toast.error("Invalid Instagram URL")
    }
  }


  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
          handleDownload()
      }
  }

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[1.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center">
          <div className="absolute left-4 text-zinc-400">
            <LinkIcon className="h-5 w-5" />
          </div>
          <Input 
            value={url}
            onChange={(e) => {
                setUrl(e.target.value)
                if(!isTouched) setIsTouched(true)
            }}
            onKeyDown={handleKeyDown}
            className={cn(
                "h-16 pl-12 pr-40 text-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl border-none shadow-2xl focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition-all placeholder:text-zinc-500",
                showInvalidError && "ring-2 ring-red-500/50"
            )}
            placeholder="Paste Instagram link here..." 
            type="url"
            disabled={isLoading}
          />
          <div className="absolute right-2 px-1">
            <Button 
                onClick={handleDownload}
                disabled={!url || isLoading || (isTouched && !isValid)}
                className={cn(
                    "h-12 px-6 rounded-xl font-bold shadow-xl transition-all duration-300",
                    showInvalidError 
                        ? "bg-zinc-400 cursor-not-allowed" 
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:scale-105 active:scale-95 text-white"
                )}
            >
              {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                  <>Download <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </Button>
          </div>
        </div>
        
        {/* Error / Validation Feedback */}
        {showInvalidError && (
             <div className="absolute -bottom-7 left-4 flex items-center text-sm font-medium text-red-500 animate-in fade-in slide-in-from-top-1">
                 <AlertCircle className="w-4 h-4 mr-1.5" />
                 Please enter a valid Instagram URL
             </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] sm:text-xs font-semibold text-zinc-500 tracking-wider uppercase">Reels</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] sm:text-xs font-semibold text-zinc-500 tracking-wider uppercase">Videos</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] sm:text-xs font-semibold text-zinc-500 tracking-wider uppercase">Photos</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] sm:text-xs font-semibold text-zinc-500 tracking-wider uppercase">Stories</span>
      </div>
    </div>
  )
}

