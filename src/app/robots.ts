import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/private/', '/admin/'],
        },
        sitemap: 'https://insta-downloader-kappa.vercel.app/sitemap.xml',
    }
}
