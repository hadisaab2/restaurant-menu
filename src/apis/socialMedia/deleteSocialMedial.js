import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { DELETE_MEDIA_URL } from "../URLs";

const deleteMedia = async (id) => {
  try {
    const url = DELETE_MEDIA_URL(id);

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

export const useDeleteMediaQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (id) => deleteMedia(id),
    onSuccess,
  });

  const handleApiCall = (id) => mutate(id);

  return { isPending, error, handleApiCall };
};
