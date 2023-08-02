import { defineStore } from "pinia";
import { reactive } from "vue";
import type { LayoutWithRouter, LayoutCard } from "@/types";
import { useRouterParams } from "@/hooks/useRouterParams";

export enum LayoutCardHeight {
  MINI = "100px",
  SMALL = "200px",
  MEDIUM = "400px",
  BIG = "600px",
  LARGE = "800px",
  AUTO = "unset",
}

export const useLayoutConfigStore = defineStore("layoutConfigStore", () => {
  const { currentRoutePath } = useRouterParams();

  const globalLayoutConfig: LayoutWithRouter[] = reactive<LayoutWithRouter[]>([
    {
      page: "/",
      items: [
        {
          id: "45bad85d-df90-4588-b860-6833155c0031",
          type: "ExampleCard2",
          title: "我的卡片3",
          width: 12,
          description:
            "除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。",
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "AAAAA",
          type: "ExampleCard2",
          title: "我的ABOUT本地卡片1",
          width: 4,
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "BBBBB",
          type: "ExampleCard",
          title: "我的ABOUT卡片2",
          width: 5,
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "e69ac6a6-3814-49ac-9940-9d1212a24b5f",
          type: "ExampleCard2",
          title: "我的卡片2",
          width: 3,
          description:
            "Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "dbbcc744-8d3b-4721-8518-32f222bfcb37",
          type: "ExampleCard2",
          title: "我的卡片2",
          width: 2,
          description:
            "Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "589a1f60-be08-476f-aa11-94a8fd0ae3d0",
          type: "ExampleCard2",
          title: "我的卡片4",
          width: 2,
          description:
            "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。",
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "5ac43abd-a38c-46d3-bb08-0d91064aee29",
          type: "ExampleCard2",
          title: "我的卡片5",
          width: 6,
          description:
            "我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。",
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "e67e26e9-5e76-4d65-a666-fde377b2a977",
          type: "ExampleCard2",
          title: "我的卡片2",
          width: 2,
          description:
            "Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
          height: LayoutCardHeight.MEDIUM,
        },
      ],
    },
    {
      page: "/instances",
      items: [
        {
          id: "AAAAA",
          type: "ExampleCard2",
          title: "我的ABOUT本地卡片1",
          width: 4,
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "BBBBB",
          type: "ExampleCard",
          title: "我的ABOUT卡片2",
          width: 4,
          height: LayoutCardHeight.MEDIUM,
        },
      ],
    },
    {
      page: "/instances/terminal",
      items: [
        {
          id: "BBBBB",
          type: "ExampleCard",
          title: "我的ABOUT卡片2",
          width: 4,
          height: LayoutCardHeight.MEDIUM,
        },
        {
          id: "BBBBB",
          type: "ExampleCard",
          title: "我的ABOUT卡片2",
          width: 4,
          height: LayoutCardHeight.MEDIUM,
        },
      ],
    },
  ]);

  const getPageLayoutConfig = (pageName: string) => {
    if (!pageName) pageName = currentRoutePath.value;
    const res = globalLayoutConfig.find((item) => item.page === pageName)
      ?.items;
    return res ? res : [];
  };

  const deleteLayoutItem = (pageName: string, id: string) => {
    if (!pageName) pageName = currentRoutePath.value;
    const items = getPageLayoutConfig(pageName);
    let index = 0;
    for (const iterator of items) {
      if (iterator?.id === id) {
        return items.splice(index, 1)?.[0];
      }
      index++;
    }
    return null;
  };

  const insertLayoutItem = (
    pageName: string,
    card: LayoutCard,
    index?: number
  ) => {
    if (!pageName) pageName = currentRoutePath.value;
    const items = getPageLayoutConfig(pageName);
    if (items) {
      if (index != null) {
        items.splice(index, 0, card);
      } else {
        items.push(card);
      }
    }
  };

  const moveCardItem = (
    pageName: string,
    sourceId: string,
    targetId: string
  ) => {
    if (!pageName) pageName = currentRoutePath.value;
    const items = getPageLayoutConfig(pageName);
    const sourceIndex = getIndexById(pageName, sourceId);
    const targetIndex = getIndexById(pageName, targetId);
    items.splice(targetIndex, 0, items.splice(sourceIndex, 1)[0]);
  };

  const getIndexById = (pageName: string, id: string) => {
    if (!pageName) pageName = currentRoutePath.value;
    const items = getPageLayoutConfig(pageName);
    return items.findIndex((item) => item.id === id);
  };

  const getCardById = (pageName: string, id: string) => {
    if (!pageName) pageName = currentRoutePath.value;
    const items = getPageLayoutConfig(pageName);
    return items.find((item) => item.id === id);
  };

  return {
    getPageLayoutConfig,
    deleteLayoutItem,
    insertLayoutItem,
    getIndexById,
    getCardById,
    moveCardItem,
    globalLayoutConfig,
  };
});
