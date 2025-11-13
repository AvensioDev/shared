import { defineConfig, type HeadConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import path from 'node:path'

const isDevCommand = process.argv.includes('dev')
const siteUrl = 'https://docs.avensio.dev'
const organizationId = `${siteUrl}#organization`
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Avensio',
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  sameAs: [
    'https://github.com/Avensio/shared',
    'https://www.avensio.de',
    'https://www.dev-journey.de',
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Avensio Shared Docs',
  url: siteUrl,
  publisher: {
    '@id': organizationId,
  },
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '@avensio/shared',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Windows, macOS, Linux, Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  url: siteUrl,
  downloadUrl: 'https://www.npmjs.com/package/@avensio/shared',
  publisher: {
    '@id': organizationId,
  },
}

const createJsonLdScript = (data: Record<string, unknown>): HeadConfig => ([
  'script',
  { type: 'application/ld+json' },
  JSON.stringify(data),
])

const buildPageUrl = (relativePath?: string) => {
  if (!relativePath)
    return siteUrl

  let normalized = relativePath.replace(/\\/g, '/')

  if (/(?:^|\/)(index|README)\.md$/i.test(normalized))
    normalized = normalized.replace(/(?:^|\/)(index|README)\.md$/i, '')
  else
    normalized = normalized.replace(/\.md$/i, '')

  normalized = normalized
    .replace(/\/+/g, '/')
    .replace(/^\/|\/$/g, '')

  return normalized ? `${siteUrl}/${normalized}` : siteUrl
}

export default withPwa(defineConfig({
  title: 'Avensio Shared',
  description: 'Typed core utilities, data structures, and algorithms for the Avensio ecosystem.',
  lastUpdated: true,
  base: '/',
  sitemap: {
    hostname: 'https://docs.avensio.dev',
  },
  vite: {
    publicDir: path.resolve(__dirname, '../public'),
  },
  pwa: {
    outDir: path.resolve(__dirname, '../.vitepress/dist'),
    mode: isDevCommand ? 'development' : 'production',
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeAssets: ['favicon.ico', 'Logo Avensio.png'],
    manifest: {
      name: 'Avensio Shared',
      short_name: 'Shared',
      theme_color: '#0ea5e9',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      navigateFallback: '/index.html',
      navigateFallbackAllowlist: [/./],
    },
    devOptions: {
      enabled: isDevCommand,
      suppressWarnings: true,
      navigateFallback: '/index.html',
      navigateFallbackAllowlist: [/./],
    },
  },
  markdown: {
    lineNumbers: true,
    toc: { level: [2, 3, 4] },
    config(md) {
      /*md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-deflist'))*/
    }
  },
  head: [
    ['meta', { name: 'author', content: 'Avensio Dev Team' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    createJsonLdScript(organizationJsonLd),
    createJsonLdScript(webSiteJsonLd),
    createJsonLdScript(softwareJsonLd),
  ],
  transformHead({ pageData, title, description }) {
    const page = pageData ?? {}
    const resolvedDescription = page.frontmatter?.description ?? description
    const pageTitle = title ?? page.title ?? page.frontmatter?.title ?? 'Avensio Shared Docs'

    const headEntries: HeadConfig[] = [
      ['meta', { property: 'og:title', content: pageTitle }],
    ]

    if (resolvedDescription) {
      headEntries.push(['meta', { property: 'og:description', content: resolvedDescription }])
      headEntries.push(createJsonLdScript({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: pageTitle,
        description: resolvedDescription,
        author: { '@id': organizationId },
        publisher: { '@id': organizationId },
        mainEntityOfPage: buildPageUrl(page.relativePath),
        image: `${siteUrl}/pwa-512x512.png`,
      }))
    }

    return headEntries
  },
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Avensio'
    },
    logo: '/favicon.ico',
    search: {
      provider: 'local',
      options: {
        detailedView: "auto"
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Avensio/shared' }
    ],
    editLink: {
      pattern: 'https://github.com/Avensio/shared/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'API', link: '/api/README.md' },
      {
        text: 'Projects',
        items: [
          { text: 'MonoRepo', link: 'https://github.com/Avensio/avensio/' },
          { text: '@avensio/shared', link: 'https://github.com/Avensio/shared/' },
          { text: '@avensio/graph', link: 'https://github.com/Avensio/graph/' },
          { text: 'dev-journey.de', link: 'https://www.dev-journey.de' },
          { text: 'avensio.de', link: 'https://www.avensio.de' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Quickstart', link: '/' },
          { text: 'Data Structures', link: '/data-structures' },
          { text: 'Typed API (TypeDoc)', link: '/api/README' },
        ],
      },
      {
        text: 'Collections',
        items: [
          { text: 'Lists', link: '/lists' },
          { text: 'Queues', link: '/queues' },
          { text: 'Stacks', link: '/stacks' },
          { text: 'Heaps', link: '/heaps' },
          { text: 'Trees', link: '/trees' },
        ],
      },
      {
        text: 'Algorithms & Helpers',
        items: [
          { text: 'Comparator Helpers', link: '/comparators' },
          { text: 'Sorting', link: '/sorting' },
          { text: 'Math & Utilities', link: '/math' },
          { text: 'Helper Utilities', link: '/utilities' },
        ],
      },
      {
        text: 'Operations',
        items: [
          { text: 'Benchmarks', link: '/benchmarks' },
          { text: 'Development Workflow', link: '/development' },
          { text: 'Changelog', link: '/CHANGELOG' },
          { text: 'History', link: '/history' },
        ],
      },
    ],
  },
}))
