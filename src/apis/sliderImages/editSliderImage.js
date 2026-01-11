import axios from "axios";
import { EDIT_SLIDER_IMAGE_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editSliderImage = async ({ id, ...payload }) => {
  try {
    const url = EDIT_SLIDER_IMAGE_URL(id);
    const formData = new FormData();
    
    if (payload.priority !== undefined) {
      formData.append("priority", payload.priority);
    }
    if (payload.file) {
      formData.append("file", payload.file);
    }

    const response = await axios.put(url, formData, {
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

export const useEditSliderImageQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: editSliderImage,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};

