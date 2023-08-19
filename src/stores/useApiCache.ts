import { router } from "@/config/router";
import type { JsonData } from "@/types";
import { createGlobalState } from "@vueuse/core";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export interface ApiCacheInfo {
  timestamp: number;
  data: any;
}

export interface RequestConfig extends AxiosRequestConfig {
  forceRequest?: boolean;
}

const RequestInterval = 1000;

export const useApiCache = createGlobalState(() => {
  const requestTimestamp: Map<string, number> = new Map();

  router.beforeEach(() => {
    requestTimestamp.clear();
    return true;
  });

  const defineApi = <T>() => {
    const state = ref<T | undefined>();
    const isLoading = ref(false);
    const isReady = ref(false);
    const isError = ref<Error | undefined>();

    let configCache: AxiosRequestConfig;

    const request = async (config?: RequestConfig) => {
      config = config ? config : configCache;
      if (!config) throw new Error("AxiosRequestConfig is undefined!");

      const requestKey = btoa(
        [
          String(config.method),
          String(config.url),
          JSON.stringify(config.data),
          JSON.stringify(config.params),
        ].join("\n"),
      );

      if (requestTimestamp.has(requestKey) && config.forceRequest !== true) {
        const now = Date.now();
        if (now - Number(requestTimestamp.get(requestKey)) < RequestInterval) {
          console.warn(
            "[API Request] The request has been cached:",
            config.url,
            config.params,
            config.data,
          );
          return state;
        }
      }

      isReady.value = true;
      isLoading.value = true;
      try {
        requestTimestamp.set(requestKey, Number.MAX_SAFE_INTEGER);
        const res = await axios(config);
        requestTimestamp.set(requestKey, Date.now());
        state.value = res.data;
      } catch (error) {
        isError.value = error as Error;
      } finally {
        isLoading.value = false;
        return state;
      }
    };

    return {
      isLoading,
      state,
      isReady,
      isError,
      execute: request,
    };
  };

  return {
    defineApi,
  };
});
