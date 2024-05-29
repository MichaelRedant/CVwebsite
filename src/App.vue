<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
/* Voeg hier globale stijlen toe */
body {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}
</style>
