import EmptyCard from "@/components/card-implement/EmptyCard.vue";
import ExampleCard from "@/components/card-implement/ExampleCard.vue";
import ExampleCard2 from "@/components/card-implement/ExampleCard2.vue";
import ExampleCard3 from "@/components/card-implement/ExampleCard3.vue";
import { getRandomId } from "@/tools/randId";
import type { LayoutCard } from "@/types";
import { LayoutCardHeight } from "./originLayoutConfig";

// Register specified Vue components for each card.
export const LAYOUT_CARD_TYPES: { [key: string]: any } = {
  ExampleCard,
  ExampleCard2,
  ExampleCard3,
  EmptyCard,
};

// For create new card
export function getLayoutCardPool() {
  const LAYOUT_CARD_POOL: LayoutCard[] = [
    {
      id: getRandomId(),
      type: "EmptyCard",
      title: "占位卡片",
      width: 2,
      description: "此卡片没有任何内容，可以用来占位，实现居中等排版需求。",
      height: LayoutCardHeight.MINI,
    },
    {
      id: getRandomId(),
      type: "ExampleCard2",
      title: "我的卡片2",
      width: 2,
      description:
        "Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
      height: LayoutCardHeight.SMALL,
    },
    {
      id: getRandomId(),
      type: "ExampleCard",
      title: "聚合卡片",
      width: 6,
      description: "直接通过设置类名为 el-icon-iconName 来使用即可。例如：",
      height: LayoutCardHeight.MEDIUM,
    },
    {
      id: getRandomId(),
      type: "ExampleCard2",
      title: "我的卡片777",
      width: 4,
      description: "直接通过设置类名为 el-icon-iconName 来使用即可。例如：",
      height: LayoutCardHeight.BIG,
    },
    {
      id: getRandomId(),
      type: "ExampleCard2",
      title: "我的卡片3",
      width: 12,
      description:
        "除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。",
      height: LayoutCardHeight.SMALL,
    },
    {
      id: getRandomId(),
      type: "ExampleCard2",
      title: "我的卡片4",
      width: 6,
      description:
        "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。",
      height: LayoutCardHeight.SMALL,
    },
    {
      id: getRandomId(),
      type: "ExampleCard2",
      title: "我的卡片5",
      width: 8,
      description:
        "我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。",
      height: LayoutCardHeight.SMALL,
    },
  ];
  return LAYOUT_CARD_POOL;
}
