<template src="./home.html"></template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TicketForm from "@/components/ticket-form/Ticket-Form.vue";

export default defineComponent({
  name: "Home",
  components: {
    TicketForm,
  },
  setup() {
    // Retrieve the authentication status from local storage
    const isUserAuthenticated = ref(
      localStorage.getItem("isAuthenticated") === "true"
    );

    return { isUserAuthenticated };
  },
});
</script>

<style scoped src="./home.css"></style>
