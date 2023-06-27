<template>
    <div>
    <h1>visitas: {{  totalLeadsStandby }}</h1>
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
      leads: this.$store.state.leads.leads
    };
  },
  components: {
  },
  methods: {
  },
  computed: {
    totalLeadsStandby() {
      return this.$store.state.leads.leads.length;
    }
  },
};
</script>