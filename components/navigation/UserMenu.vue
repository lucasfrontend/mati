<template>
  <div class="">
    <v-menu :close-on-content-click="true" :nudge-width="300" offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" width="35" height="35" style="cursor: pointer" v-if="isAuthenticated">
          <img src="@/assets/img/lucas-photo.jpg" alt/>
        </v-avatar>
        <v-avatar v-on="on" width="35" height="35" style="cursor: pointer" v-else>
          <v-icon large>mdi-account-circle</v-icon>
        </v-avatar>
      </template>

      <v-card>
        <v-list>
          <v-list-item router exact> 
            <v-list-item-avatar width="90" height="90" v-if="isAuthenticated">
              <img src="@/assets/img/lucas-photo.jpg" alt="Foto Lukitas" />
            </v-list-item-avatar>
            <v-list-item-avatar class="v-list-item-avatar--text" v-else>
              <div style="width: 90px; height: 90px">
                <v-icon large>mdi-account-circle</v-icon>
              </div>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="grey--text">Hola</v-list-item-title>
              <v-list-item-subtitle v-if="isAuthenticated" style="font-size: 20px;">Lucas</v-list-item-subtitle>
              <v-list-item-subtitle v-else-if="newUsername" style="font-size: 20px;">{{ newUsername }}!</v-list-item-subtitle>
              <nuxt-link to="#">Cambiar foto</nuxt-link>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
            <v-list-item-action-text>
              <v-icon icon v-show="item.disabled === true">
                mdi-lock
              </v-icon>
            </v-list-item-action-text>
          </v-list-item>
        </v-list>

        <v-list-item-group>              
          <v-divider></v-divider>
          <v-divider></v-divider>
          <v-divider></v-divider>
          
          <v-list-item @click="showDialog = true">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card>

    </v-menu>
    <v-dialog v-model="showDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>Cerrar sesión</v-card-title>
        <v-card-text>¿Está seguro de que desea cerrar la sesión?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showDialog = false">Cancelar</v-btn>
          <v-btn color="primary" text @click="handleLogout">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Modal Logout 
    <CustomDialog :showDialog="showDialog" :title="title" :message="message" :cancelButtonText="cancelButtonText" :actionButtonText="actionButtonText" :handleAction="handleLogout" ></CustomDialog>
    -->
  </div>
</template>
  
  <script>
import { mapMutations } from 'vuex';
import CustomDialog from '../CustomDialog.vue';
export default {
  comments: {
    CustomDialog
  },
  data() {
    return {
      showDialog: false,
      items: [
        {
          icon: "mdi-clipboard-check-multiple",
          title: "Mis Listas",
          to: "/myList",
          disabled: false
        },
        {
          icon: "mdi-cog-outline",
          title: "Configuración",
          to: "/#",
          disabled: true
        }
      ],
      title: 'Cerrar Sesión',
      message: '¿Esta seguro de que desea cerrar sesión?',
      cancelButtonText: 'Cancelar',
      actionButtonText: 'Aceptar'
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.authentication.isAuthenticated;
    },
    newUsername() {
      return this.$store.state.authentication.newUserName;
    }
  },
  methods: {
    ...mapMutations('authentication', ['logout']),
    handleLogout() {
      this.logout()
      this.$router.push("/login");
    }
  }
};
</script>
  