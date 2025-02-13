import { Header } from './components/header/Header.vue'
import Footer from './components/header/Footer.vue'
<script setup lang="ts">
import { useHead } from '#imports'
import { onMounted } from 'vue'
import AboutMe from '~/components/main/AboutMe.vue'
import { useAnimationStore } from './store/useAnimationStore'
import { useLanguageStore } from './store/useLanguageStore'
import { useThemeStore } from './store/useThemeStore'

useHead({
  title: 'Mi Aplicación',
  meta: [
    {
      name: 'description',
      content: 'Esta es una aplicación desarrollada con Vue, Nuxt, Vuetify y TypeScript.',
    },
  ],
})

const languageStore = useLanguageStore()
const themeStore = useThemeStore()
const animationStore = useAnimationStore()

function sayHello(): void {
  console.warn('¡Vuetify está funcionando correctamente con TypeScript!')
}

onMounted(() => {
  languageStore.initializeLanguage()
  themeStore.initializeTheme()
  animationStore.initializeAnimations()
})
</script>

<template>
  <v-app>
    <Header />
    <v-main :aria-label="$t('mainContent')" class="main-content">
      <AboutMe />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
.main-content {
  background-color: var(--background-color-secondary);
}
</style>
