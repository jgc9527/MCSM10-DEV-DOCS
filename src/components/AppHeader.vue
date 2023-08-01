<script setup lang="ts">
import router from "@/router";
import logo from "@/assets/logo.png";
import { useLayoutContainerStore } from "@/stores/useLayoutContainerStore";
import { useRoute } from "vue-router";

const { containerState, changeDesignMode } = useLayoutContainerStore();

const openNewCardDialog = (params: any) => {
  containerState.showNewCardDialog = true;
};

const toPage = (url: string) => {
  router.push(url);
};

const menus = router.getRoutes().map((r) => {
  return {
    name: r.name,
    path: r.path,
    meta: r.meta,
  };
});
</script>

<template>
  <header class="app-header-wrapper">
    <div class="app-header-content">
      <div class="d-flex flex-row align-center">
        <a href="/">
          <div class="d-flex flex-row align-center mr-4 logo">
            <img :src="logo" style="height: 18px" />
          </div>
        </a>
        <v-btn
          v-for="item in menus"
          :key="item.path"
          variant="text"
          class="ml-1"
          @click="toPage(item.path)"
        >
          {{ item.name }}
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
  <div style="height: 80px"></div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $app-max-width;
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
