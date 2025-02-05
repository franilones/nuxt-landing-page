<script setup lang="ts">
import { useThemeStore } from '~/store/useThemeStore'

const themeStore = useThemeStore()
</script>

<template>
  <v-btn
    :aria-label="themeStore.isDarkTheme ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    icon
    @click="themeStore.toggleTheme"
  >
    <v-icon>
      {{ themeStore.isDarkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
    </v-icon>
  </v-btn>
</template>
