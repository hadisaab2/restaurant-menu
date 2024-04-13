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
      // Assume each response contains info whether there's a next page.
      // You might need to adjust based on your actual API response.
      // Example: if lastPage has less items than expected per page, no next page:
      const maxPerPage = 10; // Example value, adjust according to your API
      return lastPage.length < maxPerPage ? undefined : allPages.length + 1;
    },
    keepPreviousData: true,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime:0
  });
};