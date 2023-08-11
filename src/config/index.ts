import EmptyCard from "@/widgets/EmptyCard.vue";
import ExampleCard from "@/widgets/ExampleCard.vue";
import ExampleCard2 from "@/widgets/ExampleCard2.vue";
import ExampleCard3 from "@/widgets/ExampleCard3.vue";
import ExampleCard4 from "@/widgets/ExampleCard4.vue";
import { getRandomId } from "@/tools/randId";
import type { LayoutCard } from "@/types";
import { LayoutCardHeight } from "./originLayoutConfig";
import DataOverview from "@/widgets/PanelOverview.vue";
import StatusBlock from "@/widgets/StatusBlock.vue";
import { t } from "@/lang/i18n";
import NodeOverview from "@/widgets/NodeOverview.vue";
import QuickStart from "@/widgets/QuickStart.vue";
import RequestChart from "@/widgets/RequestChart.vue";
import InstanceChart from "@/widgets/InstanceChart.vue";
import InstanceOperation from "@/widgets/InstanceOperation.vue";
import InstanceList from "@/widgets/InstanceList.vue";
import NodeList from "@/widgets/NodeList.vue";
import NodeOperation from "@/widgets/NodeOperation.vue";
import Settings from "@/widgets/Settings.vue";

// Register specified Vue components for each card.
export const LAYOUT_CARD_TYPES: { [key: string]: any } = {
  ExampleCard,
  ExampleCard2,
  ExampleCard3,
  ExampleCard4,
  EmptyCard,
  DataOverview,
  StatusBlock,
  QuickStart,
  NodeOverview,
  RequestChart,
  InstanceChart,
  InstanceOperation,
  InstanceList,
  NodeOperation,
  NodeList,
  Settings,
};

// For create new card
export function getLayoutCardPool() {
  const LAYOUT_CARD_POOL: LayoutCard[] = [
    // 占位卡片
    {
      id: getRandomId(),
      type: "EmptyCard",
      title: "占位卡片",
      width: 2,
      description: "此卡片没有任何内容，可以用来占位，实现居中等排版需求。",
      height: LayoutCardHeight.MINI,
    },

    // 只展示到个人资料的卡片（但是不推荐这样用）
    {
      id: getRandomId(),
      type: "ExampleCard2",
      title: "个人资料的卡片",
      width: 6,
      onlyPath: ["/user"],
      description:
        "这个卡片只能在「个人资料」这种界面出现，不能在其他场景使用。",
      height: LayoutCardHeight.MEDIUM,
    },

    // 一个带参数的卡片，只限于 ExampleCard4 类型
    {
      id: getRandomId(),
      type: "ExampleCard4",
      title: "带参数的卡片",
      width: 6,
      description: "卡片的详细说明以及使用方式。",
      height: LayoutCardHeight.SMALL,

      // 新增卡片时被要求填写的参数
      meta: {},
      params: [
        {
          field: "instanceId",
          label: "实例 ID",
          type: "string",
        },
        {
          field: "daemonId",
          label: "节点 ID",
          type: "string",
        },
      ],
    },

    {
      id: getRandomId(),
      type: "StatusBlock",
      title: t("节点在线数444"),
      meta: {
        title: "在线节点 / 总节点",
        type: "node",
      },
      width: 3,
      description: t("用于显示面板的所有基本数据"),
      height: LayoutCardHeight.SMALL,
    },

    // 一个正常的卡片
    {
      id: getRandomId(),
      type: "Settings",
      title: "设置",
      width: 4,
      description: "卡片的详细说明以及使用方式。",
      height: LayoutCardHeight.SMALL,
    },

    // 一个多个项目组合一起的卡片
    {
      id: getRandomId(),
      type: "ExampleCard",
      title: "多项目卡片",
      width: 12,
      description: "卡片的详细说明以及使用方式。",
      height: LayoutCardHeight.SMALL,
    },

    // 包含上下布局的卡片
    {
      id: getRandomId(),
      type: "ExampleCard3",
      title: "上下布局的卡片",
      width: 6,
      description: "卡片的详细说明以及使用方式。",
      height: LayoutCardHeight.MEDIUM,
    },
  ];
  return LAYOUT_CARD_POOL;
}
