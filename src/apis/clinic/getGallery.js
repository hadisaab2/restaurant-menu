import axios from "axios";
import { GET_GALLERY_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getGallery = async (restaurantId) => {
  const url = GET_GALLERY_URL(restaurantId);
  const response = await axios.get(url);
  return response;
};

export const useGetGallery = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["gallery", restaurant_id],
    queryFn: () => getGallery(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });

  return { response: data, refetch, isLoading };
};
