import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie, deleteCookie } from "../../utilities/manageCookies";
import { breakingPoints } from "../../styles/theme";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import Prospects from "../superadmin/prospects";
import Messages from "../superadmin/messages";
import Pipeline from "../superadmin/pipeline";
import { SALES_SCOPE } from "../../apis/pipeline/scope";

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

/* ─── Helpers ─── */
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
  // Hand-off from Pipeline's "send to prospects" arrow.
  const [prospectPrefill, setProspectPrefill] = useState(null);

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
        {activeTab === "My Prospects" && (
          <Prospects
            basePath="/sales/prospects"
            zonesPath="/sales/zones"
            prefill={prospectPrefill}
            onPrefillConsumed={() => setProspectPrefill(null)}
          />
        )}
        {activeTab === "Pipeline" && (
          <Pipeline
            scope={SALES_SCOPE}
            canDiscover={false}
            onSendToProspects={(payload) => {
              setProspectPrefill(payload);
              setActiveTab("My Prospects");
            }}
          />
        )}
        {/* Templates are global — the same rows superadmin edits. Sales cannot delete. */}
        {activeTab === "Messages" && <Messages basePath="/sales/prospects" canDelete={false} />}
        {activeTab === "My Stats" && <MyStatsTab />}
      </ContentArea>
    </Container>
  );
}

/* ═══════════════════════════════════════════════
   TAB 1: MY PROSPECTS
   ═══════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════
   TAB 4: MY STATS
   (Prospects, Pipeline and Messages all render shared superadmin components.)
   ═══════════════════════════════════════════════ */
function MyStatsTab() {
  const [stats, setStats] = useState(null);
  const [activity, setActivity] = useState([]);
  const [trend, setTrend] = useState([]);
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

    axios
      .get(`${API}/sales/stats/trend?days=30`, { headers: headers() })
      .then(({ data }) => setTrend(data.data || []))
      .catch(() => setTrend([]));
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

      {/* Activity Trend Chart */}
      {trend.length > 0 && (
        <div style={{ background: "white", borderRadius: 12, padding: 16, marginTop: 16, marginBottom: 16, border: `1px solid ${T.border}` }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 12 }}>Activity Trend (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tickFormatter={(d) => d?.slice(5)} tick={{ fontSize: 11 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
              <Tooltip labelFormatter={(d) => `Date: ${d}`} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="demo_built" name="Demos Built" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="message_sent" name="Messages Sent" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="prospect_created" name="Prospects Created" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
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
              const iconCfg = ACTIVITY_ICONS[item.action || item.type] || ACTIVITY_ICONS.default;
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
                      {item.description || item.message || (item.action || "").replace(/_/g, " ") || "Activity"}
                    </div>
                    {(item.business_name || item.details?.business_name) && (
                      <div style={{ fontSize: 11, color: T.textSub, marginTop: 2 }}>
                        {item.business_name || item.details?.business_name}
                      </div>
                    )}
                  </div>

                  {/* Time */}
                  <div style={{ fontSize: 11, color: T.textSub, whiteSpace: "nowrap", flexShrink: 0 }}>
                    {timeAgo(item.createdAt || item.created_at || item.timestamp)}
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
