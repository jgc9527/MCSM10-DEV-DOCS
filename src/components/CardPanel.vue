<script setup lang="ts"></script>

<template>
  <div class="card-panel global-card-container-shadow">
    <div class="card-panel-title" v-if="$slots.title">
      <div>
        <a-typography-title :level="5">
          <slot name="title"></slot>
        </a-typography-title>
      </div>
      <div>
        <a-typography-text>
          <slot name="operator"></slot>
        </a-typography-text>
      </div>
    </div>
    <div class="card-panel-content">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.card-panel {
  background-color: var(--background-color-white);
  padding: 16px;

  .card-panel-title {
    font-weight: 600;
    color: var(--text-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -4px; // For Ant-Design Font
  }
  .card-panel-content {
    color: var(--text-color);
    // overflow-y: auto;
    font-size: 14px;
  }
}

.card-panel-content {
  overflow: hidden;
  zoom: 1;
  word-break: break-all;
  font-size: 14px;
}
</style>
