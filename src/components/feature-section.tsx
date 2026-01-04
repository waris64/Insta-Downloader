"use client"

import { Zap, ShieldCheck, Video, Infinity } from "lucide-react"

const features = [
  {
    title: "Lightning Fast",
    description: "Download high-quality Instagram reels and videos in seconds.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Secure & Private",
    description: "No login required. We don't store your personal data or activity.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "HD Quality",
    description: "Fetch the original resolution with crisp audio and video.",
    icon: Video,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Unlimited",
    description: "Free to use for as many reels as you want, anytime, anywhere.",
    icon: Infinity,
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10",
  },
]

export function FeatureSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="group relative p-6 rounded-3xl glass border-none hover:bg-white/10 dark:hover:bg-black/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
