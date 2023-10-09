<template src="./login.html"></template>

<script lang="ts">
import axios from "axios";
import useUserContext from "@/contexts/useUserContext";
import Alert from "@/components/alerts/alert.vue"; // Importing the Alert component

export default {
  components: {
    Alert,
  },
  data() {
    return {
      username: "",
      password: "",
      showSuccessAlert: false,
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

          this.showSuccessAlert = true; // Showing the alert
          setTimeout(() => {
            this.showSuccessAlert = false; // Hiding the alert after 3 seconds
          }, 3000);

          console.log("Emitting userLoggedIn event");
          this.$emit("userLoggedIn");
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
