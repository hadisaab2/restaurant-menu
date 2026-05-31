import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

const s = {
  container: { padding: "0 8px" },
  statsRow: { display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" },
  statCard: { flex: 1, minWidth: 140, padding: "16px 20px", borderRadius: 12, border: "1px solid #eee", background: "#fff" },
  statValue: { fontSize: 28, fontWeight: 700, color: "#0f172a" },
  statLabel: { fontSize: 12, color: "#94a3b8", marginTop: 2 },
  controls: { display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap", alignItems: "center" },
  input: { padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, outline: "none" },
  btn: { padding: "8px 16px", borderRadius: 8, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s" },
  table: { width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 13 },
  th: { padding: "10px 12px", textAlign: "left", background: "#f8fafc", borderBottom: "2px solid #e2e8f0", fontWeight: 700, color: "#475569", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5 },
  td: { padding: "10px 12px", borderBottom: "1px solid #f1f5f9", verticalAlign: "top" },
  badge: { display: "inline-block", padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 },
  stackBtn: { fontSize: 11, color: "#6366f1", cursor: "pointer", background: "none", border: "none", padding: 0, textDecoration: "underline" },
  stackPre: { marginTop: 8, padding: 10, background: "#1e1e2e", color: "#a5f3fc", borderRadius: 8, fontSize: 11, maxHeight: 200, overflow: "auto", whiteSpace: "pre-wrap", wordBreak: "break-all" },
  pager: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, fontSize: 13, color: "#64748b" },
};

const statusColor = (status) => {
  if (status >= 500) return { background: "#fef2f2", color: "#dc2626" };
  if (status >= 400) return { background: "#fff7ed", color: "#ea580c" };
  return { background: "#f0fdf4", color: "#16a34a" };
};

export default function ErrorLogs() {
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [expandedStack, setExpandedStack] = useState(null);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page, page_size: 30 });
      if (search) params.set("search", search);
      if (startDate) params.set("start_date", startDate);
      if (endDate) params.set("end_date", endDate);

      const { data } = await axios.get(`${API}/restaurants/error-logs?${params}`, { headers: headers() });
      setLogs(data.data.logs);
      setTotalPages(data.data.pagination.totalPages);
      setTotalCount(data.data.pagination.totalCount);
    } catch (e) {
      console.error("Failed to fetch error logs:", e);
    }
    setLoading(false);
  }, [page, search, startDate, endDate]);

  const fetchStats = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/restaurants/error-logs/stats`, { headers: headers() });
      setStats(data.data);
    } catch (e) {}
  }, []);

  useEffect(() => { fetchLogs(); }, [fetchLogs]);
  useEffect(() => { fetchStats(); }, [fetchStats]);

  const handleClear = async () => {
    if (!window.confirm("Clear all error logs?")) return;
    try {
      await axios.delete(`${API}/restaurants/error-logs/clear`, { headers: headers() });
      fetchLogs();
      fetchStats();
    } catch (e) {}
  };

  return (
    <div style={s.container}>
      {/* Stats */}
      {stats && (
        <div style={s.statsRow}>
          <div style={s.statCard}>
            <div style={{ ...s.statValue, color: "#dc2626" }}>{stats.total}</div>
            <div style={s.statLabel}>Total Errors</div>
          </div>
          <div style={s.statCard}>
            <div style={{ ...s.statValue, color: "#ea580c" }}>{stats.todayCount}</div>
            <div style={s.statLabel}>Today</div>
          </div>
          <div style={{ ...s.statCard, flex: 2 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 6 }}>Top Routes</div>
            {stats.topRoutes?.map((r, i) => (
              <div key={i} style={{ fontSize: 12, color: "#64748b", marginBottom: 2 }}>
                <span style={{ ...s.badge, ...statusColor(500), marginRight: 6 }}>{r.count}</span>
                <code style={{ fontSize: 11 }}>{r.route}</code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div style={s.controls}>
        <input
          type="text"
          placeholder="Search errors..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          style={{ ...s.input, flex: 1, minWidth: 200 }}
        />
        <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setPage(1); }} style={s.input} />
        <input type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value); setPage(1); }} style={s.input} />
        <button onClick={fetchLogs} style={{ ...s.btn, background: "#6366f1", color: "#fff" }}>Refresh</button>
        <button onClick={handleClear} style={{ ...s.btn, background: "#fef2f2", color: "#dc2626" }}>Clear All</button>
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ padding: 40, textAlign: "center", color: "#94a3b8" }}>Loading...</div>
      ) : logs.length === 0 ? (
        <div style={{ padding: 40, textAlign: "center", color: "#94a3b8" }}>No error logs found</div>
      ) : (
        <>
          <div style={{ overflowX: "auto" }}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>Time</th>
                  <th style={s.th}>Status</th>
                  <th style={s.th}>Method</th>
                  <th style={s.th}>Route</th>
                  <th style={s.th}>Message</th>
                  <th style={s.th}>Stack</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} style={log.status >= 500 ? { background: "#fffbfb" } : {}}>
                    <td style={{ ...s.td, whiteSpace: "nowrap", fontSize: 11, color: "#64748b" }}>
                      {new Date(log.created_at).toLocaleString()}
                    </td>
                    <td style={s.td}>
                      <span style={{ ...s.badge, ...statusColor(log.status) }}>{log.status}</span>
                    </td>
                    <td style={{ ...s.td, fontWeight: 600, fontSize: 11 }}>{log.method}</td>
                    <td style={{ ...s.td, fontFamily: "monospace", fontSize: 11 }}>{log.route}</td>
                    <td style={{ ...s.td, maxWidth: 300 }}>
                      <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 300 }}>
                        {log.message}
                      </div>
                    </td>
                    <td style={s.td}>
                      {log.stack ? (
                        <>
                          <button
                            style={s.stackBtn}
                            onClick={() => setExpandedStack(expandedStack === log.id ? null : log.id)}
                          >
                            {expandedStack === log.id ? "Hide" : "View"}
                          </button>
                          {expandedStack === log.id && (
                            <pre style={s.stackPre}>{log.stack}</pre>
                          )}
                        </>
                      ) : (
                        <span style={{ color: "#ccc", fontSize: 11 }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={s.pager}>
            <span>Showing {logs.length} of {totalCount} errors</span>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page <= 1}
                style={{ ...s.btn, background: "#f1f5f9", color: page <= 1 ? "#cbd5e1" : "#334155" }}
              >
                Prev
              </button>
              <span style={{ padding: "8px 12px", fontSize: 13 }}>
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page >= totalPages}
                style={{ ...s.btn, background: "#f1f5f9", color: page >= totalPages ? "#cbd5e1" : "#334155" }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
