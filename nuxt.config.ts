import { resolve } from 'node:path'
// https://nuxt.com/docs/api/configuration/nuxt-config
// https://i18n.nuxtjs.org/docs/getting-started --> Nuxt i18n
import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  ssr: false,
  css: [
    '@/assets/styles/default.css',
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en', file: 'en.json' },
      { code: 'es', name: 'Español', iso: 'es', file: 'es.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '.'),
      },
    },
  },
  compatibilityDate: '2025-02-04',
  devtools: { enabled: true },
})
