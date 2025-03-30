import axios from "axios";
import { EDIT_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { LANGUAGES } from "../../global";

const editCategory = async (id, payload) => {
  try {
    const url = EDIT_CATEGORY_URL(id);
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
    formData.append("discount", payload.discount);
    formData.append(`form_json`, payload.form_json);

    const response = await axios.put(url, formData, {
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

export const useEditCategoryQuery = ({ onSuccess, onError = () => {} }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editCategory(params[0], params[1]),
    onSuccess,
    onError,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
