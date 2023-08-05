import type { LayoutCardHeight } from "@/config/originLayoutConfig";

export interface JsonData {
  [key: string]: any;
}

export interface LayoutCard {
  id: string;
  type: string;
  title: string;
  width: number;
  height: LayoutCardHeight;
  followId?: string;
  description?: string;
  meta?: JsonData;
  allowedPages?: Array<string> | null;
  line?: number;
}

export interface LayoutWithRouter {
  page: string;
  items: LayoutCard[];
}
