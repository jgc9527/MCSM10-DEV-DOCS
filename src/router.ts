import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import LayoutContainer from "./views/LayoutContainer.vue";

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
    name: "仪表盘",
    component: LayoutContainer,
    meta: {
      icon: "mdi-view-dashboard",
      mainMenu: true,
    },
  },
  {
    path: "/instances",
    name: "应用程序",
    component: LayoutContainer,
    meta: {
      icon: "mdi-application-brackets",
      mainMenu: true,
    },
    children: [
      {
        path: "/instances/terminal",
        name: "终端",
        component: LayoutContainer,
        meta: {},
        children: [
          {
            path: "/instances/terminal/files",
            name: "文件管理",
            component: LayoutContainer,
            meta: {},
          },
        ],
      },
    ],
  },
  {
    path: "/node",
    name: "节点",
    component: LayoutContainer,
    meta: {
      icon: "mdi-server-network",
      mainMenu: true,
    },
  },
  {
    path: "/settings",
    name: "设置",
    component: LayoutContainer,
    meta: {
      icon: "mdi-cog",
      mainMenu: true,
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
