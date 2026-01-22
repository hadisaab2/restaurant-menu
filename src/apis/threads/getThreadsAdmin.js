import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { THREADS_ADMIN_URL } from "../URLs";

export const getThreadsAdmin = async ({ status, type, q, page, pageSize }) => {
  const response = await axios.get(THREADS_ADMIN_URL, {
    params: {
      status: status || undefined,
      type: type || undefined,
      q: q || undefined,
      page,
      pageSize,
    },
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });
  return response;
};
