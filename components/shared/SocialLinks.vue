<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const socialLinks = ref([])

function updateSocialLinks() {
  socialLinks.value = [
    { name: t('socials.email'), url: 'mailto:franolmosdev@gmail.com', icon: 'mdi-email' },
    { name: t('socials.github'), url: 'https://github.com/franilones', icon: 'mdi-github' },
    { name: t('socials.linkedin'), url: 'https://linkedin.com/in/franciscoolmosdonderis', icon: 'mdi-linkedin' },
    { name: t('socials.whatsapp'), url: 'https://api.whatsapp.com/send?phone=34605362008', icon: 'mdi-whatsapp' },
  ]
}

updateSocialLinks()

watch(locale, () => {
  updateSocialLinks()
})
</script>

<template>
  <nav class="social-links" aria-label="Redes sociales">
    <div role="list" class="social-links__list">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        :aria-label="link.name"
        class="social-links__item"
        target="_blank"
        rel="noopener noreferrer"
        role="listitem"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.social-links__list {
  display: flex;
  gap: 0.5rem;
}

.social-links__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--primary-color);
  font-size: 24px;
  border-radius: 8px;
  transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
}

.social-links__item:hover,
.social-links__item:focus {
  color: var(--background-color);
  background-color: var(--primary-color);
  transform: scale(1.2);
  border: 2px solid var(--primary-color);
}
</style>
