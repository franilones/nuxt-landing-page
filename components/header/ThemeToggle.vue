<script setup lang="ts">
import { useThemeStore } from '~/store/useThemeStore'

const themeStore = useThemeStore()
</script>

<template>
  <v-btn
    :aria-label="themeStore.isDarkTheme ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    prepend-icon
    @click="themeStore.toggleTheme"
    class="theme-toggle"
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
}

.theme-toggle:hover, .theme-toggle:focus {
  background-color: var(--primary-color);
  color: var(--hover-color);
}
.v-icon{
  font-size: 24px;
}
</style>
