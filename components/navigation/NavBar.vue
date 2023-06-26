<template>
  <div>
    <!-- Menu lateral izquierdo  -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <div style="padding: 30px;">
        <span class="font-weight-black" style="font-size: 2rem;">Mati Leads probandingg</span>
        <img :src="logoImage" alt="Verifarma" style="width: 100%; height: 50%;">         
      </div>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <!-- App Bar  -->
    <v-app-bar fixed app flat height="70">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-n6"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!drawer" class="mr-6 d-none d-sm-block font-weight-black">Mati Leads</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-row class="mt-4 d-flex justify-end">
        <!-- BUSCADOR -->
        <v-col cols="12" md="6">
          <v-text-field
            v-model="searchedMovie"
            label="Buscar leads"
            outlined
            append-icon="mdi-magnify"
            @click:append="searchMovie"
            @keyup.enter="searchMovie"
            dense
            small
            ></v-text-field>
          </v-col>
        </v-row>
        <!--
        :rules="[required('peli')]"
      -->

      <!-- Menú Registrar usuario/ Login -->
      <div class="d-flex justify-center">
        <UserMenu v-if="$store.state.authentication.isAuthenticated || $store.state.authentication.newUserName" />
        <RegisterMenu v-else  />
      </div>

    </v-app-bar>

    <v-flex align-center justify-center v-if="loading">
      <CustomProgressCircular size='50' color="#5335EC"></CustomProgressCircular>
    </v-flex>
  </div>
</template>
  
<script>
import UserMenu from "@/components/navigation/UserMenu";
import RegisterMenu from "@/components/navigation/RegisterMenu";
import { mapMutations } from 'vuex';
import validations from "@/utils/validations";
import CustomProgressCircular from '~/components/CustomProgressCircular.vue';
export default {
  components: {
    CustomProgressCircular
  },
  data() {
    return {
      drawer: false,
      searchedMovie: '',
      loading: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-television-classic",
          title: "otro",
          to: "/otro"
        }
      ],
      searchRules: [v => !!v || 'El campo de búsqueda es obligatorio'],
      logoImage: require('~/assets/img/bottom.png'),
      ...validations
    };
  },
  components: {
    RegisterMenu,
    UserMenu
  },
  methods: {
    ...mapMutations('search', ['SET_SEARCH_MOVIE', 'RESET_SEARCH_MOVIE']),
    searchMovie() {
      if (this.searchedMovie) {
        this.loading = true
        this.RESET_SEARCH_MOVIE()
        this.SET_SEARCH_MOVIE(this.searchedMovie);

        this.$router.push('/filmResult');
        this.loading = false
      } else {
        this.$store.dispatch("snackbar/create", {
          color: "red",
          text: 'Ingrese un título válido'
        });
      }
    }
  }
};
</script>