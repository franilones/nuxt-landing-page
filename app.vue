<template>
  <v-app>
    <v-main>
      <v-container class="text-center">
        <v-btn color="secondary" @click="sayHello">{{$t('welcome')}}</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const sayHello = (): void => {
  console.log('¡Vuetify está funcionando correctamente con TypeScript!')
}
</script>