import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { THREAD_ADMIN_REPLY_URL } from "../URLs";

export const replyThreadAdmin = async (threadId, { message }) => {
  const response = await axios.post(
    THREAD_ADMIN_REPLY_URL(threadId),
    { message },
    {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }
  );
  return response;
};
