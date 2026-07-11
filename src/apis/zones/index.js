import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = () => ({
  Authorization: `Bearer ${getCookie("accessToken")}`,
});

// GET /superadmin/zones
export const useGetZones = (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.status) params.set("status", filters.status);
  if (filters.country) params.set("country", filters.country);
  const qs = params.toString() ? `?${params.toString()}` : "";

  return useQuery({
    queryKey: ["zones", filters],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/superadmin/zones${qs}`, { headers: headers() });
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });
};

// GET /superadmin/zones/:id
export const useGetZone = (id) => {
  return useQuery({
    queryKey: ["zone", id],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/superadmin/zones/${id}`, { headers: headers() });
      return res.data.data;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};

// POST /superadmin/zones
export const useCreateZone = ({ onSuccess } = {}) => {
  const qc = useQueryClient();
  const { error, mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axios.post(`${BASE_URL}/superadmin/zones`, payload, { headers: headers() });
      return res.data.data;
    },
    onSuccess: (data) => {
      qc.invalidateQueries({ queryKey: ["zones"] });
      onSuccess?.(data);
    },
  });
  return { error, createZone: mutate, isPending };
};

// PUT /superadmin/zones/:id
export const useUpdateZone = ({ onSuccess } = {}) => {
  const qc = useQueryClient();
  const { error, mutate, isPending } = useMutation({
    mutationFn: async ({ id, ...payload }) => {
      const res = await axios.put(`${BASE_URL}/superadmin/zones/${id}`, payload, { headers: headers() });
      return res.data.data;
    },
    onSuccess: (data) => {
      qc.invalidateQueries({ queryKey: ["zones"] });
      qc.invalidateQueries({ queryKey: ["zone", data.id] });
      onSuccess?.(data);
    },
  });
  return { error, updateZone: mutate, isPending };
};

// POST /superadmin/zones/:id/grid-preview
export const useGridPreview = () => {
  const { error, mutate, isPending, data, reset } = useMutation({
    mutationFn: async (zoneId) => {
      const res = await axios.post(`${BASE_URL}/superadmin/zones/${zoneId}/grid-preview`, {}, { headers: headers() });
      return res.data.data;
    },
  });
  return { error, generatePreview: mutate, isGenerating: isPending, previewData: data, resetPreview: reset };
};
