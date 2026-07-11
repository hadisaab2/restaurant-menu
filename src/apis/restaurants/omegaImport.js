import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = () => ({
  Authorization: `Bearer ${getCookie("accessToken")}`,
});

// POST /restaurants/quick-demo/fetch-omega
export const useFetchOmegaPreview = () => {
  const { error, mutate, isPending, data, reset } = useMutation({
    mutationFn: async (omegaSlug) => {
      const res = await axios.post(
        `${BASE_URL}/restaurants/quick-demo/fetch-omega`,
        { omegaSlug },
        { headers: headers() }
      );
      return res.data.data;
    },
  });

  return { error, fetchPreview: mutate, isFetching: isPending, previewData: data, resetPreview: reset };
};

// POST /restaurants/quick-demo/import-omega
export const useImportFromOmega = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axios.post(
        `${BASE_URL}/restaurants/quick-demo/import-omega`,
        payload,
        { headers: headers() }
      );
      return res.data;
    },
    onSuccess,
  });

  return { error, importOmega: mutate, isImporting: isPending };
};

// POST /restaurants/quick-demo/fetch-thrubits
export const useFetchThrubitsPreview = () => {
  const { error, mutate, isPending, data, reset } = useMutation({
    mutationFn: async (thrubitsSlug) => {
      const res = await axios.post(
        `${BASE_URL}/restaurants/quick-demo/fetch-thrubits`,
        { thrubitsSlug },
        { headers: headers() }
      );
      return res.data.data;
    },
  });

  return { error, fetchThrubitsPreview: mutate, isFetchingThrubits: isPending, thrubitsPreviewData: data, resetThrubitsPreview: reset };
};

// POST /restaurants/quick-demo/import-thrubits
export const useImportFromThrubits = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axios.post(
        `${BASE_URL}/restaurants/quick-demo/import-thrubits`,
        payload,
        { headers: headers() }
      );
      return res.data;
    },
    onSuccess,
  });

  return { error, importThrubits: mutate, isImportingThrubits: isPending };
};
