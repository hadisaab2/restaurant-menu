import React, { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, IconButton, Switch, FormControlLabel,
} from "@mui/material";
import { useGetStaff } from "../../../apis/clinic/getStaff";
import { useAddStaff } from "../../../apis/clinic/addStaff";
import { useEditStaff } from "../../../apis/clinic/editStaff";
import { useDeleteStaff } from "../../../apis/clinic/deleteStaff";
import { useGetFaqs } from "../../../apis/clinic/getFaqs";
import { useAddFaq } from "../../../apis/clinic/addFaq";
import { useEditFaq } from "../../../apis/clinic/editFaq";
import { useDeleteFaq } from "../../../apis/clinic/deleteFaq";
import { useGetPackages } from "../../../apis/clinic/getPackages";
import { useAddPackage } from "../../../apis/clinic/addPackage";
import { useEditPackage } from "../../../apis/clinic/editPackage";
import { useDeletePackage } from "../../../apis/clinic/deletePackage";
import { useGetGallery } from "../../../apis/clinic/getGallery";
import { useAddGallery } from "../../../apis/clinic/addGallery";
import { useEditGallery } from "../../../apis/clinic/editGallery";
import { useDeleteGallery } from "../../../apis/clinic/deleteGallery";

const sectionStyle = { marginBottom: 32, padding: 20, background: "#fff", borderRadius: 12, border: "1px solid #e8e4e0" };
const headerStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 };
const titleStyle = { fontSize: 15, fontWeight: 700, color: "#262324" };
const cardStyle = { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#fafaf8", borderRadius: 8, marginBottom: 8, border: "1px solid #f0edea" };
const btnStyle = { padding: "6px 16px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer" };
const addBtnStyle = { ...btnStyle, background: "#262324", color: "#fff" };
const editBtnStyle = { ...btnStyle, background: "#f0edea", color: "#262324" };
const delBtnStyle = { ...btnStyle, background: "#fde8e6", color: "#c44b3f" };

export default function ClinicManager({ restaurantId }) {
  if (!restaurantId) return null;
  return (
    <div style={{ marginTop: 24 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#262324" }}>
        Clinic Management
      </h3>
      <StaffSection restaurantId={restaurantId} />
      <FaqSection restaurantId={restaurantId} />
      <PackageSection restaurantId={restaurantId} />
      <GallerySection restaurantId={restaurantId} />
    </div>
  );
}

// ═══════════════════════════════════════════
// STAFF
// ═══════════════════════════════════════════
function StaffSection({ restaurantId }) {
  const { response, refetch } = useGetStaff({ restaurant_id: restaurantId });
  const { mutate: addMutate } = useAddStaff({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: editMutate } = useEditStaff({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: deleteMutate } = useDeleteStaff({ restaurant_id: restaurantId, onSuccess: refetch });
  const items = response?.data ?? [];

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ en_name: "", ar_name: "", en_role: "", ar_role: "", en_bio: "", ar_bio: "", photo_url: "", priority: 0 });

  const openAdd = () => { setEditing(null); setForm({ en_name: "", ar_name: "", en_role: "", ar_role: "", en_bio: "", ar_bio: "", photo_url: "", priority: 0 }); setOpen(true); };
  const openEdit = (item) => { setEditing(item); setForm({ en_name: item.en_name || "", ar_name: item.ar_name || "", en_role: item.en_role || "", ar_role: item.ar_role || "", en_bio: item.en_bio || "", ar_bio: item.ar_bio || "", photo_url: item.photo_url || "", priority: item.priority || 0 }); setOpen(true); };
  const save = () => {
    if (editing) editMutate({ id: editing.id, ...form, priority: parseInt(form.priority, 10) });
    else addMutate({ restaurant_id: restaurantId, ...form, priority: parseInt(form.priority, 10) });
    setOpen(false);
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>Team / Staff ({items.length})</span>
        <button style={addBtnStyle} onClick={openAdd}>+ Add Member</button>
      </div>
      {items.map((m) => (
        <div key={m.id} style={cardStyle}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f0eae5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#b39b8e", flexShrink: 0, overflow: "hidden" }}>
            {m.photo_url ? <img src={m.photo_url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (m.en_name || "?").substring(0, 2).toUpperCase()}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{m.en_name} {m.ar_name ? `/ ${m.ar_name}` : ""}</div>
            <div style={{ fontSize: 11, color: "#7a7472" }}>{m.en_role}</div>
          </div>
          <button style={editBtnStyle} onClick={() => openEdit(m)}>Edit</button>
          <button style={delBtnStyle} onClick={() => { if (window.confirm("Delete this staff member?")) deleteMutate(m.id); }}>Delete</button>
        </div>
      ))}
      {items.length === 0 && <div style={{ color: "#a9a3a0", fontSize: 13, textAlign: "center", padding: 20 }}>No team members yet</div>}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 15 }}>{editing ? "Edit Staff Member" : "Add Staff Member"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "12px !important" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <TextField size="small" label="Name (EN)" value={form.en_name} onChange={(e) => setForm({ ...form, en_name: e.target.value })} />
            <TextField size="small" label="Name (AR)" value={form.ar_name} onChange={(e) => setForm({ ...form, ar_name: e.target.value })} />
            <TextField size="small" label="Role (EN)" value={form.en_role} onChange={(e) => setForm({ ...form, en_role: e.target.value })} />
            <TextField size="small" label="Role (AR)" value={form.ar_role} onChange={(e) => setForm({ ...form, ar_role: e.target.value })} />
          </div>
          <TextField size="small" label="Bio (EN)" multiline rows={2} value={form.en_bio} onChange={(e) => setForm({ ...form, en_bio: e.target.value })} />
          <TextField size="small" label="Bio (AR)" multiline rows={2} value={form.ar_bio} onChange={(e) => setForm({ ...form, ar_bio: e.target.value })} />
          <TextField size="small" label="Photo URL" value={form.photo_url} onChange={(e) => setForm({ ...form, photo_url: e.target.value })} />
          <TextField size="small" label="Priority" type="number" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
        </DialogContent>
        <DialogActions sx={{ p: "12px 24px 20px" }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={save} sx={{ background: "#262324" }}>{editing ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ═══════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════
function FaqSection({ restaurantId }) {
  const { response, refetch } = useGetFaqs({ restaurant_id: restaurantId });
  const { mutate: addMutate } = useAddFaq({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: editMutate } = useEditFaq({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: deleteMutate } = useDeleteFaq({ restaurant_id: restaurantId, onSuccess: refetch });
  const items = response?.data ?? [];

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ en_question: "", ar_question: "", en_answer: "", ar_answer: "", priority: 0 });

  const openAdd = () => { setEditing(null); setForm({ en_question: "", ar_question: "", en_answer: "", ar_answer: "", priority: 0 }); setOpen(true); };
  const openEdit = (item) => { setEditing(item); setForm({ en_question: item.en_question || "", ar_question: item.ar_question || "", en_answer: item.en_answer || "", ar_answer: item.ar_answer || "", priority: item.priority || 0 }); setOpen(true); };
  const save = () => {
    if (editing) editMutate({ id: editing.id, ...form, priority: parseInt(form.priority, 10) });
    else addMutate({ restaurant_id: restaurantId, ...form, priority: parseInt(form.priority, 10) });
    setOpen(false);
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>FAQ ({items.length})</span>
        <button style={addBtnStyle} onClick={openAdd}>+ Add FAQ</button>
      </div>
      {items.map((f) => (
        <div key={f.id} style={cardStyle}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{f.en_question}</div>
            {f.ar_question && <div style={{ fontSize: 11, color: "#7a7472", direction: "rtl" }}>{f.ar_question}</div>}
          </div>
          <button style={editBtnStyle} onClick={() => openEdit(f)}>Edit</button>
          <button style={delBtnStyle} onClick={() => { if (window.confirm("Delete this FAQ?")) deleteMutate(f.id); }}>Delete</button>
        </div>
      ))}
      {items.length === 0 && <div style={{ color: "#a9a3a0", fontSize: 13, textAlign: "center", padding: 20 }}>No FAQs yet</div>}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 15 }}>{editing ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "12px !important" }}>
          <TextField size="small" label="Question (EN)" value={form.en_question} onChange={(e) => setForm({ ...form, en_question: e.target.value })} />
          <TextField size="small" label="Question (AR)" value={form.ar_question} onChange={(e) => setForm({ ...form, ar_question: e.target.value })} />
          <TextField size="small" label="Answer (EN)" multiline rows={3} value={form.en_answer} onChange={(e) => setForm({ ...form, en_answer: e.target.value })} />
          <TextField size="small" label="Answer (AR)" multiline rows={3} value={form.ar_answer} onChange={(e) => setForm({ ...form, ar_answer: e.target.value })} />
          <TextField size="small" label="Priority" type="number" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
        </DialogContent>
        <DialogActions sx={{ p: "12px 24px 20px" }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={save} sx={{ background: "#262324" }}>{editing ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ═══════════════════════════════════════════
// PACKAGES
// ═══════════════════════════════════════════
function PackageSection({ restaurantId }) {
  const { response, refetch } = useGetPackages({ restaurant_id: restaurantId });
  const { mutate: addMutate } = useAddPackage({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: editMutate } = useEditPackage({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: deleteMutate } = useDeletePackage({ restaurant_id: restaurantId, onSuccess: refetch });
  const items = response?.data ?? [];

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ en_name: "", ar_name: "", en_description: "", ar_description: "", price: "", original_price: "", en_badge: "", ar_badge: "", priority: 0 });

  const openAdd = () => { setEditing(null); setForm({ en_name: "", ar_name: "", en_description: "", ar_description: "", price: "", original_price: "", en_badge: "", ar_badge: "", priority: 0 }); setOpen(true); };
  const openEdit = (item) => { setEditing(item); setForm({ en_name: item.en_name || "", ar_name: item.ar_name || "", en_description: item.en_description || "", ar_description: item.ar_description || "", price: item.price || "", original_price: item.original_price || "", en_badge: item.en_badge || "", ar_badge: item.ar_badge || "", priority: item.priority || 0 }); setOpen(true); };
  const save = () => {
    const payload = { ...form, price: form.price ? parseFloat(form.price) : null, original_price: form.original_price ? parseFloat(form.original_price) : null, priority: parseInt(form.priority, 10) };
    if (editing) editMutate({ id: editing.id, ...payload });
    else addMutate({ restaurant_id: restaurantId, ...payload });
    setOpen(false);
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>Packages & Offers ({items.length})</span>
        <button style={addBtnStyle} onClick={openAdd}>+ Add Package</button>
      </div>
      {items.map((p) => (
        <div key={p.id} style={cardStyle}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{p.en_name} {p.ar_name ? `/ ${p.ar_name}` : ""}</div>
            <div style={{ fontSize: 11, color: "#7a7472" }}>
              {p.price ? `$${p.price}` : "No price"} {p.original_price ? `(was $${p.original_price})` : ""} {p.en_badge ? `· ${p.en_badge}` : ""}
            </div>
          </div>
          <button style={editBtnStyle} onClick={() => openEdit(p)}>Edit</button>
          <button style={delBtnStyle} onClick={() => { if (window.confirm("Delete this package?")) deleteMutate(p.id); }}>Delete</button>
        </div>
      ))}
      {items.length === 0 && <div style={{ color: "#a9a3a0", fontSize: 13, textAlign: "center", padding: 20 }}>No packages yet</div>}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 15 }}>{editing ? "Edit Package" : "Add Package"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "12px !important" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <TextField size="small" label="Name (EN)" value={form.en_name} onChange={(e) => setForm({ ...form, en_name: e.target.value })} />
            <TextField size="small" label="Name (AR)" value={form.ar_name} onChange={(e) => setForm({ ...form, ar_name: e.target.value })} />
          </div>
          <TextField size="small" label="Description (EN)" multiline rows={2} value={form.en_description} onChange={(e) => setForm({ ...form, en_description: e.target.value })} />
          <TextField size="small" label="Description (AR)" multiline rows={2} value={form.ar_description} onChange={(e) => setForm({ ...form, ar_description: e.target.value })} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <TextField size="small" label="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <TextField size="small" label="Original Price" type="number" value={form.original_price} onChange={(e) => setForm({ ...form, original_price: e.target.value })} />
            <TextField size="small" label="Badge (EN)" value={form.en_badge} onChange={(e) => setForm({ ...form, en_badge: e.target.value })} placeholder="e.g. Save $70" />
            <TextField size="small" label="Badge (AR)" value={form.ar_badge} onChange={(e) => setForm({ ...form, ar_badge: e.target.value })} />
          </div>
          <TextField size="small" label="Priority" type="number" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
        </DialogContent>
        <DialogActions sx={{ p: "12px 24px 20px" }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={save} sx={{ background: "#262324" }}>{editing ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ═══════════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════════
function GallerySection({ restaurantId }) {
  const { response, refetch } = useGetGallery({ restaurant_id: restaurantId });
  const { mutate: addMutate } = useAddGallery({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: editMutate } = useEditGallery({ restaurant_id: restaurantId, onSuccess: refetch });
  const { mutate: deleteMutate } = useDeleteGallery({ restaurant_id: restaurantId, onSuccess: refetch });
  const items = response?.data ?? [];

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ image_url: "", type: "general", en_caption: "", ar_caption: "", priority: 0 });

  const openAdd = () => { setEditing(null); setForm({ image_url: "", type: "general", en_caption: "", ar_caption: "", priority: 0 }); setOpen(true); };
  const openEdit = (item) => { setEditing(item); setForm({ image_url: item.image_url || "", type: item.type || "general", en_caption: item.en_caption || "", ar_caption: item.ar_caption || "", priority: item.priority || 0 }); setOpen(true); };
  const save = () => {
    if (editing) editMutate({ id: editing.id, ...form, priority: parseInt(form.priority, 10) });
    else addMutate({ restaurant_id: restaurantId, ...form, priority: parseInt(form.priority, 10) });
    setOpen(false);
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>Gallery ({items.length})</span>
        <button style={addBtnStyle} onClick={openAdd}>+ Add Image</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 8 }}>
        {items.map((g) => (
          <div key={g.id} style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #f0edea", position: "relative" }}>
            <img src={g.image_url} alt={g.en_caption || ""} style={{ width: "100%", height: 90, objectFit: "cover" }} onError={(e) => { e.target.style.background = "#f0eae5"; e.target.style.height = "90px"; }} />
            <div style={{ padding: "6px 8px", fontSize: 10 }}>
              <span style={{ background: "#f0edea", padding: "1px 6px", borderRadius: 4, fontSize: 9, fontWeight: 600 }}>{g.type}</span>
              {g.en_caption && <div style={{ marginTop: 4, color: "#7a7472" }}>{g.en_caption}</div>}
            </div>
            <div style={{ position: "absolute", top: 4, right: 4, display: "flex", gap: 4 }}>
              <button onClick={() => openEdit(g)} style={{ width: 22, height: 22, borderRadius: 4, background: "rgba(255,255,255,0.9)", border: "none", fontSize: 10, cursor: "pointer" }}>✏️</button>
              <button onClick={() => { if (window.confirm("Delete?")) deleteMutate(g.id); }} style={{ width: 22, height: 22, borderRadius: 4, background: "rgba(255,255,255,0.9)", border: "none", fontSize: 10, cursor: "pointer" }}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <div style={{ color: "#a9a3a0", fontSize: 13, textAlign: "center", padding: 20 }}>No gallery images yet</div>}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 15 }}>{editing ? "Edit Gallery Item" : "Add Gallery Item"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "12px !important" }}>
          <TextField size="small" label="Image URL" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} required />
          <TextField size="small" label="Type" select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} SelectProps={{ native: true }}>
            <option value="general">General</option>
            <option value="before">Before</option>
            <option value="after">After</option>
            <option value="result">Result</option>
          </TextField>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <TextField size="small" label="Caption (EN)" value={form.en_caption} onChange={(e) => setForm({ ...form, en_caption: e.target.value })} />
            <TextField size="small" label="Caption (AR)" value={form.ar_caption} onChange={(e) => setForm({ ...form, ar_caption: e.target.value })} />
          </div>
          <TextField size="small" label="Priority" type="number" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
        </DialogContent>
        <DialogActions sx={{ p: "12px 24px 20px" }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={save} sx={{ background: "#262324" }}>{editing ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
