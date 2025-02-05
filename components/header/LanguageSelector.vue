<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '~/store/useLanguageStore'

const languageStore = useLanguageStore()
const selectedLanguage = ref(languageStore.currentLanguage.name)
const availableLanguages = ref(languageStore.languages.map(language => language.name))

function setLanguage(language: string): void {
  const languageToSet = languageStore.languages.find(l => l.name === language)
  languageStore.setLanguage(languageToSet)
}
</script>

<template>
  <v-select
    v-model="selectedLanguage"
    :items="availableLanguages"
    :label="$t('selectLanguage')"
    class="language-selector"
    @update:model-value="setLanguage"
    bg-color="#afdde5"
  />
</template>

<style scoped>
.language-selector {
  width: auto;
  min-width: 190px;
  font-family: 'Verdana', sans-serif;
}
</style>
