<script setup lang="ts"></script>

<template>
  <div class="card-panel">
    <div class="card-panel-title" v-if="$slots.title">
      <div>
        <slot name="title"></slot>
      </div>
      <div>
        <slot name="operator"></slot>
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
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 2px 1px var(--card-shadow-color);
  background-color: var(--background-color-white);
  border: 1px solid var(--card-border-color);
  transition: all 0.4s;
  padding: 16px;

  .card-panel-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
  }
  .card-panel-content {
    color: var(--text-color);
    overflow-y: auto;
    font-size: 14px;
  }
}

.card-panel-content {
  overflow: hidden;
  zoom: 1;
  word-break: break-all;
  font-size: 14px;
}

.card-panel:hover {
  box-shadow:
    0 4px 8px 0 var(--card-shadow-color),
    0 1px 2px 1px var(--card-shadow-color);
}
</style>
