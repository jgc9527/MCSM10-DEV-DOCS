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
        icon: "mdi-view-dashboard",
        iconHeight: "30px",
      },
    },
    {
      path: "/instance",
      name: "应用程序",
      component: LayoutContainer,
      meta: {
        icon: "mdi-application-brackets",
        iconHeight: "30px",
      },
    },
    {
      path: "/node",
      name: "节点",
      component: LayoutContainer,
      meta: {
        icon: "mdi-server-network",
      },
    },
    {
      path: "/settings",
      name: "设置",
      component: LayoutContainer,
      meta: {
        icon: "mdi-cog",
      },
    },
  ],
});

export default router;
