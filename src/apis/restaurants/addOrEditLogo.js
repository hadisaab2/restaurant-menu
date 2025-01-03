import axios from "axios";
import { EDIT_OR_ADD_RESTAURANT_LOGO_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addOrEditRestaurantLogo = async (id, payload) => {
  try {
    const url = EDIT_OR_ADD_RESTAURANT_LOGO_URL(id);
    const formData = new FormData();

    formData.append("file", payload.file);
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

export const useAddOrEditRestaurantLogoQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => addOrEditRestaurantLogo(params[0], params[1]),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
