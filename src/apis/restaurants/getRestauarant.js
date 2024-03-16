import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { GET_RESTAURANT_LOGO_URL } from "../URLs";

const gerRestaurantLogo = async (name) => {
  try {
    const url = GET_RESTAURANT_LOGO_URL(name);

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetRestaurantLogoQuery = ({ onSuccess, name }) => {
  const { isLoading, data } = useQuery({
    queryFn: () => gerRestaurantLogo(name),
    onSuccess,
    queryKey: [name],
  });

  return { isLoading, response: data };
};
