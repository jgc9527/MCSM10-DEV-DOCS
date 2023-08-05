<script setup lang="ts">
import { router, type RouterMetaInfo } from "@/config/router";
import logo from "@/assets/logo.png";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";
import { useRoute } from "vue-router";
import { computed, h, reactive } from "vue";
import { useAppRouters } from "@/hooks/useAppRouters";
import {
  BuildOutlined,
  SaveOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

const { containerState, changeDesignMode } = useLayoutContainerStore();
const { getRouteParamsUrl, toPage } = useAppRouters();

// const breadcrumbs = reactive<any[]>([]);
const openNewCardDialog = (params: any) => {
  containerState.showNewCardDialog = true;
};

const handleToPage = (url: string) => {
  toPage({
    path: url,
  });
};

const route = useRoute();

const menus = router
  .getRoutes()
  .filter((v) => v.meta.mainMenu)
  .map((r) => {
    return {
      name: r.name,
      path: r.path,
      meta: r.meta,
    };
  });

router.beforeEach((to, from) => {
  console.log("Router:", from, "->", to);
  return true;
});

const breadcrumbs = computed(() => {
  const arr = [
    {
      title: "管理面板",
      disabled: false,
      href: "/",
    },
  ];

  const queryUrl = getRouteParamsUrl();

  if (route.meta.breadcrumbs instanceof Array) {
    const meta = route.meta as RouterMetaInfo;
    meta.breadcrumbs?.forEach((v) => {
      const params = queryUrl && !v.mainMenu ? `?${queryUrl}` : "";
      arr.push({
        title: v.name,
        disabled: false,
        href: `/#${v.path}${params}`,
      });
    });
  }

  arr.push({
    title: String(route.name),
    disabled: true,
    href: `/#${route.fullPath}`,
  });

  return arr;
});

const appMenus = computed(() => {
  return [
    {
      title: "新增卡片",
      icon: AppstoreAddOutlined,
      click: openNewCardDialog,
      conditions: containerState.isDesignMode,
    },
    {
      title: "保存卡片布局",
      icon: SaveOutlined,
      click: () => changeDesignMode(false),
      conditions: containerState.isDesignMode,
    },
    {
      title: "开始设计布局",
      icon: BuildOutlined,
      click: () => changeDesignMode(true),
      conditions: !containerState.isDesignMode,
    },
    {
      title: "个人资料",
      icon: UserOutlined,
      click: () => {
        toPage({ path: "/user" });
      },
      conditions: !containerState.isDesignMode,
    },
    {
      title: "退出",
      icon: LogoutOutlined,
      click: () => {
        toPage({ path: "/" });
      },
      conditions: !containerState.isDesignMode,
    },
  ];
});
</script>

<template>
  <header class="app-header-wrapper">
    <div class="app-header-content">
      <div class="btns">
        <a href="/" style="margin-right: 12px">
          <div class="logo">
            <img :src="logo" style="height: 18px" />
          </div>
        </a>

        <div
          class="nav-button"
          v-for="item in menus"
          :key="item.path"
          @click="handleToPage(item.path)"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="btns">
        <div v-for="(item, index) in appMenus" :key="index">
          <a-tooltip placement="bottom" v-if="item.conditions">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <div class="nav-button" type="text" @click="item.click">
              <component :is="item.icon"></component>
            </div>
          </a-tooltip>
        </div>
      </div>
    </div>
  </header>
  <div style="height: 60px"></div>
  <div class="breadcrumbs">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.title">
        <a v-if="!item.disabled" :href="item.href">{{ item.title }}</a>
        <span v-else>{{ item.title }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/global.scss";

$btn-color: rgb(212, 212, 212);

.breadcrumbs {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
}

.app-header-wrapper {
  // backdrop-filter: saturate(100%) blur(12px);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  $app-header-bg: rgb(46, 44, 44);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $app-header-bg;
  // border-bottom: 1px solid rgb(224, 224, 224);
  color: $btn-color;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 20;
  .app-header-content {
    @extend .global-app-container;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;

    .btns {
      display: flex;
      align-items: center;
    }
  }

  .nav-button {
    margin: 0 4px;
    font-size: 14px;
    transition: all 0.4s;
    color: $btn-color !important;
    text-align: center;
    padding: 8px 12px;
    min-width: 40px;
    cursor: pointer;
    border-radius: 4px;
  }

  .icon-button {
    font-size: 16px !important;
  }
  .nav-button:hover {
    background-color: rgba(215, 215, 215, 0.12);
  }

  .logo {
    cursor: pointer;
  }
}
</style>
