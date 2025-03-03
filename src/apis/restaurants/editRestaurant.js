import axios from "axios";
import { EDIT_RESTAURANT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editRestaurant = async (id, payload) => {
  try {
    console.log("payload",payload)
    const url = EDIT_RESTAURANT_URL(id);
    if (payload?.password === "") {
      delete payload?.password;
    }

    const response = await axios.put(url, payload, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useEditRestaurantQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editRestaurant(params[0], params[1]),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
