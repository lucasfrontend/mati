<template>
  <v-app dark>
    <v-container fluid class="d-flex flex-column align-center">
      <img :src="bottomLogo" alt="Pelisfarma Logo" style="max-width: 80%; height: 50%;">
      <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <NuxtLink v-if="$route.path !== '/'" to="/">Volver</NuxtLink>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Página no encontrada',
      otherError: 'Ha ocurrido un error',
      bottomLogo: require('~/assets/img/not_film.png'),
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
 
  