<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

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

          alert(response.data.message);
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
