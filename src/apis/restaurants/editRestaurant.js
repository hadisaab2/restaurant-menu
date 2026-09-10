import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const editRestaurant = async (id, payload, basePath = "/restaurants") => {
  if (payload?.password === "") {
    delete payload?.password;
  }

  const url = `${BASE_URL}${basePath}/${id}`;
  const response = await axios.put(url, payload, {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });
  return response;
};

export const useEditRestaurantQuery = ({ onSuccess, basePath }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editRestaurant(params[0], params[1], basePath),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
