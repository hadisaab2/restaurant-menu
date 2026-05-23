import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";
import {
  CUSTOMERS_REGISTERED_URL,
  CUSTOMERS_REGISTERED_ORDERS_URL,
} from "../../../apis/URLs";
import {
  Container, Hero, HeroTitle, HeroSubtitle,
  KPIGrid, KPICard, KPILabel, KPIValue, KPIHint,
  SearchCard, SearchRow, SearchInput, SearchBtn, ExportBtn,
  TableCard, TableCount, Table, THead, THCell, TRow, TCell,
  Avatar, NameCell, OrderBadge, ViewBtn,
  EmptyState, LoadingState, ErrorState,
  ModalWrap, ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalClose,
  ModalBody, CustomerInfoBar, InfoItem, InfoLabel, InfoValue,
  OrdersList, OrderRow, OrderId, OrderDate, OrderStatus, OrderTotal,
} from "./styles";

const AVATAR_COLORS = ["#5eabb1", "#8b5cf6", "#f59e0b", "#ef4444", "#3b82f6", "#10b981", "#ec4899", "#06b6d4"];

const getStatusColor = (s) => {
  const m = { pending: "#f59e0b", confirmed: "#3b82f6", preparing: "#8b5cf6", ready: "#10b981", completed: "#10b981", cancelled: "#ef4444" };
  return m[s] || "#64748b";
};

export default function RegisteredCustomers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailOrders, setDetailOrders] = useState([]);
  const [exporting, setExporting] = useState(false);

  const userInfo = (() => { try { return JSON.parse(getCookie("userInfo") || "{}"); } catch { return {}; } })();
  const restaurantId = userInfo?.restaurant_id;

  const fetchList = async () => {
    if (!restaurantId) return;
    setLoading(true);
    setError("");
    try {
      const token = getCookie("accessToken");
      const params = new URLSearchParams();
      if (q.trim()) params.append("q", q.trim());
      const url = `${CUSTOMERS_REGISTERED_URL}${params.toString() ? `?${params.toString()}` : ""}`;
      const { data } = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
      setRows(data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load customers");
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchList(); }, [restaurantId]);

  const handleExport = async () => {
    try {
      setExporting(true);
      const token = getCookie("accessToken");
      const BASE_URL = process.env.REACT_APP_BASE_URL;
      const response = await axios.get(`${BASE_URL}/customers/registered/export`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "registered_customers.xlsx";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    } catch (e) {
      alert("Export failed: " + (e.response?.data?.message || e.message));
    } finally {
      setExporting(false);
    }
  };

  const openDetail = async (customer) => {
    setSelected(customer);
    setDetailLoading(true);
    setDetailOrders([]);
    try {
      const token = getCookie("accessToken");
      const { data } = await axios.get(CUSTOMERS_REGISTERED_ORDERS_URL(customer.id), { headers: { Authorization: `Bearer ${token}` } });
      setDetailOrders(data.orders || []);
    } catch {
      setDetailOrders([]);
    } finally {
      setDetailLoading(false);
    }
  };

  const kpis = useMemo(() => {
    const total = rows.length;
    const totalOrders = rows.reduce((s, r) => s + (r.order_count || 0), 0);
    const withOrders = rows.filter((r) => (r.order_count || 0) > 0).length;
    const now = new Date();
    const thisMonth = rows.filter((r) => {
      if (!r.created_at) return false;
      const d = new Date(r.created_at);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
    return { total, totalOrders, withOrders, thisMonth };
  }, [rows]);

  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const formatDateTime = (d) => {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  };

  if (loading && rows.length === 0) return <Container><LoadingState>Loading customers...</LoadingState></Container>;

  return (
    <Container>
      <Hero>
        <HeroTitle>Registered Customers</HeroTitle>
        <HeroSubtitle>View and manage customers who created accounts on your menu</HeroSubtitle>
      </Hero>

      <KPIGrid>
        <KPICard $accent="#5eabb1" $delay="0s">
          <KPILabel>Total Customers</KPILabel>
          <KPIValue>{kpis.total}</KPIValue>
          <KPIHint>Registered accounts</KPIHint>
        </KPICard>
        <KPICard $accent="#3b82f6" $delay="0.05s">
          <KPILabel>Total Orders</KPILabel>
          <KPIValue>{kpis.totalOrders}</KPIValue>
          <KPIHint>From registered customers</KPIHint>
        </KPICard>
        <KPICard $accent="#10b981" $delay="0.1s">
          <KPILabel>Active Customers</KPILabel>
          <KPIValue>{kpis.withOrders}</KPIValue>
          <KPIHint>Placed at least 1 order</KPIHint>
        </KPICard>
        <KPICard $accent="#8b5cf6" $delay="0.15s">
          <KPILabel>New This Month</KPILabel>
          <KPIValue>{kpis.thisMonth}</KPIValue>
          <KPIHint>Registered recently</KPIHint>
        </KPICard>
      </KPIGrid>

      <SearchCard>
        <SearchRow>
          <SearchInput
            type="search"
            placeholder="Search by email, phone, or name..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchList()}
          />
          <SearchBtn onClick={fetchList}>Search</SearchBtn>
          <ExportBtn onClick={handleExport} disabled={exporting || rows.length === 0}>
            {exporting ? "Exporting..." : "Export Excel"}
          </ExportBtn>
        </SearchRow>
      </SearchCard>

      {error && <ErrorState>{error}</ErrorState>}

      {rows.length === 0 && !loading ? (
        <EmptyState>No registered customers found</EmptyState>
      ) : (
        <TableCard>
          <TableCount><strong>{rows.length}</strong> registered customer{rows.length !== 1 ? "s" : ""}</TableCount>
          <Table>
            <THead>
              <THCell>Customer</THCell>
              <THCell>Email</THCell>
              <THCell>Phone</THCell>
              <THCell>Orders</THCell>
              <THCell>Registered</THCell>
              <THCell></THCell>
            </THead>
            {rows.map((r, i) => (
              <TRow key={r.id} onClick={() => openDetail(r)}>
                <TCell>
                  <NameCell>
                    <Avatar $bg={AVATAR_COLORS[i % AVATAR_COLORS.length]}>{getInitials(r.full_name)}</Avatar>
                    {r.full_name || "—"}
                  </NameCell>
                </TCell>
                <TCell style={{ fontSize: 12, color: "#64748b" }}>{r.email || "—"}</TCell>
                <TCell style={{ fontSize: 12 }}>{r.phone_number || "—"}</TCell>
                <TCell><OrderBadge>{r.order_count ?? 0} orders</OrderBadge></TCell>
                <TCell style={{ fontSize: 12, color: "#64748b" }}>{formatDate(r.created_at)}</TCell>
                <TCell><ViewBtn onClick={(e) => { e.stopPropagation(); openDetail(r); }}>View</ViewBtn></TCell>
              </TRow>
            ))}
          </Table>
        </TableCard>
      )}

      {selected && (
        <ModalWrap>
          <ModalOverlay onClick={() => setSelected(null)} />
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{selected.full_name || selected.email}</ModalTitle>
              <ModalClose onClick={() => setSelected(null)}>&#10005;</ModalClose>
            </ModalHeader>
            <ModalBody>
              <CustomerInfoBar>
                <InfoItem>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>{selected.email || "—"}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue>{selected.phone_number || "—"}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Registered</InfoLabel>
                  <InfoValue>{formatDate(selected.created_at)}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Total Orders</InfoLabel>
                  <InfoValue>{selected.order_count ?? 0}</InfoValue>
                </InfoItem>
              </CustomerInfoBar>

              {detailLoading ? (
                <LoadingState>Loading orders...</LoadingState>
              ) : detailOrders.length === 0 ? (
                <EmptyState style={{ padding: 30, fontSize: 13 }}>No orders linked to this account yet</EmptyState>
              ) : (
                <OrdersList>
                  {detailOrders.map((o) => (
                    <OrderRow key={o.id}>
                      <div>
                        <OrderId>#{o.id}</OrderId>
                        <OrderDate>{formatDateTime(o.order_date)}</OrderDate>
                      </div>
                      <OrderStatus $color={getStatusColor(o.status)}>{o.status}</OrderStatus>
                      <OrderTotal>{parseFloat(o.total || 0).toFixed(2)} {o.currency || ""}</OrderTotal>
                    </OrderRow>
                  ))}
                </OrdersList>
              )}
            </ModalBody>
          </ModalContent>
        </ModalWrap>
      )}
    </Container>
  );
}
