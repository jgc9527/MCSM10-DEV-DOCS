<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ref } from "vue";
dayjs.locale("zh-cn");

const locale = ref(zhCN);
</script>

<template>
  <a-config-provider :locale="locale">
    <div class="global-app-container">
      <AppHeader></AppHeader>
      <RouterView :key="$route.fullPath" />
    </div>
  </a-config-provider>
</template>
