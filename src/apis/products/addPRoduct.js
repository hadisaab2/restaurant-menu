import axios from "axios";
import { ADD_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-toastify";
import { getCookie } from "../../utilities/manageCookies";
import { LANGUAGES } from "../../global";

const addProduct = async (payload) => {
  try {
    const url = ADD_PRODUCT_URL;
    const formData = new FormData();
    const { EN, ENAR, AR } = LANGUAGES;
    const { Lang } = JSON.parse(getCookie("userInfo"));
    console.log(payload.en_price)
    switch (Lang) {
      case EN:
        formData.append("en_name", payload.en_name);
        payload.en_description && formData.append("en_description", payload.en_description);
        formData.append("en_price", payload.en_price);
        break;
      case AR:
        formData.append("ar_name", payload.ar_name);
        payload.ar_description && formData.append("ar_description", payload.ar_description);
        formData.append("en_price", payload.en_price);
        break;
      case ENAR:
        formData.append("en_name", payload.en_name);
        payload.en_description && formData.append("en_description", payload.en_description);
        formData.append("en_price", payload.en_price);
        formData.append("ar_name", payload.ar_name);
        payload.ar_description && formData.append("ar_description", payload.ar_description);
        break;
      default:
        break;
    }

    formData.append("restaurant_id", payload.restaurant_id);
    formData.append("category_id", payload.category_id);
    payload.images.forEach((imageData, index) => {
      formData.append(`images[${index}][url]`, imageData.url);
      formData.append(`images[${index}][file]`, imageData.file);
    });
    formData.append(`priority`, payload.priority);
    formData.append(`product_code`, payload.product_code);
    formData.append(`cover_id`, payload.cover_id);
    formData.append(`form_json`, payload.form_json);

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

export const useAddProductQuery = ({ onSuccess, onError = () => {} }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addProduct,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
