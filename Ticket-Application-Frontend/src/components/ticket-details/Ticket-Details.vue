<template src="./ticket-details.html"></template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
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
        .get(`http://localhost:3500/tickets/user/${props.userId}`)
        .then((response) => {
          setTickets(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tickets:", error);
        });
    };
    onMounted(() => {
      fetchTicketsForUser();
    });

    const truncateText = (text: string, length: number) => {
      if (text.length <= length) {
        return text;
      }
      return text.substring(0, length) + "...";
    };

    return {
      tickets,
      fetchTicketsForUser,
      truncateText,
    };
  },
});
</script>

<style scoped src="./ticket-details.css"></style>
