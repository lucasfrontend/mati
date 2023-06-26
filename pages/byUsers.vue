<template>
    <span class="font-weight-thin" style="font-size: 1.5rem; color: #5335EC">{{ leadsPorCreador.length  }}</span>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
        leadsPorCreador: []
        };
    },
    created () {
        //this.orderBycreated()
    },
    methods: {
        ...mapMutations('authentication', ['SET_AUTHENTICATED']),
        orderBycreated(){
            const leads = this.$store.state.leads.leads;
            const leadsPorCreador = {};

            // Ordenar los leads por el campo "created_by_id"
            leads.sort((lead1, lead2) => lead1.created_by_id - lead2.created_by_id);

            // Dividir los leads en grupos según el "created_by_id"
            leads.forEach(lead => {
                const creadorId = lead.created_by_id;
                if (!leadsPorCreador[creadorId]) {
                leadsPorCreador[creadorId] = [];
                }
                leadsPorCreador[creadorId].push(lead);
            });
            console.log("leadsPorCreador:", leadsPorCreador);
            this.leadsPorCreador = leadsPorCreador;
            const orderedLeads = [...leads]; // Crear copia ordenada del array de leads
            this.SET_LEADS(orderedLeads); // Actualizar estado de vuexxxxx con la copia ordenada de leads

        }
    },
    computed: {
    totalLeadsStandby() {
      return this.$store.state.leads.leads.length;
    }
  },
};
</script>
  