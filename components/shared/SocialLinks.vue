<script setup lang="ts">
const socialLinks = [
  { name: 'Enviar un email a Francisco Olmos', url: 'mailto:franolmosdev@gmail.com', icon: 'mdi-email' },
  { name: 'Ir a GitHub de Francisco Olmos', url: 'https://github.com/franilones', icon: 'mdi-github' },
  { name: 'Ir a LinkedIn de Francisco Olmos', url: 'https://linkedin.com/in/franciscoolmosdonderis', icon: 'mdi-linkedin' },
]
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
  border: 2px solid var(--primary-color)  ;
}

@media (max-width: 768px){
  .social-links__item{
    font-size: 24px;
    color: var(--secondary-color);
    transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
  }
  .header--open .social-links__item{
    font-size: 24px;
    color: var(--primary-color);
  }
  .header--open .social-links__item:hover,
  .header--open .social-links__item:focus{
    font-size: 24px;
    color: var(--hover-color);
    background-color: var(--primary-color);
    transform: scale(1.2);
    border: 2px solid var(--primary-color)  ;
  }

  .header--closed .social-links__item:hover,
  .header--closed .social-links__item:focus{
    font-size: 24px;
    color: var(--primary-color);
    background-color: var(--hover-color);
    transform: scale(1.2);
    border: 2px solid var(--hover-color)  ;
  }
}
</style>
