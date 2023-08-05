<script setup lang="ts">
import CardPanel from "../CardPanel.vue";
import type { LayoutCard } from "../../types/index";

const props = defineProps<{
  card: LayoutCard;
}>();
</script>

<template>
  <div style="height: 100%">
    <a-row :gutter="[24, 24]" style="height: 100%">
      <a-col :span="24" :md="12">
        <div
          style="
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            height: 100%;
          "
        >
          <CardPanel style="flex-grow: 1; margin-bottom: 24px">
            <template #title>{{ card.title }}</template>
            <template #body>
              卡片示例 <br />
              测试信息
              <p>我是测试信息113123123</p>
            </template>
          </CardPanel>
          <CardPanel style="flex-grow: 1">
            <template #title>{{ card.title }}</template>
            <template #body>
              卡片示例 <br />
              测试信息
              <p>我是测试信息113123123</p>
            </template>
          </CardPanel>
        </div>
      </a-col>
      <a-col :span="24" :md="12">
        <CardPanel style="height: 100%">
          <template #title>{{ card.title }}</template>
          <template #body>
            卡片示例 <br />
            测试信息
            <p>我是测试信息113123123</p>
          </template>
        </CardPanel>
      </a-col>
    </a-row>
  </div>
</template>
