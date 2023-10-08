<template>
  <div>
    <Navbar :key="navKey" @userLoggedIn="updateNavbar" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, watchEffect } from "vue";
import Navbar from "./components/navbar/Navbar.vue";
import useUserContext from "@/contexts/useUserContext";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const { setUser, isAuthenticated } = useUserContext();
    const navKey = ref(0);

    const state = reactive({
      authStatus: isAuthenticated.value,
    });

    const updateNavbar = () => {
      console.log("User logged in event caught. Updating Navbar...");
      navKey.value++;
    };

    onMounted(() => {
      const isAuth = localStorage.getItem("isAuthenticated");
      const username = localStorage.getItem("username") || "";
      const userId = localStorage.getItem("userId") || "";
      if (isAuth === "true") {
        setUser({ username, userId });
      }
    });

    watchEffect(() => {
      state.authStatus = isAuthenticated.value;
    });

    return {
      updateNavbar,
      navKey,
      isAuthenticated: state.authStatus,
    };
  },
});
</script>
