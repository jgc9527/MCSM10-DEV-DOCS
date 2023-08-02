<script setup lang="ts">
import { router } from "@/router";
import logo from "@/assets/logo.png";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";
import { useAppRouters } from "@/hooks/useAppRouters";

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

  const routePaths = route.path.split("/");
  for (const node of routePaths) {
    router.getRoutes().forEach((v) => {
      const curPath = `/${node}`;
      if (node === "" || curPath === route.path) return;
      if (v.path === curPath) {
        arr.push({
          title: String(v.name),
          disabled: false,
          href: `/#${v.path}` + (queryUrl ? `?${queryUrl}` : ""),
        });
      }
    });
  }
  arr.push({
    title: String(route.name),
    disabled: true,
    href: `/#${route.fullPath}`,
  });
  return arr;
});

setTimeout(() => {
  toPage({
    path: "/instances/terminal",
    query: {
      uuid: "as;lcmxz;cl;zcm;ls",
      instance_type: "sdknlk",
      saldmop: "s",
    },
  });
}, 1000 * 4);
</script>

<template>
  <header class="app-header-wrapper">
    <div class="app-header-content">
      <div class="d-flex flex-row align-center">
        <a href="/">
          <div class="d-flex flex-row align-center mr-6 logo">
            <img :src="logo" style="height: 18px" />
          </div>
        </a>

        <v-btn
          v-for="item in menus"
          :key="item.path"
          :variant="route.path === item.path ? 'tonal' : 'text'"
          @click="handleToPage(item.path)"
        >
          <v-icon class="mr-1" :icon="String(item.meta.icon)"></v-icon>
          <span>{{ item.name }}</span>
        </v-btn>
      </div>
      <div>
        <v-btn
          v-if="containerState.isDesignMode"
          variant="tonal"
          color="success"
          class="ml-1"
          @click="openNewCardDialog"
        >
          <v-icon icon="mdi-card-plus"></v-icon>
        </v-btn>
        <v-btn
          v-if="containerState.isDesignMode"
          variant="text"
          color="error"
          class="ml-1"
          @click="() => changeDesignMode(false)"
        >
          <v-icon icon="mdi-pencil-remove-outline"></v-icon>
        </v-btn>
        <v-btn
          v-else
          class="ml-1"
          variant="text"
          @click="() => changeDesignMode(true)"
        >
          <v-icon icon="mdi-pencil-ruler-outline"></v-icon>
        </v-btn>
      </div>
    </div>
  </header>
  <div style="height: 60px"></div>
  <div class="breadcrumbs">
    <v-breadcrumbs
      size="small"
      :items="breadcrumbs"
      style="padding-left: 0"
    ></v-breadcrumbs>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.breadcrumbs {
  @extend .app-max-width;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: rgb(212, 212, 212);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 20;
  .app-header-content {
    @extend .app-max-width;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
  }

  button {
    transition: all 0.4s;
  }
  button:hover {
    min-width: 75px !important;
  }

  .logo {
    cursor: pointer;
  }
}
</style>
