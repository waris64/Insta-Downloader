"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Is InstaSaver completely free?",
    answer: "Yes, our Instagram Downloader is 100% free to use. You can download as many reels, photos, and stories as you want without any subscription or hidden fees."
  },
  {
    question: "Do I need to log in to my Instagram account?",
    answer: "No, you do not need to log in. InstaSaver works without asking for your Instagram password or account details, keeping your personal information safe and secure."
  },
  {
    question: "Can I download videos from private accounts?",
    answer: "Currently, we only support downloading content from public Instagram accounts due to privacy policies. Please ensure the account you are trying to download from is public."
  },
  {
    question: "Does InstaSaver add watermarks to downloaded videos?",
    answer: "No, we do not add any watermarks to the downloaded content. You get the original quality video or photo exactly as it was uploaded to Instagram."
  },
  {
    question: "Is it legal to download Instagram Reels?",
    answer: "Downloading content for personal offline viewing is generally acceptable. However, please respect copyright laws and do not re-upload or use someone else's content for commercial purposes without their permission."
  },
  {
    question: "What devices are supported?",
    answer: "InstaSaver is a web-based tool that works on all devices with a modern browser. You can use it on iPhone (iOS), Android smartphones, tablets, Windows PCs, and Macs."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Structured Data for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black tracking-tight mb-4">Frequently Asked Questions</h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          Everything you need to know about downloading Instagram content.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-bold text-lg">{faq.question}</span>
              {openIndex === idx ? (
                <Minus className="w-5 h-5 text-indigo-500 flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-zinc-400 flex-shrink-0" />
              )}
            </button>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
