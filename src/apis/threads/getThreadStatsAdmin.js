import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { THREADS_ADMIN_STATS_URL } from "../URLs";

export const getThreadStatsAdmin = async () => {
  const response = await axios.get(THREADS_ADMIN_STATS_URL, {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });
  return response;
};
