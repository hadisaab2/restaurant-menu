import axios from "axios";
import { LOG_CATEGORY_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const logCategory = async (id) => {
  try {
    const url = LOG_CATEGORY_URL(id);

    const response = await axios.put(url);

    return response;
  } catch (error) {
    throw error;
  }
};

export const useLogCategory = ({ onSuccess, CategoryId }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => logCategory(CategoryId),
    retry: false,
    queryKey: [`logcategories-${CategoryId}`],
    onSuccess,
    refetchOnWindowFocus: false,
    enabled: !!CategoryId && CategoryId !== "all-items",
  });

  return { error, isLoading, status, response: data?.data, refetch };
};
