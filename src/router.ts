import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import LayoutContainer from "./views/LayoutContainer.vue";

interface RouterConfig {
  path: string;
  name: string;
  component?: any;
  children?: RouterConfig[];
  meta: {
    icon?: string;
    mainMenu?: boolean;
  };
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
  originRouterConfig: any[],
  parent: string[] = []
) {
  for (const r of originRouterConfig) {
    if (r.children && r.children instanceof Array) {
      parent.push(r);
      routersConfigOptimize(r.children, JSON.parse(JSON.stringify(parent)));
    }
    r.meta.parents = parent;
  }
  return originRouterConfig;
}

console.log(
  "routersConfigOptimize:",
  routersConfigOptimize(originRouterConfig)
);

const router = createRouter({
  history: createWebHashHistory(),
  routes: originRouterConfig,
});

export { router, originRouterConfig };
