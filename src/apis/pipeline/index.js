import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

import { usePipelineScope } from "./scope";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

export const useGetCandidates = (zoneId, params = {}) => {
  const scope = usePipelineScope();
  const { page = 1, perPage = 25, sortBy = "lead_score", sortDir = "desc", search = "", hasHandle = "" } = params;
  return useQuery({
    queryKey: ["candidates", zoneId, page, perPage, sortBy, sortDir, search, hasHandle],
    queryFn: async () => {
      const qs = new URLSearchParams({ page, per_page: perPage, sort_by: sortBy, sort_dir: sortDir });
      if (search) qs.set("search", search);
      if (hasHandle) qs.set("has_handle", hasHandle);
      const res = await axios.get(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/candidates?${qs}`, { headers: headers() });
      return res.data.data;
    },
    enabled: !!zoneId,
    refetchOnWindowFocus: false,
  });
};

export const useGetZones = () => {
  const scope = usePipelineScope();
  return useQuery({
    queryKey: ["zones"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${scope.zones}`, { headers: headers() });
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useSourceEstimate = () => {
  const scope = usePipelineScope();
  return useMutation({
    mutationFn: async (zoneId) => {
      const res = await axios.get(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/source-estimate`, { headers: headers() });
      return res.data.data;
    },
  });
};

export const useDetailsEstimate = () => {
  const scope = usePipelineScope();
  return useMutation({
    mutationFn: async (zoneId) => {
      const res = await axios.get(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/details-estimate`, { headers: headers() });
      return res.data.data;
    },
  });
};

export const useDiscoverHandles = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (zoneId) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/discover-handles`, {}, { headers: headers() });
      return res.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useSourceZone = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ zoneId, businessTypes }) => {
      const body = businessTypes && businessTypes.length > 0 ? { business_types: businessTypes } : {};
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/source?dry_run=false`, body, { headers: headers() });
      return res.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useFetchDetails = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (zoneId) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/details?dry_run=false`, {}, { headers: headers() });
      return res.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useEnrichCandidates = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ zoneId, candidateIds, dryRun = false }) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/zones/${zoneId}/enrich?dry_run=${dryRun}`, { candidate_ids: candidateIds }, { headers: headers() });
      return res.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useRunStatus = (runId) => {
  const scope = usePipelineScope();
  return useQuery({
    queryKey: ["run", runId],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${scope.sourcing}/runs/${runId}`, { headers: headers() });
      return res.data.data;
    },
    enabled: !!runId,
    refetchInterval: (query) => {
      const data = query.state.data;
      return data?.status === "PROCESSING" ? 2000 : false;
    },
    refetchOnWindowFocus: false,
  });
};

export const useSetHandle = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ candidateId, igHandle }) => {
      const res = await axios.put(`${BASE_URL}${scope.sourcing}/candidates/${candidateId}/handle`, { ig_handle: igHandle }, { headers: headers() });
      return res.data.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useImportHandles = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (handles) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/candidates/handles/import`, { handles }, { headers: headers() });
      return res.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useBuildDemo = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ candidateId, template, colorPreset, logoUrl, socials }) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/candidates/${candidateId}/build-demo`, { template, colorPreset, logoUrl, socials }, { headers: headers() });
      return res.data.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useCostsDashboard = () => {
  const scope = usePipelineScope();
  return useQuery({
    queryKey: ["costs-dashboard"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${scope.sourcing}/costs-dashboard`, { headers: headers() });
      return res.data.data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetCandidateDetail = (candidateId) => {
  const scope = usePipelineScope();
  return useQuery({
    queryKey: ["candidate-detail", candidateId],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${scope.sourcing}/candidates/${candidateId}/detail`, { headers: headers() });
      return res.data.data;
    },
    enabled: !!candidateId,
    refetchOnWindowFocus: false,
  });
};

export const useCheckConflicts = () => {
  const scope = usePipelineScope();
  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/candidates/check-conflicts`, data, { headers: headers() });
      return res.data.data;
    },
  });
};

export const useAddManualCandidate = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`${BASE_URL}${scope.sourcing}/candidates/manual`, data, { headers: headers() });
      return res.data.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

export const useDismissCandidate = () => {
  const scope = usePipelineScope();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (candidateId) => {
      const res = await axios.delete(`${BASE_URL}${scope.sourcing}/candidates/${candidateId}/dismiss`, { headers: headers() });
      return res.data.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["candidates"] }),
  });
};

/**
 * Prospect-shaped payload for pre-filling the Create Prospect dialog from a
 * pipeline row. Creates nothing; the operator still reviews and saves.
 * Resolves to { draft, zone_id, existing_prospect_id }.
 */
export const useGetProspectDraft = () => {
  const scope = usePipelineScope();
  return useMutation({
    mutationFn: async (candidateId) => {
      const res = await axios.get(
        `${BASE_URL}${scope.sourcing}/candidates/${candidateId}/prospect-draft`,
        { headers: headers() }
      );
      return res.data?.data;
    },
  });
};
