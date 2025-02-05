import { Header } from './components/header/Header.vue'

<script setup lang="ts">
import { useLanguageStore } from './store/useLanguageStore'

const languageStore = useLanguageStore()
function sayHello(): void {
  console.warn('¡Vuetify está funcionando correctamente con TypeScript!')
}
onMounted(() => {
  languageStore.initializeLanguage()
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
