import { createRouter, createWebHashHistory } from "vue-router";
import LayoutContainer from "./views/LayoutContainer.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "仪表盘",
      component: LayoutContainer,
      meta: {
        icon: "dashboard",
      },
    },
    {
      path: "/instance",
      name: "应用实例",
      component: LayoutContainer,
      meta: {
        icon: "dashboard",
      },
    },
  ],
});

export default router;
