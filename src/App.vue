<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import { ref, onMounted } from "vue";
import { useAppConfigStore } from "./stores/useAppConfigStore";
import { useI18n } from "vue-i18n";
import { setLanguage } from "@/lang/i18n";
import { theme } from "ant-design-vue";
import type { JsonData } from "./types";

const { t } = useI18n();
const { getCurrentLanguage } = useAppConfigStore();

const locale = ref(enUS);

if (getCurrentLanguage() === "zh_CN") {
  dayjs.locale("zh-cn");
  locale.value = zhCN;
} else {
  dayjs.locale("en-us");
}

const isDarkTheme = true;
const appTheme = {
  algorithm: theme.defaultAlgorithm,
};

if (isDarkTheme) {
  document.body.classList.add("app-dark-theme");
  appTheme.algorithm = theme.darkAlgorithm;
} else {
  document.body.classList.add("app-light-theme");
}
</script>

<template>
  <a-config-provider :theme="appTheme" :locale="locale">
    <div class="global-app-container">
      <AppHeader></AppHeader>
      <RouterView :key="$route.fullPath" />
    </div>
  </a-config-provider>
</template>
