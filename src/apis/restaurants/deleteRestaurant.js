import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { DELETE_RESTAURANT_URL } from "../URLs";

const deleteRestaurant = async (id) => {
  try {
    const url = DELETE_RESTAURANT_URL(id);

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

export const useDeleteRestaurantQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (id) => deleteRestaurant(id),
    onSuccess,
  });

  const handleApiCall = (id) => mutate(id);

  return { isPending, error, handleApiCall };
};
