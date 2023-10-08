<template>
  <div>
    <Navbar :key="navKey.toString()" @userLoggedIn="updateNavbar" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Navbar from "./components/navbar/Navbar.vue";
import useUserContext from "@/contexts/useUserContext";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const { setUser } = useUserContext();
    const navKey = ref(Date.now());

    const updateNavbar = () => {
      console.log("User logged in event caught. Updating Navbar...");
      navKey.value = Date.now();
    };

    onMounted(() => {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      const username = localStorage.getItem("username") || "";
      const userId = localStorage.getItem("userId") || "";
      if (isAuthenticated === "true") {
        setUser({ username, userId });
      }
    });

    return {
      updateNavbar,
      navKey,
    };
  },
});
</script>
