import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import path from 'node:path'

const isDevCommand = process.argv.includes('dev')

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
    ['meta', { property: 'og:title', content: 'Avensio Shared Docs' }],
    ['meta', { property: 'og:description', content: 'High-performance shared utilities and data structures for the Avensio ecosystem.' }]
  ],
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
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Comparator Helpers', link: '/comparators' },
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
        text: 'Algorithms & Math',
        items: [
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
        ],
      },
    ],
  },
}))
