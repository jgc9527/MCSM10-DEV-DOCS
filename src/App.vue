<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <div class="global-app-container">
    <AppHeader></AppHeader>
    <RouterView :key="$route.fullPath" />
  </div>
</template>
