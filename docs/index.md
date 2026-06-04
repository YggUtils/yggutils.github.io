---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "YggUtils"
  text: "Run authlib-injector on any servers"
  tagline: Built for hosts that don't expose JVM arguments.
  actions:
    - theme: brand
      text: Get Started!
      link: /documentation/what-is-yggutils
    - theme: alt
      text: Github
      link: https://github.com/YggUtils/YggUtils
  image:
    src: ./yggutils.svg

features:
  - icon: 🧪
    title: Authlib Injector Fetching
    details: YggUtils automatically retrieves the latest Authlib Injector from the web at runtime.
  - icon: 🛡️
    title: Dynamic Launch Configuration
    details: YggUtils handles the server launch, controlled by a minimal config file.
  - icon: 📜
    title: Native Console Interface
    details: YggUtils mirrors a real server console with instant input and live output.
---

