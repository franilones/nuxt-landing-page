<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SocialLinks from './shared/SocialLinks.vue'

const { t } = useI18n()
const footerTitle = computed(() => t('landmarks.footer'))
const locationTitle = computed(() => t('spain'))
const contactTitle = computed(() => t('contactMe'))
</script>

<template>
  <footer class="footer" role="contentinfo" :aria-label="footerTitle">
    <div class="footer__title__container">
      <span class="footer__white__lines" />
      <h2 class="footer__title">
        {{ contactTitle }}
      </h2>
      <span class="footer__white__lines" />
    </div>
    <div class="footer__contact-info">
      <div class="footer__top-info">
        <a href="mailto:franolmosdev@gmail.com" class="footer__link" data-testid="email-link">
          <v-icon class="mr-1">mdi-email</v-icon> franolmosdev@gmail.com
        </a>
        <a href="tel:+34605362008" class="footer__link" data-testid="phone-link">
          <v-icon class="mr-1">mdi-phone</v-icon> (+34) 605 362 008
        </a>
      </div>
      <div class="footer__bottom-info">
        <div class="footer__location" data-testid="location">
          <v-icon class="mr-1">
            mdi-map-marker
          </v-icon> Valencia, {{ locationTitle }}
        </div>
      </div>
    </div>
    <div class="footer__social-links">
      <span class="footer__white__lines" />
      <SocialLinks />
      <span class="footer__white__lines" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--background-color);
  color: var(--primary-color);
  padding: 2rem;
  text-align: center;
}

.footer__title__container, .footer__social-links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__title {
  font-size: 1.5rem;
}
.footer__white__lines {
  flex-grow: 1;
  height: 6px;
  background-color: var(--secondary-color);
  border-radius: 4px;
  margin-left: 1rem;
  margin-right: 1rem;
}

.footer__contact-info {
  margin-bottom: 1rem;
}

.footer__top-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
}

.footer__link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.0rem;
  margin-left: 1.0rem;
  color: var(--primary-color);
  text-decoration: none;
  transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
}

.footer__link:hover,
.footer__link:focus {
  text-decoration: underline;
  background-color: var(--primary-color);
  color: var(--background-color);
  border: 3px solid var(--background-color);
  transform: scale(1.2);
}

.footer__link,
.footer__location {
  border: 3px solid var(--primary-color);
  padding: 0.5rem;
  border-radius: 4px;
}

.footer__bottom-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.footer__location {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
}
@media (max-width: 620px){
  .footer__white__lines{
    display: none;
  }
  .footer__top-info {
    flex-direction: column;
  }
  .footer__top-info > a:first-child {
    margin-bottom: 1.0rem;
  }
}
</style>
