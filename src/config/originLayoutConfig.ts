import { $t as t } from "@/lang/i18n";

export enum LayoutCardHeight {
  MINI = "100px",
  SMALL = "200px",
  MEDIUM = "400px",
  BIG = "600px",
  LARGE = "800px",
  AUTO = "unset",
}

// 在 Web 端没有返回用户自定义布局时，使用默认的布局。
// 这里是所有不同页面的默认的布局配置
export const ORIGIN_LAYOUT_CONFIG = [
  {
    page: "/",
    items: [
      {
        id: "45bad85d-df90-4588-b860-6833155c0031",
        type: "DataOverview",
        title: t("数据总览"),
        width: 12,
        description: t("用于显示面板的所有基本数据"),
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
        type: "ExampleCard3",
        title: "我的卡片5",
        width: 5,
        description:
          "我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。",
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "e67e26e9-5e76-4d65-a666-fde377b2a977",
        type: "ExampleCard",
        title: "我的卡片2",
        width: 12,
        description:
          "Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "589a1f60-be02138-476f-aa11-94a8fd0ae3d0",
        type: "ExampleCard2",
        title: "我的卡片4",
        width: 2,
        description:
          "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。",
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/instances",
    items: [
      {
        id: "12312312312zxczxc4123",
        type: "ExampleCard2",
        title: "我的ABOUT本地卡片1",
        width: 4,
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "wqeqwe21312xzczczxc3",
        type: "ExampleCard2",
        title: "我的ABOUT卡片2",
        width: 4,
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "wqeqwe21zxccxzcxz123",
        type: "ExampleCard3",
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
        id: "BBBB12pjxzc12oi3hoi21B",
        type: "ExampleCard2",
        title: "我的ABOUT卡片2",
        width: 4,
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "ExampleCard2",
        title: "我的ABOUT卡片2",
        width: 4,
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/instances/terminal/files",
    items: [
      {
        id: "BBBB12pj12o111i3hoi21B",
        type: "ExampleCard2",
        title: "文件管理",
        width: 6,
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/user",
    items: [
      {
        id: "BBBB12pj1223123oi3h23123oi221B",
        type: "ExampleCard2",
        title: "个人资料",
        width: 6,
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/settings",
    items: [
      {
        id: "BBBB12pj1223123oi3hoi221B",
        type: "ExampleCard2",
        title: "系统设置",
        width: 6,
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "BBBB12pj12231sadsad23oi3hoi221B",
        type: "ExampleCard2",
        title: "系统设置",
        width: 6,
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/node",
    items: [
      {
        id: "BBBB12pj122sadasd3123oi3dasdhoi221B",
        type: "ExampleCard2",
        title: "节点操作",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
      {
        id: "BBBB12pj1223123oi3safokphoi221B",
        type: "ExampleCard2",
        title: "节点列表",
        width: 12,
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/404",
    items: [
      {
        id: "40404040404040404",
        type: "ExampleCard2",
        title: "页面未找到",
        width: 6,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
];
