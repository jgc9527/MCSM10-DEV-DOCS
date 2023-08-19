import { useApiCache } from "@/stores/useApiCache";

import { createGlobalState } from "@vueuse/core";
import axios from "axios";

export const userService = createGlobalState(() => {
  const { defineApi } = useApiCache();

  const userInfoApi = defineApi<{
    id: number;
  }>();

  const login = async (username: string, password: string) => {
    const result = await axios({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      data: {
        username,
        password,
      },
    });
    return result.data;
  };

  const getUserInfo = (uid: string) => {
    userInfoApi.execute({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      params: {
        uid,
      },
    });
    return userInfoApi;
  };

  return {
    login,
    getUserInfo,
  };
});
