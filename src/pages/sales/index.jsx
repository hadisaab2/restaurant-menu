import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie, deleteCookie } from "../../utilities/manageCookies";
import { breakingPoints } from "../../styles/theme";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

/* ─── Theme tokens ─── */
const T = {
  pageBg: "#f8fafc",
  accent: "#5eabb1",
  accentGlow: "rgba(94,171,177,0.22)",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  textPrimary: "#0f172a",
  textSub: "#64748b",
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
  radius: "14px",
};

/* ─── Styled Components ─── */
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${T.pageBg};
  box-sizing: border-box;
  padding-bottom: 60px;
`;

const TopBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 4%;
  background: #fff;
  border-bottom: 1px solid ${T.cardBorder};
  box-sizing: border-box;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 800;
  color: ${T.textPrimary};
  letter-spacing: -0.4px;
`;

const LogoImg = styled.img`
  height: 32px;
  object-fit: contain;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  color: ${T.textSub};
`;

const PageHeader = styled.header`
  width: 92%;
  max-width: 1400px;
  margin-top: 24px;
  padding: 28px 28px 24px;
  border-radius: 20px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    margin-top: 12px;
    padding: 20px 16px 18px;
    border-radius: 14px;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;
  background: linear-gradient(120deg, #ffffff, ${T.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 22px;
  }
`;

const PageSubtitle = styled.p`
  margin: 8px 0 0 0;
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.5;
  position: relative;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 12px;
  }
`;

const TabsContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: ${T.cardBg};
  border-radius: 12px;
  padding: 6px;
  box-shadow: ${T.shadow};
  border: 1px solid ${T.cardBorder};
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    margin-top: 14px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const Tab = styled.div`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  color: ${(props) => (props.$active ? T.textPrimary : T.textSub)};
  background: ${(props) =>
    props.$active
      ? `linear-gradient(135deg, ${T.accentGlow}, rgba(94,171,177,0.08))`
      : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  user-select: none;

  ${(props) =>
    props.$active &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 24px;
      height: 2.5px;
      background: ${T.accent};
      border-radius: 2px;
    }
  `}

  &:hover {
    color: ${T.textPrimary};
    background: ${(props) =>
      props.$active
        ? `linear-gradient(135deg, ${T.accentGlow}, rgba(94,171,177,0.08))`
        : "rgba(15,23,42,0.04)"};
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

const ContentArea = styled.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 16px;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    padding: 0 12px;
    margin-top: 12px;
  }
`;

/* ─── Inline style objects ─── */
const s = {
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    background: "#fff",
    borderRadius: 14,
    padding: "20px 22px",
    border: `1px solid ${T.cardBorder}`,
    boxShadow: T.shadow,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 800,
    color: T.textPrimary,
    margin: 0,
    letterSpacing: "-0.5px",
  },
  statLabel: {
    fontSize: 12,
    color: T.textSub,
    marginTop: 4,
    fontWeight: 500,
  },
  filterBar: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
    flexWrap: "wrap",
    alignItems: "center",
  },
  input: {
    padding: "9px 14px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 13,
    outline: "none",
    background: "#fff",
    color: T.textPrimary,
  },
  select: {
    padding: "9px 14px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 13,
    outline: "none",
    background: "#fff",
    color: T.textPrimary,
    cursor: "pointer",
  },
  primaryBtn: {
    padding: "9px 18px",
    borderRadius: 10,
    border: "none",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    background: T.accent,
    color: "#fff",
    transition: "all 0.15s",
  },
  btn: {
    padding: "9px 18px",
    borderRadius: 10,
    border: "none",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s",
  },
  grid: {
    display: "grid",
    gap: 18,
  },
  card: {
    background: "#fff",
    borderRadius: 14,
    padding: 20,
    border: `1px solid ${T.cardBorder}`,
    boxShadow: T.shadow,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  initialsCircle: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 16,
    color: "#fff",
    flexShrink: 0,
  },
  businessName: { fontSize: 15, fontWeight: 700, color: T.textPrimary, margin: 0 },
  category: { fontSize: 12, color: T.textSub, margin: 0, textTransform: "capitalize" },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    textTransform: "capitalize",
  },
  demoArea: {
    padding: "10px 12px",
    borderRadius: 10,
    background: "#f8fafc",
    fontSize: 12,
    color: T.textSub,
  },
  demoLink: {
    color: T.accent,
    textDecoration: "none",
    wordBreak: "break-all",
    fontSize: 12,
  },
  actionsRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "auto",
  },
  smallBtn: {
    padding: "5px 10px",
    borderRadius: 8,
    border: `1px solid rgba(148,163,184,0.25)`,
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    background: "#fff",
    color: T.textSub,
    transition: "all 0.15s",
  },
  smallBtnPrimary: {
    padding: "5px 10px",
    borderRadius: 8,
    border: "none",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    background: T.accent,
    color: "#fff",
  },
  smallBtnGreen: {
    padding: "5px 10px",
    borderRadius: 8,
    border: "none",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    background: "#10b981",
    color: "#fff",
  },
  toast: {
    position: "fixed",
    bottom: 24,
    right: 24,
    padding: "12px 22px",
    borderRadius: 12,
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    zIndex: 9999,
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    transition: "all 0.3s",
    pointerEvents: "none",
  },
  loading: { padding: 60, textAlign: "center", color: "#94a3b8", fontSize: 14 },
  empty: { padding: 60, textAlign: "center", color: "#94a3b8", fontSize: 14 },
  pager: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    fontSize: 13,
    color: T.textSub,
  },
};

/* ─── Status config ─── */
const STATUS_COLORS = {
  draft: { bg: "#f1f5f9", color: "#94a3b8" },
  demo_created: { bg: "#eff6ff", color: "#3b82f6" },
  contacted: { bg: "#fffbeb", color: "#f59e0b" },
  replied: { bg: "#f5f3ff", color: "#8b5cf6" },
  won: { bg: "#ecfdf5", color: "#10b981" },
  lost: { bg: "#fef2f2", color: "#ef4444" },
};

/* ─── Message template stages ─── */
const STAGES = [
  { id: "first", label: "Level 1 -- First Contact", color: "#2D7A4E", bg: "#E8F5EC" },
  { id: "reminder_1", label: "Level 2 -- Reminder 1", color: "#C67F17", bg: "#FEF3D6" },
  { id: "reminder_2", label: "Level 3 -- Reminder 2 (Final)", color: "#C44B3F", bg: "#FDECEA" },
];

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

const timeAgo = (dateStr) => {
  if (!dateStr) return "";
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
};

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function SalesDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("My Prospects");

  // User info
  const userInfo = JSON.parse(getCookie("userInfo") || "{}");
  const userName = userInfo.name || userInfo.username || "Sales User";

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("userInfo");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const TABS = ["My Prospects", "Pipeline", "Messages", "My Stats"];

  return (
    <Container>
      {/* Top Bar */}
      <TopBar>
        <LogoArea>
          <LogoImg src="/main-logo.png" alt="Menugic" />
          Sales Dashboard
        </LogoArea>
        <UserArea>
          <span style={{ fontWeight: 600, color: T.textPrimary }}>{userName}</span>
          <button
            onClick={logout}
            style={{
              ...s.btn,
              background: "#f1f5f9",
              color: T.textSub,
              border: `1px solid ${T.cardBorder}`,
            }}
          >
            Logout
          </button>
        </UserArea>
      </TopBar>

      {/* Page Header */}
      <PageHeader>
        <PageTitle>Sales Dashboard</PageTitle>
        <PageSubtitle>
          Manage your prospects, build demos, and track your performance
        </PageSubtitle>
      </PageHeader>

      {/* Tabs */}
      <TabsContainer>
        {TABS.map((tab) => (
          <Tab
            key={tab}
            $active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      {/* Content */}
      <ContentArea>
        {activeTab === "My Prospects" && <MyProspectsTab />}
        {activeTab === "Pipeline" && <PipelineTab />}
        {activeTab === "Messages" && <MessagesTab />}
        {activeTab === "My Stats" && <MyStatsTab />}
      </ContentArea>
    </Container>
  );
}

/* ═══════════════════════════════════════════════
   TAB 1: MY PROSPECTS
   ═══════════════════════════════════════════════ */
function MyProspectsTab() {
  const [prospects, setProspects] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const [stats, setStats] = useState({ total: 0, demos_built: 0, messages_sent: 0, conversion_rate: 0 });
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const csvInputRef = useRef(null);
  const LIMIT = 50;

  // Add Prospect modal state
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    business_name: "", business_phone: "", ig_handle: "",
    whatsapp_number: "", category: "", city_zone: "", notes: "",
  });
  const [addSaving, setAddSaving] = useState(false);

  const CATEGORY_OPTIONS = [
    "Restaurant", "Cafe", "Pizza Shop", "Burger Restaurant", "Bakery",
    "Flower Shop", "Balloon Shop", "Cosmetics", "Grocery Store", "Gym & Supplements",
  ];

  const setAddField = (key) => (e) => setAddForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleAddProspect = async () => {
    if (!addForm.business_name.trim()) {
      showToast("Business Name is required", "error");
      return;
    }
    setAddSaving(true);
    try {
      await axios.post(`${API}/sales/prospects/manual`, {
        business_name: addForm.business_name,
        business_phone: addForm.business_phone,
        ig_handle: addForm.ig_handle,
        whatsapp_number: addForm.whatsapp_number,
        category: addForm.category,
        city_zone: addForm.city_zone,
        notes: addForm.notes,
      }, { headers: headers() });
      showToast("Prospect created successfully");
      setAddModalOpen(false);
      setAddForm({ business_name: "", business_phone: "", ig_handle: "", whatsapp_number: "", category: "", city_zone: "", notes: "" });
      fetchProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to create prospect", "error");
    }
    setAddSaving(false);
  };

  const [cols, setCols] = useState(2);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w < 700 ? 1 : 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const showToast = useCallback((msg, type = "success") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  // Fetch stats
  useEffect(() => {
    axios
      .get(`${API}/sales/stats`, { headers: headers() })
      .then(({ data }) => setStats(data.data || data || {}))
      .catch(() => {});
  }, []);

  // Fetch prospects
  const fetchProspects = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: LIMIT, offset });
      if (search) params.set("search", search);
      if (statusFilter) params.set("status", statusFilter);
      const { data } = await axios.get(`${API}/sales/prospects?${params}`, { headers: headers() });
      const result = data.data || data;
      setProspects(result.prospects || result || []);
      setTotal(result.total || 0);
    } catch (e) {
      console.error("Failed to fetch prospects:", e);
      setProspects([]);
      setTotal(0);
    }
    setLoading(false);
  }, [search, statusFilter, offset]);

  useEffect(() => {
    fetchProspects();
  }, [fetchProspects]);

  /* ─── Actions ─── */
  const buildDemo = async (id) => {
    try {
      showToast("Building demo...");
      await axios.post(`${API}/sales/prospects/${id}/create-demo`, {}, { headers: headers() });
      showToast("Demo created successfully");
      fetchProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to create demo", "error");
    }
  };

  const sendWhatsApp = (prospect) => {
    const phone = prospect.whatsapp_number || prospect.business_phone || "";
    const digits = phone.replace(/\D/g, "");
    const intlPhone = digits.startsWith("961") ? digits : "961" + (digits.startsWith("0") ? digits.slice(1) : digits);
    const text = prospect.demo_url
      ? `Hi ${prospect.business_name || ""}, check out your demo menu: ${prospect.demo_url}`
      : `Hi ${prospect.business_name || ""}`;
    window.open(`https://wa.me/${intlPhone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const generateScreenshot = async (id) => {
    try {
      showToast("Generating screenshot...");
      await axios.post(`${API}/sales/prospects/${id}/screenshot`, {}, { headers: headers() });
      showToast("Screenshot generated!");
      fetchProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Screenshot failed", "error");
    }
  };

  const copyLink = (url) => {
    if (!url) {
      showToast("No demo URL to copy", "error");
      return;
    }
    navigator.clipboard.writeText(url).then(
      () => showToast("Link copied to clipboard"),
      () => showToast("Failed to copy", "error")
    );
  };

  const handleCsvImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    try {
      showToast("Importing CSV...");
      const fd = new FormData();
      fd.append("file", file);
      const { data } = await axios.post(`${API}/sales/prospects/import-csv`, fd, {
        headers: { ...headers(), "Content-Type": "multipart/form-data" },
        timeout: 300000,
      });
      const summary = data.data?.summary || {};
      showToast(`Imported: ${summary.success || 0} success, ${summary.errors || 0} errors`);
      fetchProspects();
    } catch (err) {
      showToast(err.response?.data?.message || "Import failed", "error");
    }
  };

  /* ─── Pagination ─── */
  const totalPages = Math.max(1, Math.ceil(total / LIMIT));
  const currentPage = Math.floor(offset / LIMIT) + 1;

  const STATUS_LIST = ["draft", "demo_created", "contacted", "replied", "won", "lost"];

  return (
    <div style={{ padding: "0 4px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>My Prospects</h2>
        <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.5 }}>
          Track and manage your assigned prospects through the sales pipeline.
        </p>
      </div>

      {/* Stats Row */}
      <div style={s.statsRow}>
        <div style={s.statCard}>
          <p style={s.statValue}>{stats.total || 0}</p>
          <p style={s.statLabel}>Total Prospects</p>
        </div>
        <div style={s.statCard}>
          <p style={s.statValue}>{stats.demos_built || 0}</p>
          <p style={s.statLabel}>Demos Built</p>
        </div>
        <div style={s.statCard}>
          <p style={s.statValue}>{stats.messages_sent || 0}</p>
          <p style={s.statLabel}>Messages Sent</p>
        </div>
        <div style={s.statCard}>
          <p style={{ ...s.statValue, color: T.accent }}>{stats.conversion_rate || 0}%</p>
          <p style={s.statLabel}>Conversion Rate</p>
        </div>
      </div>

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
            <option key={st} value={st}>{st.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</option>
          ))}
        </select>
        <button onClick={() => setAddModalOpen(true)} style={s.primaryBtn}>
          + Add Prospect
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
      </div>

      {/* Content */}
      {loading ? (
        <div style={s.loading}>Loading prospects...</div>
      ) : prospects.length === 0 ? (
        <div style={s.empty}>
          <div style={{ fontSize: 32, marginBottom: 12, color: "#cbd5e1" }}>No prospects yet</div>
          <div style={{ fontSize: 13 }}>
            {search || statusFilter
              ? "Try adjusting your filters"
              : "Your assigned prospects will appear here"}
          </div>
        </div>
      ) : (
        <>
          {/* Prospect Cards Grid */}
          <div style={{ ...s.grid, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {prospects.map((p) => {
              const sc = STATUS_COLORS[p.status] || STATUS_COLORS.draft;
              return (
                <div key={p.id} style={s.card}>
                  {/* Header */}
                  <div style={s.cardHeader}>
                    {p.logo_uploaded_url ? (
                      <img
                        src={`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logo_uploaded_url}`}
                        alt=""
                        style={{ width: 44, height: 44, borderRadius: 12, objectFit: "cover", border: `1px solid ${T.cardBorder}` }}
                      />
                    ) : (
                      <div style={{ ...s.initialsCircle, background: initialsColor(p.business_name) }}>
                        {getInitials(p.business_name)}
                      </div>
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={s.businessName}>{p.business_name}</p>
                      <div style={{ fontSize: 12, color: T.textSub, marginTop: 2 }}>
                        {p.business_phone && <span>{p.business_phone}</span>}
                        {p.ig_handle && (
                          <span style={{ marginLeft: p.business_phone ? 10 : 0, color: "#8b5cf6" }}>
                            @{p.ig_handle}
                          </span>
                        )}
                      </div>
                    </div>
                    <span style={{ ...s.badge, background: sc.bg, color: sc.color }}>
                      {p.status?.replace("_", " ")}
                    </span>
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
                    {!p.demo_id && (
                      <button style={s.smallBtnPrimary} onClick={() => buildDemo(p.id)}>
                        Build Demo
                      </button>
                    )}
                    <button style={s.smallBtnGreen} onClick={() => sendWhatsApp(p)}>
                      WhatsApp
                    </button>
                    {p.demo_url && (
                      <button
                        style={s.smallBtn}
                        onClick={() => generateScreenshot(p.id)}
                      >
                        Screenshot
                      </button>
                    )}
                    <button style={s.smallBtn} onClick={() => copyLink(p.demo_url)}>
                      Copy Link
                    </button>
                    {p.demo_url && (
                      <button
                        style={s.smallBtn}
                        onClick={() => window.open(p.demo_url, "_blank")}
                      >
                        Preview
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
                style={{ ...s.btn, background: "#f1f5f9", color: offset === 0 ? "#cbd5e1" : "#334155" }}
              >
                Prev
              </button>
              <span style={{ padding: "9px 12px", fontSize: 13 }}>{currentPage} / {totalPages}</span>
              <button
                onClick={() => setOffset(offset + LIMIT)}
                disabled={currentPage >= totalPages}
                style={{ ...s.btn, background: "#f1f5f9", color: currentPage >= totalPages ? "#cbd5e1" : "#334155" }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* Add Prospect Modal */}
      {addModalOpen && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9998,
          }}
          onClick={() => setAddModalOpen(false)}
        >
          <div
            style={{
              background: "#fff", borderRadius: 14, padding: 24,
              width: "100%", maxWidth: 480, maxHeight: "90vh", overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)", position: "relative",
              boxSizing: "border-box",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setAddModalOpen(false)}
              style={{
                position: "absolute", top: 14, right: 14,
                background: "none", border: "none", fontSize: 20,
                cursor: "pointer", color: "#94a3b8", lineHeight: 1,
                padding: 4,
              }}
            >
              &#10005;
            </button>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, margin: "0 0 20px 0" }}>
              Add Prospect
            </h3>

            {/* Business Name */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Business Name *
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={addForm.business_name}
                onChange={setAddField("business_name")}
                placeholder="e.g. Beirut Grill"
              />
            </div>

            {/* Business Phone */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Business Phone
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={addForm.business_phone}
                onChange={setAddField("business_phone")}
                placeholder="+961 XX XXX XXX"
              />
            </div>

            {/* IG Handle */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                IG Handle
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={addForm.ig_handle}
                onChange={setAddField("ig_handle")}
                placeholder="@handle"
              />
            </div>

            {/* WhatsApp Number */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                WhatsApp Number
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={addForm.whatsapp_number}
                onChange={setAddField("whatsapp_number")}
                placeholder="+961 XX XXX XXX"
              />
            </div>

            {/* Category */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Category
              </label>
              <select
                style={{ ...s.select, width: "100%", boxSizing: "border-box" }}
                value={addForm.category}
                onChange={setAddField("category")}
              >
                <option value="">Select category...</option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* City / Zone */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                City / Zone
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={addForm.city_zone}
                onChange={setAddField("city_zone")}
                placeholder="e.g. Beirut, Jounieh"
              />
            </div>

            {/* Notes */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Notes
              </label>
              <textarea
                style={{
                  ...s.input, width: "100%", boxSizing: "border-box",
                  minHeight: 80, resize: "vertical", fontFamily: "inherit",
                }}
                value={addForm.notes}
                onChange={setAddField("notes")}
                placeholder="Any additional notes..."
              />
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button
                onClick={() => setAddModalOpen(false)}
                disabled={addSaving}
                style={{ ...s.btn, background: "#f1f5f9", color: "#64748b" }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddProspect}
                disabled={addSaving}
                style={{ ...s.primaryBtn, opacity: addSaving ? 0.6 : 1 }}
              >
                {addSaving ? "Saving..." : "Save Prospect"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ ...s.toast, background: toast.type === "error" ? "#ef4444" : "#10b981" }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TAB 2: PIPELINE
   ═══════════════════════════════════════════════ */
const BAND_COLORS = {
  build_demo: { bg: "#dc2626", color: "#fff" },
  contact_now: { bg: "#f59e0b", color: "#fff" },
  nurture: { bg: "#10b981", color: "#fff" },
  skip: { bg: "#cbd5e1", color: "#475569" },
};
const BAND_LABELS = { build_demo: "Build Demo", contact_now: "Contact Now", nurture: "Nurture", skip: "Skip" };

const PIPE_CATEGORY_OPTIONS = [
  "Restaurant", "Cafe", "Pizza Shop", "Burger Restaurant", "Bakery",
  "Flower Shop", "Balloon Shop", "Cosmetics", "Grocery Store", "Gym & Supplements",
];

const pipeThStyle = {
  padding: "10px 14px",
  textAlign: "left",
  borderBottom: "2px solid #e2e8f0",
  fontSize: 10,
  fontWeight: 700,
  color: "#475569",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  whiteSpace: "nowrap",
  cursor: "default",
  userSelect: "none",
};

const pipeTdStyle = {
  padding: "8px 14px",
  borderBottom: "1px solid #f1f5f9",
  color: "#0f172a",
  fontSize: 12,
  verticalAlign: "middle",
};

const pipeBadge = (bg, color, label) => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 9999,
      fontSize: 10,
      fontWeight: 600,
      background: bg,
      color: color,
      textTransform: "capitalize",
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
);

const pipeLinkChip = (href, label, bg, color) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "1px 6px",
      borderRadius: 4,
      fontSize: 10,
      fontWeight: 600,
      background: bg,
      color: color,
      textDecoration: "none",
      marginRight: 4,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </a>
);

const pipeActionBtn = (onClick, label, bg, color) => (
  <button
    onClick={onClick}
    style={{
      padding: "4px 10px",
      borderRadius: 6,
      border: "none",
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer",
      background: bg,
      color: color,
      marginRight: 4,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </button>
);

function PipelineTab() {
  const [zones, setZones] = useState([]);
  const [zonesLoading, setZonesLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  // Pipeline state
  const [pipeZone, setPipeZone] = useState("");
  const [pipeCandidates, setPipeCandidates] = useState([]);
  const [pipeTotal, setPipeTotal] = useState(0);
  const [pipeSummary, setPipeSummary] = useState({});
  const [pipePage, setPipePage] = useState(1);
  const [pipeSortBy, setPipeSortBy] = useState("lead_score");
  const [pipeSortDir, setPipeSortDir] = useState("desc");
  const [pipeSearch, setPipeSearch] = useState("");
  const [pipeDebSearch, setPipeDebSearch] = useState("");
  const [pipeHandleFilter, setPipeHandleFilter] = useState("");
  const [pipeLoading, setPipeLoading] = useState(false);
  const [pipeManualOpen, setPipeManualOpen] = useState(false);
  const [pipeManualForm, setPipeManualForm] = useState({ business_name: "", business_phone: "", ig_handle: "", category: "", city_zone: "", notes: "" });
  const [pipeDetailOpen, setPipeDetailOpen] = useState(null);

  const PIPE_PER_PAGE = 25;

  const showToast = useCallback((msg, type = "success") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  // Fetch zones
  useEffect(() => {
    axios
      .get(`${API}/sales/zones`, { headers: headers() })
      .then(({ data }) => setZones(data.data || data || []))
      .catch(() => {})
      .finally(() => setZonesLoading(false));
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPipeDebSearch(pipeSearch);
      setPipePage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [pipeSearch]);

  // Fetch candidates when zone/page/sort/filter changes
  const fetchPipeline = useCallback(async () => {
    if (!pipeZone) {
      setPipeCandidates([]);
      setPipeTotal(0);
      setPipeSummary({});
      return;
    }
    setPipeLoading(true);
    try {
      const params = new URLSearchParams({
        page: pipePage,
        perPage: PIPE_PER_PAGE,
        sortBy: pipeSortBy,
        sortDir: pipeSortDir,
      });
      if (pipeDebSearch) params.set("search", pipeDebSearch);
      if (pipeHandleFilter) params.set("hasHandle", pipeHandleFilter);
      const { data } = await axios.get(`${API}/sales/zones/${pipeZone}/candidates?${params}`, { headers: headers() });
      const result = data.data || data;
      setPipeCandidates(result.candidates || result.rows || result || []);
      setPipeTotal(result.total || result.count || 0);
      setPipeSummary(result.summary || {});
    } catch (e) {
      console.error("Pipeline fetch error:", e);
      setPipeCandidates([]);
      setPipeTotal(0);
      showToast("Failed to load pipeline data", "error");
    }
    setPipeLoading(false);
  }, [pipeZone, pipePage, pipeSortBy, pipeSortDir, pipeDebSearch, pipeHandleFilter, showToast]);

  useEffect(() => {
    fetchPipeline();
  }, [fetchPipeline]);

  // Sort toggle
  const toggleSort = (col) => {
    if (pipeSortBy === col) {
      setPipeSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setPipeSortBy(col);
      setPipeSortDir("desc");
    }
    setPipePage(1);
  };

  const sortIcon = (col) => {
    if (pipeSortBy !== col) return " \u2195";
    return pipeSortDir === "asc" ? " \u2191" : " \u2193";
  };

  // Export CSV
  const exportCsv = async () => {
    try {
      showToast("Exporting CSV...");
      const resp = await axios.get(`${API}/sales/zones/${pipeZone}/export-csv`, {
        headers: headers(),
        responseType: "blob",
      });
      const url = URL.createObjectURL(resp.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = `pipeline-zone-${pipeZone}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("CSV exported successfully");
    } catch (e) {
      showToast("Failed to export CSV", "error");
    }
  };

  // Build Demo for candidate
  const buildDemoForCandidate = async (candidate) => {
    try {
      showToast("Building demo...");
      await axios.post(
        `${API}/sales/prospects`,
        {
          business_name: candidate.business_name || candidate.username,
          ig_handle: candidate.ig_handle || candidate.username,
          business_phone: candidate.phone || "",
          category: candidate.category || "restaurant",
          source: "pipeline",
        },
        { headers: headers() }
      );
      showToast("Prospect created -- go to My Prospects to build demo");
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to create prospect", "error");
    }
  };

  // Manual add submit
  const handleManualAdd = async () => {
    if (!pipeManualForm.business_name.trim()) {
      showToast("Business Name is required", "error");
      return;
    }
    try {
      showToast("Adding prospect...");
      await axios.post(`${API}/sales/prospects/manual`, {
        business_name: pipeManualForm.business_name,
        business_phone: pipeManualForm.business_phone,
        ig_handle: pipeManualForm.ig_handle,
        category: pipeManualForm.category,
        city_zone: pipeManualForm.city_zone,
        notes: pipeManualForm.notes,
      }, { headers: headers() });
      showToast("Prospect added successfully");
      setPipeManualOpen(false);
      setPipeManualForm({ business_name: "", business_phone: "", ig_handle: "", category: "", city_zone: "", notes: "" });
      fetchPipeline();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to add prospect", "error");
    }
  };

  const setManualField = (key) => (e) => setPipeManualForm((prev) => ({ ...prev, [key]: e.target.value }));

  // Pagination
  const totalPages = Math.max(1, Math.ceil(pipeTotal / PIPE_PER_PAGE));

  // Band distribution from summary or compute from candidates
  const bandCounts = pipeSummary.bands || {};

  return (
    <div style={{ padding: "0 4px" }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Pipeline</h2>
        <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.5 }}>
          Browse your assigned zones and pipeline candidates. Build demos, export data, and manage your outreach.
        </p>
      </div>

      {/* Summary Stats */}
      {pipeZone && !pipeLoading && (
        <div style={{ ...s.statsRow, gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", marginBottom: 16 }}>
          <div style={s.statCard}>
            <p style={{ ...s.statValue, fontSize: 22 }}>{pipeTotal}</p>
            <p style={s.statLabel}>Total Candidates</p>
          </div>
          <div style={s.statCard}>
            <p style={{ ...s.statValue, fontSize: 22 }}>{pipeSummary.with_details || 0}</p>
            <p style={s.statLabel}>With Details</p>
          </div>
          <div style={s.statCard}>
            <p style={{ ...s.statValue, fontSize: 22 }}>{pipeSummary.enriched || 0}</p>
            <p style={s.statLabel}>Enriched</p>
          </div>
          <div style={s.statCard}>
            <p style={{ ...s.statValue, fontSize: 22 }}>{pipeSummary.scored || 0}</p>
            <p style={s.statLabel}>Scored</p>
          </div>
        </div>
      )}

      {/* Band Legend */}
      {pipeZone && !pipeLoading && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16, alignItems: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: T.textSub, marginRight: 4 }}>Bands:</span>
          {Object.entries(BAND_LABELS).map(([key, label]) => {
            const bc = BAND_COLORS[key];
            const count = bandCounts[key] || 0;
            return (
              <span
                key={key}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "3px 10px",
                  borderRadius: 9999,
                  fontSize: 11,
                  fontWeight: 600,
                  background: bc.bg,
                  color: bc.color,
                }}
              >
                {label} ({count})
              </span>
            );
          })}
        </div>
      )}

      {/* Filter Bar */}
      <div style={{ ...s.filterBar, marginBottom: 16 }}>
        <select
          value={pipeZone}
          onChange={(e) => { setPipeZone(e.target.value); setPipePage(1); }}
          style={{ ...s.select, minWidth: 220 }}
          disabled={zonesLoading}
        >
          <option value="">{zonesLoading ? "Loading zones..." : "Select a zone..."}</option>
          {zones.map((z) => (
            <option key={z.id} value={z.id}>
              {z.name || z.city || `Zone ${z.id}`}
            </option>
          ))}
        </select>

        {pipeZone && (
          <>
            <input
              type="text"
              placeholder="Search candidates..."
              value={pipeSearch}
              onChange={(e) => setPipeSearch(e.target.value)}
              style={{ ...s.input, flex: 1, minWidth: 180 }}
            />
            <select
              value={pipeHandleFilter}
              onChange={(e) => { setPipeHandleFilter(e.target.value); setPipePage(1); }}
              style={s.select}
            >
              <option value="">All candidates</option>
              <option value="true">Has IG handle</option>
              <option value="false">No handle</option>
            </select>
            <button onClick={() => setPipeManualOpen(true)} style={s.primaryBtn}>
              + Add Manual
            </button>
            <button onClick={exportCsv} style={{ ...s.primaryBtn, background: "#8b5cf6" }}>
              Export CSV
            </button>
          </>
        )}
      </div>

      {/* Content */}
      {!pipeZone ? (
        <div style={s.empty}>
          <div style={{ fontSize: 32, marginBottom: 12, color: "#cbd5e1" }}>Select a zone</div>
          <div style={{ fontSize: 13 }}>Choose a zone above to browse pipeline candidates</div>
        </div>
      ) : pipeLoading ? (
        <div style={s.loading}>Loading pipeline candidates...</div>
      ) : pipeCandidates.length === 0 ? (
        <div style={s.empty}>
          <div style={{ fontSize: 32, marginBottom: 12, color: "#cbd5e1" }}>No candidates</div>
          <div style={{ fontSize: 13 }}>
            {pipeDebSearch || pipeHandleFilter ? "Try adjusting your search or filters" : "No pipeline candidates found in this zone"}
          </div>
        </div>
      ) : (
        <>
          {/* Pipeline Table */}
          <div style={{ background: "#fff", borderRadius: 14, border: `1px solid ${T.cardBorder}`, boxShadow: T.shadow, overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 900 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th style={{ ...pipeThStyle, width: 40 }}></th>
                  <th
                    style={{ ...pipeThStyle, cursor: "pointer" }}
                    onClick={() => toggleSort("business_name")}
                  >
                    Name{sortIcon("business_name")}
                  </th>
                  <th style={pipeThStyle}>Category</th>
                  <th
                    style={{ ...pipeThStyle, cursor: "pointer", textAlign: "center" }}
                    onClick={() => toggleSort("lead_score")}
                  >
                    Score{sortIcon("lead_score")}
                  </th>
                  <th style={{ ...pipeThStyle, textAlign: "center" }}>Band</th>
                  <th style={pipeThStyle}>IG Handle</th>
                  <th style={pipeThStyle}>Phone</th>
                  <th style={pipeThStyle}>Links</th>
                  <th style={{ ...pipeThStyle, textAlign: "center" }}>Status</th>
                  <th style={{ ...pipeThStyle, textAlign: "center" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pipeCandidates.map((c, i) => {
                  const band = c.band || "skip";
                  const bc = BAND_COLORS[band] || BAND_COLORS.skip;
                  const name = c.business_name || c.username || "N/A";
                  const phone = c.phone || c.business_phone || "";
                  const phoneDigits = phone.replace(/\D/g, "");
                  const intlPhone = phoneDigits.startsWith("961") ? phoneDigits : "961" + (phoneDigits.startsWith("0") ? phoneDigits.slice(1) : phoneDigits);
                  const igHandle = c.ig_handle || c.username || "";
                  const statusColor = STATUS_COLORS[c.status] || STATUS_COLORS.draft;

                  return (
                    <tr
                      key={c.id || i}
                      style={{
                        background: i % 2 ? "#f8fafc" : "#fff",
                        transition: "background 0.15s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#f1f5f9"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = i % 2 ? "#f8fafc" : "#fff"; }}
                      onDoubleClick={() => setPipeDetailOpen(c)}
                    >
                      {/* Profile Pic */}
                      <td style={pipeTdStyle}>
                        {c.profile_pic_url ? (
                          <img
                            src={c.profile_pic_url}
                            alt=""
                            style={{ width: 30, height: 30, borderRadius: 8, objectFit: "cover", display: "block" }}
                          />
                        ) : (
                          <div
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: 8,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: 11,
                              color: "#fff",
                              background: initialsColor(name),
                            }}
                          >
                            {getInitials(name)}
                          </div>
                        )}
                      </td>

                      {/* Name */}
                      <td style={pipeTdStyle}>
                        <span style={{ fontWeight: 600, fontSize: 12 }}>{name}</span>
                      </td>

                      {/* Category */}
                      <td style={pipeTdStyle}>
                        {c.category ? pipeBadge("#eff6ff", "#3b82f6", c.category) : <span style={{ color: "#cbd5e1" }}>-</span>}
                      </td>

                      {/* Score */}
                      <td style={{ ...pipeTdStyle, textAlign: "center" }}>
                        <span style={{ fontWeight: 700, fontSize: 13, color: c.lead_score >= 70 ? "#10b981" : c.lead_score >= 40 ? "#f59e0b" : "#94a3b8" }}>
                          {c.lead_score != null ? c.lead_score : "-"}
                        </span>
                      </td>

                      {/* Band */}
                      <td style={{ ...pipeTdStyle, textAlign: "center" }}>
                        {pipeBadge(bc.bg, bc.color, BAND_LABELS[band] || band)}
                      </td>

                      {/* IG Handle */}
                      <td style={pipeTdStyle}>
                        {igHandle ? (
                          <a
                            href={`https://instagram.com/${igHandle.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#8b5cf6", fontWeight: 600, textDecoration: "none", fontSize: 12 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            @{igHandle.replace("@", "")}
                          </a>
                        ) : (
                          <span style={{ color: "#cbd5e1" }}>-</span>
                        )}
                      </td>

                      {/* Phone */}
                      <td style={pipeTdStyle}>
                        <span style={{ fontSize: 11, color: phone ? T.textPrimary : "#cbd5e1" }}>
                          {phone || "-"}
                        </span>
                      </td>

                      {/* Links */}
                      <td style={pipeTdStyle}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                          {phone && pipeLinkChip(`https://wa.me/${intlPhone}`, "WA", "#dcfce7", "#16a34a")}
                          {c.demo_url && pipeLinkChip(c.demo_url, "Menu", "#eff6ff", "#3b82f6")}
                          {c.google_maps_url && pipeLinkChip(c.google_maps_url, "Map", "#fef3c7", "#d97706")}
                        </div>
                      </td>

                      {/* Status */}
                      <td style={{ ...pipeTdStyle, textAlign: "center" }}>
                        {c.status ? pipeBadge(statusColor.bg, statusColor.color, c.status.replace(/_/g, " ")) : <span style={{ color: "#cbd5e1" }}>-</span>}
                      </td>

                      {/* Actions */}
                      <td style={{ ...pipeTdStyle, textAlign: "center" }}>
                        <div style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "nowrap" }}>
                          {pipeActionBtn(() => { setPipeDetailOpen(c); }, "\u{1F441}", "#f1f5f9", "#475569")}
                          {pipeActionBtn(() => buildDemoForCandidate(c), "Build Demo", T.accent, "#fff")}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={s.pager}>
            <span>Showing {pipeCandidates.length} of {pipeTotal} candidates (page {pipePage} of {totalPages})</span>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => setPipePage((p) => Math.max(1, p - 1))}
                disabled={pipePage <= 1}
                style={{ ...s.btn, background: "#f1f5f9", color: pipePage <= 1 ? "#cbd5e1" : "#334155" }}
              >
                Prev
              </button>
              <span style={{ padding: "9px 12px", fontSize: 13 }}>{pipePage} / {totalPages}</span>
              <button
                onClick={() => setPipePage((p) => Math.min(totalPages, p + 1))}
                disabled={pipePage >= totalPages}
                style={{ ...s.btn, background: "#f1f5f9", color: pipePage >= totalPages ? "#cbd5e1" : "#334155" }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* Candidate Detail Modal */}
      {pipeDetailOpen && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9998,
          }}
          onClick={() => setPipeDetailOpen(null)}
        >
          <div
            style={{
              background: "#fff", borderRadius: 14, padding: 24,
              width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)", position: "relative",
              boxSizing: "border-box",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPipeDetailOpen(null)}
              style={{
                position: "absolute", top: 14, right: 14,
                background: "none", border: "none", fontSize: 20,
                cursor: "pointer", color: "#94a3b8", lineHeight: 1, padding: 4,
              }}
            >
              &#10005;
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              {pipeDetailOpen.profile_pic_url ? (
                <img src={pipeDetailOpen.profile_pic_url} alt="" style={{ width: 56, height: 56, borderRadius: 14, objectFit: "cover" }} />
              ) : (
                <div style={{ width: 56, height: 56, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20, color: "#fff", background: initialsColor(pipeDetailOpen.business_name || pipeDetailOpen.username) }}>
                  {getInitials(pipeDetailOpen.business_name || pipeDetailOpen.username)}
                </div>
              )}
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, margin: "0 0 4px 0" }}>
                  {pipeDetailOpen.business_name || pipeDetailOpen.username || "N/A"}
                </h3>
                {pipeDetailOpen.category && (
                  <span style={{ fontSize: 12, color: T.textSub, textTransform: "capitalize" }}>{pipeDetailOpen.category}</span>
                )}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              {[
                { label: "Score", value: pipeDetailOpen.lead_score != null ? pipeDetailOpen.lead_score : "-" },
                { label: "Band", value: BAND_LABELS[pipeDetailOpen.band] || pipeDetailOpen.band || "-" },
                { label: "Phone", value: pipeDetailOpen.phone || pipeDetailOpen.business_phone || "-" },
                { label: "IG Handle", value: pipeDetailOpen.ig_handle || pipeDetailOpen.username || "-" },
                { label: "Status", value: (pipeDetailOpen.status || "-").replace(/_/g, " ") },
                { label: "City/Zone", value: pipeDetailOpen.city_zone || pipeDetailOpen.zone_name || "-" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "10px 12px", borderRadius: 8, background: "#f8fafc" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T.textSub, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary, textTransform: "capitalize" }}>{item.value}</div>
                </div>
              ))}
            </div>

            {pipeDetailOpen.bio && (
              <div style={{ padding: "10px 12px", borderRadius: 8, background: "#f8fafc", marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: T.textSub, textTransform: "uppercase", marginBottom: 4 }}>Bio</div>
                <div style={{ fontSize: 12, color: T.textPrimary, lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{pipeDetailOpen.bio}</div>
              </div>
            )}

            {/* Links row */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(pipeDetailOpen.ig_handle || pipeDetailOpen.username) && (
                <a
                  href={`https://instagram.com/${(pipeDetailOpen.ig_handle || pipeDetailOpen.username || "").replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...s.smallBtn, color: "#8b5cf6", borderColor: "#8b5cf6", textDecoration: "none" }}
                >
                  Instagram
                </a>
              )}
              {pipeDetailOpen.google_maps_url && (
                <a href={pipeDetailOpen.google_maps_url} target="_blank" rel="noopener noreferrer" style={{ ...s.smallBtn, color: "#d97706", borderColor: "#d97706", textDecoration: "none" }}>
                  Google Maps
                </a>
              )}
              {pipeDetailOpen.demo_url && (
                <a href={pipeDetailOpen.demo_url} target="_blank" rel="noopener noreferrer" style={{ ...s.smallBtn, color: T.accent, borderColor: T.accent, textDecoration: "none" }}>
                  Demo Menu
                </a>
              )}
              <button
                onClick={() => { buildDemoForCandidate(pipeDetailOpen); setPipeDetailOpen(null); }}
                style={s.smallBtnPrimary}
              >
                Build Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manual Add Modal */}
      {pipeManualOpen && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9998,
          }}
          onClick={() => setPipeManualOpen(false)}
        >
          <div
            style={{
              background: "#fff", borderRadius: 14, padding: 24,
              width: "100%", maxWidth: 480, maxHeight: "90vh", overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)", position: "relative",
              boxSizing: "border-box",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPipeManualOpen(false)}
              style={{
                position: "absolute", top: 14, right: 14,
                background: "none", border: "none", fontSize: 20,
                cursor: "pointer", color: "#94a3b8", lineHeight: 1, padding: 4,
              }}
            >
              &#10005;
            </button>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, margin: "0 0 20px 0" }}>
              Add Manual Prospect
            </h3>

            {/* Business Name */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Business Name *
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={pipeManualForm.business_name}
                onChange={setManualField("business_name")}
                placeholder="e.g. Beirut Grill"
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Phone
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={pipeManualForm.business_phone}
                onChange={setManualField("business_phone")}
                placeholder="+961 XX XXX XXX"
              />
            </div>

            {/* IG Handle */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                IG Handle
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={pipeManualForm.ig_handle}
                onChange={setManualField("ig_handle")}
                placeholder="@handle"
              />
            </div>

            {/* Category */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Category
              </label>
              <select
                style={{ ...s.select, width: "100%", boxSizing: "border-box" }}
                value={pipeManualForm.category}
                onChange={setManualField("category")}
              >
                <option value="">Select category...</option>
                {PIPE_CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* City / Zone */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                City / Zone
              </label>
              <input
                style={{ ...s.input, width: "100%", boxSizing: "border-box" }}
                value={pipeManualForm.city_zone}
                onChange={setManualField("city_zone")}
                placeholder="e.g. Beirut, Jounieh"
              />
            </div>

            {/* Notes */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 4 }}>
                Notes
              </label>
              <textarea
                style={{
                  ...s.input, width: "100%", boxSizing: "border-box",
                  minHeight: 80, resize: "vertical", fontFamily: "inherit",
                }}
                value={pipeManualForm.notes}
                onChange={setManualField("notes")}
                placeholder="Any additional notes..."
              />
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button
                onClick={() => setPipeManualOpen(false)}
                style={{ ...s.btn, background: "#f1f5f9", color: "#64748b" }}
              >
                Cancel
              </button>
              <button onClick={handleManualAdd} style={s.primaryBtn}>
                Save Prospect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ ...s.toast, background: toast.type === "error" ? "#ef4444" : "#10b981" }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TAB 3: MESSAGES (view-only)
   ═══════════════════════════════════════════════ */
function MessagesTab() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/sales/templates`, { headers: headers() })
      .then(({ data }) => setTemplates(data.data || []))
      .catch((err) => console.error("Failed to load templates:", err))
      .finally(() => setLoading(false));
  }, []);

  const getTemplatesForStage = (stageId) => templates.filter((t) => t.stage === stageId);

  const highlight = (text) => {
    return (text || "")
      .replace(/\{business_name\}/g, '<span style="color:#5eabb1;font-weight:600">{business_name}</span>')
      .replace(/\{demo_url\}/g, '<span style="color:#5eabb1;font-weight:600">{demo_url}</span>');
  };

  if (loading) return <div style={s.loading}>Loading templates...</div>;

  return (
    <div style={{ padding: "0 4px" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Message Templates</h2>
        <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.5 }}>
          View the message templates available for prospect outreach. Organized by contact level.
        </p>
      </div>

      {/* 3 Columns -- one per stage */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {STAGES.map((stage) => {
          const stageTemplates = getTemplatesForStage(stage.id);
          const enTemplates = stageTemplates.filter((t) => t.language === "en");
          const arTemplates = stageTemplates.filter((t) => t.language === "ar");

          return (
            <div
              key={stage.id}
              style={{
                background: "#fff",
                borderRadius: 12,
                border: `1px solid ${T.cardBorder}`,
                boxShadow: T.shadow,
                overflow: "hidden",
              }}
            >
              {/* Stage Header */}
              <div
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid #f0edea",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: stage.color }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{stage.label}</span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: T.textSub,
                    background: "#f5f3f0",
                    padding: "2px 8px",
                    borderRadius: 12,
                  }}
                >
                  {stageTemplates.length} template{stageTemplates.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div style={{ padding: 16 }}>
                {/* English templates */}
                {enTemplates.length > 0 && (
                  <div style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: T.textSub,
                        marginBottom: 8,
                      }}
                    >
                      English
                    </div>
                    {enTemplates.map((tmpl) => (
                      <MessageTemplateCard key={tmpl.id} tmpl={tmpl} highlight={highlight} />
                    ))}
                  </div>
                )}

                {/* Arabic templates */}
                {arTemplates.length > 0 && (
                  <div style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: T.textSub,
                        marginBottom: 8,
                      }}
                    >
                      Arabic
                    </div>
                    {arTemplates.map((tmpl) => (
                      <MessageTemplateCard key={tmpl.id} tmpl={tmpl} highlight={highlight} isAr />
                    ))}
                  </div>
                )}

                {stageTemplates.length === 0 && (
                  <div style={{ textAlign: "center", padding: "20px 0", color: "#bbb", fontSize: 13 }}>
                    No templates yet
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder Legend */}
      <div
        style={{
          marginTop: 24,
          padding: 16,
          background: "#fff",
          borderRadius: 12,
          border: `1px solid ${T.cardBorder}`,
          boxShadow: T.shadow,
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, marginBottom: 8 }}>
          Available Placeholders
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            { tag: "{business_name}", label: "Business Name" },
            { tag: "{demo_url}", label: "Demo URL" },
          ].map((p) => (
            <div
              key={p.tag}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                background: "#f5f3f0",
                borderRadius: 6,
                fontSize: 12,
              }}
            >
              <code style={{ fontWeight: 700, color: T.accent }}>{p.tag}</code>
              <span style={{ color: T.textSub }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Message Template Card (view-only) ─── */
function MessageTemplateCard({ tmpl, highlight, isAr }) {
  const [expanded, setExpanded] = useState(false);
  const body = tmpl.body || "";
  const truncated = body.length > 120 ? body.substring(0, 120) + "..." : body;

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 8,
        border: "1px solid #f0edea",
        marginBottom: 8,
        background: "#fafaf8",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* Language badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            padding: "2px 6px",
            borderRadius: 4,
            background: isAr ? "#f0e8f0" : "#e8f0f0",
            color: isAr ? "#7a5a8a" : "#2d6b6b",
          }}
        >
          {isAr ? "AR" : "EN"}
        </span>
        {tmpl.is_default && (
          <span style={{ fontSize: 10, fontWeight: 600, color: "#C8B896" }}>Default</span>
        )}
      </div>

      {/* Body */}
      <div
        style={{ fontSize: 12, lineHeight: 1.6, color: "#555", whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: highlight(expanded ? body : truncated) }}
      />

      {body.length > 120 && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            fontSize: 11,
            color: T.accent,
            fontWeight: 600,
            cursor: "pointer",
            marginTop: 4,
            padding: 0,
          }}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TAB 4: MY STATS
   ═══════════════════════════════════════════════ */
function MyStatsTab() {
  const [stats, setStats] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingActivity, setLoadingActivity] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/sales/stats`, { headers: headers() })
      .then(({ data }) => setStats(data.data || data || {}))
      .catch(() => setStats({}))
      .finally(() => setLoadingStats(false));

    axios
      .get(`${API}/sales/activity`, { headers: headers() })
      .then(({ data }) => setActivity(data.data || data || []))
      .catch(() => setActivity([]))
      .finally(() => setLoadingActivity(false));
  }, []);

  const ACTIVITY_ICONS = {
    prospect_created: { icon: "+", bg: "#eff6ff", color: "#3b82f6" },
    demo_built: { icon: "D", bg: "#ecfdf5", color: "#10b981" },
    message_sent: { icon: "M", bg: "#fffbeb", color: "#f59e0b" },
    status_changed: { icon: "S", bg: "#f5f3ff", color: "#8b5cf6" },
    screenshot: { icon: "C", bg: "#fef2f2", color: "#ef4444" },
    default: { icon: "A", bg: "#f1f5f9", color: "#94a3b8" },
  };

  return (
    <div style={{ padding: "0 4px" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>My Performance</h2>
        <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.5 }}>
          Track your activity and performance metrics.
        </p>
      </div>

      {/* Stats Cards */}
      {loadingStats ? (
        <div style={s.loading}>Loading stats...</div>
      ) : (
        <div style={{ ...s.statsRow, gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
          <div style={s.statCard}>
            <p style={s.statValue}>{stats?.total || 0}</p>
            <p style={s.statLabel}>Total Prospects</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>{stats?.demos_built || 0}</p>
            <p style={s.statLabel}>Demos Built</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>{stats?.messages_sent || 0}</p>
            <p style={s.statLabel}>Messages Sent</p>
          </div>
          <div style={s.statCard}>
            <p style={{ ...s.statValue, color: "#10b981" }}>{stats?.won || 0}</p>
            <p style={s.statLabel}>Won</p>
          </div>
          <div style={s.statCard}>
            <p style={{ ...s.statValue, color: T.accent }}>{stats?.conversion_rate || 0}%</p>
            <p style={s.statLabel}>Conversion Rate</p>
          </div>
        </div>
      )}

      {/* Activity Log */}
      <div style={{ marginTop: 8 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Recent Activity</h3>

        {loadingActivity ? (
          <div style={s.loading}>Loading activity...</div>
        ) : activity.length === 0 ? (
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "40px 20px",
              textAlign: "center",
              color: T.textSub,
              fontSize: 13,
              border: `1px solid ${T.cardBorder}`,
              boxShadow: T.shadow,
            }}
          >
            No activity recorded yet. Start by creating prospects or building demos.
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              border: `1px solid ${T.cardBorder}`,
              boxShadow: T.shadow,
              overflow: "hidden",
            }}
          >
            {activity.map((item, i) => {
              const iconCfg = ACTIVITY_ICONS[item.type] || ACTIVITY_ICONS.default;
              return (
                <div
                  key={item.id || i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 20px",
                    borderBottom: i < activity.length - 1 ? "1px solid #f1f5f9" : "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: iconCfg.bg,
                      color: iconCfg.color,
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {iconCfg.icon}
                  </div>

                  {/* Description */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>
                      {item.description || item.message || "Activity"}
                    </div>
                    {item.business_name && (
                      <div style={{ fontSize: 11, color: T.textSub, marginTop: 2 }}>
                        {item.business_name}
                      </div>
                    )}
                  </div>

                  {/* Time */}
                  <div style={{ fontSize: 11, color: T.textSub, whiteSpace: "nowrap", flexShrink: 0 }}>
                    {timeAgo(item.created_at || item.timestamp)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
