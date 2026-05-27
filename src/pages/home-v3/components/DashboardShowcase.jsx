import React from "react";
import { ContainerScroll } from "../ui/ContainerScroll";
import { FiBarChart2, FiShoppingCart, FiUsers, FiTrendingUp, FiEye, FiDollarSign } from "react-icons/fi";

function MiniCard({ icon: Icon, label, value, change, color }) {
  return (
    <div className="bg-white rounded-xl border border-[rgba(87,0,255,0.08)] p-4 flex flex-col gap-2 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        {change && (
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-[#1E0C40] leading-none">{value}</p>
      <p className="text-xs text-[#8B7BAA]">{label}</p>
    </div>
  );
}

function BarChart() {
  const bars = [65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95, 68];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className="bg-white rounded-xl border border-[rgba(87,0,255,0.08)] p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-[#1E0C40]">Monthly Revenue</h4>
        <span className="text-xs text-[#8B7BAA]">2026</span>
      </div>
      <div className="flex items-end gap-1.5 h-32">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md transition-all duration-300"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1
                  ? "linear-gradient(to top, #5700FF, #8B5CF6)"
                  : "linear-gradient(to top, #E8E2F0, #D4C8E8)",
              }}
            />
            <span className="text-[8px] text-[#8B7BAA] hidden sm:block">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrdersTable() {
  const orders = [
    { id: "#1284", customer: "Sarah M.", items: 3, total: "$42.50", status: "Delivered" },
    { id: "#1283", customer: "Ahmad K.", items: 1, total: "$18.00", status: "Preparing" },
    { id: "#1282", customer: "Lina R.", items: 5, total: "$67.80", status: "Delivered" },
    { id: "#1281", customer: "Mike T.", items: 2, total: "$31.00", status: "On the way" },
  ];
  const statusColors = {
    Delivered: { bg: "#dcfce7", text: "#16a34a" },
    Preparing: { bg: "#fef3c7", text: "#d97706" },
    "On the way": { bg: "#dbeafe", text: "#2563eb" },
  };

  return (
    <div className="bg-white rounded-xl border border-[rgba(87,0,255,0.08)] p-5 shadow-sm">
      <h4 className="text-sm font-semibold text-[#1E0C40] mb-3">Recent Orders</h4>
      <div className="space-y-2">
        {orders.map((o) => {
          const sc = statusColors[o.status] || statusColors.Delivered;
          return (
            <div key={o.id} className="flex items-center justify-between py-2 border-b border-[#F3EEFF] last:border-b-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#8B7BAA]">{o.id}</span>
                <span className="text-sm font-medium text-[#1E0C40]">{o.customer}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#1E0C40]">{o.total}</span>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: sc.bg, color: sc.text }}
                >
                  {o.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardShowcase() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF8FF 0%, #F3EEFF 30%, #F0ECFF 70%, #FAF8FF 100%)",
      }}
    >
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#5700FF] mb-4">
              Admin Dashboard
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E0C40] tracking-tight mb-3">
              Manage everything from
              <br />
              <span className="bg-gradient-to-r from-[#5700FF] to-[#8B5CF6] bg-clip-text text-transparent">
                one powerful dashboard
              </span>
            </h2>
            <p className="text-base md:text-lg text-[#5B4A7A] max-w-xl mx-auto">
              Orders, analytics, customers, and reports — all in one place. Track your business growth in real time.
            </p>
          </>
        }
      >
        {/* Dashboard content */}
        <div className="h-full w-full p-3 md:p-6 overflow-y-auto">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <MiniCard icon={FiDollarSign} label="Total Revenue" value="$12,840" change="+18%" color="#5700FF" />
            <MiniCard icon={FiShoppingCart} label="Orders" value="342" change="+12%" color="#0EA5E9" />
            <MiniCard icon={FiUsers} label="Customers" value="1,280" change="+8%" color="#10B981" />
            <MiniCard icon={FiEye} label="Page Views" value="28.5K" change="+24%" color="#F59E0B" />
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BarChart />
            <OrdersTable />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
