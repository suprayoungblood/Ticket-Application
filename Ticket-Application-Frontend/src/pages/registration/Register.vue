<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
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
        const response = await fetch("http://localhost:3500/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            email: this.email,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          // Handle successful registration
          alert(data.message);
          // Redirect to login page
          this.$router.push("/login");
        } else {
          // Handle errors
          alert(data.error);
        }
      } catch (error) {
        console.error("Error registering:", error);
      }
    },
  },
};
</script>
