import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

export const TEMPLATES = [
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

export const COLOR_PRESETS = [
  { name: "Clean Teal", color: "#5eabb1" },
  { name: "Warm Gold", color: "#b8943d" },
  { name: "Dark Coral", color: "#e85d5d" },
  { name: "Fresh Green", color: "#388e3c" },
  { name: "Royal Purple", color: "#6a3de8" },
  { name: "Sunset Orange", color: "#e65100" },
  { name: "Ocean Blue", color: "#1565c0" },
  { name: "Rose Pink", color: "#c2185b" },
];

export const uploadLogo = async (file) => {
  const fd = new FormData();
  fd.append("image", file);
  const { data } = await axios.post(`${API}/superadmin/upload-image`, fd, {
    headers: { ...headers(), "Content-Type": "multipart/form-data" },
  });
  return data.fileName || null;
};

export default function ReviewDialog({ open, rows, setRows, onClose, onBuild, title }) {
  const [building, setBuilding] = useState(false);
  const [buildResults, setBuildResults] = useState(null);

  const updateRow = (idx, key, value) => {
    setRows((prev) => prev.map((r, i) => (i === idx ? { ...r, [key]: value } : r)));
  };

  const handleBuildAll = async () => {
    setBuilding(true);
    try {
      const results = await onBuild(rows);
      setBuildResults(results);
    } catch (err) {
      setBuildResults({ summary: { success: 0, errors: rows.length, skipped: 0 }, results: [{ status: "error", message: err.message }] });
    }
    setBuilding(false);
  };

  const handleClose = () => {
    setBuildResults(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={building ? undefined : handleClose} maxWidth="lg" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
        {title || `Review & Build Demos (${rows.length})`}
      </DialogTitle>
      <DialogContent>
        {!buildResults ? (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr>
                  {["", "Business", "Category", "Template", "Colors", "Logo", "IG", "Links"].map((h) => (
                    <th key={h || "_exclude"} style={{ padding: "8px 6px", textAlign: "left", borderBottom: "2px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#475569" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.id || i} style={i % 2 ? { background: "#f8fafc" } : {}}>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9" }}>
                      <button onClick={() => setRows((prev) => prev.filter((_, j) => j !== i))} title="Exclude from build" style={{ background: "none", border: "none", cursor: "pointer", color: "#dc2626", fontSize: 14, padding: 0 }}>✕</button>
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontWeight: 600, minWidth: 100 }}>{r.business_name}</td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 11 }}>{r.category}</td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", minWidth: 130 }}>
                      <select value={r.template} onChange={(e) => updateRow(i, "template", e.target.value)} style={{ padding: "4px 6px", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 11, width: "100%" }}>
                        {TEMPLATES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                      </select>
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", minWidth: 160 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {COLOR_PRESETS.map((c) => (
                          <div key={c.name} onClick={() => updateRow(i, "colorPreset", c.name)} title={c.name}
                            style={{ width: 28, height: 28, borderRadius: 6, background: c.color, cursor: "pointer", border: r.colorPreset === c.name ? "3px solid #0f172a" : "2px solid transparent", transition: "border 0.15s", boxSizing: "border-box" }} />
                        ))}
                      </div>
                      <div style={{ fontSize: 10, color: "#64748b", marginTop: 4 }}>{r.colorPreset || "Default"}</div>
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", minWidth: 90 }}>
                      <input type="file" accept="image/*" onChange={(e) => updateRow(i, "logoFile", e.target.files?.[0] || null)} style={{ fontSize: 10, width: 80 }} />
                      {r.logoFile && <div style={{ fontSize: 10, color: "#10b981", marginTop: 2 }}>{r.logoFile.name}</div>}
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 11 }}>
                      {r.ig_handle && <a href={`https://instagram.com/${r.ig_handle}`} target="_blank" rel="noopener noreferrer" style={{ color: "#8b5cf6" }}>@{r.ig_handle}</a>}
                    </td>
                    <td style={{ padding: "6px", borderBottom: "1px solid #f1f5f9", fontSize: 10, maxWidth: 200 }}>
                      {r.links ? (
                        <ul style={{ margin: 0, padding: "0 0 0 14px", listStyle: "disc" }}>
                          {r.links.split(" | ").filter(Boolean).map((link, li) => {
                            const parts = link.split(": ");
                            const label = parts.length > 1 ? parts[0] : null;
                            const url = parts.length > 1 ? parts.slice(1).join(": ") : parts[0];
                            return (
                              <li key={li} style={{ marginBottom: 2 }}>
                                {label && <span style={{ fontWeight: 600, color: "#475569" }}>{label}: </span>}
                                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", wordBreak: "break-all" }}>{url.length > 35 ? url.substring(0, 35) + "..." : url}</a>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <span style={{ color: "#94a3b8" }}>-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#dcfce7", border: "1px solid #bbf7d0" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#16a34a" }}>{buildResults.summary?.success || 0}</div>
                <div style={{ fontSize: 11, color: "#166534" }}>Built</div>
              </div>
              <div style={{ padding: "10px 16px", borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626" }}>{buildResults.summary?.errors || 0}</div>
                <div style={{ fontSize: 11, color: "#991b1b" }}>Errors</div>
              </div>
            </div>
            {buildResults.results?.map((r, i) => (
              <div key={i} style={{ padding: "8px 12px", marginBottom: 6, borderRadius: 8, background: r.status === "success" ? "#f0fdf4" : "#fef2f2", fontSize: 12 }}>
                <strong>{r.business_name || `Item ${i + 1}`}</strong>: {r.status} {r.demo_url && <span> — <a href={r.demo_url} target="_blank" rel="noopener noreferrer">{r.demo_url}</a></span>} {r.message && <span style={{ color: "#dc2626" }}> — {r.message}</span>}
              </div>
            ))}
          </div>
        )}
      </DialogContent>
      <DialogActions sx={{ padding: "12px 24px 20px" }}>
        {!buildResults ? (
          <>
            <button onClick={handleClose} disabled={building} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
            <button onClick={handleBuildAll} disabled={building} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#5eabb1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", opacity: building ? 0.6 : 1 }}>
              {building ? "Building..." : `Build ${rows.length} Demo${rows.length > 1 ? "s" : ""}`}
            </button>
          </>
        ) : (
          <button onClick={handleClose} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#5eabb1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Done</button>
        )}
      </DialogActions>
    </Dialog>
  );
}
