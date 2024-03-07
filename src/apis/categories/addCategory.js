import axios from "axios";
import { ADD_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addCategory = async (payload) => {
  try {
    const url = ADD_CATEGORY_URL;

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddCategoryQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addCategory,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
