<template>
  <v-app dark>
    <!-- Navbar -->
    <Navbar />
    <!-- Contenido  -->
    <v-main>
      <v-container style="min-height: 90vh">
        <nuxt />
      </v-container>
      <!-- Footer  -->
      <Footer />
      <!-- Footer  -->
    </v-main>
    <!-- Snackbar  -->
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      :value="snackbar.showing"
      @input="removeSnackbar(snackbar)"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${(index * 60) + 8}px`"
    >
      {{snackbar.text}}
      <v-btn text @click="removeSnackbar(snackbar)">Cerrar</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "@/components/navigation/NavBar";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      bottomLogo: require('~/assets/img/verif_peque.png'),
    };
  },
  computed: {
    ...mapState({ snackbars: state => state.snackbar.snackbars })
  },
  methods: {
    removeSnackbar(snackbar) {
      this.$store.dispatch("snackbar/remove", snackbar);
    }
  }
};
</script>
  
  