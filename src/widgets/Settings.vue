<script setup lang="ts">
import type { LayoutCard } from "@/types";
import { ref } from "vue";
import { userService } from "@/services/user";

const props = defineProps<{
  card: LayoutCard;
}>();

const activeKey = ref("1");
const formData = ref({
  language: "en_US",
});

const { getUserInfo } = userService();
const { state, isLoading } = getUserInfo("666");
getUserInfo("777");
</script>

<template>
  <CardPanel class="CardWrapper" style="height: 100%">
    <template #title>{{ card.title }}</template>
    <template #body>
      <div>{{ state }}, {{ isLoading }}</div>

      <a-form :model="formData" layout="vertical">
        <a-form-item label="面板语言">
          <a-input v-model:value="formData.language" placeholder="input placeholder" />
        </a-form-item>
      </a-form>
    </template>
  </CardPanel>
</template>

<style lang="scss" scoped>
.CardWrapper {
  .tab {
  }
}
</style>
