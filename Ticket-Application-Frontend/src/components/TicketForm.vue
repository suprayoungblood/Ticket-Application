<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- Category Dropdown -->
      <select v-model="category">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <!-- Type Dropdown -->
      <select v-model="type" multiple>
        <option v-for="t in currentTypes" :key="t" :value="t">{{ t }}</option>
      </select>

      <!-- Subject Input -->
      <input v-model="subject" placeholder="Subject" />

      <!-- Description Input -->
      <textarea v-model="description" placeholder="Description"></textarea>

      <!-- Add Pretend Files Button -->
      <button @click.prevent="addFile">Add File</button>
      <ul>
        <li v-for="file in files" :key="file">{{ file }}</li>
      </ul>

      <!-- Cancel Button -->
      <button @click.prevent="clearForm">Cancel</button>

      <!-- Submit Button -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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
const files = ref([]);
let fileCounter = 0;

const currentTypes = computed(() => types[category.value]);

const addFile = () => {
  fileCounter++;
  files.value.push(`nameoffileattached${fileCounter}.ext`);
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
  // Emit the details to parent component or store
  // For now, just log it
  console.log({
    category: category.value,
    type: type.value,
    subject: subject.value,
    description: description.value,
    files: files.value,
  });
  clearForm();
};
</script>
