import type { LayoutCardHeight } from "@/config/originLayoutConfig";

export interface JsonData {
  [key: string]: any;
}

export interface MapData<T> {
  [key: string]: T;
}

export interface LayoutCardParams {
  field: string;
  label: string;
  type: "string" | "number" | "boolean" | "instanceId";
}

export interface LayoutCard {
  id: string;
  type: string;
  title: string;
  width: number;
  height: LayoutCardHeight;
  disableAdd?: boolean;
  onlyPath?: string[];
  params?: LayoutCardParams[];
  followId?: string;
  description?: string;
  meta?: JsonData;
  allowedPages?: Array<string> | null;
  line?: number;
  disableDelete?: boolean;
}

export interface LayoutWithRouter {
  page: string;
  items: LayoutCard[];
}
