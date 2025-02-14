<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import Skills from './skills/Skills.vue'
</script>

<template>
  <v-main :aria-label="$t('mainContent')" class="main-content">
    <AboutMe />
    <Skills />
  </v-main>
</template>

<style scoped>
.main-content {
  background-color: var(--background-color-secondary);
}
</style>
