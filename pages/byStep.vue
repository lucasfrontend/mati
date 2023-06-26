<template>
  <v-container fluid>
    <h2 class="pb-8">{{ getNameList }}</h2>

    <v-data-table
      :headers="headers"
      :items="getList"
      :search="search"
      :items-per-page="10"
      class="elevation-1"
      no-data-text="Aún no agregaste películas"
      :no-results-text="notPeli"
      :footer-props="{
        'items-per-page-text': itemsPerPageText
      }"
    >

      <template v-slot:item.actions="{ item }">
        <v-btn small color="error" @click="showDialog = true">
          <v-icon small class="mr-1">mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-col cols="12" v-if="getList.length === 0" class="text-center pt-5 pb-5 mb-auto">
      <nuxt-link to="/" class="text-decoration-none">
        <v-col cols="12" class="text-center">
          <span class="font-weight-thin" style="font-size: 1.5rem; color: #5335EC">Vamos, agrega una película!</span>
        </v-col>
        <img :src="bottomLogo" alt="Tabla vacía" style="width: 20%; height: 20%;">
      </nuxt-link>
    </v-col>
    <v-dialog v-model="showDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>Eliminar película</v-card-title>
        <v-card-text>¿Está seguro de que desea eliminar la película de su lista?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showDialog = false">Cancelar</v-btn>
          <v-btn color="primary" text @click="removePeli">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--Modal eliminar peli de MyList
    <CustomDialog :showDialog="showDialog" :title="title" :message="message" :cancelButtonText="cancelButtonText" :actionButtonText="actionButtonText" :handleAction="removePeli"></CustomDialog>
    -->
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      headers: [
        {
          text: 'Mis pelis',
          value: 'content.Title',
        },
        {
          text: 'Eliminar',
          value: 'actions',
          sortable: false,
        },
      ]
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.leads.leads;
    },
    newUsername() {
      return this.$store.state.authentication.newUserName;
    },
  },
  methods: {
    //...mapMutations('list', ['REMOVE_PELI_NEW_USER',  'REMOVE_PELI_AUTHENTICATED']),
  },
  /*
  goToFilmDetail(imdbID) {
    this.$router.push({
      path: '/filmDetail',
      query: { id: imdbID },
    });
  }
  */
};
</script>