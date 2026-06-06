import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { generateMarketingReportPDF } from "./MarketingReportPDF";

const API = process.env.REACT_APP_BASE_URL;
const PIXEL_ID = process.env.REACT_APP_MENUGIC_PIXEL_ID;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

const COLORS = ["#5eabb1", "#8b5cf6", "#f59e0b", "#ef4444", "#10b981", "#3b82f6", "#ec4899"];

const datePresets = [
  { label: "Today", days: 0 },
  { label: "7d", days: 7 },
  { label: "30d", days: 30 },
  { label: "90d", days: 90 },
  { label: "1y", days: 365 },
];

const fmtDate = (d) => d.toISOString().split("T")[0];
const fmtNum = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : Number(n).toFixed(n % 1 === 0 ? 0 : 2));
const fmtPct = (n) => `${Number(n).toFixed(1)}%`;

export default function SuperAdminAnalytics() {
  const [preset, setPreset] = useState(0); // Today default
  const [startDate, setStartDate] = useState(fmtDate(new Date()));
  const [endDate, setEndDate] = useState(fmtDate(new Date()));
  const [overview, setOverview] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [detail, setDetail] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("overview"); // overview | detail | customers | actions | livefeed | heatmap
  const [actionBreakdown, setActionBreakdown] = useState(null);
  const [liveFeed, setLiveFeed] = useState(null);
  const [heatmap, setHeatmap] = useState(null);

  const fetchOverview = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${API}/analytics/superadmin/overview?start_date=${startDate}&end_date=${endDate}`,
        { headers: headers() }
      );
      setOverview(data.data);
    } catch (e) {
      console.error("Overview fetch error:", e);
      setError(e.response?.data?.message || e.message || "Failed to load analytics");
    }
    setLoading(false);
  }, [startDate, endDate]);

  const fetchDetail = useCallback(async (restaurantId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API}/analytics/superadmin/restaurant/${restaurantId}?start_date=${startDate}&end_date=${endDate}`,
        { headers: headers() }
      );
      setDetail(data.data);
      setTab("detail");
    } catch (e) {
      console.error("Detail fetch error:", e);
    }
    setLoading(false);
  }, [startDate, endDate]);

  const fetchCustomers = useCallback(async (restaurantId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API}/analytics/superadmin/customers/${restaurantId}?start_date=${startDate}&end_date=${endDate}`,
        { headers: headers() }
      );
      setCustomers(data.data);
      setTab("customers");
    } catch (e) {
      console.error("Customers fetch error:", e);
    }
    setLoading(false);
  }, [startDate, endDate]);

  const fetchActionBreakdown = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API}/analytics/superadmin/action-breakdown?start_date=${startDate}&end_date=${endDate}`,
        { headers: headers() }
      );
      setActionBreakdown(data.data);
      setTab("actions");
    } catch (e) {
      console.error("Action breakdown error:", e);
      setError(e.response?.data?.message || e.message);
    }
    setLoading(false);
  }, [startDate, endDate]);

  const fetchLiveFeed = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API}/analytics/superadmin/live-feed?limit=100`,
        { headers: headers() }
      );
      setLiveFeed(data.data);
      setTab("livefeed");
    } catch (e) {
      console.error("Live feed error:", e);
      setError(e.response?.data?.message || e.message);
    }
    setLoading(false);
  }, []);

  const fetchHeatmap = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API}/analytics/superadmin/heatmap?start_date=${startDate}&end_date=${endDate}`,
        { headers: headers() }
      );
      setHeatmap(data.data);
      setTab("heatmap");
    } catch (e) {
      console.error("Heatmap error:", e);
      setError(e.response?.data?.message || e.message);
    }
    setLoading(false);
  }, [startDate, endDate]);

  useEffect(() => { fetchOverview(); }, [fetchOverview]);

  const handlePreset = (idx) => {
    setPreset(idx);
    const d = datePresets[idx].days;
    setStartDate(fmtDate(new Date(Date.now() - d * 86400000)));
    setEndDate(fmtDate(new Date()));
  };

  const handleExport = async (restaurantId) => {
    try {
      const url = restaurantId
        ? `${API}/analytics/superadmin/export/${restaurantId}?start_date=${startDate}&end_date=${endDate}`
        : `${API}/analytics/superadmin/export-all?start_date=${startDate}&end_date=${endDate}`;
      const response = await axios.get(url, {
        headers: headers(),
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = restaurantId
        ? `analytics_${restaurantId}_${startDate}_${endDate}.xlsx`
        : `menugic_all_${startDate}_${endDate}.xlsx`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (e) {
      console.error("Export error:", e);
      alert("Export failed: " + (e.response?.data?.message || e.message));
    }
  };

  const handleSelectRestaurant = (r) => {
    setSelectedRestaurant(r);
    fetchDetail(r.restaurant_id);
  };

  const s = styles;

  return (
    <div style={s.container}>
      {/* Date Controls */}
      <div style={s.controlsBar}>
        <div style={s.presets}>
          {datePresets.map((p, i) => (
            <button
              key={p.label}
              onClick={() => handlePreset(i)}
              style={i === preset ? { ...s.presetBtn, ...s.presetActive } : s.presetBtn}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div style={s.dateInputs}>
          <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setPreset(-1); }} style={s.dateInput} />
          <span style={{ color: "#94a3b8" }}>to</span>
          <input type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value); setPreset(-1); }} style={s.dateInput} />
        </div>
      </div>

      {/* Tabs */}
      <div style={s.tabBar}>
        <button onClick={() => { setTab("overview"); setSelectedRestaurant(null); }} style={tab === "overview" ? { ...s.tabBtn, ...s.tabActive } : s.tabBtn}>
          Overview
        </button>
        <button onClick={fetchActionBreakdown} style={tab === "actions" ? { ...s.tabBtn, ...s.tabActive } : s.tabBtn}>
          Action Breakdown
        </button>
        <button onClick={fetchLiveFeed} style={tab === "livefeed" ? { ...s.tabBtn, ...s.tabActive } : s.tabBtn}>
          Live Feed
        </button>
        <button onClick={fetchHeatmap} style={tab === "heatmap" ? { ...s.tabBtn, ...s.tabActive } : s.tabBtn}>
          Heatmap
        </button>
        {selectedRestaurant && (
          <>
            <button onClick={() => setTab("detail")} style={tab === "detail" ? { ...s.tabBtn, ...s.tabActive } : s.tabBtn}>
              {selectedRestaurant.name}
            </button>
            <button onClick={() => fetchCustomers(selectedRestaurant.restaurant_id)} style={tab === "customers" ? { ...s.tabBtn, ...s.tabActive } : s.tabBtn}>
              Customers
            </button>
          </>
        )}
      </div>

      {loading && <div style={s.loading}>Loading...</div>}
      {error && (
        <div style={{ padding: 20, background: "#fef2f2", borderRadius: 12, border: "1px solid #fecaca", color: "#dc2626", fontSize: 14 }}>
          Error: {error}
        </div>
      )}

      {/* Overview Tab */}
      {tab === "overview" && overview && !loading && (
        <OverviewTab
          overview={overview}
          onSelectRestaurant={handleSelectRestaurant}
          onExport={() => handleExport(null)}
          onExportRestaurant={(rid) => handleExport(rid)}
        />
      )}

      {/* Detail Tab */}
      {tab === "detail" && detail && selectedRestaurant && !loading && (
        <DetailTab
          detail={detail}
          restaurant={selectedRestaurant}
          dateRange={`${startDate} to ${endDate}`}
          onExport={() => handleExport(selectedRestaurant.restaurant_id)}
        />
      )}

      {/* Customers Tab */}
      {tab === "customers" && customers && selectedRestaurant && !loading && (
        <CustomersTab
          customers={customers}
          restaurant={selectedRestaurant}
          onExport={() => handleExport(selectedRestaurant.restaurant_id)}
        />
      )}

      {/* Action Breakdown Tab */}
      {tab === "actions" && actionBreakdown && !loading && (
        <ActionBreakdownTab
          data={actionBreakdown}
          onExport={() => handleExport(null)}
          onSelectRestaurant={handleSelectRestaurant}
        />
      )}

      {/* Live Feed Tab */}
      {tab === "livefeed" && liveFeed && !loading && (
        <LiveFeedTab data={liveFeed} onRefresh={fetchLiveFeed} />
      )}

      {/* Heatmap Tab */}
      {tab === "heatmap" && heatmap && !loading && (
        <HeatmapTab data={heatmap} />
      )}
    </div>
  );
}

// ── Overview Tab ──
function OverviewTab({ overview, onSelectRestaurant, onExport, onExportRestaurant }) {
  const { global, rankings } = overview;
  return (
    <>
      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        <KpiCard label="Total Visits" value={fmtNum(global.visits)} />
        <KpiCard label="Unique Visitors" value={fmtNum(global.uniqueVisitors)} />
        <KpiCard label="Orders" value={fmtNum(global.orders)} />
        <KpiCard label="Revenue" value={`$${fmtNum(global.revenue)}`} />
        <KpiCard label="Avg Order Value" value={`$${fmtNum(global.avgOrderValue)}`} />
        <KpiCard label="Conversion Rate" value={fmtPct(global.conversionRate)} />
      </div>

      {/* Meta Pixel Section */}
      <MetaPixelSection global={global} />

      {/* Export Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <button onClick={onExport} style={styles.exportBtn}>Export All to Excel</button>
      </div>

      {/* Rankings Table */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Restaurant Rankings</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Restaurant</th>
                <th style={styles.th}>Visits</th>
                <th style={styles.th}>Unique</th>
                <th style={styles.th}>Orders</th>
                <th style={styles.th}>Revenue</th>
                <th style={styles.th}>Avg Order</th>
                <th style={styles.th}>Conv %</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((r, i) => (
                <tr key={r.restaurant_id} style={i % 2 === 0 ? {} : { background: "#f8fafc" }}>
                  <td style={{ ...styles.td, fontWeight: 600, cursor: "pointer", color: "#5eabb1" }}
                    onClick={() => onSelectRestaurant(r)}>
                    {r.name}
                  </td>
                  <td style={styles.td}>{r.visits}</td>
                  <td style={styles.td}>{r.unique_visitors}</td>
                  <td style={styles.td}>{r.orders}</td>
                  <td style={styles.td}>${fmtNum(r.revenue)}</td>
                  <td style={styles.td}>${fmtNum(r.avg_order_value)}</td>
                  <td style={styles.td}>{fmtPct(r.conversion_rate)}</td>
                  <td style={styles.td}>
                    <button onClick={() => onExportRestaurant(r.restaurant_id)} style={styles.smallBtn}>Excel</button>
                  </td>
                </tr>
              ))}
              {rankings.length === 0 && (
                <tr><td colSpan={8} style={{ ...styles.td, textAlign: "center", color: "#94a3b8" }}>No data for this period</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// ── Detail Tab ──
function DetailTab({ detail, restaurant, dateRange, onExport }) {
  const { kpis, funnel, sources, menu, devices, peakHours } = detail;

  const handleGenerateReport = () => {
    generateMarketingReportPDF({
      restaurantName: restaurant.name,
      dateRange,
      kpis,
      funnel,
      sources,
      topProducts: menu?.topProducts?.byViews || [],
      devices,
    });
  };

  return (
    <>
      {/* KPI Cards */}
      <div style={styles.kpiGrid}>
        <KpiCard label="Visits" value={fmtNum(kpis.visits.value)} />
        <KpiCard label="Unique Visitors" value={fmtNum(kpis.uniqueVisitors.value)} />
        <KpiCard label="Orders" value={fmtNum(kpis.orders.value)} />
        <KpiCard label="Revenue" value={`$${fmtNum(kpis.revenue.value)}`} />
        <KpiCard label="Conversion" value={fmtPct(kpis.conversionRate.value)} />
        <KpiCard label="Cart Abandon" value={fmtPct(kpis.cartAbandonmentRate.value)} />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 16 }}>
        <button onClick={handleGenerateReport} style={{ ...styles.exportBtn, background: "#1877f2" }}>
          Generate Data Report (PDF)
        </button>
        <button onClick={onExport} style={styles.exportBtn}>Export to Excel</button>
      </div>

      {/* Meta Pixel Report for this restaurant */}
      <MetaPixelSection
        detail={detail}
        restaurantName={restaurant.name}
        restaurantPixelId={restaurant.meta_pixel_id}
      />

      {/* Funnel + Devices row */}
      <div style={styles.row}>
        <div style={{ ...styles.card, flex: 2 }}>
          <h3 style={styles.cardTitle}>Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={funnel.funnel}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="step" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#5eabb1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ ...styles.card, flex: 1 }}>
          <h3 style={styles.cardTitle}>Devices</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={devices.map((d) => ({ name: d.device_type || "unknown", value: parseInt(d.count) }))}
                cx="50%" cy="50%" outerRadius={80}
                dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {devices.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Peak Hours */}
      {peakHours.length > 0 && (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Peak Hours</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={peakHours}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" tickFormatter={(h) => `${h}:00`} tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip labelFormatter={(h) => `${h}:00 - ${h + 1}:00`} />
              <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Sources + Top Products */}
      <div style={styles.row}>
        <div style={{ ...styles.card, flex: 1 }}>
          <h3 style={styles.cardTitle}>Traffic Sources</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Source</th>
                <th style={styles.th}>Visits</th>
                <th style={styles.th}>Orders</th>
                <th style={styles.th}>Conv %</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s, i) => (
                <tr key={s.source} style={i % 2 ? { background: "#f8fafc" } : {}}>
                  <td style={styles.td}>{s.source}</td>
                  <td style={styles.td}>{s.visits}</td>
                  <td style={styles.td}>{s.orders}</td>
                  <td style={styles.td}>{fmtPct(s.conversionRate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ ...styles.card, flex: 1 }}>
          <h3 style={styles.cardTitle}>Top Products (by Views)</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Product</th>
                <th style={styles.th}>Views</th>
                <th style={styles.th}>Orders</th>
                <th style={styles.th}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {(menu.topProducts?.byViews || []).slice(0, 8).map((p, i) => (
                <tr key={p.product_id} style={i % 2 ? { background: "#f8fafc" } : {}}>
                  <td style={styles.td}>{p.product_name}</td>
                  <td style={styles.td}>{p.views}</td>
                  <td style={styles.td}>{p.orders}</td>
                  <td style={styles.td}>${fmtNum(p.revenue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Events */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Recent Events</h3>
        <div style={{ overflowX: "auto", maxHeight: 350, overflowY: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Time</th>
                <th style={styles.th}>Visitor</th>
                <th style={styles.th}>Event</th>
                <th style={styles.th}>Product ID</th>
                <th style={styles.th}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {(detail.recentEvents || []).map((e, i) => (
                <tr key={e.id} style={i % 2 ? { background: "#f8fafc" } : {}}>
                  <td style={styles.td}>{new Date(e.event_date).toLocaleString()}</td>
                  <td style={{ ...styles.td, fontSize: 11 }}>{(e.visitor_id || "").slice(0, 16)}</td>
                  <td style={styles.td}>
                    <span style={{ ...styles.badge, background: eventColor(e.event_type) }}>{e.event_type}</span>
                  </td>
                  <td style={styles.td}>{e.product_id || "-"}</td>
                  <td style={styles.td}>{e.revenue ? `$${e.revenue}` : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// ── Customers Tab ──
function CustomersTab({ customers, restaurant, onExport }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0f172a" }}>
          Customer Intelligence - {restaurant.name}
        </h3>
        <button onClick={onExport} style={styles.exportBtn}>Export to Excel</button>
      </div>

      <div style={styles.card}>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Visitor ID</th>
                <th style={styles.th}>Sessions</th>
                <th style={styles.th}>Orders</th>
                <th style={styles.th}>Total Spent</th>
                <th style={styles.th}>First Visit</th>
                <th style={styles.th}>Last Visit</th>
                <th style={styles.th}>Device</th>
                <th style={styles.th}>Source</th>
              </tr>
            </thead>
            <tbody>
              {(customers.customers || []).map((c, i) => (
                <tr key={c.visitor_id} style={i % 2 ? { background: "#f8fafc" } : {}}>
                  <td style={{ ...styles.td, fontSize: 11 }}>{(c.visitor_id || "").slice(0, 20)}</td>
                  <td style={styles.td}>{c.sessions}</td>
                  <td style={styles.td}>{c.orders}</td>
                  <td style={styles.td}>${fmtNum(c.total_spent)}</td>
                  <td style={styles.td}>{c.first_visit ? new Date(c.first_visit).toLocaleDateString() : "-"}</td>
                  <td style={styles.td}>{c.last_visit ? new Date(c.last_visit).toLocaleDateString() : "-"}</td>
                  <td style={styles.td}>{c.device_type || "-"}</td>
                  <td style={styles.td}>{c.source || "-"}</td>
                </tr>
              ))}
              {(customers.customers || []).length === 0 && (
                <tr><td colSpan={8} style={{ ...styles.td, textAlign: "center", color: "#94a3b8" }}>No visitor data</td></tr>
              )}
            </tbody>
          </table>
        </div>
        {customers.pagination && (
          <div style={{ padding: "12px 16px", fontSize: 13, color: "#64748b" }}>
            Showing {customers.customers.length} of {customers.pagination.totalCount} visitors
          </div>
        )}
      </div>
    </>
  );
}

// ── Meta Pixel Section ──
// Can show global overview data OR per-restaurant detail data
function MetaPixelSection({ global, detail, restaurantName, restaurantPixelId }) {
  const isActive = !!PIXEL_ID;
  const hasRestaurantPixel = !!restaurantPixelId;
  const isPerRestaurant = !!detail;

  // Pull real event counts from funnel data when available (per-restaurant detail)
  let visits = 0, itemViews = 0, addToCartCount = 0, checkoutStarts = 0, orders = 0, revenue = 0, conversionRate = 0, cartAbandonmentRate = 0;

  if (isPerRestaurant && detail.kpis) {
    visits = detail.kpis.visits?.value || 0;
    orders = detail.kpis.orders?.value || 0;
    revenue = detail.kpis.revenue?.value || 0;
    conversionRate = detail.kpis.conversionRate?.value || 0;
    cartAbandonmentRate = detail.kpis.cartAbandonmentRate?.value || 0;

    // Get real counts from funnel
    if (detail.funnel?.funnel) {
      const f = detail.funnel.funnel;
      const findStep = (name) => f.find((s) => s.step === name)?.count || 0;
      itemViews = findStep("Item Views");
      addToCartCount = findStep("Add to Cart");
      checkoutStarts = findStep("Checkout Started");
    }
  } else if (global) {
    visits = global.visits || 0;
    orders = global.orders || 0;
    revenue = global.revenue || 0;
    conversionRate = global.conversionRate || 0;
  }

  const metaRows = [
    { meta: "PageView", trigger: "Page load / QR scan", count: visits, use: "Track total traffic, build awareness audience", color: "#3b82f6" },
    { meta: "ViewContent", trigger: "Product detail opened", count: isPerRestaurant ? itemViews : "-", use: "Product interest signals, retarget viewers", color: "#8b5cf6" },
    { meta: "AddToCart", trigger: "Item added to cart", count: isPerRestaurant ? addToCartCount : "-", use: "Purchase intent audience, cart retargeting", color: "#f59e0b" },
    { meta: "InitiateCheckout", trigger: "Checkout started", count: isPerRestaurant ? checkoutStarts : "-", use: "Cart abandonment retargeting", color: "#ef4444" },
    { meta: "Purchase", trigger: "Order sent via WhatsApp", count: orders, use: "Lookalike audiences, ROAS tracking", color: "#10b981" },
  ];

  // Audience sizing (per-restaurant only)
  const audiences = isPerRestaurant ? [
    { name: "All Visitors", size: visits, desc: "Everyone who visited the menu", action: "Awareness & retargeting campaigns" },
    { name: "Product Viewers (No Purchase)", size: Math.max(0, itemViews - orders), desc: "Viewed products but didn't order", action: "Retarget with product ads" },
    { name: "Cart Abandoners", size: Math.max(0, checkoutStarts - orders), desc: "Started checkout but didn't complete", action: "Recovery ads with discount" },
    { name: "Past Buyers", size: orders, desc: "Customers who placed an order", action: "Upsell, loyalty, lookalike source" },
    { name: "Lookalike (from Buyers)", size: "-", desc: "New people similar to buyers", action: "Acquisition campaigns" },
  ] : [];

  return (
    <div style={{ ...styles.card, border: isActive ? "1px solid #1877f2" : "1px solid #fbbf24" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#1877f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18 }}>f</div>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#0f172a" }}>
              Meta Pixel {isPerRestaurant ? `- ${restaurantName}` : "- All Restaurants"}
            </h3>
            <div style={{ fontSize: 12, color: "#64748b", display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 }}>
              <span>Menugic Pixel: {isActive ? PIXEL_ID : "Not set"}</span>
              {isPerRestaurant && (
                <span>{hasRestaurantPixel ? `Restaurant Pixel: ${restaurantPixelId}` : "No restaurant pixel"}</span>
              )}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{
            padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
            background: isActive ? "#dcfce7" : "#fef3c7",
            color: isActive ? "#166534" : "#92400e",
          }}>
            {isActive ? "Global Active" : "Inactive"}
          </span>
          {isPerRestaurant && (
            <span style={{
              padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600,
              background: hasRestaurantPixel ? "#dbeafe" : "#f1f5f9",
              color: hasRestaurantPixel ? "#1e40af" : "#64748b",
            }}>
              {hasRestaurantPixel ? "Restaurant Pixel Active" : "No Restaurant Pixel"}
            </span>
          )}
          {isActive && (
            <a
              href={`https://business.facebook.com/events_manager2/list/pixel/${PIXEL_ID}/overview`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.smallBtn, textDecoration: "none", color: "#1877f2", borderColor: "#1877f2" }}
            >
              Open Events Manager
            </a>
          )}
        </div>
      </div>

      {isActive ? (
        <>
          <div style={{ fontSize: 13, color: "#64748b", marginBottom: 14 }}>
            {isPerRestaurant
              ? "Real event data for this restaurant. All events fire on both Menugic global pixel and restaurant pixel (if configured)."
              : "Aggregated data across all restaurants. Select a restaurant for detailed per-event breakdown."}
          </div>

          {/* Events Table */}
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Meta Event</th>
                  <th style={styles.th}>Trigger</th>
                  <th style={styles.th}>Events</th>
                  {isPerRestaurant && <th style={styles.th}>Rate</th>}
                  <th style={styles.th}>Ad Use Case</th>
                </tr>
              </thead>
              <tbody>
                {metaRows.map((row, i) => {
                  let rate = "-";
                  if (isPerRestaurant && visits > 0) {
                    if (row.meta === "PageView") rate = "100%";
                    else if (row.meta === "ViewContent" && itemViews > 0) rate = ((itemViews / visits) * 100).toFixed(1) + "%";
                    else if (row.meta === "AddToCart" && addToCartCount > 0) rate = ((addToCartCount / visits) * 100).toFixed(1) + "%";
                    else if (row.meta === "InitiateCheckout" && checkoutStarts > 0) rate = ((checkoutStarts / visits) * 100).toFixed(1) + "%";
                    else if (row.meta === "Purchase" && orders > 0) rate = ((orders / visits) * 100).toFixed(1) + "%";
                  }
                  return (
                    <tr key={row.meta} style={i % 2 ? { background: "#f8fafc" } : {}}>
                      <td style={{ ...styles.td, fontWeight: 600 }}>
                        <span style={{ ...styles.badge, background: row.color }}>{row.meta}</span>
                      </td>
                      <td style={{ ...styles.td, fontSize: 13 }}>{row.trigger}</td>
                      <td style={{ ...styles.td, fontWeight: 600, fontSize: 15 }}>
                        {typeof row.count === "number" ? fmtNum(row.count) : row.count}
                      </td>
                      {isPerRestaurant && (
                        <td style={{ ...styles.td, fontSize: 13, color: "#64748b" }}>{rate}</td>
                      )}
                      <td style={{ ...styles.td, fontSize: 12, color: "#64748b" }}>{row.use}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Revenue summary for per-restaurant */}
          {isPerRestaurant && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 16 }}>
              <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "12px 16px", border: "1px solid #bbf7d0" }}>
                <div style={{ fontSize: 11, color: "#166534", fontWeight: 600, marginBottom: 4 }}>Pixel Revenue</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#15803d" }}>${fmtNum(revenue)}</div>
              </div>
              <div style={{ background: "#eff6ff", borderRadius: 10, padding: "12px 16px", border: "1px solid #bfdbfe" }}>
                <div style={{ fontSize: 11, color: "#1e40af", fontWeight: 600, marginBottom: 4 }}>Conversion Rate</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#1d4ed8" }}>{fmtPct(conversionRate)}</div>
              </div>
              <div style={{ background: "#fef2f2", borderRadius: 10, padding: "12px 16px", border: "1px solid #fecaca" }}>
                <div style={{ fontSize: 11, color: "#991b1b", fontWeight: 600, marginBottom: 4 }}>Cart Abandonment</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626" }}>{fmtPct(cartAbandonmentRate)}</div>
              </div>
              <div style={{ background: "#faf5ff", borderRadius: 10, padding: "12px 16px", border: "1px solid #e9d5ff" }}>
                <div style={{ fontSize: 11, color: "#6b21a8", fontWeight: 600, marginBottom: 4 }}>Avg Order Value</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#7c3aed" }}>{orders > 0 ? `$${(revenue / orders).toFixed(2)}` : "$0"}</div>
              </div>
            </div>
          )}

          {/* Retargeting Audiences — per restaurant only */}
          {isPerRestaurant && audiences.length > 0 && visits > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>
                Retargeting Audiences (ready to create in Ads Manager)
              </h4>
              <div style={{ overflowX: "auto" }}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Audience</th>
                      <th style={styles.th}>Est. Size</th>
                      <th style={styles.th}>Description</th>
                      <th style={styles.th}>Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audiences.map((a, i) => (
                      <tr key={a.name} style={i % 2 ? { background: "#f8fafc" } : {}}>
                        <td style={{ ...styles.td, fontWeight: 600 }}>{a.name}</td>
                        <td style={{ ...styles.td, fontWeight: 600 }}>
                          {typeof a.size === "number" ? fmtNum(a.size) : a.size}
                        </td>
                        <td style={{ ...styles.td, fontSize: 12, color: "#64748b" }}>{a.desc}</td>
                        <td style={{ ...styles.td, fontSize: 12, color: "#1e40af" }}>{a.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div style={{ marginTop: 8, padding: "10px 14px", background: "#eff6ff", borderRadius: 8, fontSize: 12, color: "#1e40af" }}>
            {isPerRestaurant
              ? "Use these audience sizes to create Custom Audiences in Meta Ads Manager. Build retargeting and lookalike campaigns based on real user behavior."
              : "Select a restaurant from the rankings table to see detailed Meta Pixel event data, audience sizes, and retargeting recommendations."}
          </div>
        </>
      ) : (
        <div style={{ padding: "16px 0", fontSize: 13, color: "#92400e" }}>
          Add <code style={{ background: "#fef3c7", padding: "2px 6px", borderRadius: 4 }}>REACT_APP_MENUGIC_PIXEL_ID</code> to your .env file to activate Meta Pixel tracking.
        </div>
      )}
    </div>
  );
}

// ── Action Breakdown Tab ──
function ActionBreakdownTab({ data, onExport, onSelectRestaurant }) {
  const { restaurants, globalTotals } = data;
  const EVENT_TYPES = ["page_view", "item_view", "add_to_cart", "checkout_start", "order_placed"];
  const EVENT_LABELS = { page_view: "Page View", item_view: "Item View", add_to_cart: "Add to Cart", checkout_start: "Checkout", order_placed: "Order" };

  return (
    <>
      {/* Global Totals */}
      <div style={styles.kpiGrid}>
        {globalTotals.map((t) => (
          <KpiCard key={t.event_type} label={EVENT_LABELS[t.event_type] || t.event_type} value={fmtNum(parseInt(t.count))} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16, marginTop: 16 }}>
        <button onClick={onExport} style={styles.exportBtn}>Export All to Excel</button>
      </div>

      {/* Per-Restaurant Breakdown Table */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Action Breakdown by Restaurant</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Restaurant</th>
                <th style={styles.th}>Visits</th>
                <th style={styles.th}>Unique</th>
                {EVENT_TYPES.map((t) => (
                  <th key={t} style={styles.th}>{EVENT_LABELS[t]}</th>
                ))}
                <th style={styles.th}>Visit=PV?</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((r, i) => {
                const match = r.visits === r.page_view;
                return (
                  <tr key={r.restaurant_id} style={i % 2 ? { background: "#f8fafc" } : {}}>
                    <td style={{ ...styles.td, fontWeight: 600, cursor: "pointer", color: "#5eabb1" }}
                      onClick={() => onSelectRestaurant(r)}>
                      {r.restaurant_name}
                    </td>
                    <td style={styles.td}>{r.visits}</td>
                    <td style={styles.td}>{r.unique_visitors}</td>
                    {EVENT_TYPES.map((t) => (
                      <td key={t} style={{ ...styles.td, fontWeight: t === "order_placed" ? 700 : 400 }}>
                        {r[t] || 0}
                      </td>
                    ))}
                    <td style={styles.td}>
                      <span style={{
                        ...styles.badge,
                        background: match ? "#16a34a" : "#f59e0b",
                      }}>
                        {match ? "Match" : `${r.visits - r.page_view > 0 ? "+" : ""}${r.visits - r.page_view}`}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {restaurants.length === 0 && (
                <tr><td colSpan={8 + EVENT_TYPES.length} style={{ ...styles.td, textAlign: "center", color: "#94a3b8" }}>No data</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: "#64748b", padding: "8px 12px", background: "#f8fafc", borderRadius: 8 }}>
          <strong>Visit=PV?</strong> compares visit count vs page_view events. They should match. Differences indicate ad blockers or tracking issues.
        </div>
      </div>
    </>
  );
}

// ── Live Feed Tab ──
const FEED_FILTERS = [
  { label: "All", value: "all" },
  { label: "Visits", value: "visit" },
  { label: "Page View", value: "page_view" },
  { label: "Item View", value: "item_view" },
  { label: "Add to Cart", value: "add_to_cart" },
  { label: "Checkout", value: "checkout_start" },
  { label: "Order", value: "order_placed" },
];

function LiveFeedTab({ data, onRefresh }) {
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [feedFilter, setFeedFilter] = useState("all");

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(onRefresh, 10000);
    return () => clearInterval(interval);
  }, [autoRefresh, onRefresh]);

  const filtered = feedFilter === "all"
    ? data
    : data.filter((item) =>
        feedFilter === "visit"
          ? item.type === "visit"
          : item.type === "event" && item.event_type === feedFilter
      );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0f172a" }}>
          Live Activity Feed
          <span style={{ fontSize: 13, fontWeight: 400, color: "#94a3b8", marginLeft: 8 }}>
            ({filtered.length} entries)
          </span>
        </h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            style={{
              ...styles.smallBtn,
              background: autoRefresh ? "#dcfce7" : "#f8fafc",
              color: autoRefresh ? "#16a34a" : "#475569",
              borderColor: autoRefresh ? "#16a34a" : "#e2e8f0",
            }}
          >
            {autoRefresh ? "Auto-refresh ON (10s)" : "Auto-refresh OFF"}
          </button>
          <button onClick={onRefresh} style={styles.exportBtn}>Refresh</button>
        </div>
      </div>

      {/* Type Filter */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>
        {FEED_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFeedFilter(f.value)}
            style={{
              ...styles.smallBtn,
              background: feedFilter === f.value ? "#5eabb1" : "#f8fafc",
              color: feedFilter === f.value ? "#fff" : "#475569",
              borderColor: feedFilter === f.value ? "#5eabb1" : "#e2e8f0",
              fontWeight: feedFilter === f.value ? 600 : 400,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={styles.card}>
        <div style={{ maxHeight: 600, overflowY: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Time</th>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Restaurant</th>
                <th style={styles.th}>Visitor</th>
                <th style={styles.th}>Details</th>
                <th style={styles.th}>Source</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => (
                <tr key={`${item.type}-${item.id}`} style={i % 2 ? { background: "#f8fafc" } : {}}>
                  <td style={{ ...styles.td, fontSize: 12, whiteSpace: "nowrap" }}>
                    {new Date(item.timestamp).toLocaleString("en-GB", { timeZone: "Asia/Beirut", hour: "2-digit", minute: "2-digit", second: "2-digit", day: "2-digit", month: "short" })}
                  </td>
                  <td style={styles.td}>
                    {item.type === "visit" ? (
                      <span style={{ ...styles.badge, background: "#3b82f6" }}>Visit</span>
                    ) : (
                      <span style={{ ...styles.badge, background: eventColor(item.event_type) }}>
                        {item.event_type?.replace("_", " ")}
                      </span>
                    )}
                  </td>
                  <td style={{ ...styles.td, fontWeight: 600, color: "#5eabb1" }}>
                    {item.restaurant_name || `#${item.restaurant_id}`}
                  </td>
                  <td style={{ ...styles.td, fontSize: 11, color: "#64748b" }}>
                    {(item.visitor_id || "").slice(0, 16)}...
                  </td>
                  <td style={{ ...styles.td, fontSize: 12 }}>
                    {item.type === "visit" ? (
                      <span>{item.device_type || "?"} - {item.landing_page || "/"}</span>
                    ) : (
                      <span>
                        {item.product_name || (item.product_id ? `Product #${item.product_id}` : "")}
                        {item.revenue ? ` - $${item.revenue}` : ""}
                        {item.order_id ? ` (Order #${item.order_id})` : ""}
                      </span>
                    )}
                  </td>
                  <td style={{ ...styles.td, fontSize: 12 }}>
                    {item.source || item.referrer || "-"}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} style={{ ...styles.td, textAlign: "center", color: "#94a3b8" }}>No activity for this filter</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// ── Heatmap Tab ──
function HeatmapTab({ data }) {
  const { hourlyHeatmap, dailyTrend, eventsByHour } = data;
  const DAYS = ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const HOURS = Array.from({ length: 24 }, (_, i) => i);

  // Build heatmap grid
  const grid = {};
  let maxCount = 1;
  hourlyHeatmap.forEach((h) => {
    const key = `${h.day_of_week}-${h.hour}`;
    const count = parseInt(h.count);
    grid[key] = count;
    if (count > maxCount) maxCount = count;
  });

  const getColor = (count) => {
    if (!count) return "#f8fafc";
    const intensity = Math.min(count / maxCount, 1);
    const r = Math.round(94 + (255 - 94) * (1 - intensity));
    const g = Math.round(171 + (255 - 171) * (1 - intensity));
    const b = Math.round(177 + (255 - 177) * (1 - intensity));
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Events by hour — pivot for chart
  const hourlyEvents = {};
  (eventsByHour || []).forEach((e) => {
    if (!hourlyEvents[e.hour]) hourlyEvents[e.hour] = {};
    hourlyEvents[e.hour][e.event_type] = parseInt(e.count);
  });

  return (
    <>
      {/* Weekly Heatmap Grid */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Weekly Visit Heatmap</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", fontSize: 11, width: "100%" }}>
            <thead>
              <tr>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11, color: "#64748b" }}>Day</th>
                {HOURS.map((h) => (
                  <th key={h} style={{ padding: "4px 2px", textAlign: "center", fontSize: 10, color: "#94a3b8", minWidth: 28 }}>
                    {h}:00
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <tr key={day}>
                  <td style={{ padding: "4px 8px", fontWeight: 600, color: "#475569", fontSize: 12 }}>{DAYS[day]}</td>
                  {HOURS.map((hour) => {
                    const count = grid[`${day}-${hour}`] || 0;
                    return (
                      <td
                        key={hour}
                        title={`${DAYS[day]} ${hour}:00 - ${count} visits`}
                        style={{
                          padding: 0,
                          textAlign: "center",
                        }}
                      >
                        <div style={{
                          width: 24, height: 24, borderRadius: 4, margin: "2px auto",
                          background: getColor(count),
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 9, color: count > maxCount * 0.5 ? "#fff" : "#64748b",
                          fontWeight: count > 0 ? 600 : 400,
                          cursor: "default",
                        }}>
                          {count > 0 ? count : ""}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#94a3b8" }}>
          <span>Less</span>
          {[0, 0.25, 0.5, 0.75, 1].map((i) => (
            <div key={i} style={{ width: 16, height: 16, borderRadius: 3, background: getColor(maxCount * i) }} />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* Daily Trend */}
      {dailyTrend.length > 0 && (
        <div style={{ ...styles.card, marginTop: 16 }}>
          <h3 style={styles.cardTitle}>Daily Visit Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dailyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={(d) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })} />
              <YAxis />
              <Tooltip labelFormatter={(d) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#5eabb1" strokeWidth={2} dot={false} name="Visits" />
              <Line type="monotone" dataKey="unique_visitors" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Unique Visitors" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Events by Hour */}
      {Object.keys(hourlyEvents).length > 0 && (
        <div style={{ ...styles.card, marginTop: 16 }}>
          <h3 style={styles.cardTitle}>Events by Hour of Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={HOURS.map((h) => ({ hour: `${h}:00`, ...hourlyEvents[h] }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="page_view" stackId="a" fill="#3b82f6" name="Page View" />
              <Bar dataKey="item_view" stackId="a" fill="#8b5cf6" name="Item View" />
              <Bar dataKey="add_to_cart" stackId="a" fill="#f59e0b" name="Add to Cart" />
              <Bar dataKey="checkout_start" stackId="a" fill="#ef4444" name="Checkout" />
              <Bar dataKey="order_placed" stackId="a" fill="#10b981" name="Order" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

// ── KPI Card ──
function KpiCard({ label, value }) {
  return (
    <div style={styles.kpiCard}>
      <div style={styles.kpiValue}>{value}</div>
      <div style={styles.kpiLabel}>{label}</div>
    </div>
  );
}

function eventColor(type) {
  const map = {
    page_view: "#3b82f6",
    item_view: "#8b5cf6",
    add_to_cart: "#f59e0b",
    checkout_start: "#ef4444",
    order_placed: "#10b981",
  };
  return map[type] || "#94a3b8";
}

// ── Styles ──
const styles = {
  container: { width: "100%", display: "flex", flexDirection: "column", gap: 16 },
  controlsBar: {
    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
    padding: "14px 20px", background: "#fff", borderRadius: 12,
    boxShadow: "0 2px 12px rgba(15,23,42,0.06)", border: "1px solid rgba(148,163,184,0.18)",
  },
  presets: { display: "flex", gap: 6 },
  presetBtn: {
    padding: "6px 14px", borderRadius: 8, border: "1px solid #e2e8f0",
    background: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 500, color: "#64748b",
    transition: "all 0.15s",
  },
  presetActive: { background: "#5eabb1", color: "#fff", borderColor: "#5eabb1" },
  dateInputs: { display: "flex", gap: 8, alignItems: "center" },
  dateInput: {
    padding: "6px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, color: "#334155",
  },
  tabBar: {
    display: "flex", gap: 4, background: "#fff", borderRadius: 10, padding: 4,
    boxShadow: "0 2px 8px rgba(15,23,42,0.04)", border: "1px solid rgba(148,163,184,0.18)",
  },
  tabBtn: {
    padding: "8px 20px", borderRadius: 8, border: "none", background: "transparent",
    cursor: "pointer", fontSize: 13, fontWeight: 500, color: "#64748b", transition: "all 0.15s",
  },
  tabActive: { background: "rgba(94,171,177,0.15)", color: "#0f172a", fontWeight: 600 },
  loading: {
    padding: 40, textAlign: "center", fontSize: 15, color: "#94a3b8",
  },
  kpiGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12,
  },
  kpiCard: {
    background: "#fff", borderRadius: 12, padding: "20px 18px",
    boxShadow: "0 2px 12px rgba(15,23,42,0.06)", border: "1px solid rgba(148,163,184,0.15)",
    display: "flex", flexDirection: "column", gap: 4,
  },
  kpiValue: { fontSize: 24, fontWeight: 700, color: "#0f172a" },
  kpiLabel: { fontSize: 12, fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.5px" },
  card: {
    background: "#fff", borderRadius: 12, padding: 20,
    boxShadow: "0 2px 12px rgba(15,23,42,0.06)", border: "1px solid rgba(148,163,184,0.15)",
  },
  cardTitle: { margin: "0 0 16px", fontSize: 16, fontWeight: 700, color: "#0f172a" },
  row: { display: "flex", gap: 16, flexWrap: "wrap" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: {
    textAlign: "left", padding: "10px 12px", borderBottom: "2px solid #e2e8f0",
    fontWeight: 600, color: "#475569", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.3px",
  },
  td: { padding: "10px 12px", borderBottom: "1px solid #f1f5f9", color: "#334155" },
  exportBtn: {
    padding: "8px 20px", borderRadius: 8, border: "none", background: "#5eabb1",
    color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer",
    boxShadow: "0 2px 6px rgba(94,171,177,0.3)", transition: "all 0.15s",
  },
  smallBtn: {
    padding: "4px 10px", borderRadius: 6, border: "1px solid #e2e8f0",
    background: "#f8fafc", fontSize: 11, cursor: "pointer", color: "#475569",
  },
  badge: {
    display: "inline-block", padding: "3px 8px", borderRadius: 6,
    color: "#fff", fontSize: 11, fontWeight: 600,
  },
};
