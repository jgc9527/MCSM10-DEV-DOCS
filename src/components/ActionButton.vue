<script setup lang="ts">
import { t } from "@/lang/i18n";

import { LinkOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  action: Object as () => {
    icon?: Object;
    title: string;
    click: Function;
  },
  icon: Object,
  title: String,
  click: Function,
});
</script>

<template>
  <div class="actions-button">
    <a-col :span="24">
      <div class="btn" @click="click ? click() : action?.click() || ''">
        <div>
          <component :is="icon || action?.icon || LinkOutlined"></component>
        </div>
        <div class="ml-8">{{ title || action?.title || t("ActionButton 按钮") }}</div>
      </div>
    </a-col>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: 100%;
  padding: 20px 12px;
  border: 1px solid var(--color-gray-2);
  background-color: var(--color-gray-2);

  cursor: pointer;
  user-select: none;
  transition: all 0.4s;
  border-radius: 4px;

  display: flex;

  &:hover {
    border: 1px solid var(--color-gray-8);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  }
}
</style>
