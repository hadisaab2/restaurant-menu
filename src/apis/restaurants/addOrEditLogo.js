import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const addOrEditRestaurantLogo = async (id, payload, basePath = "/restaurants") => {
  const url = `${BASE_URL}${basePath}/logo/${id}`;
  const formData = new FormData();
  formData.append("file", payload.file);
  const response = await axios.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });
  return response;
};

export const useAddOrEditRestaurantLogoQuery = ({ onSuccess, basePath }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => addOrEditRestaurantLogo(params[0], params[1], basePath),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
