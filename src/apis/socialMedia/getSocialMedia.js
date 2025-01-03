import axios from "axios";
import { GET_MEDIA_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getSocialMedia = async (id) => {
  try {
    const url = GET_MEDIA_URL(id);

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

export const useGetSocialMedia = ({ onSuccess, restaurant_id }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getSocialMedia(restaurant_id),
    retry: false,
    queryKey: [`media-${restaurant_id}`],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
