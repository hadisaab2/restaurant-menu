import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  HeaderTitle,
  FiltersContainer,
  DateInput,
  DateLabel,
  FilterRow,
  Select,
  OrdersTable,
  TableHeader,
  TableRow,
  TableCell,
  StatusBadge,
  ViewButton,
  EmptyState,
  LoadingState,
  ErrorState,
  OrderDetailsModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  DetailRow,
  DetailLabel,
  DetailValue,
  ItemsList,
  ItemRow,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalRow,
} from "./styles";
import { getCookie } from "../../../utilities/manageCookies";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getOrders = async (restaurantId, startDate, endDate, status, branchId) => {
  try {
    const token = getCookie("accessToken");
    let url = `${BASE_URL}/orders/restaurant/${restaurantId}`;
    const params = new URLSearchParams();
    if (startDate) params.append("start_date", startDate);
    if (endDate) params.append("end_date", endDate);
    if (status) params.append("status", status);
    if (branchId) params.append("branch_id", branchId);
    if (params.toString()) url += `?${params.toString()}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.orders || [];
  } catch (error) {
    throw error;
  }
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

  const userInformation = (() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    try {
      return JSON.parse(storedUserInfo);
    } catch (err) {
      return {};
    }
  })();

  const restaurantId = userInformation?.restaurant_id;
  const branches = userInformation?.branches || [];

  useEffect(() => {
    if (!restaurantId) return;
    fetchOrders();
  }, [restaurantId, startDate, endDate, statusFilter, branchFilter]);

  const fetchOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const ordersData = await getOrders(
        restaurantId,
        startDate,
        endDate,
        statusFilter,
        branchFilter
      );
      setOrders(ordersData);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch orders");
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCurrency = (amount, currency) => {
    if (!amount) return "0";
    const symbol =
      currency === "dollar"
        ? "$"
        : currency === "lb"
        ? "L.L."
        : currency === "gram"
        ? "g"
        : currency === "kilogram"
        ? "kg"
        : "";
    return `${parseFloat(amount).toFixed(2)} ${symbol}`;
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: "#ff9800",
      confirmed: "#2196f3",
      preparing: "#9c27b0",
      ready: "#4caf50",
      completed: "#4caf50",
      cancelled: "#f44336",
    };
    return colors[status] || "#757575";
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = getCookie("accessToken");
      await axios.patch(
        `${BASE_URL}/orders/${orderId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Refresh orders
      fetchOrders();
      // Update selected order if open
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder({ ...selectedOrder, status: newStatus });
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      alert("Failed to update order status");
    }
  };

  if (loading && orders.length === 0) {
    return (
      <Container>
        <LoadingState>Loading orders...</LoadingState>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Orders</HeaderTitle>
      </Header>

      <FiltersContainer>
        <FilterRow>
          <DateLabel>
            Start Date:
            <DateInput
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </DateLabel>
          <DateLabel>
            End Date:
            <DateInput
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </DateLabel>
          <DateLabel>
            Status:
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </Select>
          </DateLabel>
          {branches.length > 0 && (
            <DateLabel>
              Branch:
              <Select
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
              >
                <option value="">All Branches</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.en_name || branch.ar_name}
                  </option>
                ))}
              </Select>
            </DateLabel>
          )}
        </FilterRow>
      </FiltersContainer>

      {error && <ErrorState>{error}</ErrorState>}

      {orders.length === 0 && !loading ? (
        <EmptyState>No orders found</EmptyState>
      ) : (
        <OrdersTable>
          <TableHeader>
            <TableCell>Order ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableHeader>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>#{order.id}</TableCell>
              <TableCell>{formatDate(order.order_date)}</TableCell>
              <TableCell>{order.customer_name || "N/A"}</TableCell>
              <TableCell>{order.customer_phone || "N/A"}</TableCell>
              <TableCell>{order.delivery_type || "N/A"}</TableCell>
              <TableCell>
                {Array.isArray(order.items) ? order.items.length : 0} item(s)
              </TableCell>
              <TableCell>
                {formatCurrency(order.total, order.currency)}
              </TableCell>
              <TableCell>
                <StatusBadge $color={getStatusColor(order.status)}>
                  {order.status}
                </StatusBadge>
              </TableCell>
              <TableCell>
                <ViewButton onClick={() => handleViewOrder(order)}>
                  View
                </ViewButton>
              </TableCell>
            </TableRow>
          ))}
        </OrdersTable>
      )}

      {selectedOrder && (
        <OrderDetailsModal>
          <ModalOverlay onClick={handleCloseModal} />
          <ModalContent>
            <ModalHeader>
              <HeaderTitle>Order Details #{selectedOrder.id}</HeaderTitle>
              <ModalCloseButton onClick={handleCloseModal}>×</ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <DetailRow>
                <DetailLabel>Order Date:</DetailLabel>
                <DetailValue>{formatDate(selectedOrder.order_date)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Status:</DetailLabel>
                <DetailValue>
                  <StatusBadge $color={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </StatusBadge>
                  <Select
                    value={selectedOrder.status}
                    onChange={(e) =>
                      handleStatusChange(selectedOrder.id, e.target.value)
                    }
                    style={{ marginLeft: "10px", padding: "4px 8px" }}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </Select>
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Delivery Type:</DetailLabel>
                <DetailValue>{selectedOrder.delivery_type}</DetailValue>
              </DetailRow>
              {selectedOrder.branch && (
                <DetailRow>
                  <DetailLabel>Branch:</DetailLabel>
                  <DetailValue>
                    {selectedOrder.branch.en_name || selectedOrder.branch.ar_name}
                  </DetailValue>
                </DetailRow>
              )}
              <DetailRow>
                <DetailLabel>Customer Name:</DetailLabel>
                <DetailValue>{selectedOrder.customer_name || "N/A"}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Phone Number:</DetailLabel>
                <DetailValue>{selectedOrder.customer_phone || "N/A"}</DetailValue>
              </DetailRow>
              {selectedOrder.customer_address && (
                <DetailRow>
                  <DetailLabel>Address:</DetailLabel>
                  <DetailValue>{selectedOrder.customer_address}</DetailValue>
                </DetailRow>
              )}
              {selectedOrder.table_number && (
                <DetailRow>
                  <DetailLabel>Table Number:</DetailLabel>
                  <DetailValue>{selectedOrder.table_number}</DetailValue>
                </DetailRow>
              )}
              {selectedOrder.note && (
                <DetailRow>
                  <DetailLabel>Note:</DetailLabel>
                  <DetailValue>{selectedOrder.note}</DetailValue>
                </DetailRow>
              )}

              <DetailRow>
                <DetailLabel>Items:</DetailLabel>
                <DetailValue>
                  <ItemsList>
                    {Array.isArray(selectedOrder.items) &&
                      selectedOrder.items.map((item, index) => (
                        <ItemRow key={index}>
                          <ItemName>
                            {item.product_name || `Product #${item.product_id}`}
                          </ItemName>
                          <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                          <ItemPrice>
                            {formatCurrency(item.total_price, selectedOrder.currency)}
                          </ItemPrice>
                        </ItemRow>
                      ))}
                  </ItemsList>
                </DetailValue>
              </DetailRow>

              <TotalRow>
                <DetailLabel>Total:</DetailLabel>
                <DetailValue style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {formatCurrency(selectedOrder.total, selectedOrder.currency)}
                </DetailValue>
              </TotalRow>
            </ModalBody>
          </ModalContent>
        </OrderDetailsModal>
      )}
    </Container>
  );
}
