import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { useMutation } from "@tanstack/react-query";

const { REACT_APP_BASE_URL } = process.env;

const duplicateRestaurant = async (payload) => {
  try {
    const url = `${REACT_APP_BASE_URL}/restaurants/duplicate`;
    const { logoFile, ...data } = payload;

    let body;
    const headers = { Authorization: `Bearer ${getCookie("accessToken")}` };

    if (logoFile) {
      body = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value != null) body.append(key, value);
      });
      body.append("logo", logoFile);
    } else {
      body = data;
      headers["Content-Type"] = "application/json";
    }

    const response = await axios.post(url, body, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useDuplicateRestaurantQuery = ({ onSuccess, onError }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: duplicateRestaurant,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
