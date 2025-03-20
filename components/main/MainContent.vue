<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import EducationTimeline from './education/EducationTimeline.vue'
import Experience from './experience/Experience.vue'
import Skills from './skills/Skills.vue'
</script>

<template>
  <v-main :aria-label="$t('mainContent')" class="main-content">
    <AboutMe />
    <Skills />
    <Experience />
    <EducationTimeline />
  </v-main>
</template>

<style scoped>
.main-content {
  background-color: var(--background-color-secondary);
}
</style>
