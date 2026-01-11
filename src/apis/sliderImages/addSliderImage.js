import axios from "axios";
import { ADD_SLIDER_IMAGE_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addSliderImage = async (payload) => {
  try {
    const url = ADD_SLIDER_IMAGE_URL;
    const formData = new FormData();
    
    formData.append("restaurant_id", payload.restaurant_id);
    if (payload.priority !== undefined) {
      formData.append("priority", payload.priority);
    }
    if (payload.type !== undefined) {
      formData.append("type", payload.type);
    }
    if (payload.file) {
      formData.append("file", payload.file);
    }

    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddSliderImageQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addSliderImage,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};

