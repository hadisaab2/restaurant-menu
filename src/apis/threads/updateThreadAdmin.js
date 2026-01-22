import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { THREAD_ADMIN_STATUS_URL } from "../URLs";

export const updateThreadAdmin = async (threadId, { status }) => {
  const response = await axios.patch(
    THREAD_ADMIN_STATUS_URL(threadId),
    { status },
    {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }
  );
  return response;
};
