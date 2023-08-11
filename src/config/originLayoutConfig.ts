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
      {
        id: "45bad85d-df90-4588-b860-6833155c0031",
        type: "DataOverview",
        title: t("数据总览"),
        width: 9,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "A000000000000000000000000000000000002",
        type: "QuickStart",
        title: t("快速建立应用程序"),
        width: 3,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "A000000000000000000000000000000000003",
        type: "RequestChart",
        title: t("接口请求量趋势"),
        width: 6,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: "A000000000000000000000000000000000004",
        type: "InstanceChart",
        title: t("应用程序运行趋势"),
        width: 6,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: "A000000000000000000000000000000000001",
        type: "NodeOverview",
        title: t("节点状态总览"),
        width: 12,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.MEDIUM,
      },
    ],
  },
  {
    page: "/instances",
    items: [
      {
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "InstanceList",
        title: t("应用程序"),
        width: 12,
        height: LayoutCardHeight.AUTO,
      },
      {
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
  {
    page: "/instances/terminal",
    items: [
      {
        id: "terminal213123",
        type: "Settings",
        title: t("操作区"),
        width: 4,
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "Settings",
        title: t("应用程序"),
        width: 4,
        height: LayoutCardHeight.AUTO,
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
    page: "/users",
    items: [
      {
        id: "BBBB12pj12223123oi3h23123oi221B",
        type: "UserList",
        title: "用户列表",
        width: 12,
        height: LayoutCardHeight.AUTO,
      },
      {
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
  {
    page: "/settings",
    items: [
      {
        id: "saldmlasdsad",
        type: "Settings",
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
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "NodeList",
        title: t("远程节点列表"),
        width: 12,
        height: LayoutCardHeight.AUTO,
      },
      {
        id: "21lk3io12h3io221312312321sazxczx1h3",
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
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
