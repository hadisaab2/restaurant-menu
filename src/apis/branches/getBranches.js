import axios from "axios";
import { GET_BRANCHES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getSocialMedia = async (id) => {
  try {
    const url = GET_BRANCHES_URL(id);

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

export const useGetBranches = ({ onSuccess, restaurant_id }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getSocialMedia(restaurant_id),
    retry: false,
    queryKey: ["branches"],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
