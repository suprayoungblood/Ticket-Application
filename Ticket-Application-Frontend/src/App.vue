<script setup lang="ts">
import TicketDetails from "./components/TicketDetails.vue";
import TicketForm from "./components/TicketForm.vue";
</script>

<template>
  <div>
    <!-- Using the TicketDetails component -->
    <TicketDetails
      category="Sample Category"
      :types="['Type1', 'Type2']"
      subject="Sample Subject"
      description="Sample Description"
      :files="['file1.txt', 'file2.txt']"
    />

    <!-- Button to trigger the modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#ticketFormModal"
    >
      Open Ticket Form
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="ticketFormModal"
      tabindex="-1"
      aria-labelledby="ticketFormModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ticketFormModalLabel">Ticket Form</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <TicketForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
