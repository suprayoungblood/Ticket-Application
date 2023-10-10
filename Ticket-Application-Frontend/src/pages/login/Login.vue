<template src="./login.html"></template>

<script lang="ts">
import axios from "axios";
import useUserContext from "@/contexts/useUserContext";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const { setUser } = useUserContext();
    return { setUser };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("http://localhost:3500/users/login", {
          username: this.username,
          password: this.password,
        });

        if (response.status === 200) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("username", this.username);
          localStorage.setItem("userId", response.data.userId.toString());

          this.setUser({
            username: this.username,
            userId: response.data.userId.toString(),
          });

          alert("Successfully logged in!"); // Using the native alert

          this.$router.push("/");
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
  },
};
</script>

<style src="./login.css"></style>
