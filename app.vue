import { Header } from './components/header/Header.vue'

<script setup lang="ts">
import { useLanguageStore } from './store/useLanguageStore'
import { useThemeStore } from './store/useThemeStore'
import { useAnimationStore } from './store/useAnimationStore'

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
    <v-main>
      <Header />
      <v-container class="text-center">
        <v-btn color="secondary" @click="sayHello">
          {{ $t('welcome') }}
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
