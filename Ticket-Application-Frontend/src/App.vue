<script setup lang="ts">
import TicketDetails from "./components/TicketDetails.vue";
import TicketForm from "./components/TicketForm.vue";
</script>

<template>
  <div>
    <!-- Using the TicketDetails and TicketForm components -->
    <TicketDetails
      category="Sample Category"
      :types="['Type1', 'Type2']"
      subject="Sample Subject"
      description="Sample Description"
      :files="['file1.txt', 'file2.txt']"
    />
    <TicketForm />
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
