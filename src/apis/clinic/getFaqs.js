import axios from "axios";
import { GET_FAQS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getFaqs = async (restaurantId) => {
  const url = GET_FAQS_URL(restaurantId);
  const response = await axios.get(url);
  return response;
};

export const useGetFaqs = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["faqs", restaurant_id],
    queryFn: () => getFaqs(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });

  return { response: data, refetch, isLoading };
};
