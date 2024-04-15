import axios from "axios";
import { EDIT_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { LANGUAGES } from "../../global";

const editProduct = async (id, payload) => {
  try {
    const url = EDIT_PRODUCT_URL(id);
    const formData = new FormData();
    const { EN, ENAR, AR } = LANGUAGES;
    const { Lang } = JSON.parse(getCookie("userInfo"));

    switch (Lang) {
      case EN:
        formData.append("en_name", payload.en_name);
        formData.append("en_description", payload.en_description);
        formData.append("en_price", payload.en_price);
        break;
      case AR:
        formData.append("ar_name", payload.ar_name);
        formData.append("ar_description", payload.ar_description);
        break;
      case ENAR:
        formData.append("en_name", payload.en_name);
        formData.append("en_description", payload.en_description);
        formData.append("en_price", payload.en_price);
        formData.append("ar_name", payload.ar_name);
        formData.append("ar_description", payload.ar_description);
        break;
      default:
        break;
    }

    formData.append("restaurant_id", payload.restaurant_id);
    formData.append("category_id", payload.category_id);
    formData.append(`image`, payload.image);
    formData.append(`priority`, payload.priority);

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

export const useEditProductQuery = ({ onSuccess, onError = () => {} }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editProduct(params[0], params[1]),
    onSuccess,
    onError,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
