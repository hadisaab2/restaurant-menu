import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox,
} from "@mui/material";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";

const API = process.env.REACT_APP_BASE_URL;
const headers = () => ({ Authorization: `Bearer ${getCookie("accessToken")}` });

const STAGES = [
  { id: "first", label: "Level 1 — First Contact", labelAr: "المستوى ١ — أول تواصل", color: "#2D7A4E", bg: "#E8F5EC" },
  { id: "reminder_1", label: "Level 2 — Reminder 1", labelAr: "المستوى ٢ — تذكير ١", color: "#C67F17", bg: "#FEF3D6" },
  { id: "reminder_2", label: "Level 3 — Reminder 2 (Final)", labelAr: "المستوى ٣ — تذكير ٢ (أخير)", color: "#C44B3F", bg: "#FDECEA" },
];

const PLACEHOLDERS = [
  { tag: "{business_name}", label: "Business Name", sample: "Royal Donuts" },
  { tag: "{demo_url}", label: "Demo URL", sample: "https://menugic.com/royal-donuts" },
];

export default function Messages() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ stage: "first", language: "en", body: "", is_default: false });
  const [showPreview, setShowPreview] = useState(false);

  const fetchTemplates = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/superadmin/prospects/templates`, { headers: headers() });
      setTemplates(data.data || []);
    } catch (err) {
      console.error("Failed to load templates:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchTemplates(); }, [fetchTemplates]);

  const openAdd = (stage) => {
    setEditing(null);
    setForm({ stage, language: "en", body: "", is_default: false });
    setShowPreview(false);
    setDialogOpen(true);
  };

  const openEdit = (tmpl) => {
    setEditing(tmpl);
    setForm({ stage: tmpl.stage, language: tmpl.language, body: tmpl.body || "", is_default: !!tmpl.is_default });
    setShowPreview(false);
    setDialogOpen(true);
  };

  const save = async () => {
    try {
      if (editing) {
        await axios.put(`${API}/superadmin/prospects/templates/${editing.id}`, { body: form.body, active: true }, { headers: headers() });
      } else {
        await axios.post(`${API}/superadmin/prospects/templates`, { stage: form.stage, language: form.language, body: form.body }, { headers: headers() });
      }
      setDialogOpen(false);
      fetchTemplates();
    } catch (err) {
      console.error("Failed to save template:", err);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this message template?")) return;
    try {
      await axios.delete(`${API}/superadmin/prospects/templates/${id}`, { headers: headers() });
      fetchTemplates();
    } catch (err) {
      console.error("Failed to delete template:", err);
    }
  };

  const insertPlaceholder = (tag) => {
    const textarea = document.getElementById("tmpl-body");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newBody = form.body.substring(0, start) + tag + form.body.substring(end);
    setForm({ ...form, body: newBody });
    setTimeout(() => { textarea.focus(); textarea.selectionStart = textarea.selectionEnd = start + tag.length; }, 0);
  };

  const getPreview = (body) => {
    let text = body || "";
    PLACEHOLDERS.forEach((p) => { text = text.replaceAll(p.tag, `<strong style="color:#C8B896">${p.sample}</strong>`); });
    return text;
  };

  const getTemplatesForStage = (stageId) => templates.filter((t) => t.stage === stageId);

  if (loading) return <div style={{ padding: 32, textAlign: "center", color: "#999" }}>Loading templates...</div>;

  return (
    <div style={{ padding: "0 4px" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>Message Templates</h2>
        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>
          Manage the messages sent to prospects after creating their demo. Organized by outreach level.
        </p>
      </div>

      {/* 3 Columns — one per stage */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {STAGES.map((stage) => {
          const stageTemplates = getTemplatesForStage(stage.id);
          const enTemplates = stageTemplates.filter((t) => t.language === "en");
          const arTemplates = stageTemplates.filter((t) => t.language === "ar");

          return (
            <div key={stage.id} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e4e0", overflow: "hidden" }}>
              {/* Stage Header */}
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #f0edea", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: stage.color }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{stage.label}</span>
                </div>
                <span style={{ fontSize: 11, color: "#999", background: "#f5f3f0", padding: "2px 8px", borderRadius: 12 }}>
                  {stageTemplates.length} template{stageTemplates.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div style={{ padding: 16 }}>
                {/* English templates */}
                {enTemplates.length > 0 && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 8 }}>English</div>
                    {enTemplates.map((tmpl) => (
                      <TemplateCard key={tmpl.id} tmpl={tmpl} onEdit={() => openEdit(tmpl)} onDelete={() => remove(tmpl.id)} stageColor={stage.color} />
                    ))}
                  </div>
                )}

                {/* Arabic templates */}
                {arTemplates.length > 0 && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 8 }}>العربية</div>
                    {arTemplates.map((tmpl) => (
                      <TemplateCard key={tmpl.id} tmpl={tmpl} onEdit={() => openEdit(tmpl)} onDelete={() => remove(tmpl.id)} stageColor={stage.color} isAr />
                    ))}
                  </div>
                )}

                {stageTemplates.length === 0 && (
                  <div style={{ textAlign: "center", padding: "20px 0", color: "#bbb", fontSize: 13 }}>
                    No templates yet
                  </div>
                )}

                {/* Add buttons */}
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  {enTemplates.length === 0 && (
                    <button onClick={() => { openAdd(stage.id); setForm((f) => ({ ...f, language: "en" })); }}
                      style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px dashed #d0cdc8", background: "none", fontSize: 12, fontWeight: 600, color: "#888", cursor: "pointer" }}>
                      + English
                    </button>
                  )}
                  {arTemplates.length === 0 && (
                    <button onClick={() => { openAdd(stage.id); setForm((f) => ({ ...f, language: "ar" })); }}
                      style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px dashed #d0cdc8", background: "none", fontSize: 12, fontWeight: 600, color: "#888", cursor: "pointer" }}>
                      + العربية
                    </button>
                  )}
                  {enTemplates.length > 0 && arTemplates.length > 0 && (
                    <button onClick={() => openAdd(stage.id)}
                      style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px dashed #d0cdc8", background: "none", fontSize: 12, fontWeight: 600, color: "#888", cursor: "pointer" }}>
                      + Add Variation
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder Legend */}
      <div style={{ marginTop: 24, padding: 16, background: "#fff", borderRadius: 12, border: "1px solid #e8e4e0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>Available Placeholders</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {PLACEHOLDERS.map((p) => (
            <div key={p.tag} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", background: "#f5f3f0", borderRadius: 6, fontSize: 12 }}>
              <code style={{ fontWeight: 700, color: "#5eabb1" }}>{p.tag}</code>
              <span style={{ color: "#999" }}>→ {p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Edit / Add Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 15 }}>
          {editing ? "Edit Message Template" : "Add Message Template"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "12px !important" }}>
          {/* Stage + Language (read-only for edit) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <FormControl size="small" fullWidth>
              <InputLabel>Level</InputLabel>
              <Select label="Level" value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} disabled={!!editing}>
                {STAGES.map((s) => <MenuItem key={s.id} value={s.id}>{s.label}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl size="small" fullWidth>
              <InputLabel>Language</InputLabel>
              <Select label="Language" value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })} disabled={!!editing}>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ar">العربية (Arabic)</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Placeholder insert buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "#999", lineHeight: "28px" }}>Insert:</span>
            {PLACEHOLDERS.map((p) => (
              <button key={p.tag} onClick={() => insertPlaceholder(p.tag)}
                style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid #d0cdc8", background: "#f5f3f0", fontSize: 11, fontWeight: 600, cursor: "pointer", color: "#5eabb1" }}>
                {p.tag}
              </button>
            ))}
          </div>

          {/* Message body */}
          <TextField
            id="tmpl-body"
            size="small"
            label="Message Body"
            multiline
            rows={6}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            placeholder={form.language === "ar" ? "مرحبا {business_name}، ..." : "Hi {business_name}, ..."}
            inputProps={{ dir: form.language === "ar" ? "rtl" : "ltr" }}
          />

          {/* Character count */}
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#999" }}>
            <span>{form.body.length} characters</span>
            <button onClick={() => setShowPreview(!showPreview)}
              style={{ background: "none", border: "none", color: "#5eabb1", fontWeight: 600, fontSize: 11, cursor: "pointer" }}>
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </div>

          {/* Preview */}
          {showPreview && (
            <div style={{
              padding: 14, background: "#f8f6f3", borderRadius: 10, border: "1px solid #e8e4e0",
              fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap",
              direction: form.language === "ar" ? "rtl" : "ltr",
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#999", marginBottom: 8 }}>
                Preview with sample data
              </div>
              <div dangerouslySetInnerHTML={{ __html: getPreview(form.body) }} />
            </div>
          )}
        </DialogContent>
        <DialogActions sx={{ p: "12px 24px 20px" }}>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={save} disabled={!form.body.trim()} sx={{ background: "#1a1a1a" }}>
            {editing ? "Update" : "Add Template"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ── Template Card Component ──
function TemplateCard({ tmpl, onEdit, onDelete, stageColor, isAr }) {
  const [expanded, setExpanded] = useState(false);
  const body = tmpl.body || "";
  const truncated = body.length > 120 ? body.substring(0, 120) + "..." : body;

  // Highlight placeholders
  const highlight = (text) => {
    return text.replace(/\{business_name\}/g, '<span style="color:#5eabb1;font-weight:600">{business_name}</span>')
               .replace(/\{demo_url\}/g, '<span style="color:#5eabb1;font-weight:600">{demo_url}</span>');
  };

  return (
    <div style={{
      padding: 12, borderRadius: 8, border: "1px solid #f0edea", marginBottom: 8,
      background: "#fafaf8", direction: isAr ? "rtl" : "ltr",
    }}>
      {/* Language badge + default */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: isAr ? "#f0e8f0" : "#e8f0f0", color: isAr ? "#7a5a8a" : "#2d6b6b" }}>
            {isAr ? "AR" : "EN"}
          </span>
          {tmpl.is_default && (
            <span style={{ fontSize: 10, fontWeight: 600, color: "#C8B896" }}>★ Default</span>
          )}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button onClick={onEdit}
            style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid #e0ddd8", background: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer", color: "#555" }}>
            Edit
          </button>
          <button onClick={onDelete}
            style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid #f0ddd8", background: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer", color: "#c44b3f" }}>
            Delete
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ fontSize: 12, lineHeight: 1.6, color: "#555", whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: highlight(expanded ? body : truncated) }} />

      {body.length > 120 && (
        <button onClick={() => setExpanded(!expanded)}
          style={{ background: "none", border: "none", fontSize: 11, color: "#5eabb1", fontWeight: 600, cursor: "pointer", marginTop: 4, padding: 0 }}>
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
