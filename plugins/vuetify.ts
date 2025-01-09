import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@/assets/styles/default.css';

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        primary: '#005f99',
                        secondary: '#e3f2fd',
                        error: '#ff5252',
                        success: '#00796b',
                    },
                },
                dark: {
                    colors: {
                        primary: '#82b1ff',
                        secondary: '#1e3a5f',
                        error: '#ff867c',
                        success: '#80cbc4',
                    },
                },
            },
        },
    });

    app.vueApp.use(vuetify);

    // TODO: Sincronizar vuetify con el cambio de proyecto
})