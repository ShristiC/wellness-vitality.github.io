// src/components/Seo.tsx
//
// Per-page <head> management: title, meta description, canonical URL,
// Open Graph + Twitter cards, and one or more JSON-LD blocks. Rendered tags
// land in the runtime DOM and are snapshotted into static HTML by
// scripts/prerender.mjs, so crawlers see them without executing JavaScript.

import { Helmet } from 'react-helmet-async'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../seo/schema'

interface SeoProps {
  title: string
  description: string
  /** Route path beginning with "/", e.g. "/about". Used for canonical + og:url. */
  path: string
  /** Absolute image URL for social cards. Defaults to the site OG image. */
  image?: string
  /** A JSON-LD object or array of objects to embed. */
  jsonLd?: object | object[]
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}: SeoProps) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={`${SITE_NAME} logo`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
