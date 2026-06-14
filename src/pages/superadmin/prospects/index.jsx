import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

/* ─── Status config ─── */
const STATUS_LIST = ["draft", "ready", "contacted", "replied", "won"];
const STATUS_COLORS = {
  draft: { bg: "#f1f5f9", color: "#94a3b8" },
  ready: { bg: "#eff6ff", color: "#3b82f6" },
  contacted: { bg: "#fffbeb", color: "#f59e0b" },
  replied: { bg: "#f5f3ff", color: "#8b5cf6" },
  won: { bg: "#ecfdf5", color: "#10b981" },
};

const CATEGORIES = [
  "restaurant", "cafe", "pizza", "burger", "bakery",
  "flower-shop", "cosmetics", "grocery",
];

const LANGUAGES = [
  { value: "ar", label: "Arabic" },
  { value: "en", label: "English" },
  { value: "both", label: "Both" },
];

const TEMPLATES = [
  { value: "restaurant", label: "Restaurant" },
  { value: "cafe", label: "Cafe" },
  { value: "pizza", label: "Pizza Shop" },
  { value: "burger", label: "Burger Restaurant" },
  { value: "bakery", label: "Bakery" },
  { value: "flower-shop", label: "Flower Shop" },
  { value: "balloon-shop", label: "Balloon Shop" },
  { value: "cosmetics", label: "Cosmetics" },
  { value: "grocery", label: "Grocery Store" },
  { value: "gym-supplements", label: "Gym & Supplements" },
  { value: "custom", label: "Custom (blank)" },
];

const COLOR_PRESETS = [
  { name: "Clean Teal", color: "#5eabb1" },
  { name: "Warm Gold", color: "#b8943d" },
  { name: "Dark Coral", color: "#e85d5d" },
  { name: "Fresh Green", color: "#388e3c" },
  { name: "Royal Purple", color: "#6a3de8" },
  { name: "Sunset Orange", color: "#e65100" },
  { name: "Ocean Blue", color: "#1565c0" },
  { name: "Rose Pink", color: "#c2185b" },
];

/* ─── Styles ─── */
const s = {
  container: { padding: "0 8px" },
  filterBar: {
    display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center",
  },
  input: {
    padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 13, outline: "none", background: "#fff", color: "#0f172a",
    transition: "border-color 0.15s",
  },
  select: {
    padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 13, outline: "none", background: "#fff", color: "#0f172a", cursor: "pointer",
  },
  btn: {
    padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13,
    fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
  },
  primaryBtn: {
    padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13,
    fontWeight: 600, cursor: "pointer", background: "#5eabb1", color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
  },
  card: {
    background: "#fff", borderRadius: 14, padding: 20,
    border: "1px solid rgba(148,163,184,0.18)",
    boxShadow: "0 4px 20px rgba(15,23,42,0.07)",
    display: "flex", flexDirection: "column", gap: 12,
  },
  cardHeader: {
    display: "flex", alignItems: "center", gap: 12,
  },
  logo: {
    width: 44, height: 44, borderRadius: 12, objectFit: "cover",
    border: "1px solid rgba(148,163,184,0.18)",
  },
  initialsCircle: {
    width: 44, height: 44, borderRadius: 12, display: "flex",
    alignItems: "center", justifyContent: "center", fontWeight: 700,
    fontSize: 16, color: "#fff", flexShrink: 0,
  },
  businessName: { fontSize: 15, fontWeight: 700, color: "#0f172a", margin: 0 },
  category: { fontSize: 12, color: "#64748b", margin: 0, textTransform: "capitalize" },
  badge: {
    display: "inline-block", padding: "3px 10px", borderRadius: 20,
    fontSize: 11, fontWeight: 600, textTransform: "capitalize",
  },
  demoArea: {
    padding: "10px 12px", borderRadius: 10, background: "#f8fafc",
    fontSize: 12, color: "#64748b",
  },
  demoLink: {
    color: "#5eabb1", textDecoration: "none", wordBreak: "break-all", fontSize: 12,
  },
  actionsRow: {
    display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginTop: "auto",
  },
  smallBtn: {
    padding: "5px 10px", borderRadius: 8, border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 11, fontWeight: 600, cursor: "pointer", background: "#fff",
    color: "#64748b", transition: "all 0.15s",
  },
  smallBtnPrimary: {
    padding: "5px 10px", borderRadius: 8, border: "none",
    fontSize: 11, fontWeight: 600, cursor: "pointer", background: "#5eabb1",
    color: "#fff", transition: "all 0.15s",
  },
  smallBtnGreen: {
    padding: "5px 10px", borderRadius: 8, border: "none",
    fontSize: 11, fontWeight: 600, cursor: "pointer", background: "#10b981",
    color: "#fff", transition: "all 0.15s",
  },
  statusSelect: {
    padding: "5px 8px", borderRadius: 8, border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 11, background: "#fff", cursor: "pointer", outline: "none", color: "#64748b",
  },
  dialogField: { marginBottom: 14 },
  dialogLabel: {
    display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4,
  },
  dialogInput: {
    width: "100%", padding: "9px 12px", borderRadius: 8,
    border: "1px solid rgba(148,163,184,0.3)", fontSize: 13,
    outline: "none", boxSizing: "border-box", color: "#0f172a",
  },
  dialogSelect: {
    width: "100%", padding: "9px 12px", borderRadius: 8,
    border: "1px solid rgba(148,163,184,0.3)", fontSize: 13,
    outline: "none", boxSizing: "border-box", background: "#fff", color: "#0f172a",
  },
  toast: {
    position: "fixed", bottom: 24, right: 24, padding: "12px 22px",
    borderRadius: 12, fontSize: 13, fontWeight: 600, color: "#fff",
    zIndex: 9999, boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    transition: "all 0.3s", pointerEvents: "none",
  },
  loading: { padding: 60, textAlign: "center", color: "#94a3b8", fontSize: 14 },
  empty: { padding: 60, textAlign: "center", color: "#94a3b8", fontSize: 14 },
  pager: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginTop: 20, fontSize: 13, color: "#64748b",
  },
};

/* ─── Helpers ─── */
const initialsColor = (name) => {
  const colors = ["#5eabb1", "#8b5cf6", "#f59e0b", "#ef4444", "#3b82f6", "#ec4899", "#10b981"];
  let hash = 0;
  for (let i = 0; i < (name || "").length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

const getInitials = (name) => {
  if (!name) return "?";
  return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
};

/* ─── Main Component ─── */
export default function Prospects() {
  const [prospects, setProspects] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const LIMIT = 50;

  const [createOpen, setCreateOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [sendProspect, setSendProspect] = useState(null);

  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const csvInputRef = useRef(null);
  const [importResults, setImportResults] = useState(null);
  const [importing, setImporting] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewRows, setReviewRows] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [deleting, setDeleting] = useState(false);

  /* ─── Responsive grid ─── */
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w < 700 ? 1 : w < 1100 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ─── Toast ─── */
  const showToast = useCallback((msg, type = "success") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  /* ─── Fetch ─── */
  const fetchProspects = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: LIMIT, offset });
      if (search) params.set("search", search);
      if (statusFilter) params.set("status", statusFilter);
      const { data } = await axios.get(`${API}/superadmin/prospects?${params}`, { headers: headers() });
      setProspects(data.data.prospects);
      setTotal(data.data.total);
    } catch (e) {
      console.error("Failed to fetch prospects:", e);
      showToast(e.response?.data?.message || "Failed to load prospects", "error");
    }
    setLoading(false);
  }, [search, statusFilter, offset, showToast]);

  useEffect(() => { fetchProspects(); }, [fetchProspects]);

  /* ─── Status change ─── */
  const changeStatus = async (id, newStatus) => {
    try {
      await axios.put(`${API}/superadmin/prospects/${id}/status`, { status: newStatus }, { headers: headers() });
      showToast(`Status updated to ${newStatus}`);
      fetchProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to update status", "error");
    }
  };

  /* ─── Build Demo ─── */
  const buildDemo = async (id) => {
    try {
      showToast("Building demo...");
      await axios.post(`${API}/superadmin/prospects/${id}/create-demo`, {}, { headers: headers() });
      showToast("Demo created successfully");
      fetchProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to create demo", "error");
    }
  };

  /* ─── Activate ─── */
  const activate = async (id) => {
    if (!window.confirm("Activate this prospect as a live restaurant?")) return;
    try {
      await axios.post(`${API}/superadmin/prospects/${id}/activate`, {}, { headers: headers() });
      showToast("Prospect activated!");
      fetchProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to activate", "error");
    }
  };

  /* ─── Logo Upload on Card ─── */
  const logoInputRef = useRef(null);
  const [logoTargetId, setLogoTargetId] = useState(null);

  const handleLogoClick = (prospectId) => {
    setLogoTargetId(prospectId);
    logoInputRef.current?.click();
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !logoTargetId) return;
    try {
      // Upload to GCP
      const fd = new FormData();
      fd.append("image", file);
      const { data: uploadData } = await axios.post(`${API}/superadmin/upload-image`, fd, {
        headers: { ...headers(), "Content-Type": "multipart/form-data" },
      });
      const fileName = uploadData.fileName;
      if (!fileName) { showToast("Upload failed", "error"); return; }

      // Update prospect
      await axios.put(`${API}/superadmin/prospects/${logoTargetId}`, { logo_uploaded_url: fileName }, { headers: headers() });

      // If prospect has a demo, update the restaurant logo too
      const prospect = prospects.find(p => p.id === logoTargetId);
      if (prospect?.demo_id) {
        await axios.put(`${API}/restaurants/${prospect.demo_id}`, { logoURL: fileName }, { headers: headers() }).catch(() => {});
      }

      showToast("Logo updated");
      fetchProspects();
    } catch (err) {
      showToast("Logo upload failed", "error");
    }
    setLogoTargetId(null);
  };

  /* ─── Selection ─── */
  const toggleSelect = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === prospects.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(prospects.map((p) => p.id)));
    }
  };

  const handleDeleteSelected = async () => {
    if (selected.size === 0) return;
    const confirmed = window.confirm(
      `Delete ${selected.size} prospect(s) and ALL their demo data (restaurant, products, categories, branches)? This cannot be undone.`
    );
    if (!confirmed) return;

    setDeleting(true);
    try {
      const { data } = await axios.post(
        `${API}/superadmin/prospects/delete-batch`,
        { ids: Array.from(selected) },
        { headers: headers() }
      );
      showToast(`Deleted ${data.data.summary.deleted}, ${data.data.summary.errors} errors`);
      setSelected(new Set());
      fetchProspects();
    } catch (err) {
      showToast(err.response?.data?.message || "Delete failed", "error");
    }
    setDeleting(false);
  };

  /* ─── CSV Import ─── */
  const handleCsvImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    setImporting(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axios.post(`${API}/superadmin/prospects/import-csv`, formData, {
        headers: { ...headers(), "Content-Type": "multipart/form-data" },
        timeout: 300000,
      });
      // Step 1 done — show review popup for rows that need demo building
      const toBuild = (data.data.results || []).filter(r => r.status === "success" && r.build_demo && !r.has_demo);
      if (toBuild.length > 0) {
        setReviewRows(toBuild.map(r => ({
          ...r,
          template: r.suggested_template || "restaurant",
          colorPreset: "Clean Teal",
          logoFile: null,
        })));
        setReviewOpen(true);
      }
      setImportResults(data.data);
      showToast(`Imported: ${data.data.summary.success} prospects. ${toBuild.length} demos to review.`);
      fetchProspects();
    } catch (err) {
      showToast(err.response?.data?.message || "Import failed", "error");
    }
    setImporting(false);
  };

  /* ─── Copy Link ─── */
  const copyLink = (url) => {
    if (!url) { showToast("No demo URL to copy", "error"); return; }
    navigator.clipboard.writeText(url).then(
      () => showToast("Link copied to clipboard"),
      () => showToast("Failed to copy", "error"),
    );
  };

  /* ─── Pagination ─── */
  const totalPages = Math.max(1, Math.ceil(total / LIMIT));
  const currentPage = Math.floor(offset / LIMIT) + 1;

  return (
    <div style={s.container}>
      {/* Filter Bar */}
      <div style={s.filterBar}>
        <input
          type="text"
          placeholder="Search name, phone, IG..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setOffset(0); }}
          style={{ ...s.input, flex: 1, minWidth: 200 }}
        />
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setOffset(0); }}
          style={s.select}
        >
          <option value="">All Statuses</option>
          {STATUS_LIST.map((st) => (
            <option key={st} value={st}>{st.charAt(0).toUpperCase() + st.slice(1)}</option>
          ))}
        </select>
        <button onClick={() => setCreateOpen(true)} style={s.primaryBtn}>
          + Create Prospect
        </button>
        <button onClick={() => csvInputRef.current?.click()} style={{ ...s.primaryBtn, background: "#8b5cf6" }}>
          Import CSV
        </button>
        <input
          ref={csvInputRef}
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange={handleCsvImport}
        />
        {prospects.length > 0 && (
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={selected.size === prospects.length && prospects.length > 0}
              onChange={toggleSelectAll}
              style={{ cursor: "pointer" }}
            />
            Select All
          </label>
        )}
        {selected.size > 0 && (
          <button
            onClick={handleDeleteSelected}
            disabled={deleting}
            style={{ ...s.btn, background: "#dc2626", color: "#fff", opacity: deleting ? 0.6 : 1 }}
          >
            {deleting ? "Deleting..." : `Delete ${selected.size} Selected`}
          </button>
        )}
      </div>

      {/* Content */}
      {loading ? (
        <div style={s.loading}>Loading prospects...</div>
      ) : prospects.length === 0 ? (
        <div style={s.empty}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>No prospects found</div>
          <div style={{ fontSize: 13 }}>
            {search || statusFilter
              ? "Try adjusting your filters"
              : "Click \"Create Prospect\" to add your first one"}
          </div>
        </div>
      ) : (
        <>
          {/* Card Grid */}
          <div style={{ ...s.grid, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {prospects.map((p) => {
              const sc = STATUS_COLORS[p.status] || STATUS_COLORS.draft;
              return (
                <div key={p.id} style={{ ...s.card, border: selected.has(p.id) ? "2px solid #5eabb1" : s.card.border }}>
                  {/* Selection + Header */}
                  <div style={{ ...s.cardHeader, position: "relative" }}>
                    <input
                      type="checkbox"
                      checked={selected.has(p.id)}
                      onChange={() => toggleSelect(p.id)}
                      style={{ position: "absolute", top: 0, right: 0, cursor: "pointer", width: 16, height: 16 }}
                    />
                    <div
                      onClick={() => handleLogoClick(p.id)}
                      title="Click to upload logo"
                      style={{ cursor: "pointer", position: "relative" }}
                    >
                      {p.logo_uploaded_url ? (
                        <img src={`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logo_uploaded_url}`} alt="" style={s.logo} />
                      ) : (
                        <div style={{ ...s.initialsCircle, background: initialsColor(p.business_name) }}>
                          {getInitials(p.business_name)}
                        </div>
                      )}
                      <div style={{ position: "absolute", bottom: -2, right: -2, width: 16, height: 16, borderRadius: "50%", background: "#5eabb1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", border: "2px solid #fff" }}>+</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={s.businessName}>{p.business_name}</p>
                      <p style={s.category}>{p.category || "Uncategorized"}</p>
                    </div>
                    <span style={{ ...s.badge, background: sc.bg, color: sc.color }}>
                      {p.status}
                      {p.contacted_at && <span style={{ fontSize: 9, opacity: 0.7, marginLeft: 4 }}>{new Date(p.contacted_at).toLocaleDateString()}</span>}
                    </span>
                  </div>

                  {/* Phone / IG */}
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    {p.business_phone && <span>{p.business_phone}</span>}
                    {p.ig_handle && (
                      <span style={{ marginLeft: p.business_phone ? 10 : 0, color: "#8b5cf6" }}>
                        @{p.ig_handle}
                      </span>
                    )}
                  </div>

                  {/* Demo Area */}
                  <div style={s.demoArea}>
                    {p.demo_url ? (
                      <a href={p.demo_url} target="_blank" rel="noopener noreferrer" style={s.demoLink}>
                        {p.demo_url}
                      </a>
                    ) : (
                      <span>No demo yet</span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div style={s.actionsRow}>
                    <button style={s.smallBtn} onClick={() => copyLink(p.demo_url)} title="Copy Link">
                      Copy
                    </button>
                    {p.qr_url && (
                      <button
                        style={s.smallBtn}
                        onClick={() => window.open(p.qr_url, "_blank")}
                        title="Download QR"
                      >
                        QR
                      </button>
                    )}
                    {p.demo_url && (
                      <button
                        style={s.smallBtn}
                        onClick={() => window.open(p.demo_url, "_blank")}
                        title="Preview"
                      >
                        Preview
                      </button>
                    )}
                    <button
                      style={s.smallBtn}
                      onClick={() => { setSendProspect(p); setSendOpen(true); }}
                      title="Send Message"
                    >
                      Send
                    </button>
                    <select
                      value={p.status}
                      onChange={(e) => changeStatus(p.id, e.target.value)}
                      style={s.statusSelect}
                    >
                      {STATUS_LIST.map((st) => (
                        <option key={st} value={st}>{st.charAt(0).toUpperCase() + st.slice(1)}</option>
                      ))}
                    </select>
                    {!p.demo_id && (
                      <button style={s.smallBtnPrimary} onClick={() => buildDemo(p.id)}>
                        Build Demo
                      </button>
                    )}
                    {p.status !== "won" && p.demo_id && (
                      <button style={s.smallBtnGreen} onClick={() => activate(p.id)}>
                        Activate
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div style={s.pager}>
            <span>Showing {prospects.length} of {total} prospects</span>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => setOffset(Math.max(0, offset - LIMIT))}
                disabled={offset === 0}
                style={{
                  ...s.btn, background: "#f1f5f9",
                  color: offset === 0 ? "#cbd5e1" : "#334155",
                }}
              >
                Prev
              </button>
              <span style={{ padding: "9px 12px", fontSize: 13 }}>
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setOffset(offset + LIMIT)}
                disabled={currentPage >= totalPages}
                style={{
                  ...s.btn, background: "#f1f5f9",
                  color: currentPage >= totalPages ? "#cbd5e1" : "#334155",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* ─── Create Prospect Dialog ─── */}
      <CreateProspectDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreated={() => { setCreateOpen(false); fetchProspects(); }}
        showToast={showToast}
      />

      {/* ─── Send Message Dialog ─── */}
      <SendMessageDialog
        open={sendOpen}
        prospect={sendProspect}
        onClose={() => { setSendOpen(false); setSendProspect(null); }}
        showToast={showToast}
        onSent={fetchProspects}
      />

      {/* ─── Import Results Dialog ─── */}
      {importResults && (
        <Dialog open={!!importResults} onClose={() => setImportResults(null)} maxWidth="md" fullWidth>
          <DialogTitle sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
            CSV Import Results
          </DialogTitle>
          <DialogContent>
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#16a34a" }}>{importResults.summary.success}</div>
                <div style={{ fontSize: 11, color: "#166534" }}>Success</div>
              </div>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626" }}>{importResults.summary.errors}</div>
                <div style={{ fontSize: 11, color: "#991b1b" }}>Errors</div>
              </div>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#eff6ff", border: "1px solid #bfdbfe" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#2563eb" }}>{importResults.summary.demos_built}</div>
                <div style={{ fontSize: 11, color: "#1e40af" }}>Demos Built</div>
              </div>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#334155" }}>{importResults.summary.total}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>Total Rows</div>
              </div>
            </div>
            <div style={{ maxHeight: 350, overflowY: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>Row</th>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>Status</th>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>Name</th>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>Action</th>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>Demo</th>
                    <th style={{ padding: "8px 10px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {importResults.results.map((r, i) => (
                    <tr key={i} style={i % 2 ? { background: "#f8fafc" } : {}}>
                      <td style={{ padding: "6px 10px", borderBottom: "1px solid #f1f5f9" }}>{r.row}</td>
                      <td style={{ padding: "6px 10px", borderBottom: "1px solid #f1f5f9" }}>
                        <span style={{
                          display: "inline-block", padding: "2px 8px", borderRadius: 6, fontSize: 10, fontWeight: 600,
                          background: r.status === "success" ? "#dcfce7" : "#fef2f2",
                          color: r.status === "success" ? "#16a34a" : "#dc2626",
                        }}>{r.status}</span>
                      </td>
                      <td style={{ padding: "6px 10px", borderBottom: "1px solid #f1f5f9", fontWeight: 600 }}>{r.business_name || "-"}</td>
                      <td style={{ padding: "6px 10px", borderBottom: "1px solid #f1f5f9" }}>{r.action || "-"}</td>
                      <td style={{ padding: "6px 10px", borderBottom: "1px solid #f1f5f9" }}>{r.demo || "-"}</td>
                      <td style={{ padding: "6px 10px", borderBottom: "1px solid #f1f5f9", fontSize: 11, color: "#64748b" }}>{r.message || r.demo_url || ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DialogContent>
          <DialogActions sx={{ padding: "12px 24px 20px" }}>
            <button onClick={() => setImportResults(null)} style={s.primaryBtn}>Close</button>
          </DialogActions>
        </Dialog>
      )}

      {/* ─── Review & Build Dialog ─── */}
      <ReviewDialog
        open={reviewOpen}
        rows={reviewRows}
        setRows={setReviewRows}
        onClose={() => { setReviewOpen(false); setReviewRows([]); }}
        showToast={showToast}
        onDone={() => { fetchProspects(); }}
      />

      {/* Importing overlay */}
      {importing && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 10000,
        }}>
          <div style={{ background: "#fff", padding: "30px 40px", borderRadius: 16, textAlign: "center", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Importing CSV...</div>
            <div style={{ fontSize: 12, color: "#64748b" }}>This may take a moment if demos are being built.</div>
          </div>
        </div>
      )}

      {/* Hidden logo input for card upload */}
      <input ref={logoInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleLogoUpload} />

      {/* ─── Toast ─── */}
      {toast && (
        <div
          style={{
            ...s.toast,
            background: toast.type === "error" ? "#ef4444" : "#10b981",
          }}
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
}

/* ═════════════════════════════════════════════
   Create Prospect Dialog
   ═════════════════════════════════════════════ */
const EMPTY_FORM = {
  business_name: "", business_phone: "", category: "restaurant",
  country: "", city_zone: "", language: "en",
  whatsapp_number: "", ig_handle: "", theme: "", outreach_message: "",
};

function CreateProspectDialog({ open, onClose, onCreated, showToast }) {
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [logoFile, setLogoFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const reset = () => { setForm({ ...EMPTY_FORM }); setLogoFile(null); };

  const submit = async (andBuild) => {
    if (!form.business_name.trim() || !form.business_phone.trim()) {
      showToast("Business name and phone are required", "error");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => { if (v) fd.append(k, v); });
      if (logoFile) fd.append("logo", logoFile);

      const { data } = await axios.post(`${API}/superadmin/prospects`, fd, {
        headers: { ...headers(), "Content-Type": "multipart/form-data" },
      });

      if (andBuild && data.data?.id) {
        showToast("Prospect created, building demo...");
        try {
          await axios.post(`${API}/superadmin/prospects/${data.data.id}/create-demo`, {}, { headers: headers() });
          showToast("Prospect created & demo built!");
        } catch (e) {
          showToast("Prospect created but demo failed: " + (e.response?.data?.message || e.message), "error");
        }
      } else {
        showToast("Prospect saved as draft");
      }

      reset();
      onCreated();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to create prospect", "error");
    }
    setSaving(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
        Create Prospect
      </DialogTitle>
      <DialogContent sx={{ paddingTop: "8px !important" }}>
        <div style={s.dialogField}>
          <label style={s.dialogLabel}>Business Name *</label>
          <input style={s.dialogInput} value={form.business_name} onChange={set("business_name")} />
        </div>
        <div style={s.dialogField}>
          <label style={s.dialogLabel}>Business Phone *</label>
          <input style={s.dialogInput} value={form.business_phone} onChange={set("business_phone")} placeholder="+961..." />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Category</label>
            <select style={s.dialogSelect} value={form.category} onChange={set("category")}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</option>
              ))}
            </select>
          </div>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Language</label>
            <select style={s.dialogSelect} value={form.language} onChange={set("language")}>
              {LANGUAGES.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Country</label>
            <input style={s.dialogInput} value={form.country} onChange={set("country")} />
          </div>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>City / Zone</label>
            <input style={s.dialogInput} value={form.city_zone} onChange={set("city_zone")} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>WhatsApp Number</label>
            <input style={s.dialogInput} value={form.whatsapp_number} onChange={set("whatsapp_number")} />
          </div>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Instagram Handle</label>
            <input style={s.dialogInput} value={form.ig_handle} onChange={set("ig_handle")} placeholder="without @" />
          </div>
        </div>
        <div style={s.dialogField}>
          <label style={s.dialogLabel}>Outreach Message</label>
          <textarea
            style={{ ...s.dialogInput, resize: "vertical", fontFamily: "inherit", lineHeight: 1.5 }}
            value={form.outreach_message}
            onChange={set("outreach_message")}
            rows={3}
            placeholder="Personalized message. Use {demo_url} as placeholder for the demo link."
          />
        </div>
        <div style={s.dialogField}>
          <label style={s.dialogLabel}>Theme</label>
          <input style={s.dialogInput} value={form.theme} onChange={set("theme")} placeholder="e.g. theme5" />
        </div>
        <div style={s.dialogField}>
          <label style={s.dialogLabel}>Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
            style={{ fontSize: 13 }}
          />
        </div>
      </DialogContent>
      <DialogActions sx={{ padding: "12px 24px 20px" }}>
        <button
          onClick={onClose}
          style={{ ...s.btn, background: "#f1f5f9", color: "#64748b" }}
          disabled={saving}
        >
          Cancel
        </button>
        <button
          onClick={() => submit(false)}
          style={{ ...s.btn, background: "#f1f5f9", color: "#334155" }}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save as Draft"}
        </button>
        <button
          onClick={() => submit(true)}
          style={{ ...s.primaryBtn, opacity: saving ? 0.6 : 1 }}
          disabled={saving}
        >
          {saving ? "Creating..." : "Create & Build Demo"}
        </button>
      </DialogActions>
    </Dialog>
  );
}

/* ═════════════════════════════════════════════
   Send Message Dialog
   ═════════════════════════════════════════════ */
function SendMessageDialog({ open, prospect, onClose, showToast, onSent }) {
  const [templates, setTemplates] = useState([]);
  const [msgHistory, setMsgHistory] = useState({ messages: [], nextStage: "first", sentStages: [] });
  const [stage, setStage] = useState("first");
  const [language, setLanguage] = useState("en");
  const [message, setMessage] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [blocked, setBlocked] = useState(null);
  const [checkingDNC, setCheckingDNC] = useState(false);
  const [sending, setSending] = useState(false);

  const STAGES = [
    { value: "first", label: "First Contact" },
    { value: "reminder_1", label: "Reminder 1" },
    { value: "reminder_2", label: "Reminder 2 (Final)" },
  ];

  // Load templates + message history when dialog opens
  useEffect(() => {
    if (!open || !prospect) return;
    setUseCustom(false);
    setBlocked(null);

    // Fetch templates
    axios.get(`${API}/superadmin/prospects/templates`, { headers: headers() })
      .then(({ data }) => setTemplates(data.data || []))
      .catch(() => {});

    // Fetch sent history
    axios.get(`${API}/superadmin/prospects/${prospect.id}/messages`, { headers: headers() })
      .then(({ data }) => {
        setMsgHistory(data.data);
        const next = data.data.nextStage || "first";
        setStage(next);
      })
      .catch(() => {});

    // Check DNC
    const phone = prospect.business_phone || prospect.whatsapp_number;
    if (phone) {
      setCheckingDNC(true);
      axios.get(`${API}/superadmin/prospects/dnc/check/${encodeURIComponent(phone)}`, { headers: headers() })
        .then(({ data }) => setBlocked(data.blocked ? data.record : null))
        .catch(() => setBlocked(null))
        .finally(() => setCheckingDNC(false));
    }
  }, [open, prospect]);

  // Build message whenever stage/language/useCustom changes
  useEffect(() => {
    if (!prospect) return;
    if (useCustom && prospect.outreach_message) {
      let msg = prospect.outreach_message;
      msg = msg.replace(/\{business_name\}/g, prospect.business_name || "");
      msg = msg.replace(/\{demo_url\}/g, prospect.demo_url || "[demo link]");
      setMessage(msg);
      return;
    }
    // Find template for stage + language
    const buildMsg = (lang) => {
      const tmpl = templates.find(t => t.stage === stage && t.language === lang);
      if (!tmpl) return "";
      return tmpl.body
        .replace(/\{business_name\}/g, prospect.business_name || "")
        .replace(/\{demo_url\}/g, prospect.demo_url || "[demo link]");
    };

    if (language === "both") {
      setMessage(buildMsg("en") + "\n\n" + buildMsg("ar"));
    } else {
      setMessage(buildMsg(language));
    }
  }, [stage, language, templates, prospect, useCustom]);

  const handleSend = async () => {
    if (!prospect || !message.trim()) return;
    setSending(true);
    try {
      const { data } = await axios.post(
        `${API}/superadmin/prospects/${prospect.id}/contact`,
        { message, stage, language },
        { headers: headers() },
      );
      if (data.data?.whatsapp_url) {
        window.open(data.data.whatsapp_url, "_blank");
      }
      showToast(`${STAGES.find(s => s.value === stage)?.label || stage} sent & logged`);
      onSent();
      onClose();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to send", "error");
    }
    setSending(false);
  };

  const copySMS = () => {
    navigator.clipboard.writeText(message).then(
      () => showToast("Message copied for SMS"),
      () => showToast("Failed to copy", "error"),
    );
  };

  if (!prospect) return null;

  const isCapped = msgHistory.nextStage === null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
        Send Message — {prospect.business_name}
      </DialogTitle>
      <DialogContent sx={{ paddingTop: "8px !important" }}>
        {/* DNC Warning */}
        {checkingDNC && (
          <div style={{ padding: 10, marginBottom: 12, borderRadius: 8, background: "#f8fafc", fontSize: 12, color: "#94a3b8" }}>
            Checking Do Not Contact list...
          </div>
        )}
        {blocked && (
          <div style={{ padding: 12, marginBottom: 14, borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", fontSize: 13, fontWeight: 600 }}>
            This phone is on the Do Not Contact list
            {blocked.reason && <span style={{ fontWeight: 400, marginLeft: 6 }}>({blocked.reason})</span>}
          </div>
        )}

        {/* Sent History */}
        {msgHistory.messages.length > 0 && (
          <div style={{ marginBottom: 14, padding: "8px 12px", borderRadius: 8, background: "#f8fafc", fontSize: 11 }}>
            <div style={{ fontWeight: 700, color: "#475569", marginBottom: 4 }}>Sent History:</div>
            {msgHistory.messages.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 8, color: "#64748b" }}>
                <span style={{ ...({
                  first: { background: "#dcfce7", color: "#16a34a" },
                  reminder_1: { background: "#fff7ed", color: "#ea580c" },
                  reminder_2: { background: "#fef2f2", color: "#dc2626" },
                })[m.stage], padding: "1px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>{m.stage}</span>
                <span>{m.language}</span>
                <span>{new Date(m.sent_at).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        )}

        {isCapped && (
          <div style={{ padding: 12, marginBottom: 14, borderRadius: 10, background: "#fff7ed", border: "1px solid #fed7aa", color: "#ea580c", fontSize: 13, fontWeight: 600 }}>
            All 3 messages sent (first + 2 reminders). Maximum reached.
          </div>
        )}

        {/* Stage + Language */}
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#475569", marginBottom: 3 }}>Stage</label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              style={{ width: "100%", padding: "7px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            >
              {STAGES.map(s => (
                <option key={s.value} value={s.value}>{s.label} {msgHistory.sentStages.includes(s.value) ? "\u2713 sent" : ""}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#475569", marginBottom: 3 }}>Language</label>
            <div style={{ display: "flex", gap: 4 }}>
              {[{ v: "en", l: "EN" }, { v: "ar", l: "AR" }, { v: "both", l: "Both" }].map(opt => (
                <button
                  key={opt.v}
                  onClick={() => setLanguage(opt.v)}
                  style={{
                    flex: 1, padding: "7px 0", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
                    background: language === opt.v ? "#5eabb1" : "#f1f5f9",
                    color: language === opt.v ? "#fff" : "#64748b",
                  }}
                >
                  {opt.l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom outreach toggle */}
        {prospect.outreach_message && (
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b", marginBottom: 10, cursor: "pointer" }}>
            <input type="checkbox" checked={useCustom} onChange={() => setUseCustom(!useCustom)} />
            Use custom outreach message instead of template
          </label>
        )}

        {/* Phone */}
        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>
          Phone: {prospect.whatsapp_number || prospect.business_phone || "N/A"}
        </div>

        {/* Preview */}
        <div style={{ fontSize: 11, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Message Preview:</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={8}
          dir={language === "ar" ? "rtl" : "ltr"}
          style={{
            width: "100%", padding: "10px 12px", borderRadius: 8,
            border: "1px solid rgba(148,163,184,0.3)", fontSize: 13,
            outline: "none", boxSizing: "border-box", color: "#0f172a",
            resize: "vertical", fontFamily: "inherit", lineHeight: 1.6,
            background: "#fafafa",
          }}
        />
      </DialogContent>
      <DialogActions sx={{ padding: "12px 24px 20px" }}>
        <button onClick={onClose} style={{ padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", background: "#f1f5f9", color: "#64748b" }}>
          Cancel
        </button>
        <button onClick={copySMS} style={{ padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", background: "#f1f5f9", color: "#334155" }}>
          Copy SMS
        </button>
        <button
          onClick={handleSend}
          disabled={sending || blocked}
          style={{ padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", background: blocked ? "#94a3b8" : "#5eabb1", color: "#fff", opacity: sending ? 0.6 : 1 }}
        >
          {sending ? "Opening..." : "Open WhatsApp"}
        </button>
      </DialogActions>
    </Dialog>
  );
}

/* ═════════════════════════════════════════════
   Review & Build Demos Dialog
   ═════════════════════════════════════════════ */
function ReviewDialog({ open, rows, setRows, onClose, showToast, onDone }) {
  const [building, setBuilding] = useState(false);
  const [buildResults, setBuildResults] = useState(null);

  const updateRow = (idx, key, value) => {
    setRows(prev => prev.map((r, i) => i === idx ? { ...r, [key]: value } : r));
  };

  const uploadLogo = async (file) => {
    const fd = new FormData();
    fd.append("image", file);
    const { data } = await axios.post(`${API}/superadmin/upload-image`, fd, {
      headers: { ...headers(), "Content-Type": "multipart/form-data" },
    });
    return data.fileName || null;
  };

  const handleBuildAll = async () => {
    setBuilding(true);
    try {
      // Upload logos first
      const items = [];
      for (const r of rows) {
        let logoUrl = null;
        if (r.logoFile) {
          try {
            logoUrl = await uploadLogo(r.logoFile);
          } catch (e) {
            console.error("Logo upload failed for", r.business_name, e);
          }
        }
        items.push({
          prospect_id: r.prospect_id,
          template: r.template,
          colorPreset: r.colorPreset || null,
          logoUrl,
          socials: {
            instagram: r.ig_handle || "",
            facebook: r.facebook || "",
            tiktok: r.tiktok || "",
          },
        });
      }
      const { data } = await axios.post(`${API}/superadmin/prospects/build-batch`, { items }, { headers: headers(), timeout: 600000 });
      setBuildResults(data.data);
      showToast(`Built: ${data.data.summary.success} demos, ${data.data.summary.errors} errors`);
      onDone();
    } catch (err) {
      showToast(err.response?.data?.message || "Build failed", "error");
    }
    setBuilding(false);
  };

  return (
    <Dialog open={open} onClose={building ? undefined : onClose} maxWidth="lg" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
        Review & Build Demos ({rows.length} prospects)
      </DialogTitle>
      <DialogContent>
        {!buildResults ? (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr>
                  {["Business", "Category", "Template", "Colors", "Logo", "IG", "FB", "TikTok"].map(h => (
                    <th key={h} style={{ padding: "8px 6px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.prospect_id} style={i % 2 ? { background: "#f8fafc" } : {}}>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontWeight: 600, minWidth: 100 }}>{r.business_name}</td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 11 }}>{r.category}</td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", minWidth: 130 }}>
                      <select value={r.template} onChange={e => updateRow(i, "template", e.target.value)} style={{ padding: "4px 6px", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 11, width: "100%" }}>
                        {TEMPLATES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                      </select>
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", minWidth: 160 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {COLOR_PRESETS.map(c => (
                          <div
                            key={c.name}
                            onClick={() => updateRow(i, "colorPreset", c.name)}
                            title={c.name}
                            style={{
                              width: 28, height: 28, borderRadius: 6, background: c.color,
                              cursor: "pointer", border: r.colorPreset === c.name ? "3px solid #0f172a" : "2px solid transparent",
                              transition: "border 0.15s", boxSizing: "border-box",
                            }}
                          />
                        ))}
                      </div>
                      <div style={{ fontSize: 10, color: "#64748b", marginTop: 4 }}>
                        {r.colorPreset || "Default"}
                      </div>
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", minWidth: 90 }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={e => updateRow(i, "logoFile", e.target.files?.[0] || null)}
                        style={{ fontSize: 10, width: 80 }}
                      />
                      {r.logoFile && <div style={{ fontSize: 10, color: "#10b981", marginTop: 2 }}>{r.logoFile.name}</div>}
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 11 }}>{r.ig_handle || "-"}</td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 11 }}>{r.facebook || "-"}</td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 11 }}>{r.tiktok || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#dcfce7", border: "1px solid #bbf7d0" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#16a34a" }}>{buildResults.summary.success}</div>
                <div style={{ fontSize: 11, color: "#166534" }}>Built</div>
              </div>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626" }}>{buildResults.summary.errors}</div>
                <div style={{ fontSize: 11, color: "#991b1b" }}>Errors</div>
              </div>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#64748b" }}>{buildResults.summary.skipped}</div>
                <div style={{ fontSize: 11, color: "#475569" }}>Skipped</div>
              </div>
            </div>
            <div style={{ maxHeight: 300, overflowY: "auto" }}>
              {buildResults.results.map((r, i) => (
                <div key={i} style={{ padding: "8px 12px", marginBottom: 6, borderRadius: 8, background: r.status === "success" ? "#f0fdf4" : r.status === "skipped" ? "#f8fafc" : "#fef2f2", fontSize: 12 }}>
                  <strong>Prospect #{r.prospect_id}</strong>: {r.status} {r.demo_url && <span>— <a href={r.demo_url} target="_blank" rel="noopener noreferrer">{r.demo_url}</a></span>} {r.message && <span style={{ color: "#dc2626" }}>— {r.message}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
      <DialogActions sx={{ padding: "12px 24px 20px" }}>
        {!buildResults ? (
          <>
            <button onClick={onClose} disabled={building} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
            <button onClick={handleBuildAll} disabled={building} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#5eabb1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", opacity: building ? 0.6 : 1 }}>
              {building ? "Building..." : `Build ${rows.length} Demos`}
            </button>
          </>
        ) : (
          <button onClick={() => { setBuildResults(null); onClose(); }} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#5eabb1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Done</button>
        )}
      </DialogActions>
    </Dialog>
  );
}
