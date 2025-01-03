import axios from "axios";
import { DELETE_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteProduct = async (id) => {
  try {
    const url = DELETE_PRODUCT_URL(id);

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

export const useDeleteProductQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess,
  });

  const handleApiCall = (id) => mutate(id);

  return { isPending, error, handleApiCall };
};
