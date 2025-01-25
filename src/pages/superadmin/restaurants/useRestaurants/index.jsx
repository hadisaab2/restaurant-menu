import { useState, useEffect } from "react";
import { useGetRestaurants } from "../../../apis/restaurants/getRestaurants";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { response, isLoading, refetch } = useGetRestaurants();

  const fetchRestaurants = async () => {
    try {
      const { data: { data } } = await refetch();
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isLoading && response) {
      setRestaurants(response?.data);
    }
  }, [isLoading, response]);

  return { restaurants, isLoading, fetchRestaurants };
};
