import axios from "axios";
import { ADD_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { LANGUAGES } from "../../global";

const addCategory = async (payload) => {
  try {
    const url = ADD_CATEGORY_URL;
    const formData = new FormData();
    const { EN, ENAR, AR } = LANGUAGES;
    const { Lang } = JSON.parse(getCookie("userInfo"));

    switch (Lang) {
      case EN:
        formData.append("en_category", payload.en_category);
        break;
      case AR:
        formData.append("ar_category", payload.ar_category);
        break;
      case ENAR:
        formData.append("en_category", payload.en_category);
        formData.append("ar_category", payload.ar_category);
        break;
      default:
        break;
    }

    formData.append("image", payload.image);
    formData.append("priority", payload.priority);

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

export const useAddCategoryQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addCategory,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
