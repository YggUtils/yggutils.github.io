import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    
  cleanUrls: true,
  sitemap: {
    hostname: 'https://yggutils.github.io'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: "YggUtils",
  description: "An advanced authentication proxy tool for your Minecraft server, taking advantage of authlibinjector.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'algolia',
      options: {
        appId: 'HU5ORXBUGO',
        apiKey: 'df71530235fca5f30c77e752786afc0f',
        indexName: 'yggutils_github_io_hu5orxbugo_pages'
      }
    },
    logo: { src: '/yggutils.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/what-is-yggutils', activeMatch: '^/documentation/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is YggUtils?', link: '/documentation/what-is-yggutils' },
          { text: 'Getting Started', link: '/documentation/getting-started' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'How Launching Works', link: '/documentation/how-launching-works' },
          { text: 'Authlib Injector', link: '/documentation/authlib-injector' },
          { text: 'Console Forwarding', link: '/documentation/console-forwarding' },
          { text: 'Auto-Restart', link: '/documentation/auto-restart' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Configuration', link: '/documentation/configuration' },
          { text: 'File Structure', link: '/documentation/file-structure' },
          { text: 'Exit Codes', link: '/documentation/exit-codes' }
        ]
      }
    ],

    footer:{
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Jukixyo'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YggUtils/YggUtils' },
      { icon: 'youtube', link: 'https://youtube.com/@Jukixyo' }
    ]
  }
})
