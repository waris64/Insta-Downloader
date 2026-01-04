"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Link as LinkIcon, Loader2, AlertCircle } from "lucide-react"
import { isValidInstagramUrl } from "@/lib/instagram-validator"
import { cn } from "@/lib/utils"

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
    if (!url) return
    setIsTouched(true)
    if (isValid) {
        onSubmit(url)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
          handleDownload()
      }
  }

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-3 text-zinc-500">
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
                "h-14 pl-10 pr-32 text-lg bg-white dark:bg-zinc-900 rounded-xl shadow-sm focus-visible:ring-offset-0 transition-all",
                showInvalidError ? "border-red-500 focus-visible:ring-red-500" : "border-zinc-200 dark:border-zinc-800 focus-visible:ring-indigo-500"
            )}
            placeholder="Paste Instagram link here..." 
            type="url"
            disabled={isLoading}
          />
          <div className="absolute right-2">
            <Button 
                onClick={handleDownload}
                disabled={!url || isLoading || (isTouched && !isValid)}
                className={cn(
                    "h-10 rounded-lg shadow-md transition-all",
                    showInvalidError ? "bg-zinc-400 hover:bg-zinc-500" : "bg-indigo-600 hover:bg-indigo-700 hover:scale-105"
                )}
            >
              {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                  <>Download <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </div>
        
        {/* Error / Validation Feedback */}
        {showInvalidError && (
             <div className="absolute -bottom-6 left-0 flex items-center text-xs text-red-500 animate-in fade-in slide-in-from-top-1">
                 <AlertCircle className="w-3 h-3 mr-1" />
                 Invalid Instagram URL
             </div>
        )}
      </div>

      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 pt-2">
        Supported: Reels • Stories • Photos • Carousel
      </p>
    </div>
  )
}
