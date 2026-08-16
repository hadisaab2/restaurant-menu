import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

/* ─── Styles ─── */
const s = {
  container: { padding: "0 8px" },
  sectionTitle: {
    fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 16px 0",
  },
  sectionSubtitle: {
    fontSize: 13, color: "#64748b", marginBottom: 20,
  },
  card: {
    background: "#fff", borderRadius: 12, padding: 24,
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    marginBottom: 24,
  },
  cardHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginBottom: 16,
  },
  table: {
    width: "100%", borderCollapse: "collapse", fontSize: 13,
  },
  th: {
    padding: "10px 14px", textAlign: "left", borderBottom: "2px solid #e2e8f0",
    fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  td: {
    padding: "12px 14px", borderBottom: "1px solid #f1f5f9", color: "#0f172a",
  },
  badge: {
    display: "inline-block", padding: "3px 10px", borderRadius: 20,
    fontSize: 11, fontWeight: 600, textTransform: "capitalize",
  },
  badgeActive: {
    background: "#dcfce7", color: "#16a34a",
  },
  badgeInactive: {
    background: "#f1f5f9", color: "#94a3b8",
  },
  btn: {
    padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13,
    fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
  },
  primaryBtn: {
    padding: "9px 18px", borderRadius: 10, border: "none", fontSize: 13,
    fontWeight: 600, cursor: "pointer", background: "#5eabb1", color: "#fff",
  },
  smallBtn: {
    padding: "5px 10px", borderRadius: 8, border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 11, fontWeight: 600, cursor: "pointer", background: "#fff",
    color: "#64748b", transition: "all 0.15s",
  },
  smallBtnDanger: {
    padding: "5px 10px", borderRadius: 8, border: "none",
    fontSize: 11, fontWeight: 600, cursor: "pointer", background: "#fef2f2",
    color: "#dc2626", transition: "all 0.15s",
  },
  select: {
    padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 13, outline: "none", background: "#fff", color: "#0f172a", cursor: "pointer",
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
  toast: {
    position: "fixed", bottom: 24, right: 24, padding: "12px 22px",
    borderRadius: 12, fontSize: 13, fontWeight: 600, color: "#fff",
    zIndex: 9999, boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    transition: "all 0.3s", pointerEvents: "none",
  },
  loading: { padding: 60, textAlign: "center", color: "#94a3b8", fontSize: 14 },
  empty: { padding: 40, textAlign: "center", color: "#94a3b8", fontSize: 14 },
  checkbox: {
    width: 16, height: 16, cursor: "pointer", accentColor: "#5eabb1",
  },
  activitySection: {
    marginTop: 8,
  },
  activityToggle: {
    display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
    fontSize: 14, fontWeight: 600, color: "#0f172a", padding: "10px 0",
    userSelect: "none",
  },
  activityItem: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "8px 14px", borderBottom: "1px solid #f1f5f9", fontSize: 12,
  },
  statBox: {
    display: "inline-flex", alignItems: "center", gap: 4,
    padding: "4px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600,
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
export default function SalesTeam() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", password: "" });
  const [saving, setSaving] = useState(false);

  // Prospect assignment state
  const [prospects, setProspects] = useState([]);
  const [loadingProspects, setLoadingProspects] = useState(false);
  const [selectedProspects, setSelectedProspects] = useState(new Set());
  const [assignToUserId, setAssignToUserId] = useState("");
  const [assigning, setAssigning] = useState(false);

  // Zone assignment state
  const [zoneUserId, setZoneUserId] = useState("");
  const [allZones, setAllZones] = useState([]);
  const [assignedZoneIds, setAssignedZoneIds] = useState(new Set());
  const [loadingZones, setLoadingZones] = useState(false);
  const [savingZones, setSavingZones] = useState(false);

  // Activity log state
  const [activityOpen, setActivityOpen] = useState(false);

  // Toast
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = useCallback((msg, type = "success") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  /* ─── Fetch Sales Users ─── */
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/superadmin/sales-users`, { headers: headers() });
      setUsers(data.data || data || []);
    } catch (e) {
      console.error("Failed to fetch sales users:", e);
      showToast(e.response?.data?.message || "Failed to load sales users", "error");
    }
    setLoading(false);
  }, [showToast]);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  /* ─── Fetch Unassigned Prospects ─── */
  const fetchUnassignedProspects = useCallback(async () => {
    setLoadingProspects(true);
    try {
      const { data } = await axios.get(`${API}/superadmin/prospects?unassigned=true`, { headers: headers() });
      const list = data.data?.prospects || data.data || data || [];
      setProspects(list);
    } catch (e) {
      console.error("Failed to fetch prospects:", e);
    }
    setLoadingProspects(false);
  }, []);

  useEffect(() => { fetchUnassignedProspects(); }, [fetchUnassignedProspects]);

  /* ─── Fetch All Zones ─── */
  useEffect(() => {
    axios
      .get(`${API}/superadmin/zones`, { headers: headers() })
      .then(({ data }) => setAllZones(data.data || data || []))
      .catch((e) => console.error("Failed to fetch zones:", e));
  }, []);

  /* ─── Fetch Zone Assignments for Selected User ─── */
  useEffect(() => {
    if (!zoneUserId) {
      setAssignedZoneIds(new Set());
      return;
    }
    setLoadingZones(true);
    axios
      .get(`${API}/superadmin/sales-users/zone-assignments?user_id=${zoneUserId}`, { headers: headers() })
      .then(({ data }) => {
        const ids = (data.data || data || []).map((z) => z.zone_id || z.id);
        setAssignedZoneIds(new Set(ids));
      })
      .catch((e) => {
        console.error("Failed to fetch zone assignments:", e);
        setAssignedZoneIds(new Set());
      })
      .finally(() => setLoadingZones(false));
  }, [zoneUserId]);

  /* ─── Save Zone Assignments ─── */
  const handleSaveZones = async () => {
    if (!zoneUserId) {
      showToast("Please select a sales user", "error");
      return;
    }
    setSavingZones(true);
    try {
      await axios.post(`${API}/superadmin/sales-users/zone-assignments`, {
        user_id: zoneUserId,
        zone_ids: Array.from(assignedZoneIds),
      }, { headers: headers() });
      showToast("Zone assignments saved successfully");
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to save zone assignments", "error");
    }
    setSavingZones(false);
  };

  const toggleZone = (zoneId) => {
    setAssignedZoneIds((prev) => {
      const next = new Set(prev);
      next.has(zoneId) ? next.delete(zoneId) : next.add(zoneId);
      return next;
    });
  };

  /* ─── Add / Edit Dialog ─── */
  const openAddDialog = () => {
    setEditingUser(null);
    setForm({ full_name: "", email: "", phone: "", password: "" });
    setDialogOpen(true);
  };

  const openEditDialog = (user) => {
    setEditingUser(user);
    setForm({
      full_name: user.full_name || "",
      email: user.email || "",
      phone: user.phone || "",
      password: "",
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.full_name.trim() || !form.email.trim()) {
      showToast("Full name and email are required", "error");
      return;
    }
    if (!editingUser && !form.password.trim()) {
      showToast("Password is required for new users", "error");
      return;
    }

    setSaving(true);
    try {
      const body = {
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
      };
      if (form.password.trim()) {
        body.password = form.password;
      }

      if (editingUser) {
        await axios.put(`${API}/superadmin/sales-users/${editingUser.id}`, body, { headers: headers() });
        showToast("Sales user updated successfully");
      } else {
        await axios.post(`${API}/superadmin/sales-users`, body, { headers: headers() });
        showToast("Sales user created successfully");
      }

      setDialogOpen(false);
      setEditingUser(null);
      setForm({ full_name: "", email: "", phone: "", password: "" });
      fetchUsers();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to save sales user", "error");
    }
    setSaving(false);
  };

  /* ─── Delete ─── */
  const handleDelete = async (user) => {
    if (!window.confirm(`Are you sure you want to delete "${user.full_name}"? This action cannot be undone.`)) return;
    try {
      await axios.delete(`${API}/superadmin/sales-users/${user.id}`, { headers: headers() });
      showToast("Sales user deleted");
      fetchUsers();
      fetchUnassignedProspects();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to delete sales user", "error");
    }
  };

  /* ─── Prospect Assignment ─── */
  const toggleProspect = (id) => {
    setSelectedProspects((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAllProspects = () => {
    if (selectedProspects.size === prospects.length) {
      setSelectedProspects(new Set());
    } else {
      setSelectedProspects(new Set(prospects.map((p) => p.id)));
    }
  };

  const handleAssign = async () => {
    if (!assignToUserId) {
      showToast("Please select a sales user", "error");
      return;
    }
    if (selectedProspects.size === 0) {
      showToast("Please select at least one prospect", "error");
      return;
    }

    setAssigning(true);
    try {
      await axios.post(`${API}/superadmin/sales-users/reassign`, {
        prospect_ids: Array.from(selectedProspects),
        new_sales_user_id: assignToUserId,
      }, { headers: headers() });
      showToast(`${selectedProspects.size} prospect(s) assigned successfully`);
      setSelectedProspects(new Set());
      setAssignToUserId("");
      fetchUnassignedProspects();
      fetchUsers();
    } catch (e) {
      showToast(e.response?.data?.message || "Failed to assign prospects", "error");
    }
    setAssigning(false);
  };

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div style={s.container}>
      {/* ─── Section 1: Sales Users List ─── */}
      <div style={s.card}>
        <div style={s.cardHeader}>
          <div>
            <h2 style={s.sectionTitle}>Sales Users</h2>
            <p style={{ ...s.sectionSubtitle, margin: 0 }}>
              Manage your sales team members
            </p>
          </div>
          <button onClick={openAddDialog} style={s.primaryBtn}>
            + Add Sales User
          </button>
        </div>

        {loading ? (
          <div style={s.loading}>Loading sales users...</div>
        ) : users.length === 0 ? (
          <div style={s.empty}>
            <div style={{ fontSize: 32, marginBottom: 8, opacity: 0.5 }}>No sales users yet</div>
            <div style={{ fontSize: 13 }}>Click "Add Sales User" to create your first one</div>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>User</th>
                  <th style={s.th}>Email</th>
                  <th style={s.th}>Phone</th>
                  <th style={s.th}>Status</th>
                  <th style={s.th}>Prospects</th>
                  <th style={s.th}>Demos</th>
                  <th style={s.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} style={{ transition: "background 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f8fafc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                    <td style={s.td}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 34, height: 34, borderRadius: 10,
                          background: initialsColor(user.full_name),
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0,
                        }}>
                          {getInitials(user.full_name)}
                        </div>
                        <span style={{ fontWeight: 600 }}>{user.full_name}</span>
                      </div>
                    </td>
                    <td style={{ ...s.td, color: "#64748b" }}>{user.email}</td>
                    <td style={{ ...s.td, color: "#64748b" }}>{user.phone || "--"}</td>
                    <td style={s.td}>
                      <span style={{
                        ...s.badge,
                        ...(user.status === "active" ? s.badgeActive : s.badgeInactive),
                      }}>
                        {user.status || "active"}
                      </span>
                    </td>
                    <td style={s.td}>
                      <span style={{ ...s.statBox, background: "#eff6ff", color: "#3b82f6" }}>
                        {user.prospect_count ?? user.prospects_count ?? 0}
                      </span>
                    </td>
                    <td style={s.td}>
                      <span style={{ ...s.statBox, background: "#f0fdf4", color: "#16a34a" }}>
                        {user.demo_count ?? user.demos_count ?? 0}
                      </span>
                    </td>
                    <td style={s.td}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button
                          onClick={() => openEditDialog(user)}
                          style={s.smallBtn}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user)}
                          style={s.smallBtnDanger}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── Section 2: Zone Assignment ─── */}
      <div style={s.card}>
        <div style={s.cardHeader}>
          <div>
            <h2 style={s.sectionTitle}>Zone Assignment</h2>
            <p style={{ ...s.sectionSubtitle, margin: 0 }}>
              Assign zones to sales team members
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <select
              value={zoneUserId}
              onChange={(e) => setZoneUserId(e.target.value)}
              style={s.select}
            >
              <option value="">Select Sales User</option>
              {users.filter((u) => (u.status || "active") === "active").map((u) => (
                <option key={u.id} value={u.id}>{u.full_name}</option>
              ))}
            </select>
            <button
              onClick={handleSaveZones}
              disabled={savingZones || !zoneUserId}
              style={{
                ...s.primaryBtn,
                opacity: (savingZones || !zoneUserId) ? 0.5 : 1,
              }}
            >
              {savingZones ? "Saving..." : "Save Assignments"}
            </button>
          </div>
        </div>

        {!zoneUserId ? (
          <div style={s.empty}>
            <div style={{ fontSize: 13 }}>Select a sales user above to manage their zone assignments</div>
          </div>
        ) : loadingZones ? (
          <div style={s.loading}>Loading zone assignments...</div>
        ) : allZones.length === 0 ? (
          <div style={s.empty}>
            <div style={{ fontSize: 13 }}>No zones found</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: "4px 0" }}>
            {allZones.map((zone) => (
              <label
                key={zone.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 10,
                  border: `1px solid ${assignedZoneIds.has(zone.id) ? "#5eabb1" : "rgba(148,163,184,0.25)"}`,
                  background: assignedZoneIds.has(zone.id) ? "rgba(94,171,177,0.08)" : "#fff",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "#0f172a",
                  fontWeight: 500,
                  transition: "all 0.15s",
                  userSelect: "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={assignedZoneIds.has(zone.id)}
                  onChange={() => toggleZone(zone.id)}
                  style={s.checkbox}
                />
                {zone.name || zone.city || `Zone ${zone.id}`}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ─── Section 3: Prospect Assignment ─── */}
      <div style={s.card}>
        <div style={s.cardHeader}>
          <div>
            <h2 style={s.sectionTitle}>Assign Prospects</h2>
            <p style={{ ...s.sectionSubtitle, margin: 0 }}>
              Assign unassigned prospects to sales team members
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <select
              value={assignToUserId}
              onChange={(e) => setAssignToUserId(e.target.value)}
              style={s.select}
            >
              <option value="">Select Sales User</option>
              {users.filter((u) => (u.status || "active") === "active").map((u) => (
                <option key={u.id} value={u.id}>{u.full_name}</option>
              ))}
            </select>
            <button
              onClick={handleAssign}
              disabled={assigning || !assignToUserId || selectedProspects.size === 0}
              style={{
                ...s.primaryBtn,
                opacity: (assigning || !assignToUserId || selectedProspects.size === 0) ? 0.5 : 1,
              }}
            >
              {assigning ? "Assigning..." : `Assign Selected (${selectedProspects.size})`}
            </button>
          </div>
        </div>

        {loadingProspects ? (
          <div style={s.loading}>Loading unassigned prospects...</div>
        ) : prospects.length === 0 ? (
          <div style={s.empty}>
            <div style={{ fontSize: 13 }}>No unassigned prospects found</div>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={selectedProspects.size === prospects.length && prospects.length > 0}
                  onChange={toggleAllProspects}
                  style={s.checkbox}
                />
                Select All ({prospects.length} prospects)
              </label>
            </div>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={{ ...s.th, width: 40 }}></th>
                  <th style={s.th}>Business Name</th>
                  <th style={s.th}>Phone</th>
                  <th style={s.th}>Category</th>
                  <th style={s.th}>Status</th>
                  <th style={s.th}>Demo</th>
                </tr>
              </thead>
              <tbody>
                {prospects.map((p) => (
                  <tr key={p.id}
                    style={{ background: selectedProspects.has(p.id) ? "#f0fdfa" : "transparent", transition: "background 0.15s", cursor: "pointer" }}
                    onClick={() => toggleProspect(p.id)}>
                    <td style={s.td}>
                      <input
                        type="checkbox"
                        checked={selectedProspects.has(p.id)}
                        onChange={() => toggleProspect(p.id)}
                        onClick={(e) => e.stopPropagation()}
                        style={s.checkbox}
                      />
                    </td>
                    <td style={{ ...s.td, fontWeight: 600 }}>{p.business_name}</td>
                    <td style={{ ...s.td, color: "#64748b" }}>{p.business_phone || "--"}</td>
                    <td style={{ ...s.td, color: "#64748b", textTransform: "capitalize" }}>
                      {p.category || "Uncategorized"}
                    </td>
                    <td style={s.td}>
                      <span style={{
                        ...s.badge,
                        background: p.status === "won" ? "#dcfce7" : p.status === "contacted" ? "#fffbeb" : "#f1f5f9",
                        color: p.status === "won" ? "#16a34a" : p.status === "contacted" ? "#f59e0b" : "#94a3b8",
                      }}>
                        {p.status || "draft"}
                      </span>
                    </td>
                    <td style={s.td}>
                      {p.demo_url ? (
                        <a
                          href={p.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: "#5eabb1", textDecoration: "none", fontSize: 12 }}
                        >
                          View Demo
                        </a>
                      ) : (
                        <span style={{ color: "#cbd5e1", fontSize: 12 }}>No demo</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── Section 4: Activity Log ─── */}
      <div style={s.card}>
        <div
          style={s.activityToggle}
          onClick={() => setActivityOpen(!activityOpen)}
        >
          <span style={{
            display: "inline-block", transition: "transform 0.2s",
            transform: activityOpen ? "rotate(90deg)" : "rotate(0deg)",
            fontSize: 12,
          }}>
            &#9654;
          </span>
          <span>Activity Summary</span>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 400 }}>
            ({users.length} sales user{users.length !== 1 ? "s" : ""})
          </span>
        </div>

        {activityOpen && (
          <div style={s.activitySection}>
            {users.length === 0 ? (
              <div style={s.empty}>No activity data available</div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={s.table}>
                  <thead>
                    <tr>
                      <th style={s.th}>Sales User</th>
                      <th style={s.th}>Prospects Assigned</th>
                      <th style={s.th}>Demos Created</th>
                      <th style={s.th}>Status</th>
                      <th style={s.th}>Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td style={s.td}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{
                              width: 28, height: 28, borderRadius: 8,
                              background: initialsColor(user.full_name),
                              display: "flex", alignItems: "center", justifyContent: "center",
                              color: "#fff", fontWeight: 700, fontSize: 11, flexShrink: 0,
                            }}>
                              {getInitials(user.full_name)}
                            </div>
                            <span style={{ fontWeight: 600, fontSize: 13 }}>{user.full_name}</span>
                          </div>
                        </td>
                        <td style={s.td}>
                          <span style={{ ...s.statBox, background: "#eff6ff", color: "#3b82f6" }}>
                            {user.prospect_count ?? user.prospects_count ?? 0}
                          </span>
                        </td>
                        <td style={s.td}>
                          <span style={{ ...s.statBox, background: "#f0fdf4", color: "#16a34a" }}>
                            {user.demo_count ?? user.demos_count ?? 0}
                          </span>
                        </td>
                        <td style={s.td}>
                          <span style={{
                            ...s.badge,
                            ...(user.status === "active" || !user.status ? s.badgeActive : s.badgeInactive),
                          }}>
                            {user.status || "active"}
                          </span>
                        </td>
                        <td style={{ ...s.td, color: "#94a3b8", fontSize: 12 }}>
                          {user.last_active_at
                            ? new Date(user.last_active_at).toLocaleDateString()
                            : user.updated_at
                            ? new Date(user.updated_at).toLocaleDateString()
                            : "--"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ─── Add/Edit Sales User Dialog ─── */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>
          {editingUser ? "Edit Sales User" : "Add Sales User"}
        </DialogTitle>
        <DialogContent sx={{ paddingTop: "8px !important" }}>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Full Name *</label>
            <input
              style={s.dialogInput}
              value={form.full_name}
              onChange={set("full_name")}
              placeholder="John Doe"
            />
          </div>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Email *</label>
            <input
              style={s.dialogInput}
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="john@example.com"
            />
          </div>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>Phone</label>
            <input
              style={s.dialogInput}
              value={form.phone}
              onChange={set("phone")}
              placeholder="+961 XX XXX XXX"
            />
          </div>
          <div style={s.dialogField}>
            <label style={s.dialogLabel}>
              Password {editingUser ? "(leave empty to keep current)" : "*"}
            </label>
            <input
              style={s.dialogInput}
              type="password"
              value={form.password}
              onChange={set("password")}
              placeholder={editingUser ? "Leave empty to keep current" : "Enter password"}
            />
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button
            onClick={() => setDialogOpen(false)}
            style={{ ...s.btn, background: "#f1f5f9", color: "#64748b" }}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            style={{ ...s.primaryBtn, opacity: saving ? 0.6 : 1 }}
            disabled={saving}
          >
            {saving ? "Saving..." : editingUser ? "Update User" : "Create User"}
          </button>
        </DialogActions>
      </Dialog>

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
