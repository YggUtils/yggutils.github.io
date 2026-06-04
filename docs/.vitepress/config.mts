import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: "YggUtils",
  description: "An advanced authentication proxy tool for your Minecraft server, taking advantage of authlibinjector.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/yggutils.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/what-is-yggutils' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is YggUtils?', link: '/what-is-yggutils' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'How Launching Works', link: '/how-launching-works' },
          { text: 'Authlib Injector', link: '/authlib-injector' },
          { text: 'Console Forwarding', link: '/console-forwarding' },
          { text: 'Auto-Restart', link: '/auto-restart' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Configuration', link: '/configuration' },
          { text: 'File Structure', link: '/file-structure' },
          { text: 'Exit Codes', link: '/exit-codes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YggUtils/YggUtils' },
      { icon: 'youtube', link: 'https://youtube.com/@Jukixyo' }
    ]
  }
})
