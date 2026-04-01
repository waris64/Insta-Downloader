"use client";

const BASE = "https://insta-downloader-kappa.vercel.app";

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Instagram Reels Downloader",
  "url": BASE,
  "description": "Free online tool to download Instagram Reels as MP4 videos without watermark. No login required.",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "browserRequirements": "Requires JavaScript"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "InstaSaver",
  "url": BASE,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE}/?url={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InstaSaver",
  "url": BASE,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "warismuhammad652@gmail.com"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it legal to download Instagram Reels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Downloading Reels for personal offline viewing is generally considered fair use in most countries. However, redistributing, re-uploading, or monetizing someone else's content without their permission may violate Instagram's Terms of Service and copyright law. Always respect the original creator's rights."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my download link not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common reason is a private account. This tool can only download Reels from public Instagram profiles. If the account is set to private, the link will not work. Also make sure you are pasting the full URL including 'https://'."
      }
    },
    {
      "@type": "Question",
      "name": "What video quality does the download come in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool downloads the highest quality version Instagram makes available for that Reel, which is typically 1080p MP4. Quality depends on the original upload — if the creator uploaded in lower quality, the download will reflect that."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool work on iPhone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. On iPhone, after tapping Download, you may need to tap the share icon and choose 'Save to Files' or 'Save Video' depending on your iOS version and browser. Safari users may need to long-press the video and select 'Download Linked File'."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This tool does not store, log, or share the URLs you paste. The request is processed server-side and the video link is returned directly to your browser. No personal information is collected."
      }
    },
    {
      "@type": "Question",
      "name": "Can I download Reels without a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Unlike some tools that re-encode the video with a watermark, this downloader fetches the original file from Instagram's servers. The video you receive is the original file with no modifications."
      }
    },
    {
      "@type": "Question",
      "name": "How many Reels can I download per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no hard limit. You can download as many Reels as you need. However, avoid automating requests at very high speed, as Instagram may temporarily throttle access to their servers."
      }
    }
  ]
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
