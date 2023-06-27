<template>
  <div>
  <h1>visitas</h1>
  <ul>
    <li v-for="lead in leads" :key="lead.id">
      {{ lead.title }}
    </li>
  </ul>
  <h1>chau</h1>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {

data() {
  return {
  };
},
components: {
},
methods: {
  filterLeadsByStep() {
    const step = "Visita Agendada"
    const leads = this.standByleads;
    const filtradas = leads.filter(lead => lead.step === step);
    console.log("filtradas por step:", filtradas)
    return filtradas
  },
},
computed: {
  ...mapState('leads', ['leads']),
},
};
</script>