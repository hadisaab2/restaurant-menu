import axios from "axios";
import { GET_RESTAURANT_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getRestaurant = async (restaurantName) => {
  try {
    const url = GET_RESTAURANT_URL(restaurantName);

    const response = await axios.get(url);

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetRestaurant = ({ onSuccess, restaurantName }) => {
  const { error, isLoading, status, data} = useQuery({
    queryFn: () => getRestaurant(restaurantName),
    retry: false,
    queryKey: ["restaurant"],
    onSuccess,
  });

  return { error, isLoading, status, response: data };
};
