"use client"

import { Copy, ArrowRight, Download, Play } from "lucide-react"

const steps = [
  {
    title: "Copy the Link",
    description: "Open Instagram and find the Reel, Photo, or Story you want to save. Tap the share button and select 'Copy Link'.",
    icon: Copy,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Paste URL",
    description: "Return to InstaSaver and paste the copied link into the input field at the top of the page.",
    icon: ArrowRight,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Download Media",
    description: "Click the 'Download' button. Our AI will process the link and provide you with a high-quality download option instantly.",
    icon: Download,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Enjoy Offline",
    description: "Your file is now saved to your device. Watch it offline, share it with friends, or repost it (with credit!).",
    icon: Play,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
]

export function HowItWorks() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
          How to Download Instagram Reels
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          Save your favorite moments in 4 simple steps. No login, no apps, just pure speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent z-0" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
            <div className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-sm`}>
              <step.icon className={`w-10 h-10 ${step.color}`} />
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-[#0a0a0c] flex items-center justify-center text-sm font-bold text-zinc-500 mb-4 absolute top-20 -right-4 lg:hidden">
                {idx + 1}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[200px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
