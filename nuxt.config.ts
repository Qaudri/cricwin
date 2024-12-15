// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],


  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Lara,
        options: {
          primaryColor: '#0BA98F',
          secondaryColor: '#E9C21C',
          colorScheme: 'light'
        }
      }
    }
  }
})
