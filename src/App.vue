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
const { t } = useI18n();
const { appConfig } = useAppConfigStore();

const locale = ref(enUS);

if (appConfig.language === "zh_CN") {
  dayjs.locale("zh-cn");
  locale.value = zhCN;
} else {
  dayjs.locale("en-us");
}

setLanguage(appConfig.language);

console.warn("MCSMANAGER APP CONFIG:", JSON.stringify(appConfig));
</script>

<template>
  <a-config-provider :locale="locale">
    <div class="global-app-container">
      <AppHeader></AppHeader>
      <div>
        {{ t("Hello") }}
      </div>
      <RouterView :key="$route.fullPath" />
    </div>
  </a-config-provider>
</template>
