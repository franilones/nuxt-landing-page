<template>
  <v-app>
    <v-main>
      <v-container class="text-center">
        <v-btn color="secondary" @click="sayHello">Hola, Vuetify con TypeScript</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const sayHello = (): void => {
  console.log('¡Vuetify está funcionando correctamente con TypeScript!')
}
</script>