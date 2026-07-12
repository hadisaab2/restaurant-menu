import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Delete, Edit, EditDeleteIcons, Table, TableWrapper, Td, Th, Tr } from "./styles";
import { getCookie } from "../../../../utilities/manageCookies";
import { openWhatsApp } from "../../../../utilities/formatWhatsappNumber";

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
    name: "Standard",
    en: "Hi {restaurant_name}! This is a friendly reminder that your Menugic subscription payment of ${amount} is due on {payment_date}. Your menu is live at: {restaurant_url}. Please arrange payment to keep your menu active. Thank you!",
    ar: "مرحبا {restaurant_name}! هذا تذكير بأن دفعة اشتراك Menugic بقيمة {amount}$ مستحقة بتاريخ {payment_date}. قائمتكم متاحة على: {restaurant_url}. يرجى ترتيب الدفع للحفاظ على القائمة فعالة. شكراً!",
  },
  {
    name: "Overdue",
    en: "Hi {restaurant_name}! Your Menugic subscription (${amount}) was due on {payment_date}. Your menu at {restaurant_url} may be deactivated soon. Please make the payment to avoid service interruption. Contact us if you need help!",
    ar: "مرحبا {restaurant_name}! دفعة اشتراك Menugic بقيمة {amount}$ كانت مستحقة بتاريخ {payment_date}. قائمتكم على {restaurant_url} قد يتم إيقافها قريباً. يرجى الدفع لتجنب انقطاع الخدمة. تواصلوا معنا اذا بحاجة لمساعدة!",
  },
  {
    name: "Gentle",
    en: "Hi {restaurant_name}! Just a heads up — your Menugic renewal (${amount}) is coming up on {payment_date}. Your digital menu at {restaurant_url} is performing well! Let us know if you'd like to continue.",
    ar: "مرحبا {restaurant_name}! تذكير بسيط — تجديد اشتراك Menugic بقيمة {amount}$ بتاريخ {payment_date}. قائمتكم الرقمية على {restaurant_url} شغالة تمام! خبرونا اذا بدكم تكملوا.",
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
    const url = `menugic.com/${restaurant.restaurantName || restaurant.username || ""}`;
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
    openWhatsApp(intlPhone, reminderMessage);
    setReminderOpen(null);
  };

  return (
    <>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>User name</Th>
              <Th>Restaurant name</Th>
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
                  <Td>{restaurant.username}</Td>
                  <Td>{restaurant.restaurantName}</Td>
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
    </>
  );
}
