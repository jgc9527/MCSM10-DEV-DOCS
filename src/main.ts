import "@/assets/global.scss";
import "ant-design-vue/dist/reset.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./config/router";
import { i18n, $t } from "@/lang/i18n";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(i18n);

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

app.mount("#app");
