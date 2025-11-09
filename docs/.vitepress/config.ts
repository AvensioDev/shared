import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '@avensio/shared',
  description: 'Typed data structures, comparators, and algorithms for TypeScript runtimes.',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
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
})
