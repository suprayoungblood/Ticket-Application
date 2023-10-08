import { ref, readonly } from "vue";

export default function useTicketContext() {
  const tickets = ref<any[]>([]);

  function setTickets(ticketData: any[]) {
    tickets.value = ticketData;
  }

  return {
    tickets: readonly(tickets),
    setTickets,
  };
}
