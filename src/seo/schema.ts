// src/seo/schema.ts
//
// JSON-LD structured-data builders and shared site constants. These teach
// search engines and AI/LLM crawlers what this site is: a remote-first
// functional-medicine health-coaching practice. We intentionally model the
// business as HealthAndBeautyBusiness (a LocalBusiness subtype) rather than
// MedicalBusiness — the practice does behavioral coaching and explicitly does
// NOT diagnose, treat, or prescribe (see the disclaimer in Footer.tsx).

export const SITE_URL = 'https://www.wellness-vitality.com'
export const SITE_NAME = 'Wellness n Vitality'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const BUSINESS_DESCRIPTION =
  'Wellness n Vitality is a remote-first Nutritional and Holistic Functional ' +
  'Medicine Health Coaching practice. Founder and lead coach Anita Chitlangia ' +
  'helps clients worldwide mitigate symptoms of chronic conditions — Type II ' +
  'Diabetes, chronic pain and fatigue, weight management, and IBS / gut health ' +
  '— through sustainable lifestyle and behavioral change.'

export const SOCIAL_PROFILES = [
  'https://www.facebook.com/WellnessnVitality',
  'https://www.youtube.com/@wellnessnvitality',
  'https://www.instagram.com/wellnessnvitality',
]

export const CONTACT_EMAIL = 'wellnessvitality20@gmail.com'
export const BOOKING_URL =
  'https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services'

const LANGUAGES = ['English', 'Spanish', 'Hindi', 'Bengali']

const FOUNDER = {
  '@type': 'Person',
  name: 'Anita Chitlangia',
  jobTitle: 'Certified Functional Medicine Health & Wellness Coach',
  knowsLanguage: LANGUAGES,
}

/** Organization / LocalBusiness identity — used on the home page. */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: 'Wellness & Vitality',
    description: BUSINESS_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    image: DEFAULT_OG_IMAGE,
    email: CONTACT_EMAIL,
    foundingDate: '2020',
    priceRange: '$$',
    sameAs: SOCIAL_PROFILES,
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    availableLanguage: LANGUAGES,
    founder: FOUNDER,
    knowsAbout: [
      'Functional Medicine',
      'Type II Diabetes',
      'Chronic Pain and Fatigue',
      'Weight Management',
      'Irritable Bowel Syndrome (IBS)',
      'Gut Health',
      'Functional Nutrition',
      'Stress Management',
    ],
  }
}

/** WebSite node — helps engines associate the domain with the brand. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: BUSINESS_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'en',
  }
}

/** Coaching services offered, derived from the six holistic pillars. */
export function serviceSchema() {
  const pillars = [
    'Functional Nutrition',
    'Physical Activity',
    'Stress Management',
    'Sleep Hygiene',
    'Hydration',
    'Relationship Management',
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Functional Medicine Health & Wellness Coaching',
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    description:
      '1-on-1 and group functional nutrition coaching built on six holistic ' +
      'pillars, with personalized plans and continuous support.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Holistic Coaching Pillars',
      itemListElement: pillars.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p },
      })),
    },
  }
}

/** Founder identity — used on the About page for E-E-A-T signals. */
export function founderSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anita Chitlangia',
    jobTitle: 'Certified Functional Medicine Health & Wellness Coach',
    description:
      'Founder of Wellness n Vitality and a Certified Functional Medicine ' +
      'Health & Wellness Coach with 6+ years of experience helping 50+ clients ' +
      'worldwide address the root causes of chronic conditions.',
    url: `${SITE_URL}/about`,
    image: DEFAULT_OG_IMAGE,
    knowsLanguage: LANGUAGES,
    worksFor: { '@id': `${SITE_URL}/#business` },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Certified Functional Medicine Health & Wellness Coach',
    },
    sameAs: SOCIAL_PROFILES,
  }
}

/** Breadcrumb trail for a page. `crumbs` is [name, path] pairs. */
export function breadcrumbSchema(crumbs: Array<[string, string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  }
}

interface EventInput {
  title: string
  description: string
  additionalInfo: string
  link: string
  date: Date
}

/** Event schema for a program/workshop listing. */
export function eventSchema(event: EventInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: `${event.description} ${event.additionalInfo}`.trim(),
    startDate: event.date.toISOString(),
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    organizer: { '@id': `${SITE_URL}/#business` },
    url: event.link,
    offers: {
      '@type': 'Offer',
      url: event.link,
      availability: 'https://schema.org/InStock',
    },
  }
}

interface VideoInput {
  title: string
  description: string
  videoId: string
  /** Human month/year label, e.g. "May 2025" or "Jan 2023". */
  date?: string
}

/** Converts a "May 2025" / "Jan 2023" label to an ISO date, or undefined. */
function toIsoDate(label?: string): string | undefined {
  if (!label) return undefined
  const parsed = new Date(label)
  return Number.isNaN(parsed.getTime())
    ? undefined
    : parsed.toISOString().slice(0, 10)
}

/** VideoObject schema for a YouTube client testimonial. */
export function videoSchema(video: VideoInput) {
  const id = video.videoId.split('?')[0]
  const uploadDate = toIsoDate(video.date)
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    ...(uploadDate ? { uploadDate } : {}),
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

/** CollectionPage schema for the recipe gallery. */
export function collectionSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }
}
