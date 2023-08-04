<script setup lang="ts">
import type { LayoutCard } from "@/types";
import { onUnmounted } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

const props = defineProps<{
  card: LayoutCard;
}>();

const test = ref(0);
let task: any = null;

onMounted(() => {
  console.log("组件" + props.card.title + " onMounted()");
  task = setInterval(() => {
    test.value++;
  }, 200);
});

onUnmounted(() => {
  console.log("组件" + props.card.title + " onUnmounted()");
  clearInterval(task);
});
</script>

<template>
  <div style="height: 100%; background-color: red"></div>
</template>
