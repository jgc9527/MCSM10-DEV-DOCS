import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAppConfigStore = defineStore("useAppConfigStore", () => {
  const appConfig = reactive({
    language: "zh_CN",
  });

  return {
    appConfig,
  };
});
