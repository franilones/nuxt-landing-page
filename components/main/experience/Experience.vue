<script setup lang="ts">
import { useI18n } from '#imports'
import { experiences } from '~/data/experience'
import ExperienceItem from './ExperienceItem.vue'

const { t } = useI18n()
</script>

<template>
  <v-card class="experience-card" rounded="xl">
    <v-card-title class="experience-card__title">
      {{ t('experience.title') }}
    </v-card-title>
    <v-card-text>
      <div class="experience-card__content">
        <ExperienceItem
          v-for="experience in experiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.experience-card {
  max-width: 1000px;
  margin: 2rem auto;
  background-color: var(--background-color);
  border: 3px solid var(--secondary-color);
  padding: 1.5rem;
}

.experience-card__title {
  color: var(--secondary-color);
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.experience-card__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
