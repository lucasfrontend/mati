<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <h4 class="white--text">Nosotros</h4>
          <p class="grey--text text--darken-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum nisi deserunt laudantium sit est incidunt quis.</p>
        </v-col>
        <v-col cols="12" md="3">
          <h4 class="white--text">Terms of Use</h4>
          <a class="grey--text text--darken-2" href="#">Términos y condiciones</a>
          <a class="grey--text text--darken-2" href="#">Acceptable Use Policy</a>
        </v-col>
        <v-col cols="12" md="3">
          <h4 class="white--text">Políticas de Privacidad</h4>
          <a class="grey--text text--darken-2" href="#">Protección de datos</a>
          <a class="grey--text text--darken-2" href="#">Política de cookies</a>
        </v-col>
        <v-col cols="12" md="3">
          <h4 class="white--text">FAQ</h4>
          <a class="grey--text text--darken-2" href="#">Preguntas frecuentes</a>
          <a class="grey--text text--darken-2" href="#">Soporte</a>
        </v-col>
      </v-row>
    </v-container>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-right">
        <div>Barridev &copy; {{ new Date().getFullYear() }}</div>
      </v-col>
    </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      bottomLogo: require('~/assets/img/verif_peque.png'),
    };
  }
};
</script>