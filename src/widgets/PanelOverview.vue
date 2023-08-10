<script setup lang="ts">
import { t } from "@/lang/i18n";
import type { LayoutCard } from "@/types";

const props = defineProps<{
  card: LayoutCard;
}>();
</script>

<template>
  <div style="height: 100%">
    <CardPanel style="height: 100%">
      <template #title>{{ card.title }}</template>
      <template #body>
        <a-row>
          <a-col :span="24" :md="12" :lg="6"> </a-col>
        </a-row>
      </template>
    </CardPanel>
  </div>
</template>

<style lang="scss"></style>
