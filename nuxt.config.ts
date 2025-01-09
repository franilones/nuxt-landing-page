// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { resolve } from 'path';

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
        //...
    ],
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
