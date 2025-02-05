import type { Language } from '~/models/Language'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
  const { setLocale } = useI18n()

  const languages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ]

  const currentLanguage = ref(languages[0])

  function setLanguage(language: Language) {
    currentLanguage.value = language
    setLocale(language.code as 'en' | 'es')
    document.documentElement.setAttribute('lang', language.code)
  }

  function initializeLanguage() {
    const browserLang = navigator.language.split('-')[0]
    const defaultLang = languages.find(lang => lang.code === browserLang) || languages[0]
    setLanguage(defaultLang)
  }

  return {
    languages,
    currentLanguage,
    setLanguage,
    initializeLanguage,
  }
})
