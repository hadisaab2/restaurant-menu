import axios from "axios";
import { GET_PRODUCTS_URL } from "../URLs";
// import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

// const getProducts = async (categoryId, page) => {
//   try {
//     const url = GET_PRODUCTS_URL(categoryId, page);

//     const response = await axios.get(url);

//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// export const useGetProducts = ({ onSuccess, categoryId, page }) => {
//   const { error, isLoading, status, data, refetch } = useQuery({
//     queryFn: () => getProducts(categoryId, page),
//     queryKey: [`products-${categoryId}`, page],
//     onSuccess,
//     keepPreviousData: true,
//     retry:false
//   });
//   return { error, isLoading, status, response: data, refetch };
// };



const getProducts = async (categoryId, page = 0) => {
  try {
    const url = GET_PRODUCTS_URL(categoryId, page);
    const response = await axios.get(url);
    return response.data; // Make sure to return just the data if that's what's being used.
  } catch (error) {
    throw error;
  }
};


export const useGetProducts = ( categoryId) => {
  return useInfiniteQuery({
    queryKey: ['products', categoryId],
    queryFn: ({ pageParam = 0 }) => getProducts(categoryId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // Check if the number of products is less than 10 to determine if there's a next page
      if (lastPage.length < 10) {
        return undefined; // There are less than 10 items, so no next page
      }
      return allPages.length; // Returns the index for the next page, which is the length of the allPages array
    },
    keepPreviousData: true,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime:0
  });
};