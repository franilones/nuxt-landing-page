<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/store/useThemeStore'

const { t } = useI18n()
const themeStore = useThemeStore()
const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <v-card class="about-me-card" rounded="xl">
    <div class="about-me-card__container">
      <div v-if="!isMobile" class="about-me-card__image-container">
        <v-img
          v-if="themeStore.isDarkTheme"
          src="/images/profile-dark.jpg"
          :alt="t('about.photoAlt')"
          cover
          class="about-me-card__image"
        />
        <v-img
          v-else
          src="/images/profile-light.jpg"
          :alt="t('about.photoAlt')"
          cover
          class="about-me-card__image"
        />
      </div>
      <div class="about-me-card__content">
        <h2 class="about-me-card__title">
          {{ t('about.title') }}
        </h2>
        <p class="about-me-card__text">
          {{ t('about.description') }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.about-me-card {
  max-width: 1000px;
  margin: 2rem auto;
  background-color: var(--background-color);
  border: 3px solid var(--secondary-color);
}

.about-me-card__container {
  display: flex;
  min-height: 300px;
  max-height: fit-content;
}

.about-me-card__image-container {
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
}

.about-me-card__image {
  height: 100%;
  object-fit: cover;
}

.about-me-card__content {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.about-me-card__title {
  color: var(--secondary-color);
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.about-me-card__text {
  color: var(--primary-color);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .about-me-card__container {
    min-height: auto;
  }

  .about-me-card__content {
    padding: 1rem;
  }
}
</style>
