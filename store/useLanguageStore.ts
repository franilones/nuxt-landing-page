import type { Language, LanguageCode } from '~/types/language'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalStorageStore } from './useLocalStorageStore'

export const useLanguageStore = defineStore('language', () => {
  const { setLocale } = useI18n()
  const localStorageStore = useLocalStorageStore()

  const languages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ]

  const currentLanguage = ref<Language>(languages[0])

  function getLanguageName() {
    return currentLanguage.value.name
  }

  function setLanguage(language: Language) {
    currentLanguage.value = language
    setLocale(language.code)
    document.documentElement.setAttribute('lang', language.code)
    localStorageStore.updateUserPreferences({ language: language.code })
  }

  function initializeLanguage() {
    const storedLangCode = localStorageStore.userPreferences.language
    const storedLang = languages.find(lang => lang.code === storedLangCode)
    if (storedLang) {
      setLanguage(storedLang)
      return
    }
    const browserLang = navigator.language.split('-')[0]
    const defaultLang = languages.find(lang => lang.code === browserLang) || languages[0]
    setLanguage(defaultLang)
  }

  return {
    languages,
    currentLanguage,
    setLanguage,
    getLanguageName,
    initializeLanguage,
  }
})
