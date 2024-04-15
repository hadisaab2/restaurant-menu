import axios from "axios";
import { DELETE_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteCategory = async (id) => {
  try {
    const url = DELETE_CATEGORY_URL(id);

    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useDeleteCategoryQuery = ({ onSuccess, onError = () => {} }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (id) => deleteCategory(id),
    onSuccess,
    onError,
  });

  const handleApiCall = (id) => mutate(id);

  return { isPending, error, handleApiCall };
};
