import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";
import {
  CUSTOMERS_REGISTERED_URL,
  CUSTOMERS_REGISTERED_ORDERS_URL,
} from "../../../apis/URLs";
import {
  Container,
  Header,
  HeaderTitle,
  FiltersContainer,
  FilterRow,
  SearchInput,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ViewButton,
  EmptyState,
  LoadingState,
  ErrorState,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  DetailRow,
  DetailLabel,
  DetailValue,
} from "./styles";

export default function RegisteredCustomers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailOrders, setDetailOrders] = useState([]);

  const userInformation = (() => {
    try {
      return JSON.parse(getCookie("userInfo") || "{}");
    } catch {
      return {};
    }
  })();

  const restaurantId = userInformation?.restaurant_id;

  const fetchList = async () => {
    if (!restaurantId) return;
    setLoading(true);
    setError("");
    try {
      const token = getCookie("accessToken");
      const params = new URLSearchParams();
      if (q.trim()) params.append("q", q.trim());
      const url = `${CUSTOMERS_REGISTERED_URL}${params.toString() ? `?${params.toString()}` : ""}`;
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRows(data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load registered customers");
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [restaurantId]);

  const openDetail = async (customer) => {
    setSelected(customer);
    setDetailLoading(true);
    setDetailOrders([]);
    try {
      const token = getCookie("accessToken");
      const { data } = await axios.get(
        CUSTOMERS_REGISTERED_ORDERS_URL(customer.id),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDetailOrders(data.orders || []);
    } catch {
      setDetailOrders([]);
    } finally {
      setDetailLoading(false);
    }
  };

  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d).toLocaleString();
  };

  if (loading && rows.length === 0) {
    return (
      <Container>
        <LoadingState>Loading…</LoadingState>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Registered customers</HeaderTitle>
      </Header>

      <FiltersContainer>
        <FilterRow>
          <SearchInput
            type="search"
            placeholder="Search by email, phone, or name"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchList()}
          />
          <ViewButton type="button" onClick={fetchList}>
            Search
          </ViewButton>
        </FilterRow>
      </FiltersContainer>

      {error && <ErrorState>{error}</ErrorState>}

      {rows.length === 0 && !loading ? (
        <EmptyState>No registered customers yet</EmptyState>
      ) : (
        <Table>
          <TableHeader>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Registered</TableCell>
            <TableCell />
          </TableHeader>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.full_name || "—"}</TableCell>
              <TableCell>{r.email || "—"}</TableCell>
              <TableCell>{r.phone_number || "—"}</TableCell>
              <TableCell>{r.order_count ?? 0}</TableCell>
              <TableCell>{formatDate(r.created_at)}</TableCell>
              <TableCell>
                <ViewButton type="button" onClick={() => openDetail(r)}>
                  View orders
                </ViewButton>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {selected && (
        <>
          <ModalOverlay onClick={() => setSelected(null)} />
          <ModalContent>
            <ModalHeader>
              Orders — {selected.full_name || selected.email}
              <ModalCloseButton type="button" onClick={() => setSelected(null)}>
                ×
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <DetailRow>
                <DetailLabel>Email</DetailLabel>
                <DetailValue>{selected.email}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Phone</DetailLabel>
                <DetailValue>{selected.phone_number}</DetailValue>
              </DetailRow>
              {detailLoading ? (
                <p>Loading orders…</p>
              ) : detailOrders.length === 0 ? (
                <p>No orders linked to this account yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Total</TableCell>
                  </TableHeader>
                  {detailOrders.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell>#{o.id}</TableCell>
                      <TableCell>{formatDate(o.order_date)}</TableCell>
                      <TableCell>{o.status}</TableCell>
                      <TableCell>
                        {parseFloat(o.total || 0).toFixed(2)} {o.currency || ""}
                      </TableCell>
                    </TableRow>
                  ))}
                </Table>
              )}
            </ModalBody>
          </ModalContent>
        </>
      )}
    </Container>
  );
}
