import { router } from "@/router";
import {
  useRoute,
  type RouteLocationRaw,
  type RouteLocationPathRaw,
} from "vue-router";

export function useAppRouters() {
  const route = useRoute();

  const getRouteParamsUrl = () => {
    return route.fullPath.split("?")[1] || "";
  };

  const toPage = (params: RouteLocationPathRaw) => {
    router.push({
      ...params,
      query: {
        ...route.query,
        ...params.query,
      },
    });
  };

  return {
    getRouteParamsUrl,
    toPage,
  };
}
