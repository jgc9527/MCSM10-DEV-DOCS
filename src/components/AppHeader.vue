<script setup lang="ts">
import { useLayoutContainerStore } from '@/stores/useLayoutContainerStore'

const { containerState, changeDesignMode } = useLayoutContainerStore()

const openNewCardDialog = (params: any) => {
  containerState.showNewCardDialog = true
}
</script>

<template>
  <header class="app-header-wrapper">
    <div class="app-header-content">
      <div>Next UI</div>
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
        <v-btn v-else class="ml-1" variant="text" @click="() => changeDesignMode(true)">
          <v-icon icon="mdi-pencil-ruler-outline"></v-icon>
        </v-btn>
      </div>
    </div>
  </header>
  <div style="height: 80px"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.app-header-wrapper {
  $app-header-bg: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $app-header-bg;
  border-bottom: 1px solid rgb(224, 224, 224);

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
}
</style>
