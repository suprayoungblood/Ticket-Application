<template src="./ticket-form.html"></template>

<script setup lang="ts">
import { ref, computed } from "vue";
import axios from "axios";
import useUserContext from "@/contexts/useUserContext";
import useTicketContext from "@/contexts/useTicketContext";

const { userId } = useUserContext();
const { fetchTicketsForUser } = useTicketContext();

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

const selectedFiles = ref<FileList | null>(null);

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedFiles.value = target.files;
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append("category", category.value);
  formData.append("subject", subject.value);
  formData.append("description", description.value);
  formData.append("userId", userId.value);

  // Check if type.value is an array and handle accordingly
  if (Array.isArray(type.value)) {
    type.value.forEach((t) => formData.append("type", t));
  } else {
    formData.append("type", type.value);
  }

  const clearForm = () => {
    category.value = categories[0];
    type.value = [];
    subject.value = "";
    description.value = "";
    files.value = [];
    selectedFiles.value = null;
  };

  if (selectedFiles.value) {
    for (let i = 0; i < selectedFiles.value.length; i++) {
      formData.append("files", selectedFiles.value[i]);
    }
  }

  try {
    const response = await axios.post(
      "http://localhost:3500/tickets",
      formData
    );

    if (response.status >= 200 && response.status < 300) {
      console.log("Ticket successfully submitted:", response.data);
      fetchTicketsForUser(userId.value);
    } else {
      console.error(
        "Error while submitting ticket:",
        response.data.error || response.data
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error submitting ticket:", error.response.data);
    } else {
      console.error("Error submitting ticket:", error);
    }
  }

  clearForm();
};

const closeModal = () => {
  const modalEl = document.getElementById("ticketFormModal");
  const modal = new bootstrap.Modal(modalEl);
  modal.hide();
};

const openCategory = ref(false);
const openType = ref(false);

const toggleArrow = (dropdown: "category" | "type") => {
  if (dropdown === "category") {
    openCategory.value = false;
  } else if (dropdown === "type") {
    openType.value = false;
  }
};
</script>

<style scoped src="./ticket-form.css"></style>
