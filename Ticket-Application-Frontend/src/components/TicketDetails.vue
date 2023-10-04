<template>
  <div>
    <h3>Ticket Details</h3>
    <p><strong>Category:</strong> {{ category }}</p>
    <p><strong>Type:</strong> {{ types.join(", ") }}</p>
    <p><strong>Subject:</strong> {{ subject }}</p>
    <p><strong>Description:</strong> {{ description }}</p>
    <ul>
      <li v-for="file in files" :key="file">{{ file }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const category = ref("Sample Category");
const types = ref(["Type1", "Type2"]);
const subject = ref("Sample Subject");
const description = ref("Sample Description");
const files = ref(["file1.txt", "file2.txt"]);
</script>
