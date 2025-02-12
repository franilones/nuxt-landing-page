<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/store/useThemeStore'

const { t } = useI18n()

const themeStore = useThemeStore()

const changeLightThemeLabel = computed(() => t('changeLightTheme'))
const changeDarkThemeLabel = computed(() => t('changeDarkTheme'))
</script>

<template>
  <v-btn
    :aria-label="themeStore.isDarkTheme ? changeLightThemeLabel : changeDarkThemeLabel"
    prepend-icon
    class="theme-toggle"
    data-testid="theme-toggle-btn"
    @click="themeStore.toggleTheme"
  >
    <v-icon>
      {{ themeStore.isDarkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
    </v-icon>
  </v-btn>
</template>

<style scoped>
.theme-toggle {
  border: 3px solid var(--primary-color);
  border-radius: 10px;
  color: var(--primary-color);
  background-color: var(--background-color);
  transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
}

.theme-toggle:hover, .theme-toggle:focus {
  background-color: var(--primary-color);
  color: var(--background-color);
  border-color: var(--background-color);
  transform: scale(1.2);
}
.v-icon{
  font-size: 24px;
}
</style>
