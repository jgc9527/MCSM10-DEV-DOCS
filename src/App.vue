<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <!-- <div style="margin: 20px; display: flex; justify-content: center">
    <div>
      <RouterLink to="/">页面1</RouterLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <RouterLink to="/about">页面2</RouterLink>
    </div>
  </div> -->

  <AppHeader></AppHeader>

  <RouterView :key="$route.fullPath" />
</template>
