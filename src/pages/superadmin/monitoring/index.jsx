import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({
  Authorization: `Bearer ${getCookie("accessToken")}`,
});

const PHONES = [
  { label: "Personal", phone: "+96170886986" },
  { label: "Menugic", phone: "+96178911634" },
];

// ── Styles ──
const s = {
  container: { padding: "0 8px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 16,
    marginBottom: 20,
  },
  card: {
    padding: "20px 24px",
    borderRadius: 14,
    border: "1px solid #e2e8f0",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 14,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #f1f5f9",
    fontSize: 13,
  },
  rowLabel: { color: "#64748b", fontWeight: 500 },
  rowValue: { fontWeight: 600, color: "#0f172a" },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 10,
    fontSize: 11,
    fontWeight: 700,
  },
  badgeOk: { background: "#dcfce7", color: "#16a34a" },
  badgeFail: { background: "#fef2f2", color: "#dc2626" },
  badgeWarn: { background: "#fff7ed", color: "#ea580c" },
  badgeInfo: { background: "#eff6ff", color: "#2563eb" },
  btn: {
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  },
  btnPrimary: { background: "#5eabb1", color: "#fff" },
  btnSuccess: { background: "#16a34a", color: "#fff" },
  btnOutline: {
    background: "#fff",
    color: "#475569",
    border: "1px solid #e2e8f0",
  },
  btnDanger: { background: "#dc2626", color: "#fff" },
  actionsRow: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
    flexWrap: "wrap",
    alignItems: "center",
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    background: "#f1f5f9",
    overflow: "hidden",
    marginTop: 4,
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
    transition: "width 0.3s ease",
  },
  reportBox: {
    marginTop: 20,
    padding: 16,
    background: "#1e1e2e",
    color: "#a5f3fc",
    borderRadius: 12,
    fontSize: 12,
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    maxHeight: 400,
    overflow: "auto",
    lineHeight: 1.6,
  },
  toast: {
    position: "fixed",
    bottom: 24,
    right: 24,
    padding: "12px 20px",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 600,
    zIndex: 9999,
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    animation: "slideUp 0.3s ease",
  },
  select: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #e2e8f0",
    fontSize: 13,
    outline: "none",
    background: "#fff",
  },
  pm2Table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    fontSize: 12,
    marginTop: 10,
  },
  th: {
    padding: "8px 10px",
    textAlign: "left",
    background: "#f8fafc",
    borderBottom: "2px solid #e2e8f0",
    fontWeight: 700,
    color: "#475569",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  td: {
    padding: "8px 10px",
    borderBottom: "1px solid #f1f5f9",
  },
};

function StatusBadge({ ok, trueText = "OK", falseText = "FAIL", warn }) {
  if (warn) return <span style={{ ...s.badge, ...s.badgeWarn }}>{warn}</span>;
  return (
    <span style={{ ...s.badge, ...(ok ? s.badgeOk : s.badgeFail) }}>
      {ok ? trueText : falseText}
    </span>
  );
}

function ProgressBar({ percent, thresholdWarn = 70, thresholdDanger = 85 }) {
  let color = "#16a34a";
  if (percent >= thresholdDanger) color = "#dc2626";
  else if (percent >= thresholdWarn) color = "#ea580c";

  return (
    <div style={s.progressBar}>
      <div
        style={{
          ...s.progressFill,
          width: `${Math.min(percent, 100)}%`,
          background: color,
        }}
      />
    </div>
  );
}

export default function Monitoring() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedPhone, setSelectedPhone] = useState(PHONES[0].phone);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const fetchStatus = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/superadmin/monitoring/status`, {
        headers: headers(),
      });
      setStatus(data);
    } catch (err) {
      console.error("Failed to fetch monitoring status:", err);
      showToast("Failed to fetch server status", "error");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchStatus]);

  const triggerReport = async (sendWhatsApp = false) => {
    setSending(true);
    try {
      const { data } = await axios.post(
        `${API}/superadmin/monitoring/trigger-report`,
        { sendWhatsApp, phone: sendWhatsApp ? selectedPhone : undefined },
        { headers: headers() }
      );
      setReport(data.report);

      if (sendWhatsApp) {
        const results = data.whatsappResults || [];
        const anySent = results.some((r) => r.sent);
        if (anySent) {
          const sentTo = PHONES.find((p) => p.phone === selectedPhone);
          showToast(
            `Report sent to ${sentTo?.label || selectedPhone}`,
            "success"
          );
        } else {
          const errMsg = results[0]?.error || "Unknown error";
          showToast(`WhatsApp send failed: ${errMsg}`, "error");
        }
      } else {
        showToast("Report generated", "success");
      }
    } catch (err) {
      showToast(
        `Failed: ${err.response?.data?.error || err.message}`,
        "error"
      );
    }
    setSending(false);
  };

  const testWhatsApp = async () => {
    setSending(true);
    try {
      const { data } = await axios.post(
        `${API}/superadmin/monitoring/test-whatsapp`,
        { phone: selectedPhone },
        { headers: headers() }
      );
      if (data.success) {
        const sentTo = PHONES.find((p) => p.phone === selectedPhone);
        showToast(`Test message sent to ${sentTo?.label || selectedPhone}`);
      } else {
        showToast(`Test failed: ${data.error}`, "error");
      }
    } catch (err) {
      showToast(
        `Test failed: ${err.response?.data?.error || err.message}`,
        "error"
      );
    }
    setSending(false);
  };

  if (loading) {
    return (
      <div style={{ ...s.container, textAlign: "center", padding: 60 }}>
        <div style={{ fontSize: 15, color: "#94a3b8" }}>
          Loading server status...
        </div>
      </div>
    );
  }

  const d = status;
  const allOk =
    d?.database?.ok &&
    d?.resources?.memory?.ok &&
    d?.resources?.cpu?.ok &&
    d?.resources?.disk?.ok &&
    d?.ssl?.ok &&
    d?.pm2?.ok;

  return (
    <div style={s.container}>
      {/* ── Overall Status ── */}
      <div
        style={{
          ...s.card,
          marginBottom: 20,
          background: allOk
            ? "linear-gradient(135deg, #f0fdf4, #dcfce7)"
            : "linear-gradient(135deg, #fef2f2, #fecaca)",
          border: allOk ? "1px solid #bbf7d0" : "1px solid #fca5a5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: allOk ? "#16a34a" : "#dc2626",
              }}
            >
              {allOk ? "All Systems Healthy" : "Issues Detected"}
            </div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
              Last checked:{" "}
              {d?.timestamp
                ? new Date(d.timestamp).toLocaleString("en-GB", {
                    timeZone: "Asia/Beirut",
                  })
                : "N/A"}{" "}
              {autoRefresh && " (auto-refreshing every 30s)"}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              style={{ ...s.btn, ...s.btnOutline }}
              onClick={() => setAutoRefresh(!autoRefresh)}
            >
              {autoRefresh ? "Pause" : "Resume"} Auto-refresh
            </button>
            <button
              style={{ ...s.btn, ...s.btnPrimary }}
              onClick={fetchStatus}
            >
              Refresh Now
            </button>
          </div>
        </div>
      </div>

      {/* ── Status Cards Grid ── */}
      <div style={s.grid}>
        {/* Server */}
        <div style={s.card}>
          <div style={s.cardTitle}>Server</div>
          <div style={s.row}>
            <span style={s.rowLabel}>Status</span>
            <StatusBadge ok={true} trueText="ONLINE" />
          </div>
          <div style={s.row}>
            <span style={s.rowLabel}>Uptime</span>
            <span style={s.rowValue}>
              {d?.server?.uptimeFormatted || "N/A"}
            </span>
          </div>
          <div style={s.row}>
            <span style={s.rowLabel}>Node.js</span>
            <span style={s.rowValue}>{d?.server?.nodeVersion || "N/A"}</span>
          </div>
          <div style={{ ...s.row, borderBottom: "none" }}>
            <span style={s.rowLabel}>Hostname</span>
            <span style={s.rowValue}>{d?.server?.hostname || "N/A"}</span>
          </div>
        </div>

        {/* Database */}
        <div style={s.card}>
          <div style={s.cardTitle}>Database</div>
          <div style={s.row}>
            <span style={s.rowLabel}>Status</span>
            <StatusBadge
              ok={d?.database?.ok}
              trueText="CONNECTED"
              falseText="DISCONNECTED"
            />
          </div>
          {d?.database?.error && (
            <div style={{ ...s.row, borderBottom: "none" }}>
              <span style={{ color: "#dc2626", fontSize: 12 }}>
                {d.database.error}
              </span>
            </div>
          )}
        </div>

        {/* SSL Certificate */}
        <div style={s.card}>
          <div style={s.cardTitle}>SSL Certificate</div>
          <div style={s.row}>
            <span style={s.rowLabel}>Status</span>
            <StatusBadge
              ok={d?.ssl?.ok}
              trueText="VALID"
              falseText={d?.ssl?.error || "ISSUE"}
              warn={
                d?.ssl?.daysRemaining && d.ssl.daysRemaining <= 30
                  ? `${d.ssl.daysRemaining}d left`
                  : null
              }
            />
          </div>
          {d?.ssl?.daysRemaining && (
            <>
              <div style={s.row}>
                <span style={s.rowLabel}>Days Remaining</span>
                <span
                  style={{
                    ...s.rowValue,
                    color: d.ssl.daysRemaining > 30 ? "#16a34a" : "#dc2626",
                  }}
                >
                  {d.ssl.daysRemaining}
                </span>
              </div>
              <div style={s.row}>
                <span style={s.rowLabel}>Expires</span>
                <span style={s.rowValue}>{d.ssl.expiryDate}</span>
              </div>
            </>
          )}
          {d?.ssl?.issuer && (
            <div style={{ ...s.row, borderBottom: "none" }}>
              <span style={s.rowLabel}>Issuer</span>
              <span style={s.rowValue}>{d.ssl.issuer}</span>
            </div>
          )}
          {d?.ssl?.error && (
            <div
              style={{ ...s.row, borderBottom: "none", color: "#dc2626", fontSize: 12 }}
            >
              {d.ssl.error}
            </div>
          )}
        </div>

        {/* CPU */}
        <div style={s.card}>
          <div style={s.cardTitle}>CPU</div>
          <div style={s.row}>
            <span style={s.rowLabel}>Usage</span>
            <span style={s.rowValue}>
              {d?.resources?.cpu?.usedPercent ?? "?"}%
            </span>
          </div>
          <ProgressBar percent={d?.resources?.cpu?.usedPercent || 0} />
          <div style={{ ...s.row, marginTop: 8 }}>
            <span style={s.rowLabel}>Cores</span>
            <span style={s.rowValue}>{d?.resources?.cpu?.cores || "?"}</span>
          </div>
          <div style={{ ...s.row, borderBottom: "none" }}>
            <span style={s.rowLabel}>Load Avg</span>
            <span style={s.rowValue}>
              {d?.resources?.cpu?.loadAvg || "?"}
            </span>
          </div>
        </div>

        {/* Memory */}
        <div style={s.card}>
          <div style={s.cardTitle}>Memory</div>
          <div style={s.row}>
            <span style={s.rowLabel}>Usage</span>
            <span style={s.rowValue}>
              {d?.resources?.memory?.usedPercent ?? "?"}%
            </span>
          </div>
          <ProgressBar percent={d?.resources?.memory?.usedPercent || 0} />
          <div style={{ ...s.row, marginTop: 8 }}>
            <span style={s.rowLabel}>Total</span>
            <span style={s.rowValue}>
              {d?.resources?.memory?.totalMB
                ? `${Math.round(d.resources.memory.totalMB / 1024)}GB`
                : "?"}
            </span>
          </div>
          <div style={{ ...s.row, borderBottom: "none" }}>
            <span style={s.rowLabel}>Free</span>
            <span style={s.rowValue}>
              {d?.resources?.memory?.freeMB
                ? `${d.resources.memory.freeMB}MB`
                : "?"}
            </span>
          </div>
        </div>

        {/* Disk */}
        <div style={s.card}>
          <div style={s.cardTitle}>Disk</div>
          <div style={s.row}>
            <span style={s.rowLabel}>Usage</span>
            <span style={s.rowValue}>
              {d?.resources?.disk?.usedPercent ?? "?"}%
            </span>
          </div>
          <ProgressBar percent={d?.resources?.disk?.usedPercent || 0} />
          <div style={{ ...s.row, marginTop: 8, borderBottom: "none" }}>
            <span style={s.rowLabel}>Available</span>
            <span style={s.rowValue}>
              {d?.resources?.disk?.availableGB
                ? `${d.resources.disk.availableGB}GB`
                : "?"}
            </span>
          </div>
        </div>
      </div>

      {/* ── PM2 Processes ── */}
      {d?.pm2?.processes?.length > 0 && (
        <div style={{ ...s.card, marginBottom: 20 }}>
          <div style={s.cardTitle}>
            PM2 Processes
            <StatusBadge
              ok={d.pm2.ok}
              trueText="ALL OK"
              falseText="ISSUES"
            />
          </div>
          <table style={s.pm2Table}>
            <thead>
              <tr>
                <th style={s.th}>Name</th>
                <th style={s.th}>Status</th>
                <th style={s.th}>Uptime</th>
                <th style={s.th}>Restarts</th>
                <th style={s.th}>CPU</th>
                <th style={s.th}>Memory</th>
              </tr>
            </thead>
            <tbody>
              {d.pm2.processes.map((p, i) => (
                <tr key={i}>
                  <td style={s.td}>
                    <strong>{p.name}</strong>
                  </td>
                  <td style={s.td}>
                    <StatusBadge
                      ok={p.status === "online"}
                      trueText={p.status}
                      falseText={p.status}
                    />
                  </td>
                  <td style={s.td}>{p.uptime}</td>
                  <td style={s.td}>
                    <span
                      style={{
                        color: p.restarts > 0 ? "#ea580c" : "#16a34a",
                        fontWeight: 600,
                      }}
                    >
                      {p.restarts}
                    </span>
                  </td>
                  <td style={s.td}>{p.cpu}%</td>
                  <td style={s.td}>{p.memory}MB</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Monitor Process Status ── */}
      <div style={{ ...s.card, marginBottom: 20 }}>
        <div style={s.cardTitle}>
          Background Monitor
          <StatusBadge
            ok={d?.monitorProcess?.running}
            trueText="RUNNING"
            falseText="NOT RUNNING"
          />
        </div>
        <div style={s.row}>
          <span style={s.rowLabel}>Status</span>
          <span style={s.rowValue}>
            {d?.monitorProcess?.status || "Unknown"}
          </span>
        </div>
        {d?.monitorProcess?.running && (
          <div style={{ ...s.row, borderBottom: "none" }}>
            <span style={s.rowLabel}>Uptime</span>
            <span style={s.rowValue}>{d.monitorProcess.uptime}</span>
          </div>
        )}
        {!d?.monitorProcess?.running && (
          <div
            style={{
              fontSize: 12,
              color: "#ea580c",
              marginTop: 8,
              padding: "8px 12px",
              background: "#fff7ed",
              borderRadius: 8,
            }}
          >
            Start it on the server:{" "}
            <code style={{ background: "#fef3c7", padding: "2px 6px", borderRadius: 4 }}>
              pm2 start scripts/server-monitor.js --name server-monitor
            </code>
          </div>
        )}
      </div>

      {/* ── WhatsApp Config Status ── */}
      <div style={{ ...s.card, marginBottom: 20 }}>
        <div style={s.cardTitle}>WhatsApp Cloud API</div>
        <div style={s.row}>
          <span style={s.rowLabel}>Meta API</span>
          <StatusBadge
            ok={d?.whatsapp?.metaApiConfigured}
            trueText="CONFIGURED"
            falseText="NOT SET UP"
          />
        </div>
        {d?.whatsapp?.recipients?.map((r, i) => (
          <div key={i} style={s.row}>
            <span style={s.rowLabel}>
              {r.label} ({r.phone})
            </span>
            <span style={{ ...s.badge, ...s.badgeInfo }}>Recipient</span>
          </div>
        ))}
      </div>

      {/* ── Actions ── */}
      <div style={{ ...s.card, marginBottom: 20 }}>
        <div style={s.cardTitle}>Actions</div>
        <div style={s.actionsRow}>
          <select
            style={s.select}
            value={selectedPhone}
            onChange={(e) => setSelectedPhone(e.target.value)}
          >
            {PHONES.map((p) => (
              <option key={p.phone} value={p.phone}>
                {p.label} ({p.phone})
              </option>
            ))}
          </select>

          <button
            style={{
              ...s.btn,
              ...s.btnPrimary,
              opacity: sending ? 0.6 : 1,
            }}
            onClick={() => triggerReport(false)}
            disabled={sending}
          >
            Generate Report
          </button>

          <button
            style={{
              ...s.btn,
              ...s.btnSuccess,
              opacity: sending ? 0.6 : 1,
            }}
            onClick={() => triggerReport(true)}
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Report via WhatsApp"}
          </button>

          <button
            style={{
              ...s.btn,
              ...s.btnOutline,
              opacity: sending ? 0.6 : 1,
            }}
            onClick={testWhatsApp}
            disabled={sending}
          >
            Test WhatsApp
          </button>
        </div>
      </div>

      {/* ── Report Output ── */}
      {report && (
        <div style={s.card}>
          <div style={s.cardTitle}>Report Output</div>
          <div style={s.reportBox}>{report}</div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div
          style={{
            ...s.toast,
            background: toast.type === "error" ? "#dc2626" : "#16a34a",
            color: "#fff",
          }}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
