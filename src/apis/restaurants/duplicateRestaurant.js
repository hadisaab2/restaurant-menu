import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { useMutation } from "@tanstack/react-query";

const { REACT_APP_BASE_URL } = process.env;

const duplicateRestaurant = async (payload) => {
  try {
    const url = `${REACT_APP_BASE_URL}/restaurants/duplicate`;
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

export const useDuplicateRestaurantQuery = ({ onSuccess, onError }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: duplicateRestaurant,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
