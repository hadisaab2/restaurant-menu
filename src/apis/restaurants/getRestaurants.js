import axios from "axios";
import { GET_RESTAURANTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getRestaurants = async () => {
  try {
    const url = GET_RESTAURANTS_URL;

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

export const useGetRestaurants = ({ onSuccess }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: getRestaurants,
    retry: false,
    queryKey: ["restaurants"],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
