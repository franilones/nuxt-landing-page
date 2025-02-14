<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const socialLinks = ref([])
const cvLabel = computed(() => t('socials.donwloadCv'))
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
    <div class="social-links__list">
      <ul>
        <li v-for="link in socialLinks">
          <a

            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            class="social-links__item"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
          >
            <v-tooltip
              :text="link.name"
              activator="parent"
              location="end"
            />
            <v-icon>{{ link.icon }}</v-icon>
          </a>
        </li>
        <li>
          <a
            :href="locale === 'es' ? '/cv/cv-es.pdf' : '/cv/cv-en.pdf'"
            class="social-links__item"
            :aria-label="cvLabel"
            target="_blank"
          >
            <v-tooltip
              :text="cvLabel"
              activator="parent"
              location="end"
            />
            <v-icon>mdi-download-box-outline</v-icon>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
}
.social-links__list {
  display: flex;
  justify-content: center;
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

.v-tooltip > ::v-deep(.v-overlay__content) {
  background: var(--primary-color);
  color: var(--background-color);
  }
</style>
