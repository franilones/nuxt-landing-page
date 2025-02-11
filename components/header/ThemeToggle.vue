<script setup lang="ts">
import { useThemeStore } from '~/store/useThemeStore'

const themeStore = useThemeStore()
</script>

<template>
  <v-btn
    :aria-label="themeStore.isDarkTheme ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    prepend-icon
    class="theme-toggle"
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
