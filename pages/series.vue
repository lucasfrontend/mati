<template>
  <v-layout>
    <v-flex>
      <h2 class="pl-3">Series</h2>

      <v-container fluid>
        <v-row>
          <v-col v-for="serie in series" :key="serie.imdbID" xs="12" sm="6" md="4" lg="3">
            <lead-card :movie="serie" />
          </v-col>
        </v-row>
      </v-container>
      
      <v-flex align-center justify-center v-if="loading">
        <custom-progress-circular size='50' color="#5335EC"></custom-progress-circular>
      </v-flex>

    </v-flex>
  </v-layout>
</template>
  
<script>  
import CustomProgressCircular from '~/components/CustomProgressCircular.vue';
import LeadCard from '~/components/LeadCard.vue';
export default {
  components: {
    LeadCard,
    CustomProgressCircular
  },
  data () {
    return {
      loading: false,
      series: []
    }
  },
  created () {
    this.getSeries()
  },
  methods: {
    async getSeries(){
      this.loading = true;
      try {
        const apiKey = process.env.API_KEY;
        const apiUrl = `?apikey=${apiKey}&s=series&type=series&page=1`;
        const response = await this.$axios.get(apiUrl);
          if (response.data.Response === 'True'){
            this.series = response.data.Search;
          } else {
            this.series = [];
          }
          } catch (error){
            console.error('Error en la solicitud:', error);
            this.$store.dispatch("snackbar/create", {
              color: "red",
              text: "Error al cargar los datos"
            });
          } finally {
            this.loading = false;
          }
    }
  }
}
</script>
