import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'InstaSaver - Instagram Downloader',
        short_name: 'InstaSaver',
        description: 'The fastest way to download Instagram reels, photos, and stories.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0c',
        theme_color: '#6366f1',
        icons: [
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
