<template>
  <div v-if="visible" class="alert alert-success fixed-top mt-5" role="alert">
    Successfully logged in!
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.alert {
  width: 100%;
  text-align: center;
  z-index: 1030;
}
</style>
