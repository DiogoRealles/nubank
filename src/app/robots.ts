import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = fetch('https://diogorealles.github.io/portfolio/sitemap.xml')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://diogorealles.github.io/portfolio/sitemap.xml'
  }
}