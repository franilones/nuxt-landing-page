<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const navigationItems = [
  { label: 'header.home', path: '/' },
  { label: 'header.projects', path: '/proyectos' },
  { label: 'header.blog', path: '/blog' },
  { label: 'header.contact', path: '/contacto' },
]
</script>

<template>
  <nav class="header-nav" role="navigation" aria-label="Cabecera de la página">
    <v-list class="header-nav__list">
      <v-list-item
        v-for="item in navigationItems"
        :key="item.path"
        :to="item.path"
        :aria-label="t(item.label)"
        class="header-nav__item"
      >
        {{ t(item.label) }}
      </v-list-item>
    </v-list>
  </nav>
</template>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.header-nav__list {
  display: flex;
  gap: 1rem;
}
</style>
