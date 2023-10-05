<!-- App.vue -->
<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* Global styles can go here */
</style>
