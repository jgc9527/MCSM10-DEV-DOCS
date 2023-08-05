<script setup lang="ts">
import CardPanel from "../CardPanel.vue";
</script>

<template>
  <div style="height: 100%">
    <CardPanel style="height: 100%">
      <template #title> 我的卡片2 </template>
      <template #body> {{ new Date().getTime() }}</template>
    </CardPanel>
  </div>
</template>
