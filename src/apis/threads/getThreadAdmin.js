import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { THREAD_ADMIN_URL } from "../URLs";

export const getThreadAdmin = async (threadId) => {
  const response = await axios.get(THREAD_ADMIN_URL(threadId), {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });
  return response;
};
