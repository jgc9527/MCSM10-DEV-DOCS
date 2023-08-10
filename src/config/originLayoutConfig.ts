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
        id: "45bad85d-df90-4588-b860-6833155c00312",
        type: "StatusBlock",
        title: t("节点在线数1"),
        meta: {
          title: "在线节点 / 总节点",
          type: "node",
        },
        width: 3,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: "45bad85d-df90-4588-b860-6833155c0031214",
        type: "StatusBlock",
        title: t("实例运行状态"),
        meta: {
          title: "正在运行数 / 全部实例总数",
          type: "instance",
        },
        width: 3,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: "45bad85d-df90-4588-b860-6833155c003122",
        type: "StatusBlock",
        title: t("面板登录次数"),
        meta: {
          title: "登录失败次数 : 登录成功次数",
          type: "users",
        },
        width: 3,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: "45bad85d-df90-4588-b860-6833155c003123",
        type: "StatusBlock",
        title: t("系统资源信息"),
        meta: {
          title: "面板所在主机 CPU，RAM 百分比",
          type: "system",
        },
        width: 3,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
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
