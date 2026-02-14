import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTitle } from "../styles";

export const TrendsChart = ({ data, type = "line", title, metric = "visits" }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <ChartContainer>
        <ChartTitle>{title}</ChartTitle>
        <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
          No data available
        </div>
      </ChartContainer>
    );
  }

  const chartData = data.map((item) => ({
    period: item.period || item.date || item.label,
    current: item[metric] || item.value || item.count || 0,
    previous: item.previous || null,
  }));

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        {type === "bar" ? (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#3b82f6" name="Current Period" />
            {chartData[0]?.previous !== null && (
              <Bar dataKey="previous" fill="#94a3b8" name="Previous Period" />
            )}
          </BarChart>
        ) : (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Current Period"
              dot={{ r: 4 }}
            />
            {chartData[0]?.previous !== null && (
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#94a3b8"
                strokeWidth={2}
                name="Previous Period"
                strokeDasharray="5 5"
              />
            )}
          </LineChart>
        )}
      </ResponsiveContainer>
    </ChartContainer>
  );
};
