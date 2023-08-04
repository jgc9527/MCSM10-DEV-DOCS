<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <a-card>
        <a-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </a-card-text>
        <a-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close Dialog</v-btn
          >
        </a-card-actions>
      </a-card>
    </v-dialog>
  </div>
</template>
