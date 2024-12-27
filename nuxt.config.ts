// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css:[
    '@/assets/css/glide.scss'
  ],

  nitro: {
    prerender: {
      // Force generation of all routes
      crawlLinks: true,
      routes: ['/'] // Explicitly include index route
    }
  }
})
