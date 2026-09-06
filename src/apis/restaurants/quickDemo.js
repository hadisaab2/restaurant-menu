import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = () => ({
  Authorization: `Bearer ${getCookie("accessToken")}`,
});

// GET /restaurants/quick-demo/templates
export const useGetQuickDemoTemplates = (basePath) => {
  const base = basePath || "/restaurants";
  return useQuery({
    queryKey: ["quick-demo-templates", base],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${base}/quick-demo/templates`, { headers: headers() });
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });
};

// POST /restaurants/quick-demo
export const useCreateQuickDemo = ({ onSuccess, basePath }) => {
  const base = basePath || "/restaurants";
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axios.post(`${BASE_URL}${base}/quick-demo`, payload, { headers: headers() });
      return res.data;
    },
    onSuccess,
  });

  return { error, createDemo: mutate, isPending };
};
