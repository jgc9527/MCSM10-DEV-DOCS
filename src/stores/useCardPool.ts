import { defineStore } from "pinia";
import { getLayoutCardPool } from "@/config";

export const useCardPool = defineStore("useCardPool", () => {
  const getCardPool = () => {
    return getLayoutCardPool();
  };

  return {
    getCardPool,
  };
});
