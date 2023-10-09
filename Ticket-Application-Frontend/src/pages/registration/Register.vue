<template src="./register.html"></template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post("http://localhost:3500/users", {
          username: this.username,
          password: this.password,
          email: this.email,
        });

        console.log("Received response:", response);

        if (response.status === 201) {
          alert(
            response.data.message ||
              "Registration response received without a message."
          );
          this.$router.push("/login");
        } else {
          alert(
            response.data.error || response.data.message || "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error registering:", error);
      }
    },
  },
};
</script>
