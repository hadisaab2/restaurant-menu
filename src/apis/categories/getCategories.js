import axios from "axios";
import { GET_CATEGORIES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getCategories = async (id) => {
  try {
    const url = GET_CATEGORIES_URL(id);

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

export const useGetCategories = ({ onSuccess, restaurantId }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getCategories(restaurantId),
    retry: false,
    queryKey: [`categories-${restaurantId}`],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
