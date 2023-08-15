import { $t as t } from "@/lang/i18n";
import { getRandomId } from "@/tools/randId";
import type { JsonData, LayoutCard } from "@/types";

export enum LayoutCardHeight {
  MINI = "100px",
  SMALL = "200px",
  MEDIUM = "400px",
  BIG = "600px",
  LARGE = "800px",
  AUTO = "unset",
}

export interface PageLayoutConfig {
  page: string;
  items: LayoutCard[];
}

// 在 Web 端没有返回用户自定义布局时，使用默认的布局。
// 这里是所有不同页面的默认的布局配置
export const ORIGIN_LAYOUT_CONFIG: PageLayoutConfig[] = [
  {
    page: "/",
    items: [
      {
        id: getRandomId(),
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
        id: getRandomId(),
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
        id: getRandomId(),
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
        id: getRandomId(),
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
        id: getRandomId(),
        type: "DataOverview",
        title: t("数据总览"),
        width: 9,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: getRandomId(),
        type: "QuickStart",
        title: t("快速建立应用程序"),
        width: 3,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.MEDIUM,
      },
      {
        id: getRandomId(),
        type: "RequestChart",
        title: t("接口请求量趋势"),
        width: 6,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: getRandomId(),
        type: "InstanceChart",
        title: t("应用程序运行趋势"),
        width: 6,
        description: t("用于显示面板的所有基本数据"),
        height: LayoutCardHeight.SMALL,
      },
      {
        id: getRandomId(),
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
        id: getRandomId(),
        type: "InstanceList",
        title: t("应用程序"),
        width: 12,
        height: LayoutCardHeight.AUTO,
        disableDelete: true,
      },
      {
        id: getRandomId(),
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
        id: getRandomId(),
        type: "Terminal",
        title: t("控制台"),
        width: 12,
        height: LayoutCardHeight.BIG,
        disableDelete: true,
      },
      {
        id: getRandomId(),
        type: "InstanceBaseInfo",
        title: t("基本信息"),
        width: 4,
        height: LayoutCardHeight.SMALL,
      },
      {
        id: getRandomId(),
        type: "InstanceManagerBtns",
        title: t("功能组"),
        width: 8,
        height: LayoutCardHeight.SMALL,
        disableDelete: true,
      },
    ],
  },
  {
    page: "/instances/terminal/files",
    items: [
      {
        id: getRandomId(),
        type: "InstanceFileManager",
        title: "文件管理",
        width: 12,
        height: LayoutCardHeight.AUTO,
        disableDelete: true,
      },
      {
        id: getRandomId(),
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
  {
    page: "/instances/terminal/serverConfig",
    items: [
      {
        id: getRandomId(),
        type: "InstanceServerConfigOverview",
        title: "服务端配置文件",
        width: 12,
        height: LayoutCardHeight.AUTO,
        disableDelete: true,
      },
      {
        id: getRandomId(),
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
  {
    page: "/users",
    items: [
      {
        id: getRandomId(),
        type: "UserList",
        title: "用户列表",
        width: 12,
        height: LayoutCardHeight.AUTO,
        disableDelete: true,
      },
      {
        id: getRandomId(),
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
  {
    page: "/users/config",
    items: [
      {
        id: getRandomId(),
        type: "UserAccessSettings",
        title: "用户权限设定",
        width: 12,
        height: LayoutCardHeight.AUTO,
        disableDelete: true,
      },
      {
        id: getRandomId(),
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
        id: getRandomId(),
        type: "Settings",
        title: "系统设置",
        width: 6,
        height: LayoutCardHeight.MEDIUM,
        disableDelete: true,
      },
    ],
  },
  {
    page: "/node",
    items: [
      {
        id: getRandomId(),
        type: "NodeList",
        title: t("远程节点列表"),
        width: 12,
        height: LayoutCardHeight.AUTO,
        disableDelete: true,
      },
      {
        id: getRandomId(),
        type: "EmptyCard",
        title: "",
        width: 12,
        height: LayoutCardHeight.MINI,
      },
    ],
  },
  {
    page: "/user",
    items: [
      {
        id: getRandomId(),
        type: "UserInfo",
        title: t("个人信息"),
        width: 8,
        height: LayoutCardHeight.AUTO,
      },
    ],
  },

  {
    page: "/404",
    items: [
      {
        id: getRandomId(),
        type: "ExampleCard2",
        title: "页面未找到",
        width: 6,
        height: LayoutCardHeight.MINI,
        disableDelete: true,
      },
    ],
  },
];
