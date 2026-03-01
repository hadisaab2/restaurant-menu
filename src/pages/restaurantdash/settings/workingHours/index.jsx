import React, { useState, useEffect } from "react";
import { getCookie } from "../../../../utilities/manageCookies";
import {
  Container,
  Title,
  Table,
  Th,
  Td,
  EditDeleteIcons,
  Edit,
  Delete,
  AddButton,
  FormOverlay,
  FormCard,
  FormTitle,
  FormRow,
  FormLabel,
  DayCheckboxWrap,
  TimeInput,
  FormActions,
  BtnPrimary,
  BtnSecondary,
} from "./styles";
import { useGetWorkingHours } from "../../../../apis/workingHours/getWorkingHours";
import { useAddWorkingHours } from "../../../../apis/workingHours/addWorkingHours";
import { useEditWorkingHours } from "../../../../apis/workingHours/editWorkingHours";
import { useDeleteWorkingHours } from "../../../../apis/workingHours/deleteWorkingHours";

const WEEKDAYS = [
  { key: "monday", label: "Mon" },
  { key: "tuesday", label: "Tue" },
  { key: "wednesday", label: "Wed" },
  { key: "thursday", label: "Thu" },
  { key: "friday", label: "Fri" },
  { key: "saturday", label: "Sat" },
  { key: "sunday", label: "Sun" },
];

function formatDays(daysStr) {
  if (!daysStr) return "—";
  const keys = daysStr.split(",").map((s) => s.trim().toLowerCase());
  return keys
    .map((k) => WEEKDAYS.find((w) => w.key === k)?.label || k)
    .join(", ");
}

function formatTime(t) {
  if (!t) return "—";
  const s = String(t);
  if (s.length <= 5) return s;
  return s.slice(0, 5);
}

export default function WorkingHours() {
  const storedUserInfo = getCookie("userInfo") || "{}";
  const userInformation = JSON.parse(storedUserInfo);
  const restaurant_id = userInformation?.restaurant_id;

  const { response: list = [], refetch, isLoading } = useGetWorkingHours({
    restaurant_id,
  });
  const { mutate: addMutate } = useAddWorkingHours({ restaurant_id, onSuccess: () => refetch() });
  const { mutate: editMutate } = useEditWorkingHours({ restaurant_id, onSuccess: () => refetch() });
  const { mutate: deleteMutate } = useDeleteWorkingHours({ restaurant_id, onSuccess: () => refetch() });

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [days, setDays] = useState([]);
  const [start_time, setStartTime] = useState("09:00");
  const [end_time, setEndTime] = useState("18:00");

  const openAdd = () => {
    setEditingId(null);
    setDays([]);
    setStartTime("09:00");
    setEndTime("18:00");
    setShowForm(true);
  };

  const openEdit = (row) => {
    setEditingId(row.id);
    setDays(row.days ? row.days.split(",").map((s) => s.trim().toLowerCase()) : []);
    setStartTime(formatTime(row.start_time) || "09:00");
    setEndTime(formatTime(row.end_time) || "18:00");
    setShowForm(true);
  };

  const toggleDay = (key) => {
    setDays((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const daysStr = days.join(",");
    if (!daysStr) return;
    if (editingId) {
      editMutate({ id: editingId, days: daysStr, start_time, end_time });
    } else {
      addMutate({ restaurant_id, days: daysStr, start_time, end_time });
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this schedule?")) deleteMutate(id);
  };

  const rows = Array.isArray(list) ? list : [];

  return (
    <Container>
      <Title>Working Hours</Title>
      <p style={{ marginLeft: 20, marginTop: 8, color: "#666", fontSize: 14 }}>
        Add schedules with multiple weekdays sharing the same hours (e.g. Mon–Fri 9AM–6PM).
      </p>
      <AddButton onClick={openAdd}>Add schedule</AddButton>
      {isLoading ? (
        <p style={{ marginLeft: 20, marginTop: 16 }}>Loading…</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>Days</Th>
              <Th>Start</Th>
              <Th>End</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <Td colSpan={4} style={{ color: "#999" }}>
                  No working hours set. Add a schedule above.
                </Td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  <Td>{formatDays(row.days)}</Td>
                  <Td>{formatTime(row.start_time)}</Td>
                  <Td>{formatTime(row.end_time)}</Td>
                  <Td>
                    <EditDeleteIcons>
                      <Edit onClick={() => openEdit(row)} />
                      <Delete onClick={() => handleDelete(row.id)} />
                    </EditDeleteIcons>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}

      {showForm && (
        <FormOverlay onClick={() => setShowForm(false)}>
          <FormCard onClick={(e) => e.stopPropagation()}>
            <FormTitle>{editingId ? "Edit schedule" : "Add schedule"}</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormRow>
                <FormLabel>Weekdays (multiple select)</FormLabel>
                <DayCheckboxWrap>
                  {WEEKDAYS.map(({ key, label }) => (
                    <label key={key} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <input
                        type="checkbox"
                        checked={days.includes(key)}
                        onChange={() => toggleDay(key)}
                      />
                      {label}
                    </label>
                  ))}
                </DayCheckboxWrap>
              </FormRow>
              <FormRow>
                <FormLabel>Start time</FormLabel>
                <TimeInput
                  type="time"
                  value={start_time}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </FormRow>
              <FormRow>
                <FormLabel>End time</FormLabel>
                <TimeInput
                  type="time"
                  value={end_time}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </FormRow>
              <FormActions>
                <BtnPrimary type="submit">Save</BtnPrimary>
                <BtnSecondary type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </BtnSecondary>
              </FormActions>
            </form>
          </FormCard>
        </FormOverlay>
      )}
    </Container>
  );
}
