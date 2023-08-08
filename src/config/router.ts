import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import LayoutContainer from "@/views/LayoutContainer.vue";
import { $t as t } from "@/lang/i18n";

export interface RouterMetaInfo {
  icon?: string;
  mainMenu?: boolean;
  breadcrumbs?: Array<{
    name: string;
    path: string;
    mainMenu?: boolean;
  }>;
}

export interface RouterConfig {
  path: string;
  name: string;
  component?: any;
  children?: RouterConfig[];
  meta: RouterMetaInfo;
}

let originRouterConfig = [
  {
    path: "/",
    name: t("TXT_CODE_16d71239"),
    component: LayoutContainer,
    meta: {
      icon: "mdi-view-dashboard",
      mainMenu: true,
    },
  },
  {
    path: "/instances",
    name: t("TXT_CODE_e21473bc"),
    component: LayoutContainer,
    meta: {
      icon: "mdi-application-brackets",
      mainMenu: true,
    },
    children: [
      {
        path: "/instances/terminal",
        name: t("TXT_CODE_524e3036"),
        component: LayoutContainer,
        meta: {},
        children: [
          {
            path: "/instances/terminal/files",
            name: t("TXT_CODE_ae533703"),
            component: LayoutContainer,
            meta: {},
          },
        ],
      },
    ],
  },
  {
    path: "/node",
    name: t("TXT_CODE_e076d90b"),
    component: LayoutContainer,
    meta: {
      icon: "mdi-server-network",
      mainMenu: true,
    },
  },
  {
    path: "/settings",
    name: t("TXT_CODE_b5c7b82d"),
    component: LayoutContainer,
    meta: {
      icon: "mdi-cog",
      mainMenu: true,
    },
  },
  {
    path: "/user",
    name: t("TXT_CODE_8c3164c9"),
    component: LayoutContainer,
    meta: {
      icon: "mdi-cog",
      mainMenu: false,
    },
  },
];

function routersConfigOptimize(
  config: RouterConfig[],
  list: Array<{ name: string; path: string }> = []
) {
  for (const r of config) {
    r.meta.breadcrumbs = list;
    if (r.children && r.children instanceof Array) {
      const newList = JSON.parse(JSON.stringify(list));
      newList.push({ name: r.name, path: r.path, mainMenu: r.meta.mainMenu });
      routersConfigOptimize(r.children, newList);
    }
  }
  return config;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: routersConfigOptimize(originRouterConfig) as RouteRecordRaw[],
});

export { router, originRouterConfig };
