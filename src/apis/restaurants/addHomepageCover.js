import axios from "axios";
import { ADD_HOMEPAGE_COVER_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addHomepageCover = async (payload) => {
  try {
    const url = ADD_HOMEPAGE_COVER_URL;
    const formData = new FormData();
    formData.append("id", payload.id);
    formData.append("file", payload.homepage_cover_image);

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

export const useAddHomepageCoverQuery = ({ onSuccess, onError = () => {} }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addHomepageCover,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};

