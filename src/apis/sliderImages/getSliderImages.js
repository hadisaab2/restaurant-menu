import axios from "axios";
import { GET_SLIDER_IMAGES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getSliderImages = async (restaurantId) => {
  try {
    const url = GET_SLIDER_IMAGES_URL(restaurantId);
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetSliderImages = ({ onSuccess, restaurant_id }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getSliderImages(restaurant_id),
    retry: false,
    queryKey: [`slider-images-${restaurant_id}`],
    onSuccess,
    enabled: !!restaurant_id,
  });

  return { error, isLoading, status, response: data, refetch };
};

