import axios from "axios";
import { EDIT_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editCategory = async (id, payload) => {
  try {
    const url = EDIT_CATEGORY_URL(id);

    const response = await axios.put(url, payload, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useEditCategoryQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editCategory(params[0], params[1]),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
