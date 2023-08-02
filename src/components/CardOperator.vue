<script setup lang="ts">
import { useCardOperation } from "@/hooks/useCardOperation";
import type { LayoutCard } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  card: LayoutCard;
}>();

const {
  addCardHeight,
  reduceCardHeight,
  addCardWidth,
  reduceCardWidth,
  deleteCard,
} = useCardOperation();

const btns = [
  {
    tipText: "删除卡片",
    icon: "mdi-close",
    click: deleteCard,
  },
  {
    tipText: "收缩高度",
    icon: "mdi-format-vertical-align-top",
    click: reduceCardHeight,
  },
  {
    tipText: "扩展高度",
    icon: "mdi-format-vertical-align-bottom",
    click: addCardHeight,
  },
  {
    tipText: "收缩宽度",
    icon: "mdi-format-horizontal-align-left",
    click: reduceCardWidth,
  },
  {
    tipText: "扩展宽度",
    icon: "mdi-format-horizontal-align-right",
    click: addCardWidth,
  },
];
</script>

<template>
  <div class="layout-card-design-btn">
    <v-tooltip v-for="(item, index) in btns" :key="index" :text="item.tipText">
      <template v-slot:activator="{ props }">
        <v-icon
          v-bind="props"
          :icon="item.icon"
          @click="() => item.click(card.id)"
        />
      </template>
    </v-tooltip>
  </div>
  <div class="number-card">
    <div class="number-card-H">
      <span>H: {{ card.height }}</span>
    </div>
    <div class="number-card-W">
      <span>W: {{ card.width }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

.box {
}

.base {
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $float-box-bg-color;
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 12px;
  border: 1px dashed $gray-border-color;
  font-size: 12px;
  border-radius: 4px;
  transition: all 0.4s;
}

.number-card {
  position: absolute;
  right: 40px;
  top: 0px;
  z-index: 10;
  > div {
    margin-bottom: 8px;
    padding: 2px 4px;
  }
}
.number-card-W {
  @extend .base;
}
.number-card-H {
  @extend .base;
}
.layout-card-design-btn {
  @extend .base;
  width: 32px;
  position: absolute;
  right: 0px;
  top: 0px;

  i {
    margin: 4px;
    cursor: pointer;
    transition: all 0.4s;
  }

  i:hover {
    opacity: 0.9;
    transform: scale(1.2);
    color: $color-primary;
  }
}

.layout-card-design-btn:hover {
  border: 1px dashed $color-primary;
  // transform: scale(1.04);
}
</style>
