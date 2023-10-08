import { ref, readonly } from "vue";
import axios from "axios";

export default function useTicketContext() {
  const tickets = ref<any[]>([]);

  function setTickets(ticketData: any[]) {
    tickets.value = ticketData;
  }

  async function fetchTicketsForUser(userId: string) {
    try {
      const response = await axios.get(
        `http://localhost:3500/tickets/user/${userId}`
      );
      if (response.status >= 200 && response.status < 300) {
        setTickets(response.data);
      } else {
        console.error(
          "Error fetching tickets:",
          response.data.error || response.data
        );
      }
    } catch (error: any) {
      console.error("Error fetching tickets:", error.message || error);
    }
  }

  return {
    tickets: readonly(tickets),
    setTickets,
    fetchTicketsForUser,
  };
}
