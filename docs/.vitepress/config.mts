import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YggUtils",
  description: "An advanced authentication proxy tool for your Minecraft server, taking advantage of authlibinjector.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/yggutils.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YggUtils/YggUtils' },
      { icon: 'youtube', link: 'https://youtube.com/@Jukixyo' }
    ]
  }
})
