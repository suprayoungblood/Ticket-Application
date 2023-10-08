<template src="./ticket-details.html"></template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import useTicketContext from "@/contexts/useTicketContext";

export default defineComponent({
  name: "TicketDetails",
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { tickets, setTickets } = useTicketContext();

    const fetchTicketsForUser = () => {
      axios
        .get(`/api/tickets/user/${props.userId}`)
        .then((response) => {
          setTickets(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tickets:", error);
        });
    };

    return {
      tickets,
      fetchTicketsForUser,
    };
  },
});
</script>

<style scoped src="./ticket-details.css"></style>
