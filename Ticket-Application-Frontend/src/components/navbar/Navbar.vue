<template src="./navbar.html"></template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import axios from "axios";
import useUserContext from "@/contexts/useUserContext";

export default defineComponent({
  name: "Navbar",
  setup() {
    const {
      isAuthenticated,
      username: loggedInUsername,
      clearUser,
    } = useUserContext();

    watchEffect(() => {
      console.log(
        "Navbar state:",
        isAuthenticated.value,
        loggedInUsername.value
      );
    });

    const handleLogout = async () => {
      try {
        const response = await axios.post("http://localhost:3500/users/logout");

        if (response.status === 200) {
          clearUser();
          console.log(
            "User logged out:",
            isAuthenticated.value,
            loggedInUsername.value
          );
          alert(response.data.message);
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    return {
      isAuthenticated,
      loggedInUsername,
      handleLogout,
    };
  },
});
</script>
