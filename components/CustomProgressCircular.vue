<template>
    <v-progress-circular :size="size" :color="color" indeterminate class="custom-loading"></v-progress-circular>
</template>

<script>
export default {
  name: 'CustomProgressCircular',
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    size: {
      type: String,
      default: '45'
    }
  }
};
</script>

<style scoped>
.custom-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>