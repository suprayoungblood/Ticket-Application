<template>
  <div>
    <Navbar ref="navbar" @user-logged-in="setUser" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/navbar/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    setUser(username: string): void {
      (this.$refs.navbar as any).setUser(username);
    },
  },
});
</script>

<style scoped></style>
