<template src="./ticket-form.html"></template>

<script setup lang="ts">
import { ref, computed } from "vue";

declare var bootstrap: any;

const categories = ["Hardware", "Software", "Network", "In-Processing"];
const types = {
  Hardware: [
    "Laptop",
    "Mobile",
    "Peripherals",
    "Desk Phone",
    "Printers",
    "Other",
  ],
  Software: [
    "Teams/Zoom",
    "Mobile Blackberry",
    "Adobe",
    "Outlook",
    "Microsoft Office",
    "Other",
  ],
  Network: ["Network Access", "Connectivity", "VPN", "Drivers", "Other"],
  "In-Processing": [
    "Access Badge",
    "Common Access Card (CAC)",
    "SIPR",
    "Trello",
  ],
};

const category = ref(categories[0]);
const type = ref([]);
const subject = ref("");
const description = ref("");
const files = ref<string[]>([]);
let fileCounter = 0;

const currentTypes = computed(
  () => types[category.value as keyof typeof types]
);

const addFile = () => {
  fileCounter++;
  files.value.push(`nameoffileattached${fileCounter}.ext`);
};

const removeFile = (index: number) => {
  files.value.splice(index, 1);
};

const clearForm = () => {
  category.value = categories[0];
  type.value = [];
  subject.value = "";
  description.value = "";
  files.value = [];
  fileCounter = 0;
};

const submitForm = () => {
  console.log({
    category: category.value,
    type: type.value,
    subject: subject.value,
    description: description.value,
    files: files.value,
  });
  clearForm();
};

const closeModal = () => {
  const modalEl = document.getElementById("ticketFormModal");
  const modal = new bootstrap.Modal(modalEl);
  modal.hide();
};

// New refs for arrow animation
const openCategory = ref(false);
const openType = ref(false);

// New method to toggle arrow rotation
const toggleArrow = (dropdown: "category" | "type") => {
  if (dropdown === "category") {
    openCategory.value = false;
  } else if (dropdown === "type") {
    openType.value = false;
  }
};
</script>

<style scoped src="./ticket-form.css"></style>
