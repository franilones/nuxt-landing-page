<script setup lang="ts">
const socialLinks = [
  { name: 'Enviar un email a Francisco Olmos', url: 'mailto:franolmosdev@gmail.com', icon: 'mdi-email' },
  { name: 'Ir a GitHub de Francisco Olmos', url: 'https://github.com/franilones', icon: 'mdi-github' },
  { name: 'Ir a LinkedIn de Francisco Olmos', url: 'https://linkedin.com/in/franciscoolmosdonderis', icon: 'mdi-linkedin' },
]
</script>

<template>
  <nav class="social-links" aria-label="Redes sociales">
    <v-list>
      <v-list-item
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        :aria-label="link.name"
        class="social-links__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item>
    </v-list>
  </nav>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 0.5rem;
  font-size: 24px;
}

.social-links__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--primary-color);
}

.social-links__item:hover {
  color: var(--hover-color);
}

.social-links__item:focus {
  color: var(--hover-color);
  background-color: var(--primary-color);
}
</style>
