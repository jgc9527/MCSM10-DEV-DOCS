import "@/assets/global.scss";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 获取当前浏览器窗口的高度
function getWindowHeight(): number {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
}

// 设置最小高度
function setMinHeight(): void {
  const body = document.body;
  const app = document.getElementById("app");

  if (body && app) {
    const windowHeight = getWindowHeight();
    body.style.minHeight = `${windowHeight}px`;
    app.style.minHeight = `${windowHeight}px`;
  }
}

// 当窗口大小改变时重新设置最小高度
window.addEventListener("resize", setMinHeight);

// 初始化
setMinHeight();

app.use(vuetify).mount("#app");
