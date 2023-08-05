<script setup lang="ts">
import { useCardOperation } from "@/hooks/useCardOperation";
import type { LayoutCard } from "@/types";
import {
  CloseOutlined,
  DownOutlined,
  EditOutlined,
  LeftOutlined,
  RightOutlined,
  ToTopOutlined,
  UpOutlined,
} from "@ant-design/icons-vue";
import { h } from "vue";
import { notification } from "ant-design-vue";
const [notificationApi, contextHolder] = notification.useNotification();

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
  editCardName,
} = useCardOperation();

const btns = [
  {
    tipText: "删除卡片",
    icon: CloseOutlined,
    click: deleteCard,
  },
  {
    tipText: "收缩高度",
    icon: UpOutlined,
    click: reduceCardHeight,
  },
  {
    tipText: "扩展高度",
    icon: DownOutlined,
    click: addCardHeight,
  },
  {
    tipText: "收缩宽度",
    icon: LeftOutlined,
    click: reduceCardWidth,
  },
  {
    tipText: "扩展宽度",
    icon: RightOutlined,
    click: addCardWidth,
  },
  {
    tipText: "修改标题",
    icon: EditOutlined,
    click: (id: string) => {
      // notificationApi.open({
      //   message: "修改标题",
      // });
      console.log("修改卡片名字：", id);
      editCardName(id, "新的名字");
    },
  },
];
</script>

<template>
  <div class="layout-card-design-btn">
    <a-tooltip placement="left" v-for="(item, index) in btns" :key="index">
      <template #title>
        <span>{{ item.tipText }}</span>
      </template>
      <a-button
        type="text"
        :icon="h(item.icon)"
        @click="() => item.click(card.id)"
      />
    </a-tooltip>
  </div>
  <div class="number-card">
    <div class="number-card-H">
      <span>最小高度: {{ card.height }}</span>
    </div>
    <div class="number-card-W">
      <span>宽度: {{ card.width }}/12 格</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

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
