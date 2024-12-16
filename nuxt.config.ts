// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],

  plugins: [
    '~/plugins/primevue.js'
  ],

  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          primaryColor: '#0BA98F',
          secondaryColor: '#E9C21C',
          colorScheme: 'light',
          darkModeSelector: true
        }
      },

    },

  }
})
