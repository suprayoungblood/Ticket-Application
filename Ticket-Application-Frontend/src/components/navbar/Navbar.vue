<template src="./navbar.html"></template>

<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {
      isAuthenticated: false,
      loggedInUsername: null as string | null,
    };
  },
  computed: {
    displayUsername() {
      return this.isAuthenticated && this.loggedInUsername;
    },
  },
  methods: {
    async handleLogout() {
      try {
        const response = await fetch("http://localhost:3500/users/logout", {
          method: "POST",
        });

        const data = await response.json();
        if (response.ok) {
          this.isAuthenticated = false;
          alert(data.message);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
    setUser(username: string) {
      this.isAuthenticated = true;
      this.loggedInUsername = username;
    },
  },
};
</script>
