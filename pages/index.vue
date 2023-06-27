<template>
  <v-layout>
    <v-flex>
      <h2 class="pl-3">Total Leads Standby: {{ standByleads.length }}</h2>
      <h2 v-if="leadsEnStandbyMasDe14Dias">Leads + 14 dias: {{ leadsEnStandbyMasDe14Dias }} </h2>
      <h3 v-if="users">total users: {{ users.length }} </h3>
      <!--
      <h3 v-if="this.$store.state.leads.leads"> Holiiii</h3>
      -->     
     <visitas></visitas>
      <!--
      <h3 v-if="allLeads">allLeads: {{ allLeads.length }}</h3>
      -->
      <v-container fluid>
        <v-row>
          <v-col v-for="lead in standByleads" :key="lead.id" xs="12" sm="6" md="4" lg="3">
            <h4>{{ lead.title }}</h4>
            <lead-card :lead="lead" />
          </v-col>
        </v-row>
      </v-container>
      <byUsers></byUsers>

      <h4 v-if="leadsPorCreador">Por creador: {{ leadsPorCreador }}</h4>

      <p v-if="leadsByCreatedAt">Mas de 14: {{ leadsByCreatedAt }}</p>

      <v-flex align-center justify-center v-if="loading">
        <custom-progress-circular size='50' color="#5335EC"></custom-progress-circular>
      </v-flex>
    </v-flex>
  </v-layout>
</template>
  
<script>  
/*
- Asignacion de CallCenter a Vendedores para visita.
- “Llego” y “No Llego” de *Vendedores* a *Call Center*
- Calendario con visitas agendadas
- Leads atrasados por usuario. (Para Hoy, > 1 dia)
- Leads en “Standby” y Leads en “Standby por + de 14 dias”.
- Si se puede:
    - Tiempo de reaccion del call center desde que se crea hasta que se edita o se hace alguna accion.
    - Tiempo de uso del sistema por usuario.
    - Tiempo de tenencia de un lead que no supere los 30 dias.
- Por usuario:
    - Numero de leads asignados.
    - Mail enviados.
    - Llamadas
    - Whatsapps
    - Asignado a vendedor para visita.
    - Cancelados
*/

import CustomProgressCircular from '~/components/CustomProgressCircular.vue';
import LeadCard from '~/components/LeadCard.vue';
import axios from 'axios';
import { mapMutations } from 'vuex';
import byUsers from './byUsers.vue';
import visitas from '../components/visitas.vue';

// nombre del call center: cuantos pases hizo cada call center, por default lo hago por ultima semana, poder filtrar por fecha 
//- “Llego” y “No Llego” de *Vendedores* a *Call Center* visitas llegaron o no
/*
fecha de recordatorio es remind_date: "2023-07-04"
horario de recordatorio es remind_time: "12:00"

filtrar por campo step para buscar visitas agendadas, next_action_at lo uso para marcar en el calendario...
tiempo chequear que quede igual luego de esa fecha


ej 23677861 

lead para probar 24680426

Tiempo de reaccion del call center desde que se crea hasta que se edita o se hace alguna 
*/

export default {
  components: {
    LeadCard,
    CustomProgressCircular,
    byUsers,
    visitas
  },
  data() {
    return {
      standByleads: [], // Array para almacenar leads
      users: [], // array usuarios
      pipelines: [],
      apiKey: process.env.apiKey,
      apiUrl: process.env.apiURL,
      limit: 100,
      offset: 0,
      loading: null,
      leadsEnStandbyMasDe14Dias: 0,
      leadsPorCreador: [],
      leadsByCreatedAt: [],
      calls: []
    };
  },
  created () {
    this.getLeadsStandby()
    //this.getLeadsAll()
    //this.getUsers()
    //this.getPipelines()
    //this.getCalls()
  },
  computed: {
    totalLeadsStandby() {
      return this.$store.state.leads.leads.length;
    }
  },
  methods: {
    ...mapMutations('leads', ['SET_LEADS', 'RESET_LEADS']),
    /*
    getLeadsAll() {
      return new Promise((resolve, reject) => {
        axios.get(`/api/leads?limit=${this.limit}&offset=${this.offset}`, {
          headers: {
            'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2'
          }
        })
          .then(response => {
            const allLeads = response.data;
            if (allLeads.length > 0) {
              this.allLeads = [...this.allLeads, ...allLeads];
              this.offset += this.limit;
              this.getLeadsAll().then(resolve).catch(reject);
            } else {
              console.log('Se han obtenido todos los leads.');
              console.log('this.allLeads', this.allLeads);
              resolve(this.allLeads);
            }
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      })
      .finally(() => {
        // Código a ejecutar sin importar si la promesa se resuelve o se rechaza
        console.log('Tarea de obtención de leads finalizada.');
        this.calculateDays()
      });
    },
    */
    getLeadsStandby() {
      const status = 'standby';
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.BASE_URL}/api/leads?status=${status}&limit=${this.limit}&offset=${this.offset}`, {
          headers: {
            'X-API-KEY': process.env.API_KEY
          }
        })
          .then(response => {
            const standByleads = response.data;
            if (standByleads.length > 0) {
              this.standByleads = [...this.standByleads, ...standByleads];
              this.offset += this.limit;
              this.getLeadsStandby().then(resolve).catch(reject);
            } else {
              console.log('Se han obtenido todos los leads.');
              console.log('this.leads', this.standByleads);
              resolve(this.standByleads);
            }
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      })
      .finally(() => {
        // Código a ejecutar sin importar si la promesa se resuelve o se rechaza
        console.log('Tarea de obtención de leads finalizada.');
        //this.filterLeadsByStep()
        //this.getLeadById('24680426')
        //this.getLeadByIdWithComment('24680426')
        //this.calculateDays()
        //this.orderBycreated()
        //this.orderByCreatedAt()
      });
    },
    getLeadById(leadId) {
      //filtrar los comentarios por fecha , usar campo name dentro de activity que tiene que decir: llego o no llego      
      /*

      Por usuario:
    - Numero de leads asignados.
    - Mail enviados.
    - Llamadas es contesto o no contesto/
    - Whatsapps / 
    - Asignado a vendedor para visita.
    - Cancelados
    saber por usuario cuantas llamadas hizo, saber si contesta o no contesta

    Para tiempo de reaccion:
      a created_at se le resta updated_at? 
      created_at esta en gmt arg y debe ser en formato chileno, le debo restar 4 horas
      Cuantos leads llegaron hoy? hacerlo en base a horario chileno
      usar moment para ver en que hprario debe hacerse, en chile se cambia dos veces al anio 

      el objeto activity tiene el campo name que indica si llego o no llego?
    */
      return axios.get(`/api/leads/${leadId}`, {
        headers: {
          'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2'
        }
      })
        .then(response => {
          const lead = response.data;
          console.log("Lead num:", lead);
          return lead;
        })
        .catch(error => {
          console.error("ERROR GETTING LEAD", error);
          throw error;
        });
    },
    getLeadByIdWithComment(leadId) {
      //filtrar los comentarios por fecha , usar campo name dentro de activity que tiene que decir: llego o no llego      
      /*
      Por usuario:
    - Numero de leads asignados.
    - Mail enviados.
    - Llamadas es contesto o no contesto/
    - Whatsapps / 
    - Asignado a vendedor para visita.
    - Cancelados
    saber por usuario cuantas llamadas hizo, saber si contesta o no contesta

    Para tiempo de reaccion:
      a created_at se le resta updated_at? 
      created_at esta en gmt arg y debe ser en formato chileno, le debo restar 4 horas
      Cuantos leads llegaron hoy? hacerlo en base a horario chileno
      usar moment para ver en que hprario debe hacerse, en chile se cambia dos veces al anio 

      el objeto activity tiene el campo name que indica si llego o no llego?
    */
      return axios.get(`/api/leads/${leadId}/comments`, {
        headers: {
          'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2'
        }
      })
        .then(response => {
          const lead = response.data;
          console.log("Lead num:", lead);
          return lead;
        })
        .catch(error => {
          console.error("ERROR GETTING LEAD", error);
          throw error;
        });
    },
    filterLeadsByStep() {
      const step = "Visita Agendada"
      const leads = this.standByleads;
      const filtradas = leads.filter(lead => lead.step === step);
      console.log("filtradas por step:", filtradas)
      return filtradas
    },
    getUsers(){
      axios.get(`/api/users?status=activated`, {
        headers: {
          'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2'
        }
      })
        .then(response => {
          const users = response.data;
          console.log("Usuarios:", response.data)
          this.users = users
        })
        //filtrar por usuarios con leads + de uno, buscar por fecha 
        .catch(error => {
          console.error("ERROR USERS", error);
        });
    },
    getPipelines(){
      axios.get(`/api/pipelines`, {
        headers: {
          'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2'
        }
      })
        .then(response => {
          const pipelines = response.data;
          console.log("respuesta pipelines:", response.data)
          this.pipelines = pipelines
          console.log("this.pipelines:", this.pipelines)
        })
        .catch(error => {
          console.error("ERROR USERS", error);
        });
    },
    // Función para calcular el número de días transcurridos entre dos fechas
    calcularDiasTranscurridos(fechaInicio, fechaFin) {
      const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
      const inicio = new Date(fechaInicio);
      const fin = new Date(fechaFin);
      return Math.round(Math.abs((fin - inicio) / unDia));
    },
    calculateDays(){
      const hoy = new Date();
      const leadsEnStandbyMasDe14Dias = this.standByleads.reduce((contador, lead) => {
        if (lead.status === 'standby') {
          const diasTranscurridos = this.calcularDiasTranscurridos(lead.created_at, hoy);
          if (diasTranscurridos > 14) {
            contador++;
          }
        }
        return contador;
      }, 0);
      this.leadsEnStandbyMasDe14Dias = leadsEnStandbyMasDe14Dias;
      console.log('Número de leads en Standby por más de 14 días:', leadsEnStandbyMasDe14Dias);
    },
    formatName(name) {
      if (name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }
      return '';
    },
    orderBycreated(){
      const leads = this.standByleads;
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

      const orderedLeads = [...leads]; // Crear una copia ordenada del array de leads
      this.SET_LEADS(orderedLeads); // Actualizar el estado con la copia ordenada de leads
    },
    orderByCreatedAt(){
      // Obtener la fecha actual
      const leads = this.standByleads;

      // Calcular la fecha hace 14 días
      const fechaLimite = new Date();
      fechaLimite.setDate(fechaLimite.getDate() - 14);

      // Filtrar los leads que han pasado más de 14 días desde su creación
      const leadsByCreatedAt = leads.filter((lead) => {
        const fechaCreacion = new Date(lead.created_at);
        const result = fechaCreacion < fechaLimite
        return result;
      });

      // Imprimir los leads filtrados
      console.log("leadsByCreatedAt:", leadsByCreatedAt);
      this.leadsByCreatedAt = leadsByCreatedAt
    },
    getCalls(){
      axios.get(`/api/calls`, {
        headers: {
          'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2'
        }
      })
        .then(response => {
          const calls = response.data;
          console.log("respuesta calls:", response.data)
          this.calls = calls
          console.log("this.CALLS:", this.calls)
        })
        .catch(error => {
          console.error("ERROR CALLS", error);
        });
    }
  },
  mounted() {
    
  },
}
</script>
