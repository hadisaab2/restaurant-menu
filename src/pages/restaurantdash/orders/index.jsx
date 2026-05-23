import React, { useEffect, useState, useMemo } from "react";
import {
  Container, Hero, HeroTitle, HeroSubtitle,
  KPIGrid, KPICard, KPILabel, KPIValue, KPIHint,
  StatusPills, StatusPill, PillCount,
  FiltersCard, FiltersRow, FilterGroup, FilterLabel, FilterSelect, FilterDateInput,
  TableCard, TableCount, Table, THead, THCell, TRow, TCell,
  StatusBadge, ViewBtn, EmptyState, LoadingState, ErrorState,
  ModalWrap, ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalClose,
  ModalBody, DetailSection, DetailSectionTitle, DetailGrid, DetailItem, DetailLabel, DetailValue,
  ItemsList, ItemRow, ItemName, ItemQty, ItemPrice,
  TotalBar, TotalLabel, TotalValue, StatusSelect,
} from "./styles";
import { getCookie } from "../../../utilities/manageCookies";
import axios from "axios";
import { CUSTOMERS_REGISTERED_URL } from "../../../apis/URLs";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const STATUSES = [
  { value: "", label: "All", color: "#64748b" },
  { value: "pending", label: "Pending", color: "#f59e0b" },
  { value: "confirmed", label: "Confirmed", color: "#3b82f6" },
  { value: "preparing", label: "Preparing", color: "#8b5cf6" },
  { value: "ready", label: "Ready", color: "#10b981" },
  { value: "completed", label: "Completed", color: "#10b981" },
  { value: "cancelled", label: "Cancelled", color: "#ef4444" },
];

const getStatusColor = (status) => {
  return STATUSES.find((s) => s.value === status)?.color || "#64748b";
};

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [customerFilter, setCustomerFilter] = useState("");
  const [registeredCustomers, setRegisteredCustomers] = useState([]);

  const userInfo = (() => {
    try { return JSON.parse(getCookie("userInfo") || "{}"); } catch { return {}; }
  })();
  const restaurantId = userInfo?.restaurant_id;
  const branches = userInfo?.branches || [];

  useEffect(() => {
    if (!restaurantId) return;
    (async () => {
      try {
        const token = getCookie("accessToken");
        const { data } = await axios.get(CUSTOMERS_REGISTERED_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRegisteredCustomers(data.data || []);
      } catch { setRegisteredCustomers([]); }
    })();
  }, [restaurantId]);

  useEffect(() => {
    if (!restaurantId) return;
    fetchOrders();
  }, [restaurantId, startDate, endDate, statusFilter, branchFilter, customerFilter]);

  const fetchOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const token = getCookie("accessToken");
      let url = `${BASE_URL}/orders/restaurant/${restaurantId}`;
      const params = new URLSearchParams();
      if (startDate) params.append("start_date", startDate);
      if (endDate) params.append("end_date", endDate);
      if (statusFilter) params.append("status", statusFilter);
      if (branchFilter) params.append("branch_id", branchFilter);
      if (customerFilter) params.append("customer_user_id", customerFilter);
      if (params.toString()) url += `?${params.toString()}`;
      const { data } = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
      setOrders(data.orders || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  // KPI calculations
  const kpis = useMemo(() => {
    const total = orders.length;
    const revenue = orders.reduce((s, o) => s + parseFloat(o.total || 0), 0);
    const avg = total > 0 ? revenue / total : 0;
    const pending = orders.filter((o) => o.status === "pending").length;
    const completed = orders.filter((o) => o.status === "completed").length;
    const cancelled = orders.filter((o) => o.status === "cancelled").length;
    return { total, revenue, avg, pending, completed, cancelled };
  }, [orders]);

  // Status counts for pills
  const statusCounts = useMemo(() => {
    const counts = { "": orders.length };
    STATUSES.forEach((s) => {
      if (s.value) counts[s.value] = orders.filter((o) => o.status === s.value).length;
    });
    return counts;
  }, [orders]);

  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const formatCurrency = (amount, currency) => {
    if (!amount) return "0";
    const sym = currency === "dollar" ? "$" : currency === "lb" ? "L.L." : currency === "gram" ? "g" : currency === "kilogram" ? "kg" : "";
    return `${parseFloat(amount).toFixed(2)} ${sym}`;
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = getCookie("accessToken");
      await axios.patch(`${BASE_URL}/orders/${orderId}/status`, { status: newStatus }, { headers: { Authorization: `Bearer ${token}` } });
      fetchOrders();
      if (selectedOrder?.id === orderId) setSelectedOrder({ ...selectedOrder, status: newStatus });
    } catch {
      alert("Failed to update order status");
    }
  };

  if (loading && orders.length === 0) return <Container><LoadingState>Loading orders...</LoadingState></Container>;

  return (
    <Container>
      <Hero>
        <HeroTitle>Orders Management</HeroTitle>
        <HeroSubtitle>Track, manage, and analyze all customer orders</HeroSubtitle>
      </Hero>

      {/* KPI Cards */}
      <KPIGrid>
        <KPICard $accent="#5eabb1" $delay="0s">
          <KPILabel>Total Orders</KPILabel>
          <KPIValue>{kpis.total}</KPIValue>
          <KPIHint>In selected period</KPIHint>
        </KPICard>
        <KPICard $accent="#8b5cf6" $delay="0.05s">
          <KPILabel>Revenue</KPILabel>
          <KPIValue>${kpis.revenue.toFixed(2)}</KPIValue>
          <KPIHint>Total earned</KPIHint>
        </KPICard>
        <KPICard $accent="#f59e0b" $delay="0.1s">
          <KPILabel>Avg Order Value</KPILabel>
          <KPIValue>${kpis.avg.toFixed(2)}</KPIValue>
          <KPIHint>Per order average</KPIHint>
        </KPICard>
        <KPICard $accent="#ef4444" $delay="0.15s">
          <KPILabel>Pending</KPILabel>
          <KPIValue>{kpis.pending}</KPIValue>
          <KPIHint>Awaiting action</KPIHint>
        </KPICard>
      </KPIGrid>

      {/* Status Pills */}
      <StatusPills>
        {STATUSES.map((s) => (
          <StatusPill
            key={s.value}
            $active={statusFilter === s.value}
            $color={s.color}
            onClick={() => setStatusFilter(s.value)}
          >
            {s.label}
            {statusCounts[s.value] > 0 && (
              <PillCount $color={s.color}>{statusCounts[s.value]}</PillCount>
            )}
          </StatusPill>
        ))}
      </StatusPills>

      {/* Filters */}
      <FiltersCard>
        <FiltersRow>
          <FilterGroup>
            <FilterLabel>From</FilterLabel>
            <FilterDateInput type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>To</FilterLabel>
            <FilterDateInput type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </FilterGroup>
          {branches.length > 0 && (
            <FilterGroup>
              <FilterLabel>Branch</FilterLabel>
              <FilterSelect value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)}>
                <option value="">All Branches</option>
                {branches.map((b) => <option key={b.id} value={b.id}>{b.en_name || b.ar_name || b.name}</option>)}
              </FilterSelect>
            </FilterGroup>
          )}
          <FilterGroup>
            <FilterLabel>Customer</FilterLabel>
            <FilterSelect value={customerFilter} onChange={(e) => setCustomerFilter(e.target.value)}>
              <option value="">All Customers</option>
              {registeredCustomers.map((c) => <option key={c.id} value={c.id}>{c.full_name || c.email}</option>)}
            </FilterSelect>
          </FilterGroup>
        </FiltersRow>
      </FiltersCard>

      {error && <ErrorState>{error}</ErrorState>}

      {orders.length === 0 && !loading ? (
        <EmptyState>No orders found for the selected filters</EmptyState>
      ) : (
        <TableCard>
          <TableCount><strong>{orders.length}</strong> order{orders.length !== 1 ? "s" : ""} found</TableCount>
          <Table>
            <THead>
              <THCell>ID</THCell>
              <THCell>Customer</THCell>
              <THCell>Phone</THCell>
              <THCell>Date</THCell>
              <THCell>Type</THCell>
              <THCell>Items</THCell>
              <THCell>Total</THCell>
              <THCell>Status</THCell>
              <THCell></THCell>
            </THead>
            {orders.map((order) => (
              <TRow key={order.id} onClick={() => setSelectedOrder(order)}>
                <TCell style={{ fontWeight: 700, color: "#5eabb1" }}>#{order.id}</TCell>
                <TCell style={{ fontWeight: 600 }}>{order.customer_name || "N/A"}</TCell>
                <TCell style={{ fontSize: 12, color: "#64748b" }}>{order.customer_phone || "—"}</TCell>
                <TCell style={{ fontSize: 12 }}>{formatDate(order.order_date)}</TCell>
                <TCell>{order.delivery_type || "—"}</TCell>
                <TCell>{Array.isArray(order.items) ? order.items.length : 0}</TCell>
                <TCell style={{ fontWeight: 700 }}>{formatCurrency(order.total, order.currency)}</TCell>
                <TCell><StatusBadge $color={getStatusColor(order.status)}>{order.status}</StatusBadge></TCell>
                <TCell><ViewBtn onClick={(e) => { e.stopPropagation(); setSelectedOrder(order); }}>View</ViewBtn></TCell>
              </TRow>
            ))}
          </Table>
        </TableCard>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <ModalWrap>
          <ModalOverlay onClick={() => setSelectedOrder(null)} />
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Order #{selectedOrder.id}</ModalTitle>
              <ModalClose onClick={() => setSelectedOrder(null)}>&#10005;</ModalClose>
            </ModalHeader>
            <ModalBody>
              {/* Order Info */}
              <DetailSection>
                <DetailSectionTitle>Order Information</DetailSectionTitle>
                <DetailGrid>
                  <DetailItem>
                    <DetailLabel>Date</DetailLabel>
                    <DetailValue>{formatDate(selectedOrder.order_date)}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Type</DetailLabel>
                    <DetailValue>{selectedOrder.delivery_type}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Status</DetailLabel>
                    <DetailValue style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <StatusBadge $color={getStatusColor(selectedOrder.status)}>{selectedOrder.status}</StatusBadge>
                      <StatusSelect value={selectedOrder.status} onChange={(e) => handleStatusChange(selectedOrder.id, e.target.value)}>
                        {STATUSES.filter((s) => s.value).map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </StatusSelect>
                    </DetailValue>
                  </DetailItem>
                  {selectedOrder.branch && (
                    <DetailItem>
                      <DetailLabel>Branch</DetailLabel>
                      <DetailValue>{selectedOrder.branch.en_name || selectedOrder.branch.ar_name || selectedOrder.branch.name}</DetailValue>
                    </DetailItem>
                  )}
                </DetailGrid>
              </DetailSection>

              {/* Customer Info */}
              <DetailSection>
                <DetailSectionTitle>Customer Information</DetailSectionTitle>
                <DetailGrid>
                  <DetailItem>
                    <DetailLabel>Name</DetailLabel>
                    <DetailValue>{selectedOrder.customer_name || "N/A"}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Phone</DetailLabel>
                    <DetailValue>{selectedOrder.customer_phone || "N/A"}</DetailValue>
                  </DetailItem>
                  {selectedOrder.customerUser && (
                    <DetailItem>
                      <DetailLabel>Account</DetailLabel>
                      <DetailValue>{selectedOrder.customerUser.full_name || selectedOrder.customerUser.email}</DetailValue>
                    </DetailItem>
                  )}
                  {selectedOrder.customer_address && (
                    <DetailItem>
                      <DetailLabel>Address</DetailLabel>
                      <DetailValue>{selectedOrder.customer_address}</DetailValue>
                    </DetailItem>
                  )}
                  {selectedOrder.table_number && (
                    <DetailItem>
                      <DetailLabel>Table</DetailLabel>
                      <DetailValue>#{selectedOrder.table_number}</DetailValue>
                    </DetailItem>
                  )}
                  {selectedOrder.note && (
                    <DetailItem>
                      <DetailLabel>Note</DetailLabel>
                      <DetailValue style={{ fontStyle: "italic", color: "#64748b" }}>{selectedOrder.note}</DetailValue>
                    </DetailItem>
                  )}
                </DetailGrid>
              </DetailSection>

              {/* Items */}
              <DetailSection>
                <DetailSectionTitle>Items ({Array.isArray(selectedOrder.items) ? selectedOrder.items.length : 0})</DetailSectionTitle>
                <ItemsList>
                  {Array.isArray(selectedOrder.items) && selectedOrder.items.map((item, i) => (
                    <ItemRow key={i}>
                      <ItemName>{item.product_name || `Product #${item.product_id}`}</ItemName>
                      <ItemQty>x{item.quantity}</ItemQty>
                      <ItemPrice>{formatCurrency(item.total_price, selectedOrder.currency)}</ItemPrice>
                    </ItemRow>
                  ))}
                </ItemsList>
                <TotalBar>
                  <TotalLabel>Total</TotalLabel>
                  <TotalValue>{formatCurrency(selectedOrder.total, selectedOrder.currency)}</TotalValue>
                </TotalBar>
              </DetailSection>
            </ModalBody>
          </ModalContent>
        </ModalWrap>
      )}
    </Container>
  );
}
