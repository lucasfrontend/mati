<template>
  <v-card elevation="2" :style="{ 'max-height': '400px'}">
    <div class="overlay image-overlay">
      <v-card-title class=""></v-card-title>
      <v-card-actions>
      </v-card-actions>
    </div>
    <!--Modal Redirección a Login - Register -->
    <v-dialog v-model="showDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>Mati Leads</v-card-title>
        <v-card-text>Iniciá sesión o registrate para ver este contenido</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <nuxt-link to="/login">
            <v-btn color="primary" text @click="showDialog = false">Iniciar sesión</v-btn>
          </nuxt-link>
          <nuxt-link to="/register">
            <v-btn color="primary" text @click="showDialog = false">Registrarse</v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>
  
<script>
export default {
  props: {
    lead: Object
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    goToFilmDetail(imdbID) {
      this.$router.push({
        path: '/filmDetail',
        query: { id: imdbID },
      });
    },
    truncateTitle(title, maxLength) {
      if (title.length <= maxLength) {
        return title;
      } else {
        return title.substring(0, maxLength) + "...";
      }
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.authentication.isAuthenticated;
    },
    newUsername() {
      return this.$store.state.authentication.newUserName;
    }
  }
}
</script>

<style> 
.custom-btn{
  position: absolute;
  bottom: 4px;
  right: 4px;
}
</style>

  