<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguageStore } from '~/store/useLanguageStore'
import { useThemeStore } from '~/store/useThemeStore'

const languageStore = useLanguageStore()
const themeStore = useThemeStore()
const availableLanguages = ref(languageStore.languages.map(language => language.name))

const selectedLanguage = computed({
  get: () => languageStore.currentLanguage.name,
  set: (newLanguage) => {
    const languageToSet = languageStore.languages.find(l => l.name === newLanguage)
    if (languageToSet) {
      languageStore.setLanguage(languageToSet)
    }
  },
})
const isDarkTheme = computed(() => themeStore.isDarkTheme)
</script>

<template>
  <v-select
    v-model="selectedLanguage"
    :items="availableLanguages"
    :label="$t('language')"
    :aria-label="$t('selectLanguage')"
    class="language-selector"
    :bg-color="'var(--background-form-color)'"
  />
</template>

<style scoped>
.language-selector {
  width: auto;
  min-width: 160px;
  font-family: 'Verdana', sans-serif;
}
.language-selector:hover .v-input__control,
.language-selector:focus-within .v-input__control {
  border: 2px solid var(--primary-color);
  background-color: red;
}
</style>
