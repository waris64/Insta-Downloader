"use client"

interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

export function AdPlaceholder({ label = "Advertisement", className = "" }: AdPlaceholderProps) {
  return (
    <div className={`w-full flex flex-col items-center justify-center p-4 border border-dashed border-zinc-200 dark:border-white/10 rounded-2xl bg-zinc-50/50 dark:bg-white/5 min-h-[100px] transition-all hover:bg-zinc-100/50 dark:hover:bg-white/10 ${className}`}>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 mb-2">
            {label}
        </span>
        <div className="w-full max-w-[300px] h-2 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-zinc-400/20 dark:via-zinc-500/20 to-transparent animate-shimmer" />
        </div>
    </div>
  )
}
