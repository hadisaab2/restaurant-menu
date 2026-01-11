import axios from "axios";
import { DELETE_SLIDER_IMAGE_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteSliderImage = async (id) => {
  try {
    const url = DELETE_SLIDER_IMAGE_URL(id);
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

export const useDeleteSliderImageQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: deleteSliderImage,
    onSuccess,
  });

  const handleApiCall = (id) => mutate(id);

  return { isPending, error, handleApiCall };
};

