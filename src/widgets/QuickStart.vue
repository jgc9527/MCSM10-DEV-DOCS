<script setup lang="ts">
import { t } from "@/lang/i18n";
import type { LayoutCard } from "@/types";
import {
  BuildFilled,
  DropboxOutlined,
  DropboxSquareFilled,
  GoldFilled,
  SwitcherFilled,
  UserOutlined,
} from "@ant-design/icons-vue";

const props = defineProps<{
  card: LayoutCard;
}>();

const actions = [
  {
    icon: BuildFilled,
    title: t("建立 Minecraft 游戏服务器"),
  },
  // {
  //   icon: GoldFilled,
  //   title: t("建立 Terraria 游戏服务器"),
  // },
  {
    icon: SwitcherFilled,
    title: t("建立 Steam 游戏服务器"),
  },
  {
    icon: DropboxSquareFilled,
    title: t("部署任意控制台应用程序"),
  },
];
</script>

<template>
  <CardPanel style="height: 100%">
    <template #title>{{ card.title }}</template>
    <template #body>
      <a-row :gutter="[24, 24]">
        <a-col :span="24" v-for="action in actions" :key="action.title">
          <div class="quick-btn">
            <div>
              <component :is="action.icon"></component>
            </div>
            <div class="ml-8">{{ action.title }}</div>
          </div>
        </a-col>
      </a-row>
    </template>
  </CardPanel>
</template>

<style lang="scss" scoped>
.quick-btn {
  width: 100%;
  padding: 24px 12px;
  border: 1px solid var(--color-gray-2);
  background-color: var(--color-gray-2);

  cursor: pointer;
  transition: all 0.4s;
  border-radius: 4px;

  display: flex;
}

.quick-btn:hover {
  border: 1px solid var(--color-gray-8);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
}
</style>
