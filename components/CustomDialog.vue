<template>
    <v-dialog v-model="showDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showDialog = false">{{ cancelButtonText }}</v-btn>
          <v-btn color="primary" text @click="handleAction">{{ actionButtonText }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: 'CustomDialog',
    props: {
      showDialog: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      cancelButtonText: {
        type: String,
        default: 'Cancelar'
      },
      actionButtonText: {
        type: String,
        default: 'Aceptar'
      }
    },
    data() {
      return {
        //internalShowDialog: this.showDialog
      };
    },
    methods: {
      handleAction(action) {
          this.$emit('handleAction', action);
      }
    }
  };
  </script>