<script setup lang="ts">
import { useI18n } from '#imports'
import { skillSections } from '~/data/skills'
import SkillsSection from './SkillsSection.vue'

const { t } = useI18n()
</script>

<template>
  <v-card class="skills-card" rounded="xl">
    <v-card-title class="skills-card__title">
      {{ t('skills.title') }}
    </v-card-title>
    <v-card-text>
      <div class="skills__sections-grid">
        <SkillsSection
          v-for="section in skillSections"
          :key="section.title"
          :title="section.title"
          :skills="section.skills"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.skills-card {
  max-width: 1000px;
  margin: 2rem auto;
  background-color: var(--background-color);
  border: 3px solid var(--secondary-color);
  padding: 1.5rem;
}

.skills__sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.skills-card__title {
  color: var(--secondary-color);
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
@media (max-width: 768px) {
  .skills__sections-grid {
    grid-template-columns: 1fr;
  }

  .skills-card {
    padding: 1rem;
  }
}
</style>
