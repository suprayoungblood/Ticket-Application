<template src="./home.html"></template>

<script lang="ts">
import { defineComponent } from "vue";
import TicketForm from "@/components/ticket-form/Ticket-Form.vue";
import TicketDetails from "@/components/ticket-details/Ticket-Details.vue";
import useUserContext from "@/contexts/useUserContext";

export default defineComponent({
  name: "Home",
  components: {
    TicketForm,
    TicketDetails,
  },
  setup() {
    const { isAuthenticated, userId } = useUserContext();

    return {
      isUserAuthenticated: isAuthenticated,
      userId,
    };
  },
});
</script>
