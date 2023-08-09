import { LANGUAGE_KEY, setLanguage } from "@/lang/i18n";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAppConfigStore = defineStore("useAppConfigStore", () => {
  const appConfig = reactive({});

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const getCurrentLanguage = () => {
    return localStorage.getItem(LANGUAGE_KEY) || "en_US";
  };

  return {
    appConfig,
    changeLanguage,
    getCurrentLanguage,
  };
});
