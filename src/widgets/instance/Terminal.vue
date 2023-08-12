<script setup lang="ts">
import CardPanel from "@/components/CardPanel.vue";
import { t } from "@/lang/i18n";
import type { LayoutCard } from "@/types";
import { DownOutlined, PlaySquareOutlined } from "@ant-design/icons-vue";
import { arrayFilter } from "../../tools/array";

const props = defineProps<{
  card: LayoutCard;
}>();

const quickOperations = arrayFilter([
  // {
  //   title: t("开启程序"),
  //   icon: PlaySquareOutlined,
  //   click: () => {
  //     console.log(1);
  //   },
  //   props: {},
  // },
  {
    title: t("关闭程序"),
    icon: PlaySquareOutlined,
    click: () => {
      console.log(2);
    },
    props: {
      danger: true,
    },
  },
]);

const instanceOperations = arrayFilter([
  {
    title: t("重启"),
    icon: PlaySquareOutlined,
    click: () => {
      console.log(3);
    },
  },
  {
    title: t("更新"),
    icon: PlaySquareOutlined,
    click: () => {
      console.log(4);
    },
  },
]);
</script>

<template>
  <CardPanel class="containerWrapper" style="height: 100%">
    <template #title>{{ card.title }}</template>
    <template #operator>
      <a-button
        class="mr-8"
        v-for="item in quickOperations"
        :key="item.title"
        v-bind="item.props"
      >
        {{ item.title }}
      </a-button>
      <a-dropdown>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="item in instanceOperations"
              :key="item.title"
              @click="item.click"
            >
              <component :is="item.icon"></component>
              <span>&nbsp;{{ item.title }}</span>
            </a-menu-item>
          </a-menu>
        </template>
        <a-button type="primary">
          操作
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </template>
    <template #body> 控制台 </template>
  </CardPanel>
</template>

<style lang="scss" scoped>
.containerWrapper {
}
</style>
