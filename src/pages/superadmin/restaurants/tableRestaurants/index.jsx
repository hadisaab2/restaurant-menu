import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Delete, Edit, EditDeleteIcons, Table, TableWrapper, Td, Th, Tr } from "./styles";
import { getCookie } from "../../../../utilities/manageCookies";


const API = process.env.REACT_APP_BASE_URL;

function formatPaymentDate(value) {
  if (!value) return "\u2014";
  const d = typeof value === "string" ? value.split("T")[0] : value;
  if (!d) return "\u2014";
  // Convert yyyy-mm-dd to dd/mm/yyyy
  const parts = d.split("-");
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return d;
}

const REMINDER_TEMPLATES = [
  {
    name: "Post-War",
    ar: "مرحباً {restaurant_name}،\n\nنظراً للظروف الصعبة التي مرّ بها البلد خلال الفترة الماضية بسبب الحرب، حرص فريق Menugic على عدم مطالبة العملاء بتسديد الاشتراكات خلال هذه المرحلة، تقديراً للظروف التي يمر بها الجميع.\n\nنود تذكيركم بلطف بأن دفعة اشتراك Menugic بقيمة {amount}$، والمستحقة بتاريخ {payment_date}، ما زالت غير مسددة.\n\nيمكن تسديد الدفعة عبر Whish على الرقم:\n70886986\n\nقائمتكم متاحة على:\n{restaurant_url}\n\nيرجى ترتيب عملية الدفع للحفاظ على القائمة فعّالة. نشكركم على تفهّمكم وثقتكم بـ Menugic.",
    en: "Hi {restaurant_name},\n\nDue to the difficult circumstances the country has experienced because of the war, the Menugic team chose not to follow up on subscription payments during this period, in consideration of the challenges faced by everyone.\n\nThis is a friendly reminder that your Menugic subscription payment of ${amount}, which was due on {payment_date}, is still outstanding.\n\nPayment can be made via Whish to:\n70886986\n\nYour menu is available at:\n{restaurant_url}\n\nPlease arrange the payment to keep your menu active. Thank you for your understanding and continued trust in Menugic.",
  },
  {
    name: "Standard",
    ar: "مرحباً {restaurant_name}،\n\nنود تذكيركم بأن دفعة اشتراك Menugic بقيمة {amount}$، مستحقة بتاريخ {payment_date}.\n\nيمكن تسديد الدفعة عبر Whish على الرقم:\n70886986\n\nقائمتكم متاحة على:\n{restaurant_url}\n\nيرجى ترتيب الدفع للحفاظ على القائمة فعّالة. شكراً لثقتكم بـ Menugic!",
    en: "Hi {restaurant_name},\n\nThis is a friendly reminder that your Menugic subscription payment of ${amount}, is due on {payment_date}.\n\nPayment can be made via Whish to:\n70886986\n\nYour menu is available at:\n{restaurant_url}\n\nPlease arrange the payment to keep your menu active. Thank you for your trust in Menugic!",
  },
  {
    name: "Overdue",
    ar: "مرحباً {restaurant_name}،\n\nدفعة اشتراك Menugic بقيمة {amount}$، كانت مستحقة بتاريخ {payment_date}، وما زالت غير مسددة.\n\nقائمتكم على {restaurant_url} قد يتم إيقافها قريباً.\n\nيمكن تسديد الدفعة عبر Whish على الرقم:\n70886986\n\nيرجى الدفع لتجنب انقطاع الخدمة. تواصلوا معنا إذا بحاجة لمساعدة!",
    en: "Hi {restaurant_name},\n\nYour Menugic subscription payment of ${amount}, which was due on {payment_date}, is still outstanding.\n\nYour menu at {restaurant_url} may be deactivated soon.\n\nPayment can be made via Whish to:\n70886986\n\nPlease make the payment to avoid service interruption. Contact us if you need help!",
  },
];

function isPaymentDatePassed(paymentDate) {
  if (!paymentDate) return false;
  const d = typeof paymentDate === "string" ? paymentDate.split("T")[0] : paymentDate;
  if (!d) return false;
  return d < new Date().toISOString().slice(0, 10);
}

const toggleStyle = (active) => ({
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "20px",
  fontSize: "11px",
  fontWeight: 600,
  cursor: "pointer",
  border: "none",
  background: active ? "rgba(94,171,177,0.15)" : "rgba(148,163,184,0.1)",
  color: active ? "#5eabb1" : "#94a3b8",
  transition: "all 0.15s",
});

export default function TableRestaurants({
  restaurants,
  setSelectedIdForAction,
  setIsPopupOpen,
  handleEdit,
  onRefresh,
}) {
  const [reminderOpen, setReminderOpen] = useState(null); // restaurant object
  const [reminderTemplate, setReminderTemplate] = useState(0);
  const [reminderMessage, setReminderMessage] = useState("");
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [bulkDeleting, setBulkDeleting] = useState(false);

  const allIds = restaurants.map((r) => r.restaurant_id);
  const allSelected = allIds.length > 0 && allIds.every((id) => selectedIds.has(id));

  const toggleOne = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(allIds));
    }
  };

  const handleBulkDelete = async () => {
    setBulkDeleting(true);
    try {
      const token = getCookie("accessToken");
      for (const id of selectedIds) {
        await axios.delete(`${API}/restaurants/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setSelectedIds(new Set());
      setBulkDeleteOpen(false);
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error("Bulk delete failed:", err);
    } finally {
      setBulkDeleting(false);
    }
  };

  const toggleLanding = async (restaurant) => {
    try {
      const newVal = !restaurant.showInMainWebsite;
      await axios.put(
        `${API}/restaurants/${restaurant.restaurant_id}`,
        { showInMainWebsite: newVal },
        { headers: { Authorization: `Bearer ${getCookie("accessToken")}` } }
      );
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error("Failed to toggle landing visibility:", err);
    }
  };

  const openReminder = (restaurant) => {
    setReminderOpen(restaurant);
    setReminderTemplate(0);
    buildMessage(restaurant, 0);
  };

  const buildMessage = (restaurant, templateIdx) => {
    const tpl = REMINDER_TEMPLATES[templateIdx];
    const name = restaurant.restaurantName || restaurant.username || "";
    const url = `${restaurant.username || restaurant.restaurantName || ""}.menugic.com`;
    const amount = restaurant.amount != null ? restaurant.amount : "—";
    const date = formatPaymentDate(restaurant.payment_date);

    const fill = (text) => text
      .replace(/\{restaurant_name\}/g, name)
      .replace(/\{restaurant_url\}/g, url)
      .replace(/\{amount\}/g, String(amount))
      .replace(/\{payment_date\}/g, date);

    const msg = fill(tpl.ar) + "\n\n" + fill(tpl.en);
    setReminderMessage(msg);
  };

  const sendReminder = () => {
    const phone = reminderOpen?.phone_number || "";
    const digits = phone.replace(/\D/g, "");
    const intlPhone = digits.startsWith("961") ? digits : "961" + (digits.startsWith("0") ? digits.slice(1) : digits);
    const encoded = encodeURIComponent(reminderMessage);
    window.open(`https://web.whatsapp.com/send?phone=${intlPhone}&text=${encoded}`, "_blank");
    setReminderOpen(null);
  };

  return (
    <>
      {selectedIds.size > 0 && (
        <div style={{
          display: "flex", alignItems: "center", gap: 12, padding: "8px 16px",
          background: "rgba(239,68,68,0.06)", borderRadius: 8, marginBottom: 8,
        }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#dc2626" }}>
            {selectedIds.size} selected
          </span>
          <button
            onClick={() => setBulkDeleteOpen(true)}
            style={{
              padding: "6px 16px", borderRadius: 8, border: "none",
              background: "#dc2626", color: "#fff", fontSize: 12,
              fontWeight: 600, cursor: "pointer",
            }}
          >
            Delete Selected
          </button>
          <button
            onClick={() => setSelectedIds(new Set())}
            style={{
              padding: "6px 16px", borderRadius: 8, border: "none",
              background: "#f1f5f9", color: "#64748b", fontSize: 12,
              fontWeight: 600, cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
      )}
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th style={{ width: 36 }}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  style={{ cursor: "pointer" }}
                />
              </Th>
              <Th>User name</Th>
              <Th>Restaurant name</Th>
              <Th>Link</Th>
              <Th>Phone</Th>
              <Th>Payment date</Th>
              <Th>Amount</Th>
              <Th>Is paid</Th>
              <Th>Landing</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => {
              const needRenewal = isPaymentDatePassed(restaurant.payment_date);
              const onLanding = restaurant.showInMainWebsite === true || restaurant.showInMainWebsite === 1;
              return (
                <Tr key={restaurant.restaurant_id} $needRenewal={needRenewal}>
                  <Td>
                    <input
                      type="checkbox"
                      checked={selectedIds.has(restaurant.restaurant_id)}
                      onChange={() => toggleOne(restaurant.restaurant_id)}
                      style={{ cursor: "pointer" }}
                    />
                  </Td>
                  <Td>{restaurant.username}</Td>
                  <Td>{restaurant.restaurantName}</Td>
                  <Td>
                    <a
                      href={`https://${restaurant.username}.menugic.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#5eabb1", textDecoration: "none", fontSize: 12, fontWeight: 500 }}
                    >
                      {restaurant.username}.menugic.com
                    </a>
                  </Td>
                  <Td>{restaurant.phone_number}</Td>
                  <Td>{formatPaymentDate(restaurant.payment_date)}</Td>
                  <Td>{restaurant.amount != null ? restaurant.amount : "\u2014"}</Td>
                  <Td>
                    <span style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      background: restaurant.is_paid ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.08)",
                      color: restaurant.is_paid ? "#059669" : "#dc2626",
                    }}>
                      {restaurant.is_paid ? "Yes" : "No"}
                    </span>
                  </Td>
                  <Td>
                    <button
                      style={toggleStyle(onLanding)}
                      onClick={() => toggleLanding(restaurant)}
                    >
                      {onLanding ? "Shown" : "Hidden"}
                    </button>
                  </Td>
                  <Td>
                    <EditDeleteIcons>
                      <button
                        onClick={() => openReminder(restaurant)}
                        title="Send payment reminder"
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, padding: "2px 6px" }}
                      >
                        💬
                      </button>
                      <Edit onClick={() => handleEdit(restaurant)} />
                      <Delete
                        onClick={() => {
                          setSelectedIdForAction(restaurant.restaurant_id);
                          setIsPopupOpen(true);
                        }}
                      />
                    </EditDeleteIcons>
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>

      {/* Payment Reminder Dialog */}
      <Dialog open={!!reminderOpen} onClose={() => setReminderOpen(null)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Payment Reminder</DialogTitle>
        <DialogContent>
          {reminderOpen && (
            <div style={{ fontSize: 13 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12, background: "#f8fafc", borderRadius: 8, padding: 12 }}>
                <div><strong>Restaurant:</strong> {reminderOpen.restaurantName}</div>
                <div><strong>URL:</strong> menugic.com/{reminderOpen.restaurantName || reminderOpen.username}</div>
                <div><strong>Payment date:</strong> {formatPaymentDate(reminderOpen.payment_date)}</div>
                <div><strong>Amount:</strong> ${reminderOpen.amount || "—"}</div>
                <div><strong>Phone:</strong> {reminderOpen.phone_number || "N/A"}</div>
              </div>

              <div style={{ marginBottom: 10 }}>
                <strong style={{ fontSize: 12 }}>Template:</strong>
                <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                  {REMINDER_TEMPLATES.map((t, i) => (
                    <button key={i}
                      onClick={() => { setReminderTemplate(i); buildMessage(reminderOpen, i); }}
                      style={{
                        padding: "5px 12px", borderRadius: 8, border: "none", fontSize: 11, fontWeight: 600, cursor: "pointer",
                        background: reminderTemplate === i ? "#8b5cf6" : "#f1f5f9",
                        color: reminderTemplate === i ? "#fff" : "#64748b",
                      }}>
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={reminderMessage}
                onChange={(e) => setReminderMessage(e.target.value)}
                rows={10}
                dir="rtl"
                style={{
                  width: "100%", padding: "10px 12px", borderRadius: 8,
                  border: "1px solid #e2e8f0", fontSize: 13, outline: "none",
                  boxSizing: "border-box", resize: "vertical", fontFamily: "inherit",
                  lineHeight: 1.6, background: "#fafafa",
                }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setReminderOpen(null)} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button onClick={() => { navigator.clipboard.writeText(reminderMessage); }} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#334155", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Copy</button>
          <button onClick={sendReminder} disabled={!reminderOpen?.phone_number} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#5eabb1", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", opacity: reminderOpen?.phone_number ? 1 : 0.5 }}>Open WhatsApp</button>
        </DialogActions>
      </Dialog>

      {/* Bulk Delete Confirmation Dialog */}
      <Dialog open={bulkDeleteOpen} onClose={() => setBulkDeleteOpen(false)}>
        <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>Delete {selectedIds.size} Restaurants</DialogTitle>
        <DialogContent>
          <div style={{ fontSize: 13, color: "#64748b" }}>
            Are you sure you want to delete <strong>{selectedIds.size}</strong> restaurants? This action cannot be undone.
          </div>
        </DialogContent>
        <DialogActions sx={{ padding: "12px 24px 20px" }}>
          <button onClick={() => setBulkDeleteOpen(false)} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancel</button>
          <button
            onClick={handleBulkDelete}
            disabled={bulkDeleting}
            style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#dc2626", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", opacity: bulkDeleting ? 0.6 : 1 }}
          >
            {bulkDeleting ? "Deleting..." : "Delete All"}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
