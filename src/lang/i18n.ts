import { createI18n } from "vue-i18n";

import enUS from "@/lang/en_US.json";
import zhCN from "@/lang/zh_CN.json";

const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: {
    en_US: enUS,
    zh_CN: zhCN,
  },
});

const setLanguage = (lang: string) => {
  i18n.global.locale = lang as any;
};

const getCurrentLang = () => {
  return i18n.global.locale;
};

export { i18n, setLanguage, getCurrentLang };
