// https://nuxt.com/docs/api/configuration/nuxt-config
// https://i18n.nuxtjs.org/docs/getting-started --> Nuxt i18n
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify';
import {resolve} from 'path';

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify'],
    },
    css: [
        '@/assets/styles/default.css'
    ],
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/i18n',
        '@nuxtjs/eslint-module'
    ],
    i18n: {
        locales: [
            {code: 'en', name: 'English', iso: 'en-US', file: 'en.json'},
            {code: 'es', name: 'Español', iso: 'es-ES', file: 'es.json'},
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales/',
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
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true}
})
