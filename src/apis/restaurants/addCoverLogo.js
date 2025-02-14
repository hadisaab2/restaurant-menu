import axios from "axios";
import { ADD_RESTAURANT_COVER_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addRestaurantCover = async (payload) => {
  try {
    const url = ADD_RESTAURANT_COVER_URL;
    const formData = new FormData();
    formData.append("id", payload.id);
    formData.append("file", payload.cover_url);

    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddRestaurantCoverQuery = ({ onSuccess, onError = () => {} }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addRestaurantCover,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
