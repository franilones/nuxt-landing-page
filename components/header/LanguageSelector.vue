<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguageStore } from '~/store/useLanguageStore'

const languageStore = useLanguageStore()
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
</script>

<template>
  <v-select
    v-model="selectedLanguage"
    :items="availableLanguages"
    :label="$t('language')"
    :aria-label="$t('selectLanguage')"
    class="language-selector"
    bg-color="var(--background-form-header-color)"
    base-color="var(--language-selector-text-color)"
    data-testid="language-selector"
  />
</template>

<style scoped>
.language-selector {
  width: auto;
  min-width: 160px;
  font-family: 'Verdana', sans-serif;
}
</style>
