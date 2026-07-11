import React, { useState, useEffect } from "react";
import {
  Select, MenuItem, FormControl, InputLabel, Typography, Alert, CircularProgress,
  Stepper, Step, StepLabel, Checkbox, Tooltip, IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

import {
  useGetZones, useGetCandidates, useSourceZone, useSourceEstimate, useDetailsEstimate, useFetchDetails,
  useEnrichCandidates, useRunStatus, useSetHandle, useBuildDemo, useGetCandidateDetail, useDismissCandidate, useDiscoverHandles, useCostsDashboard, useAddManualCandidate, useCheckConflicts,
} from "../../../apis/pipeline";
import ReviewDialog, { TEMPLATES, COLOR_PRESETS, uploadLogo } from "../../../components/shared/ReviewDialog";
import {
  PipelineContainer, TopBar, StepperCard, GridContainer, Table, Th, Td, Tr,
  Badge, ActionBtn, LinkChip, Toolbar, SearchInput, Pagination,
} from "./styles";

const BUSINESS_TYPE_GROUPS = {
  "Restaurants": ["restaurant", "fast_food_restaurant", "lebanese_restaurant", "seafood_restaurant", "steak_house", "sushi_restaurant", "american_restaurant", "italian_restaurant", "bistro"],
  "Cafes & Drinks": ["cafe", "coffee_shop", "juice_shop", "tea_house"],
  "Bakeries & Sweets": ["bakery", "pastry_shop", "cake_shop", "dessert_shop", "dessert_restaurant", "chocolate_shop", "ice_cream_shop"],
  "Food Delivery": ["meal_takeaway", "meal_delivery"],
  "Flowers & Gifts": ["florist", "flower_shop", "gift_shop"],
  "Beauty & Wellness": ["beauty_salon", "nail_salon", "hair_salon", "spa"],
  "Grocery": ["grocery_store", "supermarket", "convenience_store"],
};
const ALL_FOOD_TYPES = [...BUSINESS_TYPE_GROUPS["Restaurants"], ...BUSINESS_TYPE_GROUPS["Cafes & Drinks"], ...BUSINESS_TYPE_GROUPS["Bakeries & Sweets"], ...BUSINESS_TYPE_GROUPS["Food Delivery"]];

const BAND_COLORS = {
  build_demo: { bg: "#dc2626", color: "#fff" },
  contact_now: { bg: "#f59e0b", color: "#fff" },
  nurture: { bg: "#10b981", color: "#fff" },
  skip: { bg: "#cbd5e1", color: "#475569" },
};

const BAND_LABELS = {
  build_demo: "Build Demo",
  contact_now: "Contact Now",
  nurture: "Nurture",
  skip: "Skip",
};

export default function Pipeline() {
  const [zoneId, setZoneId] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("lead_score");
  const [sortDir, setSortDir] = useState("desc");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [handleFilter, setHandleFilter] = useState(""); // "" = all, "true" = has handle, "false" = no handle

  React.useEffect(() => {
    const t = setTimeout(() => { setDebouncedSearch(search); setPage(1); }, 300);
    return () => clearTimeout(t);
  }, [search]);

  const { data: zones, isLoading: loadingZones } = useGetZones();
  const { data: candidateData, isLoading: loadingCandidates, refetch: refetchCandidates } = useGetCandidates(zoneId, { page, perPage: 25, sortBy, sortDir, search: debouncedSearch, hasHandle: handleFilter });

  const [activeRunId, setActiveRunId] = useState(null);
  const { data: runData } = useRunStatus(activeRunId);

  useEffect(() => {
    if (runData && runData.status !== "PROCESSING" && activeRunId) {
      setActiveRunId(null);
      refetchCandidates();
    }
  }, [runData?.status]);

  const { mutate: sourceZone, isPending: sourcing } = useSourceZone();
  const { mutate: getEstimate, isPending: estimating } = useSourceEstimate();
  const { mutate: getDetailsEstimate, isPending: detailsEstimating } = useDetailsEstimate();
  const { mutate: fetchDetails, isPending: detailing } = useFetchDetails();
  const { mutate: enrichCandidates } = useEnrichCandidates();
  const { mutate: setHandle } = useSetHandle();
  const { mutate: buildDemo } = useBuildDemo();
  const { mutate: dismissCandidate } = useDismissCandidate();
  const { mutate: discoverHandles, isPending: discovering } = useDiscoverHandles();
  const { mutate: addManual, isPending: addingManual } = useAddManualCandidate();
  const { mutate: checkConflicts, isPending: checkingConflicts } = useCheckConflicts();
  const [manualDialogOpen, setManualDialogOpen] = useState(false);
  const [manualForm, setManualForm] = useState({ business_name: "", phone: "", ig_handle: "", primary_type: "restaurant", zone_id: "" });
  const [conflictData, setConflictData] = useState(null);

  // Dialogs & state
  const [handleDialog, setHandleDialog] = useState(null);
  const [enrichSelected, setEnrichSelected] = useState(new Set());
  const [enrichDialogOpen, setEnrichDialogOpen] = useState(false);
  const [enrichDryRunData, setEnrichDryRunData] = useState(null);
  const [detailsConfirm, setDetailsConfirm] = useState(null);
  const [discoverConfirm, setDiscoverConfirm] = useState(false);
  const [costsOpen, setCostsOpen] = useState(false);
  const { data: costsData, refetch: refetchCosts, isLoading: costsLoading } = useCostsDashboard();
  const [sourceBusinessTypes, setSourceBusinessTypes] = useState([]);
  const [enrichDryRunLoading, setEnrichDryRunLoading] = useState(false);
  const [reviewRows, setReviewRows] = useState([]);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [sourceConfirm, setSourceConfirm] = useState(null);
  const [legendOpen, setLegendOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const { data: detailData, isLoading: detailLoading } = useGetCandidateDetail(detailId);

  const candidates = candidateData?.candidates || [];
  const summary = candidateData?.pipeline_summary || {};
  const total = candidateData?.total || 0;
  const totalPages = Math.ceil(total / 25);

  // Search is now server-side (via debouncedSearch in the API query)
  const filtered = candidates;

  // Stepper
  const steps = [
    { label: "Sourced", detail: `${summary.total_candidates || 0}`, done: (summary.total_candidates || 0) > 0 },
    { label: "Details", detail: `${summary.with_details || 0}/${summary.total_candidates || 0}`, done: summary.with_details === summary.total_candidates && summary.total_candidates > 0 },
    { label: "Enriched", detail: `${summary.with_enrichment || 0}`, done: false },
    { label: "Scored", detail: `${summary.with_score_complete || 0}`, done: (summary.with_score_complete || 0) > 0 },
  ];
  const activeStep = steps.findIndex((s) => !s.done);

  // Handlers
  const handleSource = () => {
    // Initialize business types from ALL_FOOD_TYPES (default)
    setSourceBusinessTypes([...ALL_FOOD_TYPES]);
    getEstimate(zoneId, { onSuccess: (data) => setSourceConfirm(data) });
  };
  const handleSourceConfirm = () => {
    setSourceConfirm(null);
    sourceZone({ zoneId, businessTypes: sourceBusinessTypes }, { onSuccess: (d) => setActiveRunId(d.run_id) });
  };
  const handleDetails = () => {
    getDetailsEstimate(zoneId, { onSuccess: (data) => setDetailsConfirm(data) });
  };
  const handleDetailsConfirm = () => {
    setDetailsConfirm(null);
    fetchDetails(zoneId, { onSuccess: (d) => setActiveRunId(d.run_id) });
  };
  const handleDiscover = () => {
    setDiscoverConfirm(true);
  };
  const handleDiscoverConfirm = () => {
    setDiscoverConfirm(false);
    discoverHandles(zoneId, { onSuccess: (d) => setActiveRunId(d.run_id) });
  };
  const handleSort = (col) => {
    if (sortBy === col) setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    else { setSortBy(col); setSortDir("desc"); }
    setPage(1);
  };
  const handleSetHandle = () => {
    if (!handleDialog) return;
    setHandle({ candidateId: handleDialog.candidateId, igHandle: handleDialog.value });
    setHandleDialog(null);
  };

  const openEnrichDialog = () => {
    setEnrichDryRunData(null);
    setEnrichDryRunLoading(true);
    setEnrichDialogOpen(true);
    // Fire dry-run to get real cached-vs-live split
    const ids = Array.from(enrichSelected);
    enrichCandidates(
      { zoneId, candidateIds: ids, dryRun: true },
      {
        onSuccess: (d) => { setEnrichDryRunData(d); setEnrichDryRunLoading(false); },
        onError: () => { setEnrichDryRunLoading(false); },
      }
    );
  };

  const handleEnrichConfirm = () => {
    const ids = Array.from(enrichSelected);
    enrichCandidates({ zoneId, candidateIds: ids }, { onSuccess: (d) => setActiveRunId(d.run_id) });
    setEnrichDialogOpen(false);
    setEnrichSelected(new Set());
    setEnrichDryRunData(null);
  };

  const handleBuildDemo = (candidate) => {
    const tplMap = { restaurant: "restaurant", cafe: "cafe", bakery: "bakery", ice_cream_shop: "bakery", pastry_shop: "bakery", chocolate_shop: "bakery", dessert_shop: "bakery", coffee_shop: "cafe", juice_shop: "cafe", meal_takeaway: "restaurant", meal_delivery: "restaurant" };
    let tpl = tplMap[candidate.primary_type] || "restaurant";
    const name = (candidate.display_name || "").toLowerCase();
    if (/donut|doughnut/.test(name)) tpl = "bakery";
    else if (/pizza/.test(name)) tpl = "pizza";
    else if (/burger/.test(name)) tpl = "burger";
    else if (/cake|chocolate|pastry|sweets|\u062d\u0644\u0648\u064a\u0627\u062a/.test(name)) tpl = "bakery";
    else if (/coffee|caf\u00e9/.test(name)) tpl = "cafe";

    setReviewRows([{
      id: candidate.id,
      business_name: candidate.display_name,
      category: candidate.mapped_category,
      template: tpl,
      colorPreset: "Clean Teal",
      logoFile: null,
      ig_handle: candidate.ig_handle || "",
      facebook: candidate.detected_links_summary?.facebook_url || "",
      tiktok: candidate.detected_links_summary?.tiktok_url || "",
    }]);
    setReviewOpen(true);
  };

  const handleReviewBuild = async (rows) => {
    const results = [];
    for (const r of rows) {
      try {
        let logoUrl = null;
        if (r.logoFile) logoUrl = await uploadLogo(r.logoFile);
        const res = await (async () => {
          const { default: axios } = await import("axios");
          const { getCookie } = await import("../../../utilities/manageCookies");
          const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/superadmin/sourcing/candidates/${r.id}/build-demo`,
            { template: r.template, colorPreset: r.colorPreset, logoUrl, socials: { instagram: r.ig_handle, facebook: r.facebook, tiktok: r.tiktok } },
            { headers: { Authorization: `Bearer ${getCookie("accessToken")}` } }
          );
          return resp.data.data;
        })();
        results.push({ status: "success", business_name: r.business_name, demo_url: res?.demo_url });
      } catch (err) {
        results.push({ status: "error", business_name: r.business_name, message: err.response?.data?.message || err.message });
      }
    }
    refetchCandidates();
    return { summary: { success: results.filter(r => r.status === "success").length, errors: results.filter(r => r.status !== "success").length }, results };
  };

  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [exportFilter, setExportFilter] = useState("enriched"); // "all" | "enriched" | "selected"
  const [exportLimit, setExportLimit] = useState("");

  const handleExportCsv = async () => {
    setExportDialogOpen(false);
    try {
      const { getCookie } = await import("../../../utilities/manageCookies");
      const { default: axios } = await import("axios");
      const params = new URLSearchParams();
      if (exportFilter === "all") params.set("include_incomplete", "true");
      if (exportLimit && parseInt(exportLimit) > 0) params.set("limit", exportLimit);
      const qs = params.toString() ? `?${params.toString()}` : "";
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/superadmin/sourcing/zones/${zoneId}/export-csv${qs}`, {
        headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `demos_import_zone_${zoneId}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Export failed: " + (err.response?.data?.message || err.message));
    }
  };

  // Checkbox logic
  const canCheck = (c) => {
    if (!c.ig_handle) return { enabled: false, reason: "Set an IG handle first to enable enrichment" };
    if (c.enrichment_status === "enriched") return { enabled: false, reason: "Already enriched" };
    if (enrichSelected.size >= 5 && !enrichSelected.has(c.id)) return { enabled: false, reason: "Max 5 per run" };
    return { enabled: true, reason: "Select for IG enrichment" };
  };

  return (
    <PipelineContainer>
      <TopBar>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Pipeline</Typography>
          <ActionBtn $bg={costsOpen ? "#8b5cf6" : "#f1f5f9"} $color={costsOpen ? "#fff" : "#64748b"} onClick={() => { setCostsOpen(!costsOpen); if (!costsOpen) refetchCosts(); }} style={{ fontSize: 11 }}>
            {costsOpen ? "Hide Costs" : "API Costs"}
          </ActionBtn>
          <ActionBtn $bg="#16a34a" $color="#fff" onClick={() => { setManualForm({ business_name: "", phone: "", ig_handle: "", primary_type: "restaurant", zone_id: zoneId || "" }); setConflictData(null); setManualDialogOpen(true); }} style={{ fontSize: 11 }}>
            + Add Manual
          </ActionBtn>
        </div>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Zone</InputLabel>
          <Select value={zoneId} onChange={(e) => { setZoneId(e.target.value); setPage(1); setEnrichSelected(new Set()); }} label="Zone">
            <MenuItem value="0">Manual entries (no zone)</MenuItem>
            {loadingZones ? <MenuItem disabled>Loading...</MenuItem> :
              (zones || []).map((z) => <MenuItem key={z.id} value={z.id}>{z.name} ({z.country})</MenuItem>)}
          </Select>
        </FormControl>
      </TopBar>

      {/* Costs Dashboard */}
      {costsOpen && (
        <div style={{ background: "#f8fafc", borderRadius: 12, padding: 16, marginBottom: 16, border: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 14 }}>API Costs — {costsData?.month || "..."}</Typography>
            <ActionBtn $bg="#eff6ff" $color="#3b82f6" onClick={() => refetchCosts()} style={{ fontSize: 11 }}>
              {costsLoading ? "Refreshing..." : "Refresh"}
            </ActionBtn>
          </div>
          {costsLoading && !costsData ? <CircularProgress size={20} /> : costsData?.apis ? (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr>
                    {["API", "Provider", "This Month", "Free Tier", "Used", "Remaining", "Gross Cost", "Billed", "Price", "All-Time"].map(h => (
                      <th key={h} style={{ padding: "8px 6px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {costsData.apis.map((api, i) => {
                    const calls = api.calls_this_month || api.queries_this_month || api.credits_spent || 0;
                    const freeTier = api.free_tier;
                    const remaining = api.remaining;
                    const usedPct = api.used_pct || (freeTier ? Math.round((calls / freeTier) * 100) : null);
                    const billed = api.cost_billed;
                    return (
                      <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "8px 6px", fontWeight: 600 }}>{api.name}</td>
                        <td style={{ padding: "8px 6px", color: "#64748b" }}>{api.provider}</td>
                        <td style={{ padding: "8px 6px" }}>
                          <strong>{calls.toLocaleString()}</strong>
                          {api.cache_hits > 0 && <span style={{ color: "#16a34a", fontSize: 10, marginLeft: 4 }}>({api.cache_hits} cached)</span>}
                        </td>
                        <td style={{ padding: "8px 6px" }}>{freeTier != null ? freeTier.toLocaleString() + "/mo" : "—"}</td>
                        <td style={{ padding: "8px 6px" }}>
                          {usedPct != null ? (
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <div style={{ width: 60, height: 6, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                                <div style={{ width: Math.min(100, usedPct) + "%", height: "100%", background: usedPct > 80 ? "#dc2626" : usedPct > 50 ? "#f59e0b" : "#16a34a", borderRadius: 3 }} />
                              </div>
                              <span style={{ fontSize: 10, color: "#64748b" }}>{usedPct}%</span>
                            </div>
                          ) : "—"}
                        </td>
                        <td style={{ padding: "8px 6px", color: remaining != null && remaining < 100 ? "#dc2626" : "#16a34a", fontWeight: 600 }}>
                          {remaining != null ? remaining.toLocaleString() : "—"}
                        </td>
                        <td style={{ padding: "8px 6px" }}>{api.cost_gross != null ? "$" + api.cost_gross.toFixed(2) : "—"}</td>
                        <td style={{ padding: "8px 6px", fontWeight: 700, color: billed > 0 ? "#dc2626" : "#16a34a" }}>
                          {billed != null ? "$" + billed.toFixed(2) : "—"}
                        </td>
                        <td style={{ padding: "8px 6px", color: "#64748b", fontSize: 11 }}>
                          {api.price_per_1k ? "$" + api.price_per_1k + "/1K" : api.price_per_call ? "$" + api.price_per_call + "/call" : "—"}
                        </td>
                        <td style={{ padding: "8px 6px", color: "#94a3b8" }}>{(api.all_time_total || 0).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={{ marginTop: 8, fontSize: 11, color: "#94a3b8" }}>
                Gross = total cost before free tier. Billed = actual charge after free tier deduction. Refreshed at {new Date().toLocaleTimeString()}.
              </div>
            </div>
          ) : <div style={{ color: "#94a3b8" }}>No cost data available</div>}
        </div>
      )}

      {zoneId === "" ? (
        <Alert severity="info">Select a zone or "Manual entries" to view the pipeline.</Alert>
      ) : (
        <>
          {/* Stepper */}
          <StepperCard>
            <Stepper activeStep={activeStep >= 0 ? activeStep : steps.length} alternativeLabel>
              {steps.map((s) => (
                <Step key={s.label} completed={s.done}>
                  <StepLabel>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{s.label}</span>
                    <br />
                    <span style={{ fontSize: 11, color: "#64748b" }}>{s.detail}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {activeRunId && runData?.status === "PROCESSING" && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#8b5cf6" }}>
                  <CircularProgress size={14} /> Running...
                </div>
              )}
              <LoadingButton size="small" variant="outlined" onClick={handleSource} loading={estimating || sourcing || (!!activeRunId && runData?.status === "PROCESSING")} disabled={!!activeRunId} sx={{ textTransform: "none", fontSize: 11 }}>
                Source Zone
              </LoadingButton>
              <LoadingButton size="small" variant="outlined" onClick={handleDetails} loading={detailsEstimating || detailing || (!!activeRunId && runData?.status === "PROCESSING")} disabled={!!activeRunId || !summary.total_candidates} sx={{ textTransform: "none", fontSize: 11 }}>
                Fetch Details
              </LoadingButton>
              <LoadingButton size="small" variant="outlined" onClick={handleDiscover} loading={discovering || (!!activeRunId && runData?.status === "PROCESSING")} disabled={!!activeRunId || !summary.with_details} sx={{ textTransform: "none", fontSize: 11 }}>
                Discover Handles
              </LoadingButton>
              {summary.with_score_complete > 0 && (
                <ActionBtn $bg="#8b5cf6" $color="#fff" onClick={() => setExportDialogOpen(true)}>Export CSV</ActionBtn>
              )}
            </div>
            {summary.by_band && Object.values(summary.by_band).some(v => v > 0) && (
              <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "center", fontSize: 11 }}>
                {Object.entries(summary.by_band).filter(([, v]) => v > 0).map(([band, count]) => (
                  <Badge key={band} $bg={BAND_COLORS[band]?.bg} $color={BAND_COLORS[band]?.color}>
                    {BAND_LABELS[band]}: {count}
                  </Badge>
                ))}
                {summary.needs_contact > 0 && <Badge $bg="#fef2f2" $color="#dc2626">Needs contact: {summary.needs_contact}</Badge>}
              </div>
            )}
          </StepperCard>

          {/* Toolbar */}
          <Toolbar>
            <SearchInput placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select value={handleFilter} onChange={(e) => { setHandleFilter(e.target.value); setPage(1); }} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12, background: "#fff" }}>
              <option value="">All candidates</option>
              <option value="true">Has IG handle</option>
              <option value="false">No handle</option>
            </select>
            {enrichSelected.size > 0 && (
              <ActionBtn $bg="#8b5cf6" $color="#fff" onClick={openEnrichDialog} disabled={enrichSelected.size > 5}>
                Enrich Selected ({enrichSelected.size})
              </ActionBtn>
            )}
            <Tooltip title="What do these mean?" arrow>
              <ActionBtn $bg="#f1f5f9" $color="#64748b" onClick={() => setLegendOpen(true)} style={{ minWidth: 32, padding: "4px 8px", fontSize: 14 }}>?</ActionBtn>
            </Tooltip>
          </Toolbar>

          {/* Grid */}
          {loadingCandidates ? <CircularProgress size={24} /> : (
            <GridContainer>
              <Table>
                <thead>
                  <tr>
                    <Th style={{ width: 36 }}>
                      <Tooltip title="Select all eligible on this page (max 5)" arrow>
                        <span>
                          <Checkbox size="small"
                            checked={enrichSelected.size > 0 && filtered.filter(c => canCheck(c).enabled).every(c => enrichSelected.has(c.id))}
                            indeterminate={enrichSelected.size > 0 && !filtered.filter(c => canCheck(c).enabled).every(c => enrichSelected.has(c.id))}
                            onChange={(e) => {
                              if (e.target.checked) {
                                const eligible = filtered.filter(c => canCheck(c).enabled).map(c => c.id);
                                setEnrichSelected(new Set(eligible.slice(0, 5)));
                              } else {
                                setEnrichSelected(new Set());
                              }
                            }}
                            sx={{ padding: 0 }} />
                        </span>
                      </Tooltip>
                    </Th>
                    <Th style={{ width: 30 }}></Th>
                    <Th $sortable onClick={() => handleSort("display_name")}>Name {sortBy === "display_name" ? (sortDir === "asc" ? "\u25B2" : "\u25BC") : ""}</Th>
                    <Th>Category</Th>
                    <Th $sortable onClick={() => handleSort("lead_score")}>Score {sortBy === "lead_score" ? (sortDir === "asc" ? "\u25B2" : "\u25BC") : ""}</Th>
                    <Th>Band</Th>
                    <Th>IG Handle</Th>
                    <Th>Phone</Th>
                    <Th>Links</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => {
                    const check = canCheck(c);
                    return (
                      <Tr key={c.id} onDoubleClick={() => setDetailId(c.id)} style={{ cursor: "pointer" }}>
                        <Td>
                          <Tooltip title={check.reason} arrow placement="right">
                            <span>
                              <Checkbox size="small"
                                checked={enrichSelected.has(c.id)}
                                disabled={!check.enabled}
                                onChange={(e) => {
                                  const next = new Set(enrichSelected);
                                  e.target.checked ? next.add(c.id) : next.delete(c.id);
                                  setEnrichSelected(next);
                                }}
                                sx={{ padding: 0, opacity: check.enabled ? 1 : 0.35 }} />
                            </span>
                          </Tooltip>
                        </Td>
                        <Td>
                          <Tooltip title="View details" arrow>
                            <span style={{ cursor: "pointer", fontSize: 14 }} onClick={() => setDetailId(c.id)}>{"\uD83D\uDC41"}</span>
                          </Tooltip>
                        </Td>
                        <Td style={{ fontWeight: 600, maxWidth: 180 }}>{c.display_name}</Td>
                        <Td><Badge $bg="#eff6ff" $color="#3b82f6">{c.mapped_category}</Badge></Td>
                        <Td style={{ fontWeight: 700 }}>
                          {c.score_complete ? c.lead_score : (
                            <Tooltip title="Partial score \u2014 enrich IG to complete scoring" arrow>
                              <span style={{ color: "#cbd5e1" }}>{c.lead_score || "--"}</span>
                            </Tooltip>
                          )}
                        </Td>
                        <Td>
                          {c.score_band ? (
                            <Badge $bg={BAND_COLORS[c.score_band]?.bg} $color={BAND_COLORS[c.score_band]?.color} style={{ fontWeight: 700, padding: "3px 10px", borderRadius: 12, fontSize: 10 }}>
                              {BAND_LABELS[c.score_band]}
                            </Badge>
                          ) : (
                            <Tooltip title="Partial score \u2014 enrich IG to complete scoring" arrow>
                              <span style={{ fontSize: 10, color: "#94a3b8" }}>maps-only</span>
                            </Tooltip>
                          )}
                        </Td>
                        <Td>
                          {c.ig_handle ? (
                            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                              <Tooltip title="Open Instagram profile" arrow>
                                <a href={`https://instagram.com/${c.ig_handle}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#8b5cf6", fontWeight: 600, textDecoration: "none" }}>
                                  @{c.ig_handle}
                                </a>
                              </Tooltip>
                              <Tooltip title="Edit handle" arrow>
                                <span style={{ fontSize: 10, cursor: "pointer", color: "#94a3b8" }} onClick={() => setHandleDialog({ candidateId: c.id, value: c.ig_handle, currentHandle: c.ig_handle })}>✎</span>
                              </Tooltip>
                            </span>
                          ) : (
                            <Tooltip title="Assign this business's Instagram handle" arrow>
                              <ActionBtn $bg="#f3e8ff" $color="#7c3aed" style={{ fontWeight: 700, border: "1px dashed #c4b5fd" }} onClick={() => setHandleDialog({ candidateId: c.id, value: "", currentHandle: null })}>
                                + Set IG
                              </ActionBtn>
                            </Tooltip>
                          )}
                        </Td>
                        <Td>
                          {c.phone ? <span style={{ fontSize: 11 }}>{c.phone}</span> :
                            c.needs_contact ? (
                              <Tooltip title="No phone or WhatsApp \u2014 add contact info before outreach" arrow>
                                <Badge $bg="#fef2f2" $color="#dc2626">needs contact</Badge>
                              </Tooltip>
                            ) : <span style={{ fontSize: 10, color: "#94a3b8" }}>{"\u2014"}</span>}
                        </Td>
                        <Td>
                          {c.detected_links_summary?.has_whatsapp && <Tooltip title="WhatsApp link found in bio" arrow><LinkChip $bg="#dcfce7" $color="#16a34a">WA</LinkChip></Tooltip>}
                          {c.detected_links_summary?.has_menu && <Tooltip title="Menu/ordering link found" arrow><LinkChip $bg="#eff6ff" $color="#3b82f6">Menu</LinkChip></Tooltip>}
                          {c.detected_links_summary?.has_map && <Tooltip title="Google Maps location found" arrow><LinkChip $bg="#fef3c7" $color="#d97706">Map</LinkChip></Tooltip>}
                        </Td>
                        <Td>
                          <Badge $bg={c.enrichment_status === "enriched" ? "#dcfce7" : "#f1f5f9"} $color={c.enrichment_status === "enriched" ? "#16a34a" : "#94a3b8"}>
                            {c.enrichment_status}
                          </Badge>
                        </Td>
                        <Td style={{ display: "flex", gap: 4, alignItems: "center" }}>
                          {!c.demo_id ? (
                            <Tooltip title="Open review dialog to build a Menugic demo" arrow>
                              <ActionBtn $bg="#5eabb1" $color="#fff" onClick={() => handleBuildDemo(c)}>Build Demo</ActionBtn>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Demo already created" arrow>
                              <Badge $bg="#dcfce7" $color="#16a34a">Demo Built</Badge>
                            </Tooltip>
                          )}
                          <Tooltip title="Remove — will not take Menugic" arrow>
                            <ActionBtn $bg="#fef2f2" $color="#dc2626" style={{ fontSize: 10, padding: "3px 6px" }}
                              onClick={() => { if (window.confirm(`Remove "${c.display_name}" from pipeline?`)) dismissCandidate(c.id); }}>
                              ✕
                            </ActionBtn>
                          </Tooltip>
                        </Td>
                      </Tr>
                    );
                  })}
                </tbody>
              </Table>
            </GridContainer>
          )}

          {totalPages > 1 && (
            <Pagination>
              <span>Page {page} of {totalPages} ({total} candidates)</span>
              <div style={{ display: "flex", gap: 4 }}>
                <ActionBtn onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>Prev</ActionBtn>
                <ActionBtn onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>Next</ActionBtn>
              </div>
            </Pagination>
          )}
        </>
      )}

      {/* Handle Dialog */}
      <Dialog open={!!handleDialog} onClose={() => setHandleDialog(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Set IG Handle</DialogTitle>
        <DialogContent>
          <TextField fullWidth size="small" label="Instagram handle" value={handleDialog?.value || ""} onChange={(e) => setHandleDialog((prev) => ({ ...prev, value: e.target.value }))}
            placeholder="e.g. royaldonuts.lb" sx={{ mt: 1 }} />
        </DialogContent>
        <DialogActions>
          <button onClick={() => setHandleDialog(null)} style={{ padding: "6px 16px", borderRadius: 6, border: "none", background: "#f1f5f9", cursor: "pointer" }}>Cancel</button>
          <button onClick={handleSetHandle} style={{ padding: "6px 16px", borderRadius: 6, border: "none", background: "#8b5cf6", color: "#fff", cursor: "pointer" }}>Save</button>
        </DialogActions>
      </Dialog>

      {/* Enrich Dialog with dry-run cost */}
      <Dialog open={enrichDialogOpen} onClose={() => { setEnrichDialogOpen(false); setEnrichDryRunData(null); }} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Enrich Selected Candidates</DialogTitle>
        <DialogContent>
          {enrichDryRunLoading ? (
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 16 }}>
              <CircularProgress size={18} /> Checking cache...
            </div>
          ) : enrichDryRunData ? (
            <div style={{ fontSize: 13 }}>
              <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <strong>{enrichSelected.size}</strong> handle{enrichSelected.size > 1 ? "s" : ""} selected:
                <div style={{ marginTop: 6 }}>
                  {enrichDryRunData.counts_json?.cacheMisses > 0 && (
                    <div><strong>{enrichDryRunData.counts_json.cacheMisses}</strong> need live fetch (~{enrichDryRunData.counts_json.estimatedCreditsSpent} credit{enrichDryRunData.counts_json.estimatedCreditsSpent > 1 ? "s" : ""})</div>
                  )}
                  {enrichDryRunData.counts_json?.cacheHits > 0 && (
                    <div><strong>{enrichDryRunData.counts_json.cacheHits}</strong> cached (0 credits)</div>
                  )}
                  {enrichDryRunData.counts_json?.validatorRejected > 0 && (
                    <div style={{ color: "#dc2626" }}><strong>{enrichDryRunData.counts_json.validatorRejected}</strong> rejected by validator (0 credits)</div>
                  )}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "#64748b" }}>
                {Array.from(enrichSelected).map((id) => {
                  const c = candidates.find((x) => x.id === id);
                  return c ? <div key={id}>#{id} {c.display_name} — @{c.ig_handle}</div> : null;
                })}
              </div>
            </div>
          ) : (
            <div style={{ fontSize: 13, color: "#dc2626" }}>Failed to load estimate. Try again.</div>
          )}
          {enrichSelected.size > 5 && <Alert severity="error" sx={{ mt: 1 }}>Max 5 candidates per enrichment run.</Alert>}
        </DialogContent>
        <DialogActions>
          <button onClick={() => { setEnrichDialogOpen(false); setEnrichDryRunData(null); }} style={{ padding: "6px 16px", borderRadius: 6, border: "none", background: "#f1f5f9", cursor: "pointer" }}>Cancel</button>
          <button onClick={handleEnrichConfirm} disabled={enrichSelected.size > 5 || enrichDryRunLoading || !enrichDryRunData}
            style={{ padding: "6px 16px", borderRadius: 6, border: "none", background: "#8b5cf6", color: "#fff", cursor: "pointer", opacity: (enrichSelected.size > 5 || enrichDryRunLoading) ? 0.5 : 1 }}>
            Enrich ({enrichSelected.size})
          </button>
        </DialogActions>
      </Dialog>

      {/* Review Dialog (shared) */}
      <ReviewDialog
        open={reviewOpen}
        rows={reviewRows}
        setRows={setReviewRows}
        onClose={() => setReviewOpen(false)}
        onBuild={handleReviewBuild}
        title="Review & Build Demo"
      />

      {/* Source Confirm Dialog */}
      <Dialog open={!!sourceConfirm} onClose={() => setSourceConfirm(null)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Source Zone</DialogTitle>
        <DialogContent>
          {sourceConfirm && (
            <div style={{ fontSize: 13 }}>
              <div style={{ marginBottom: 12 }}>
                <strong>{sourceConfirm.zone_name}</strong> ({sourceConfirm.area_km2} km², {sourceConfirm.seedCells} seed cells)
              </div>

              {/* Business Types Selector */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>Business types to source:</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {Object.entries(BUSINESS_TYPE_GROUPS).map(([group, types]) => {
                    const allSelected = types.every((t) => sourceBusinessTypes.includes(t));
                    const someSelected = types.some((t) => sourceBusinessTypes.includes(t));
                    return (
                      <span key={group}
                        onClick={() => {
                          if (allSelected) setSourceBusinessTypes((prev) => prev.filter((t) => !types.includes(t)));
                          else setSourceBusinessTypes((prev) => [...new Set([...prev, ...types])]);
                        }}
                        style={{
                          padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600, cursor: "pointer",
                          background: allSelected ? "#8b5cf6" : someSelected ? "#fef3c7" : "#f1f5f9",
                          color: allSelected ? "#fff" : someSelected ? "#92400e" : "#64748b",
                          border: "1px solid " + (allSelected ? "#7c3aed" : someSelected ? "#fbbf24" : "#e2e8f0"),
                        }}>
                        {group}
                      </span>
                    );
                  })}
                </div>
                <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 4 }}>{sourceBusinessTypes.length} types selected</div>
              </div>

              <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ marginBottom: 6 }}><strong>Estimated calls:</strong></div>
                <div style={{ display: "flex", gap: 16, marginBottom: 4 }}>
                  <span>Typical: <strong>~{sourceConfirm.estimates?.typical?.calls}</strong></span>
                  <span style={{ color: "#64748b" }}>Range: {sourceConfirm.estimates?.best?.calls} – {sourceConfirm.estimates?.worst?.calls}</span>
                </div>
                {sourceConfirm.priceConfigured ? (
                  <div style={{ fontSize: 12, color: "#64748b" }}>~${sourceConfirm.estimates?.typical?.costGross} gross (${sourceConfirm.estimates?.typical?.costBilled} billed after free tier)</div>
                ) : (
                  <div style={{ fontSize: 12, color: "#d97706" }}>Price not configured</div>
                )}
              </div>
              <div style={{ background: "#eff6ff", borderRadius: 8, padding: 10, fontSize: 12 }}>
                Monthly usage: <strong>{sourceConfirm.callsThisMonth}</strong> of {sourceConfirm.freeTierMonthly} free calls used
                <span style={{ color: "#64748b" }}> ({sourceConfirm.freeTierMonthly - sourceConfirm.callsThisMonth} remaining)</span>
              </div>
            </div>
          )}
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setSourceConfirm(null)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button onClick={handleSourceConfirm} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Source Now</button>
        </DialogActions>
      </Dialog>

      {/* Export Options Dialog */}
      <Dialog open={exportDialogOpen} onClose={() => setExportDialogOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Export CSV</DialogTitle>
        <DialogContent>
          <div style={{ fontSize: 13 }}>
            <div style={{ marginBottom: 12 }}>
              <strong>What to export:</strong>
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="radio" name="exportFilter" value="enriched" checked={exportFilter === "enriched"} onChange={(e) => setExportFilter(e.target.value)} />
                  Only enriched & scored ({summary.with_score_complete || 0} candidates)
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="radio" name="exportFilter" value="all" checked={exportFilter === "all"} onChange={(e) => setExportFilter(e.target.value)} />
                  All candidates (including un-enriched, {summary.total_candidates || 0} total)
                </label>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <strong>Limit (optional):</strong>
              <div style={{ marginTop: 6 }}>
                <TextField size="small" type="number" placeholder="e.g. 5 (leave empty for all)" value={exportLimit} onChange={(e) => setExportLimit(e.target.value)} sx={{ width: 200 }} inputProps={{ min: 1 }} />
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>Leave empty to export all matching. Sorted by score (highest first).</div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setExportDialogOpen(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button onClick={handleExportCsv} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#8b5cf6", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Download CSV</button>
        </DialogActions>
      </Dialog>

      {/* Details Cost Confirm Dialog */}
      <Dialog open={!!detailsConfirm} onClose={() => setDetailsConfirm(null)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Fetch Place Details</DialogTitle>
        <DialogContent>
          {detailsConfirm && (
            <div style={{ fontSize: 13 }}>
              <div style={{ background: "#f8fafc", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ marginBottom: 6 }}><strong>{detailsConfirm.candidates_needing_details}</strong> candidates need details</div>
                <div>~{detailsConfirm.candidates_needing_details} Places API calls ({detailsConfirm.runs_needed} run{detailsConfirm.runs_needed > 1 ? "s" : ""} at {detailsConfirm.max_per_run}/run)</div>
              </div>
              <div style={{ background: "#eff6ff", borderRadius: 8, padding: 10, fontSize: 12 }}>
                Monthly usage: <strong>{detailsConfirm.calls_this_month}</strong> of {detailsConfirm.free_tier_monthly} free calls used
                <div style={{ marginTop: 4 }}>
                  {detailsConfirm.cost_billed <= 0
                    ? <span style={{ color: "#16a34a", fontWeight: 600 }}>$0 billed (within free tier)</span>
                    : <span style={{ color: "#dc2626" }}>~${detailsConfirm.cost_billed} billed</span>}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setDetailsConfirm(null)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button onClick={handleDetailsConfirm} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Fetch Details</button>
        </DialogActions>
      </Dialog>

      {/* Discover Handles Cost Confirm Dialog */}
      <Dialog open={discoverConfirm} onClose={() => setDiscoverConfirm(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Discover IG Handles</DialogTitle>
        <DialogContent>
          {(() => {
            const totalCandidates = summary.total_candidates || 0;
            const withHandle = summary.with_enrichment || 0;
            const noHandle = totalCandidates - (candidates.filter(c => c.ig_handle).length > 0 ? totalCandidates - candidates.filter(c => !c.ig_handle).length : 0);
            return (
              <div style={{ fontSize: 13 }}>
                <div style={{ marginBottom: 12 }}>
                  <strong>{totalCandidates}</strong> total candidates in zone
                </div>
                <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                  <div style={{ marginBottom: 6, fontWeight: 600, color: "#16a34a" }}>Free tiers (no cost):</div>
                  <div>Tier 0: Parse website_uri field for IG URLs — <strong>0 HTTP calls</strong></div>
                  <div>Tier 1: Scrape real websites for IG links — <strong>1 GET per site, free</strong></div>
                </div>
                <div style={{ background: "#fffbeb", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                  <div style={{ marginBottom: 6, fontWeight: 600, color: "#d97706" }}>Tier 2: Web search (SerpAPI):</div>
                  <div>~1 query per candidate without website or IG link</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Free: 100 queries/month (SerpAPI free tier)</div>
                </div>
                <div style={{ background: "#eff6ff", borderRadius: 8, padding: 10, fontSize: 12 }}>
                  <strong>0 SociaVault credits</strong> — discovery only suggests handles. Enrichment requires separate confirmation.
                </div>
              </div>
            );
          })()}
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setDiscoverConfirm(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button onClick={handleDiscoverConfirm} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Discover Handles</button>
        </DialogActions>
      </Dialog>

      {/* Manual Entry Dialog */}
      <Dialog open={manualDialogOpen} onClose={() => setManualDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Add Business Manually</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
            <TextField size="small" label="Business Name *" value={manualForm.business_name}
              onChange={(e) => { setManualForm((f) => ({ ...f, business_name: e.target.value })); setConflictData(null); }} fullWidth />
            <TextField size="small" label="Phone" placeholder="e.g. 01 234 567"
              value={manualForm.phone} onChange={(e) => { setManualForm((f) => ({ ...f, phone: e.target.value })); setConflictData(null); }} fullWidth />
            <TextField size="small" label="Instagram Handle" placeholder="e.g. royaldonuts.lb (without @)"
              value={manualForm.ig_handle} onChange={(e) => { setManualForm((f) => ({ ...f, ig_handle: e.target.value })); setConflictData(null); }} fullWidth
              InputProps={{ startAdornment: <span style={{ color: "#94a3b8", marginRight: 4 }}>@</span> }} />
            <div style={{ display: "flex", gap: 8 }}>
              <FormControl size="small" sx={{ flex: 1 }}>
                <InputLabel>Category</InputLabel>
                <Select value={manualForm.primary_type} onChange={(e) => setManualForm((f) => ({ ...f, primary_type: e.target.value }))} label="Category">
                  <MenuItem value="restaurant">Restaurant</MenuItem>
                  <MenuItem value="cafe">Cafe</MenuItem>
                  <MenuItem value="bakery">Bakery</MenuItem>
                  <MenuItem value="fast_food_restaurant">Fast Food</MenuItem>
                  <MenuItem value="dessert_shop">Desserts</MenuItem>
                  <MenuItem value="juice_shop">Juice Shop</MenuItem>
                  <MenuItem value="florist">Flowers</MenuItem>
                  <MenuItem value="beauty_salon">Beauty Salon</MenuItem>
                  <MenuItem value="grocery_store">Grocery</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ flex: 1 }}>
                <InputLabel>Zone (optional)</InputLabel>
                <Select value={manualForm.zone_id} onChange={(e) => setManualForm((f) => ({ ...f, zone_id: e.target.value }))} label="Zone (optional)">
                  <MenuItem value="">Auto-assign</MenuItem>
                  {(zones || []).map((z) => <MenuItem key={z.id} value={z.id}>{z.name}</MenuItem>)}
                </Select>
              </FormControl>
            </div>

            {manualForm.ig_handle && (
              <div style={{ background: "#eff6ff", borderRadius: 8, padding: 10, fontSize: 12 }}>
                Handle <strong>@{manualForm.ig_handle.replace(/^@/, "")}</strong> will be set as accepted. After saving, select and <strong>Enrich</strong> to fetch the IG profile (1 credit).
              </div>
            )}

            {/* Conflict results */}
            {conflictData?.has_conflicts && (
              <div style={{ background: "#fef2f2", borderRadius: 8, padding: 10, border: "1px solid #fecaca" }}>
                <div style={{ fontWeight: 700, color: "#dc2626", fontSize: 12, marginBottom: 6 }}>Possible conflicts found:</div>
                {conflictData.conflicts.map((c, i) => (
                  <div key={i} style={{ marginBottom: 6 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#92400e" }}>Match by {c.type}:</div>
                    {c.matches.map((m) => (
                      <div key={m.id} style={{ fontSize: 11, color: "#475569", paddingLeft: 8 }}>
                        #{m.id} {m.display_name} {m.phone ? `| ${m.phone}` : ""} {m.ig_handle ? `| @${m.ig_handle}` : ""} (zone {m.zone_id})
                      </div>
                    ))}
                  </div>
                ))}
                <div style={{ fontSize: 11, color: "#dc2626", marginTop: 4 }}>You can still add — this is a warning, not a block.</div>
              </div>
            )}
            {conflictData && !conflictData.has_conflicts && (
              <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 10, fontSize: 12, color: "#16a34a", fontWeight: 600 }}>
                No conflicts found — safe to add.
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setManualDialogOpen(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button
            disabled={!manualForm.business_name || checkingConflicts}
            onClick={() => {
              checkConflicts({ business_name: manualForm.business_name, phone: manualForm.phone, ig_handle: manualForm.ig_handle }, {
                onSuccess: (data) => setConflictData(data),
              });
            }}
            style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f59e0b", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            {checkingConflicts ? "Checking..." : "Check Conflicts"}
          </button>
          <button
            disabled={!manualForm.business_name || addingManual}
            onClick={() => {
              addManual({ zone_id: manualForm.zone_id ? parseInt(manualForm.zone_id) : undefined, business_name: manualForm.business_name, phone: manualForm.phone, ig_handle: manualForm.ig_handle, primary_type: manualForm.primary_type }, {
                onSuccess: () => { setManualDialogOpen(false); setConflictData(null); refetchCandidates(); },
              });
            }}
            style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#16a34a", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", opacity: !manualForm.business_name ? 0.5 : 1 }}>
            {addingManual ? "Adding..." : "Add to Pipeline"}
          </button>
        </DialogActions>
      </Dialog>

      {/* Legend Dialog */}
      <Dialog open={legendOpen} onClose={() => setLegendOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Pipeline Legend</DialogTitle>
        <DialogContent>
          <div style={{ fontSize: 13, lineHeight: 1.8 }}>
            <div style={{ marginBottom: 12 }}>
              <strong>Score Bands</strong> (after IG enrichment):
              <div style={{ display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }}>
                <Badge $bg="#dc2626" $color="#fff" style={{ padding: "3px 10px", borderRadius: 12 }}>Build Demo (80–100)</Badge>
                <Badge $bg="#f59e0b" $color="#fff" style={{ padding: "3px 10px", borderRadius: 12 }}>Contact Now (60–79)</Badge>
                <Badge $bg="#10b981" $color="#fff" style={{ padding: "3px 10px", borderRadius: 12 }}>Nurture (40–59)</Badge>
                <Badge $bg="#cbd5e1" $color="#475569" style={{ padding: "3px 10px", borderRadius: 12 }}>Skip (&lt;40)</Badge>
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <strong>Link Chips:</strong>
              <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                <LinkChip $bg="#dcfce7" $color="#16a34a">WA</LinkChip> WhatsApp link in bio
                <LinkChip $bg="#eff6ff" $color="#3b82f6">Menu</LinkChip> Menu/ordering link
                <LinkChip $bg="#fef3c7" $color="#d97706">Map</LinkChip> Google Maps location
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <strong>Statuses:</strong>
              <div><span style={{ color: "#94a3b8" }}>maps-only</span> — Partial score from Google only. Set a handle and enrich IG to complete.</div>
              <div><Badge $bg="#fef2f2" $color="#dc2626">needs contact</Badge> — No phone or WhatsApp found. Add contact info before outreach.</div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <strong>Actions:</strong>
              <div><strong>+ Set IG</strong> — Assign the business's Instagram handle (required before enrichment).</div>
              <div><strong>Enrich Selected</strong> — Fetch IG profile via SociaVault (max 5/run, 1 credit each unless cached).</div>
              <div><strong>Build Demo</strong> — Create a Menugic demo for this business (opens review dialog).</div>
            </div>
            <div>
              <strong>Scoring:</strong>
              <div>Phase 2 (Google): no_website +20, phone +10, popular +10, operational +5, in_zone +5 = max 50</div>
              <div>Phase 3 (IG): active_ig +10, has_order_or_menu +15, has_whatsapp +10, dm_to_order +10, established +5 = max 50</div>
              <div><strong>Total: max 100</strong>. Band assigned only after IG enrichment (score_complete=true).</div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={() => setLegendOpen(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#5eabb1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Got it</button>
        </DialogActions>
      </Dialog>

      {/* Detail Popup */}
      <Dialog open={!!detailId} onClose={() => setDetailId(null)} maxWidth="sm" fullWidth>
        <DialogContent sx={{ padding: "20px" }}>
        {detailLoading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: 40 }}><CircularProgress /></div>
        ) : detailData ? (
          <div style={{ fontSize: 13 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
              <div>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 16 }}>{detailData.display_name}</Typography>
                <Badge $bg="#eff6ff" $color="#3b82f6">{detailData.mapped_category}</Badge>
                {detailData.score_band && (
                  <Badge $bg={BAND_COLORS[detailData.score_band]?.bg} $color={BAND_COLORS[detailData.score_band]?.color} style={{ marginLeft: 6, padding: "3px 10px", borderRadius: 12, fontWeight: 700 }}>
                    {BAND_LABELS[detailData.score_band]} ({detailData.lead_score})
                  </Badge>
                )}
              </div>
              <IconButton onClick={() => setDetailId(null)} size="small">{"\u2715"}</IconButton>
            </div>

            {/* IG Profile */}
            <div style={{ marginBottom: 16 }}>
              <strong style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase" }}>Instagram</strong>
              {detailData.ig_profile ? (
                <div style={{ background: "#f8fafc", borderRadius: 8, padding: 10, marginTop: 4 }}>
                  <div style={{ fontWeight: 600 }}>@{detailData.ig_handle} — {detailData.ig_profile.full_name}</div>
                  <div style={{ margin: "6px 0", whiteSpace: "pre-wrap", fontSize: 12 }}>{detailData.ig_profile.biography}</div>
                  <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#64748b" }}>
                    <span><strong>{detailData.ig_profile.followers_count?.toLocaleString()}</strong> followers</span>
                    <span><strong>{detailData.ig_profile.posts_count?.toLocaleString()}</strong> posts</span>
                  </div>
                </div>
              ) : detailData.ig_handle ? (
                <div style={{ color: "#94a3b8", marginTop: 4 }}>Handle set (@{detailData.ig_handle}) — not enriched yet</div>
              ) : (
                <div style={{ color: "#94a3b8", marginTop: 4 }}>Not enriched yet — set a handle and enrich to see IG data</div>
              )}
            </div>

            {/* Detected Links */}
            <div style={{ marginBottom: 16 }}>
              <strong style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase" }}>Detected Links</strong>
              {detailData.detected_links?.length > 0 ? (
                <div style={{ marginTop: 4 }}>
                  {detailData.detected_links.map((l, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: "1px solid #f1f5f9" }}>
                      <Badge $bg="#f1f5f9" $color="#475569" style={{ fontSize: 9, minWidth: 80, textAlign: "center" }}>{l.link_type}</Badge>
                      <div style={{ fontSize: 11 }}>
                        {l.link_label && <span style={{ color: "#475569", fontWeight: 600, marginRight: 4 }}>{l.link_label}:</span>}
                        <a href={l.link_url} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", wordBreak: "break-all" }}>{l.link_url}</a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: "#94a3b8", marginTop: 4 }}>No links detected</div>
              )}
            </div>

            {/* Score Breakdown */}
            <div style={{ marginBottom: 16 }}>
              <strong style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase" }}>Score Breakdown</strong>
              {detailData.score_breakdown ? (
                <div style={{ marginTop: 4 }}>
                  {Object.entries(detailData.score_breakdown).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", borderBottom: "1px solid #f8fafc", fontSize: 12 }}>
                      <span>{k.replace(/_/g, " ")}</span>
                      <strong>+{v}</strong>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontWeight: 700 }}>
                    <span>Total</span>
                    <span>{detailData.lead_score} {detailData.score_complete ? "" : "(partial)"}</span>
                  </div>
                </div>
              ) : (
                <div style={{ color: "#94a3b8", marginTop: 4 }}>No score yet</div>
              )}
            </div>

            {/* Contact */}
            <div style={{ marginBottom: 16 }}>
              <strong style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase" }}>Contact</strong>
              <div style={{ marginTop: 4, fontSize: 12 }}>
                {detailData.phone && <div>Phone: {detailData.phone}</div>}
                {detailData.business_phone && <div>E.164: {detailData.business_phone}</div>}
                {detailData.whatsapp_number && <div>WhatsApp: <a href={detailData.whatsapp_number.startsWith("http") ? detailData.whatsapp_number : `https://wa.me/${detailData.whatsapp_number.replace(/[^0-9]/g,"")}`} target="_blank" rel="noopener noreferrer">{detailData.whatsapp_number}</a></div>}
                {detailData.website_uri && <div>Website: <a href={detailData.website_uri} target="_blank" rel="noopener noreferrer">{detailData.website_uri}</a></div>}
                {detailData.needs_contact && <div style={{ color: "#dc2626", marginTop: 4 }}>No contact info available</div>}
              </div>
            </div>

            {/* Demo */}
            {detailData.demo_id && (
              <div style={{ marginBottom: 16 }}>
                <strong style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase" }}>Demo</strong>
                <div style={{ marginTop: 4, fontSize: 12 }}>
                  Demo ID: {detailData.demo_id}
                </div>
              </div>
            )}

            {/* Meta */}
            <div style={{ fontSize: 11, color: "#94a3b8", borderTop: "1px solid #e2e8f0", paddingTop: 8 }}>
              <div>Place ID: {detailData.place_id}</div>
              <div>Coords: [{detailData.lng}, {detailData.lat}]</div>
              <div>Type: {detailData.primary_type}</div>
              {detailData.details_fetched_at && <div>Details fetched: {new Date(detailData.details_fetched_at).toLocaleDateString()}</div>}
              {detailData.enriched_at && <div>Enriched: {new Date(detailData.enriched_at).toLocaleDateString()}</div>}
              {detailData.first_discovered_at && <div>Discovered: {new Date(detailData.first_discovered_at).toLocaleDateString()}</div>}
            </div>
          </div>
        ) : (
          <div style={{ color: "#94a3b8", padding: 20 }}>Select a candidate to view details</div>
        )}
        </DialogContent>
      </Dialog>
    </PipelineContainer>
  );
}
