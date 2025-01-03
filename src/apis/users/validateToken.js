import axios from "axios";
import { VALIDATE_TOKEN_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { deleteCookie, getCookie } from "../../utilities/manageCookies";
import { toast } from "react-toastify";
import { ADMINSIGNIN } from "../../routes/URLs";

const validateToken = async () => {
  try {
    const url = VALIDATE_TOKEN_URL;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    toast.error("Some thing wen wrong!!");
    localStorage.removeItem("isLoggedIn");
    deleteCookie("accessToken");
    deleteCookie("userInfo");
    window.location.href = ADMINSIGNIN;
    throw error;
  }
};

export const useValidateTokenQueryQuery = () => {
  const { error, isLoading, status, isSuccess } = useQuery({
    queryFn: validateToken,
    retry: false,
    queryKey: ["validate"],
  });

  return { isLoading, error, status, isSuccess };
};
