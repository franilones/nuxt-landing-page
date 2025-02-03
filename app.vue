<script setup lang="ts">
function sayHello(): void {
  console.warn('¡Vuetify está funcionando correctamente con TypeScript!')
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="text-center">
        <v-btn color="secondary" @click="sayHello">
          {{ $t('welcome') }}
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
