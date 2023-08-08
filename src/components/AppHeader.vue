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
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import { useScreen } from "@/hooks/useScreen";
import CardPanel from "./CardPanel.vue";
import { $t as t } from "@/lang/i18n";

const { containerState, changeDesignMode } = useLayoutContainerStore();
const { getRouteParamsUrl, toPage } = useAppRouters();

const openNewCardDialog = () => {
  containerState.showNewCardDialog = true;
};

const handleToPage = (url: string) => {
  containerState.showPhoneMenu = false;
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
  if (to.name == null) {
    router.push({
      path: "/404",
      query: {
        redirect: to.fullPath,
      },
    });
    return false;
  }
  return true;
});

const breadcrumbs = computed(() => {
  const arr = [
    {
      title: t("TXT_CODE_f5b9d58f"),
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
      title: t("TXT_CODE_8b0f8aab"),
      icon: AppstoreAddOutlined,
      click: openNewCardDialog,
      conditions: containerState.isDesignMode,
      onlyPC: true,
    },
    {
      title: t("TXT_CODE_8145d82"),
      icon: SaveOutlined,
      click: () => changeDesignMode(false),
      conditions: containerState.isDesignMode,
      onlyPC: true,
    },
    {
      title: t("TXT_CODE_ebd2a6a1"),
      icon: BuildOutlined,
      click: () => changeDesignMode(true),
      conditions: !containerState.isDesignMode,
      onlyPC: true,
    },
    {
      title: t("TXT_CODE_8c3164c9"),
      icon: UserOutlined,
      click: () => {
        toPage({ path: "/user" });
      },
      conditions: !containerState.isDesignMode,
      onlyPC: false,
    },
    {
      title: t("TXT_CODE_2c69ab15"),
      icon: LogoutOutlined,
      click: () => {
        toPage({ path: "/" });
      },
      conditions: !containerState.isDesignMode,
      onlyPC: false,
    },
  ];
});

const screen = useScreen();
const isMobile = computed(() => screen.isMobile.value);

const openPhoneMenu = (b = false) => {
  containerState.showPhoneMenu = b;
};
</script>

<template>
  <header class="app-header-wrapper">
    <div class="app-header-content" v-if="!isMobile">
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
  <div v-if="!isMobile" style="height: 60px"></div>

  <header class="app-header-content-for-phone" v-if="isMobile">
    <CardPanel class="card-panel">
      <template #body>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div style="width: 100px">
            <a-button
              type="text"
              :icon="h(MenuUnfoldOutlined)"
              size="small"
              @click="openPhoneMenu(true)"
            ></a-button>
          </div>
          <div>
            <img :src="logo" style="height: 18px" />
          </div>
          <div
            style="
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <div
              v-for="(item, index) in appMenus"
              :key="index"
              style="margin-left: 8px"
            >
              <a-button
                type="text"
                :icon="h(item.icon)"
                size="small"
                @click="item.click"
                v-if="item.conditions && !item.onlyPC"
              ></a-button>
            </div>
          </div>
        </div>
      </template>
    </CardPanel>
  </header>

  <a-drawer
    :width="500"
    title="MENU"
    placement="top"
    :open="containerState.showPhoneMenu"
    @close="() => (containerState.showPhoneMenu = false)"
  >
    <div class="phone-menu">
      <div
        class="phone-menu-btn"
        v-for="item in menus"
        :key="item.path"
        @click="handleToPage(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
  </a-drawer>

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
$app-header-bg: rgb(46, 44, 44);

.phone-menu {
  .phone-menu-btn {
    padding: 16px 8px;
    border-bottom: 1px solid $color-gray-4;
  }
}

.app-header-content-for-phone {
  height: 60px;
  width: 100%;

  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // margin: 0px;
  .card-panel {
    background-color: $app-header-bg;
    margin-top: 8px;

    button {
      color: $color-gray-4;
    }
  }
}

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

  // Sync margin
  @media (max-width: 1470px) {
    .app-header-content,
    .app-header-content-for-phone {
      margin: 0px 25px;
    }
  }

  @media (max-width: 960px) {
    .app-header-content {
      margin: 0px 8px;
    }
  }
}
</style>
