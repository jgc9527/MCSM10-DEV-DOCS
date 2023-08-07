<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import { ref } from "vue";
import { useAppConfigStore } from "./stores/useAppConfigStore";
// import VueI18n from "vue-i18n";

const { appConfig } = useAppConfigStore();

const locale = ref(enUS);

if (appConfig.language === "zh_CN") {
  dayjs.locale("zh-cn");
  locale.value = zhCN;
} else {
  dayjs.locale("en-us");
}

// const i18n = VueI18n.createI18n({
//   locale: appConfig.language, // set locale
//   fallbackLocale: "en", // set fallback locale
//   messages: {}, // set locale messages
//   // If you need to specify other options, you can set other options
//   // ...
// });

const open = true;
</script>

<template>
  <a-config-provider :locale="locale">
    <!-- <a-modal v-model:open="open" title="Basic Modal">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal> -->
    <div class="global-app-container">
      <AppHeader></AppHeader>
      <RouterView :key="$route.fullPath" />
    </div>
  </a-config-provider>
</template>
