import React, { useMemo, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../../utilities/manageCookies";
import {
  GET_FEEDBACKS_URL,
  GET_RESTAURANT_VISIT_COUNT_URL,
  GET_RESTAURANT_VISIT_DAILY_SERIES_URL,
  GET_RESTAURANT_TOP_PRODUCT_VISITS_URL,
  GET_RESTAURANT_TOP_CATEGORY_VISITS_URL,
  GET_ORDERS_BY_RESTAURANT_URL,
  GET_THREADS_ADMIN_PAGE_URL,
  CUSTOMERS_REGISTERED_URL,
} from "../../../apis/URLs";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import {
  MdCategory,
  MdRestaurantMenu,
  MdRemoveRedEye,
  MdShoppingBag,
  MdForum,
  MdPeople,
} from "react-icons/md";
import {
  TbLayoutDashboard,
  TbSettings,
  TbFileReport,
} from "react-icons/tb";
import { useGetCategories } from "../../../apis/categories/getCategories";
import { useGetProducts } from "../../../apis/products/getProducts";
import {
  Wrapper,
  Hero,
  HeroTitle,
  HeroSubtitle,
  MetaRow,
  MetaPill,
  StatsGrid,
  StatCard,
  StatIconBox,
  StatLabel,
  StatValue,
  StatHint,
  ActionsRow,
  ActionButton,
  ActionIcon,
  ChartsGridWide,
  ChartCard,
  ChartTitle,
  ChartCaption,
  ChartViewport,
  SectionLabel,
  VisitFiltersBar,
  FilterGroup,
  FilterGroupInline,
  FilterLabel,
  FilterSelect,
  FilterDateInput,
  FilterHint,
} from "./styles";

const TOOLTIP_STYLE = {
  borderRadius: 10,
  border: "1px solid #e2e8f0",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(15,23,42,0.1)",
};

/** Avoid browser/proxy revalidation returning 304 with a stale empty body for visit analytics. */
const VISIT_ANALYTICS_AXIOS = {
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
};

/** Axios wraps the server body in `.data`; our API returns a JSON array or `{ data: [] }`. */
function listFromApiResponse(axiosResponse) {
  const body = axiosResponse?.data;
  if (Array.isArray(body)) return body;
  if (body != null && Array.isArray(body.data)) return body.data;
  return [];
}

/* ─── stat card config ─── */
const STATS_CONFIG = [
  {
    key: "categories",
    label: "Categories count",
    hint: "Menu sections in your catalog",
    accent: "#5eabb1",
    iconBg: "rgba(94,171,177,0.12)",
    iconColor: "#5eabb1",
    Icon: MdCategory,
  },
  {
    key: "products",
    label: "Products count",
    hint: "All items in catalog",
    accent: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    iconColor: "#3b82f6",
    Icon: MdRestaurantMenu,
  },
  {
    key: "visits",
    label: "Total visits",
    hint: "Menu page visits (all time)",
    accent: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.12)",
    iconColor: "#8b5cf6",
    Icon: MdRemoveRedEye,
  },
  {
    key: "orders",
    label: "Total orders",
    hint: "Orders placed (all time)",
    accent: "#f59e0b",
    iconBg: "rgba(245,158,11,0.12)",
    iconColor: "#f59e0b",
    Icon: MdShoppingBag,
  },
  {
    key: "interactions",
    label: "User interactions",
    hint: "Feedback entries + questions & suggestions",
    accent: "#06b6d4",
    iconBg: "rgba(6,182,212,0.12)",
    iconColor: "#06b6d4",
    Icon: MdForum,
  },
  {
    key: "registered",
    label: "Registered customers",
    hint: "Customers signed up on your menu",
    accent: "#10b981",
    iconBg: "rgba(16,185,129,0.12)",
    iconColor: "#10b981",
    Icon: MdPeople,
  },
];

const VISIT_RANGE_START = "2000-01-01";
const VISIT_RANGE_END = "2099-12-31";

function toLocalYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Monday through today (local). */
function getCalendarWeekToDateRange() {
  const now = new Date();
  const dow = now.getDay();
  const mondayOffset = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);
  monday.setHours(0, 0, 0, 0);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  return { start: toLocalYMD(monday), end: toLocalYMD(end) };
}

function getDateRangeForPreset(preset, customStart, customEnd) {
  const today = new Date();
  const end = toLocalYMD(today);
  if (preset === "this_week") return getCalendarWeekToDateRange();
  if (preset === "last_7") {
    const s = new Date(today);
    s.setDate(today.getDate() - 6);
    return { start: toLocalYMD(s), end };
  }
  if (preset === "last_30") {
    const s = new Date(today);
    s.setDate(today.getDate() - 29);
    return { start: toLocalYMD(s), end };
  }
  if (preset === "custom") {
    if (customStart && customEnd) {
      return customStart <= customEnd
        ? { start: customStart, end: customEnd }
        : { start: customEnd, end: customStart };
    }
    if (customStart) return { start: customStart, end: customStart };
    if (customEnd) return { start: customEnd, end: customEnd };
  }
  return getCalendarWeekToDateRange();
}

function formatChartDayLabel(isoDate) {
  try {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  } catch {
    return isoDate;
  }
}

const VISIT_PERIOD_OPTIONS = [
  { value: "this_week", label: "This week" },
  { value: "last_7", label: "Last 7 days" },
  { value: "last_30", label: "Last 30 days" },
  { value: "custom", label: "Custom range" },
];

const TOP_RANK_OPTIONS = [
  { value: 5, label: "Top 5" },
  { value: 8, label: "Top 8" },
  { value: 12, label: "Top 12" },
  { value: 16, label: "Top 16" },
  { value: 20, label: "Top 20" },
];

function truncateLabel(s, max = 20) {
  if (!s) return "—";
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

function productVisitLabel(p, lang) {
  if (lang === "AR") return p.ar_name || p.en_name || p.name || "—";
  return p.en_name || p.ar_name || p.name || "—";
}

function categoryVisitLabel(c, lang) {
  if (lang === "AR") return c.ar_category || c.en_category || c.categoryName || "—";
  return c.en_category || c.ar_category || c.categoryName || "—";
}

function formatStatNumber(value, { isLoading, isError }) {
  if (isLoading) return "…";
  if (isError) return "—";
  if (value === null || value === undefined || Number.isNaN(value)) return "0";
  return value;
}

/* ─── quick action config ─── */
const ACTIONS = [
  {
    label: "Categories",
    section: "Categories",
    Icon: TbLayoutDashboard,
    from: "#0ea5e9",
    to: "#0284c7",
  },
  {
    label: "Products",
    section: "Products",
    Icon: MdRestaurantMenu,
    from: "#8b5cf6",
    to: "#6d28d9",
  },
  {
    label: "Settings",
    section: "Settings",
    Icon: TbSettings,
    from: "#5eabb1",
    to: "#0d7c82",
  },
  {
    label: "Reports",
    section: "Report",
    Icon: TbFileReport,
    from: "#f59e0b",
    to: "#d97706",
  },
];

export default function Dashboard({ userInformation, setSection }) {
  const restaurantId = userInformation?.restaurant_id;
  const initialWeek = useMemo(() => getCalendarWeekToDateRange(), []);
  const [visitPeriod, setVisitPeriod] = useState("this_week");
  const [customStart, setCustomStart] = useState(initialWeek.start);
  const [customEnd, setCustomEnd] = useState(initialWeek.end);
  const [topRankLimit, setTopRankLimit] = useState(12);

  const { response: categoriesResponse, isLoading: isCategoriesLoading } = useGetCategories({
    onSuccess: () => {},
    restaurantId,
  });
  const { response: productsResponse, isLoading: isProductsLoading } = useGetProducts({
    onSuccess: () => {},
    restaurantId,
  });

  const categories = listFromApiResponse(categoriesResponse);
  const products = listFromApiResponse(productsResponse);

  const authHeaders = () => ({
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });

  const visitsQuery = useQuery({
    queryKey: ["dashboard", "visits", restaurantId],
    queryFn: async () => {
      const { data } = await axios.get(
        GET_RESTAURANT_VISIT_COUNT_URL(restaurantId, VISIT_RANGE_START, VISIT_RANGE_END),
        VISIT_ANALYTICS_AXIOS
      );
      return Number(data?.totalVisits ?? 0);
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const ordersQuery = useQuery({
    queryKey: ["dashboard", "orders-count", restaurantId],
    queryFn: async () => {
      const { data } = await axios.get(GET_ORDERS_BY_RESTAURANT_URL(restaurantId), authHeaders());
      return Number(data?.count ?? data?.orders?.length ?? 0);
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const feedbacksQuery = useQuery({
    queryKey: ["dashboard", "feedbacks-count", restaurantId],
    queryFn: async () => {
      const { data } = await axios.get(GET_FEEDBACKS_URL(restaurantId));
      const list = data?.data;
      return Array.isArray(list) ? list.length : 0;
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const threadsQuery = useQuery({
    queryKey: ["dashboard", "threads-total", restaurantId],
    queryFn: async () => {
      const { data } = await axios.get(GET_THREADS_ADMIN_PAGE_URL(1, 1), authHeaders());
      return Number(data?.total ?? 0);
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const registeredQuery = useQuery({
    queryKey: ["dashboard", "registered-customers-count", restaurantId],
    queryFn: async () => {
      const { data } = await axios.get(CUSTOMERS_REGISTERED_URL, authHeaders());
      if (typeof data?.total === "number") return data.total;
      return Array.isArray(data?.data) ? data.data.length : 0;
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const dateRange = useMemo(
    () => getDateRangeForPreset(visitPeriod, customStart, customEnd),
    [visitPeriod, customStart, customEnd]
  );
  const lang = userInformation?.Lang || "EN";

  const visitDailyQuery = useQuery({
    queryKey: ["dashboard", "visit-daily", restaurantId, dateRange.start, dateRange.end],
    queryFn: async () => {
      const { data } = await axios.get(
        GET_RESTAURANT_VISIT_DAILY_SERIES_URL(restaurantId, dateRange.start, dateRange.end),
        VISIT_ANALYTICS_AXIOS
      );
      return Array.isArray(data?.data) ? data.data : [];
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const topProductVisitsQuery = useQuery({
    queryKey: [
      "dashboard",
      "top-product-visits",
      restaurantId,
      dateRange.start,
      dateRange.end,
      topRankLimit,
    ],
    queryFn: async () => {
      const { data } = await axios.get(
        GET_RESTAURANT_TOP_PRODUCT_VISITS_URL(
          restaurantId,
          dateRange.start,
          dateRange.end,
          topRankLimit
        )
      );
      return Array.isArray(data?.data) ? data.data : [];
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const topCategoryVisitsQuery = useQuery({
    queryKey: [
      "dashboard",
      "top-category-visits",
      restaurantId,
      dateRange.start,
      dateRange.end,
      topRankLimit,
    ],
    queryFn: async () => {
      const { data } = await axios.get(
        GET_RESTAURANT_TOP_CATEGORY_VISITS_URL(
          restaurantId,
          dateRange.start,
          dateRange.end,
          topRankLimit
        ),
        VISIT_ANALYTICS_AXIOS
      );
      return Array.isArray(data?.data) ? data.data : [];
    },
    enabled: Boolean(restaurantId),
    staleTime: 60_000,
    retry: 1,
  });

  const avgPerCategory = categories.length > 0
    ? (products.length / categories.length).toFixed(1)
    : "0";

  const renderStatValue = (key) => {
    switch (key) {
      case "categories":
        return formatStatNumber(categories.length, { isLoading: isCategoriesLoading });
      case "products":
        return formatStatNumber(products.length, { isLoading: isProductsLoading });
      case "visits":
        return formatStatNumber(visitsQuery.data, {
          isLoading: visitsQuery.isLoading,
          isError: visitsQuery.isError,
        });
      case "orders":
        return formatStatNumber(ordersQuery.data, {
          isLoading: ordersQuery.isLoading,
          isError: ordersQuery.isError,
        });
      case "interactions": {
        const fb = feedbacksQuery.isError ? 0 : Number(feedbacksQuery.data ?? 0);
        const th = threadsQuery.isError ? 0 : Number(threadsQuery.data ?? 0);
        const sum = fb + th;
        return formatStatNumber(sum, {
          isLoading: feedbacksQuery.isLoading || threadsQuery.isLoading,
          isError: feedbacksQuery.isError && threadsQuery.isError,
        });
      }
      case "registered":
        return formatStatNumber(registeredQuery.data, {
          isLoading: registeredQuery.isLoading,
          isError: registeredQuery.isError,
        });
      default:
        return "0";
    }
  };

  const productVisitsBarData = useMemo(() => {
    const rows = topProductVisitsQuery.data || [];
    return rows.map((p) => {
      const full = productVisitLabel(p, lang);
      return {
        name: truncateLabel(full, 18),
        fullName: full,
        visits: Number(p.total) || 0,
      };
    });
  }, [topProductVisitsQuery.data, lang]);

  const categoryVisitsBarData = useMemo(() => {
    const rows = topCategoryVisitsQuery.data || [];
    return rows.map((c) => {
      const full = categoryVisitLabel(c, lang);
      return {
        name: truncateLabel(full, 18),
        fullName: full,
        visits: Number(c.totalVisits) || 0,
      };
    });
  }, [topCategoryVisitsQuery.data, lang]);

  const visitDailyChartData = useMemo(() => {
    const rows = visitDailyQuery.data || [];
    return rows.map((row) => ({
      ...row,
      visits: Number(row.visits) || 0,
      label: formatChartDayLabel(row.date),
    }));
  }, [visitDailyQuery.data]);

  const visitsTotalInRange = useMemo(
    () => visitDailyChartData.reduce((s, r) => s + r.visits, 0),
    [visitDailyChartData]
  );

  const denseDailyAxis = visitDailyChartData.length > 14;

  return (
    <Wrapper>
      {/* ── HERO ── */}
      <Hero>
        <HeroTitle>
          Welcome back, {userInformation?.username || "Restaurant Admin"} 👋
        </HeroTitle>
        <HeroSubtitle>
          Real-time overview of your menu catalog and how guests browse your menu over time.
        </HeroSubtitle>
        <MetaRow>
          <MetaPill>🏪 ID: {restaurantId || "—"}</MetaPill>
          <MetaPill>🎨 Theme {userInformation?.template_id || "—"}</MetaPill>
          <MetaPill>🌐 {userInformation?.Lang || "—"}</MetaPill>
          <MetaPill>📊 Avg {avgPerCategory} products / category</MetaPill>
        </MetaRow>
      </Hero>

      {/* ── STAT CARDS ── */}
      <StatsGrid>
        {STATS_CONFIG.map(({ key, label, hint, accent, iconBg, iconColor, Icon }) => (
          <StatCard key={key} $accent={accent}>
            <StatIconBox $bg={iconBg} $color={iconColor}>
              <Icon />
            </StatIconBox>
            <StatLabel>{label}</StatLabel>
            <StatValue>{renderStatValue(key)}</StatValue>
            <StatHint>{hint}</StatHint>
          </StatCard>
        ))}
      </StatsGrid>

      {/* ── QUICK ACTIONS ── */}
      <SectionLabel>Quick actions</SectionLabel>
      <ActionsRow>
        {ACTIONS.map(({ label, section, Icon, from, to }) => (
          <ActionButton key={section} type="button" $from={from} $to={to} onClick={() => setSection(section)}>
            <ActionIcon><Icon /></ActionIcon>
            {label}
          </ActionButton>
        ))}
      </ActionsRow>

      {/* ── VISIT ANALYTICS (filtered graphs) ── */}
      <SectionLabel>Visit analytics</SectionLabel>
      <VisitFiltersBar>
        <FilterGroup>
          <FilterLabel>Period</FilterLabel>
          <FilterSelect
            value={visitPeriod}
            onChange={(e) => setVisitPeriod(e.target.value)}
            aria-label="Visit analytics period"
          >
            {VISIT_PERIOD_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
        {visitPeriod === "custom" && (
          <FilterGroupInline>
            <FilterGroup>
              <FilterLabel>From</FilterLabel>
              <FilterDateInput
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                aria-label="Custom range start"
              />
            </FilterGroup>
            <FilterGroup>
              <FilterLabel>To</FilterLabel>
              <FilterDateInput
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                aria-label="Custom range end"
              />
            </FilterGroup>
          </FilterGroupInline>
        )}
        <FilterGroup>
          <FilterLabel>Top products / categories</FilterLabel>
          <FilterSelect
            value={topRankLimit}
            onChange={(e) => setTopRankLimit(Number(e.target.value))}
            aria-label="Number of items in top lists"
          >
            {TOP_RANK_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
        <FilterHint>
          Showing <strong>{dateRange.start}</strong> → <strong>{dateRange.end}</strong>
          {visitsTotalInRange > 0 && (
            <>
              {" "}
              · <strong>{visitsTotalInRange}</strong> menu visits in range
            </>
          )}
        </FilterHint>
      </VisitFiltersBar>

      <ChartsGridWide>
        <ChartCard>
          <ChartTitle>Menu visits over time</ChartTitle>
          <ChartCaption>
            Daily menu loads (restaurant page visits) for the selected period.
          </ChartCaption>
          <ChartViewport $tall>
            {visitDailyQuery.isLoading ? (
              <ChartCaption>Loading…</ChartCaption>
            ) : visitDailyQuery.isError ? (
              <ChartCaption>Could not load visit data.</ChartCaption>
            ) : visitDailyChartData.length === 0 ? (
              <ChartCaption>No days in range.</ChartCaption>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={visitDailyChartData} margin={{ top: 8, right: 8, left: -10, bottom: denseDailyAxis ? 8 : 4 }}>
                  <defs>
                    <linearGradient id="visitAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: denseDailyAxis ? 9 : 11, fill: "#64748b" }}
                    axisLine={false}
                    tickLine={false}
                    interval="preserveStartEnd"
                    angle={denseDailyAxis ? -40 : 0}
                    textAnchor={denseDailyAxis ? "end" : "middle"}
                    height={denseDailyAxis ? 52 : 28}
                  />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(v) => [v, "Visits"]}
                    labelFormatter={(_l, payload) => {
                      const d = payload?.[0]?.payload?.date;
                      return d ? `${formatChartDayLabel(d)} (${d})` : _l;
                    }}
                    cursor={{ stroke: "#8b5cf6", strokeWidth: 1, strokeDasharray: "4 2" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="visits"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    fill="url(#visitAreaGrad)"
                    dot={{ r: 2, fill: "#7c3aed", strokeWidth: 0 }}
                    activeDot={{ r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </ChartViewport>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Top products by visits</ChartTitle>
          <ChartCaption>Most opened product detail views in the selected period.</ChartCaption>
          <ChartViewport $tall>
            {topProductVisitsQuery.isLoading ? (
              <ChartCaption>Loading…</ChartCaption>
            ) : productVisitsBarData.length === 0 ? (
              <ChartCaption>No product visits in this period yet.</ChartCaption>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productVisitsBarData} margin={{ top: 4, right: 6, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="barGradProducts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(v) => [v, "Visits"]}
                    labelFormatter={(_l, payload) => payload?.[0]?.payload?.fullName || _l}
                    cursor={{ fill: "rgba(99,102,241,0.07)" }}
                  />
                  <Bar dataKey="visits" fill="url(#barGradProducts)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </ChartViewport>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Top categories by visits</ChartTitle>
          <ChartCaption>Most viewed category sections in the selected period.</ChartCaption>
          <ChartViewport $tall>
            {topCategoryVisitsQuery.isLoading ? (
              <ChartCaption>Loading…</ChartCaption>
            ) : categoryVisitsBarData.length === 0 ? (
              <ChartCaption>No category visits in this period yet.</ChartCaption>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryVisitsBarData} margin={{ top: 4, right: 6, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="barGradCategories" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5eabb1" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(v) => [v, "Visits"]}
                    labelFormatter={(_l, payload) => payload?.[0]?.payload?.fullName || _l}
                    cursor={{ fill: "rgba(94,171,177,0.07)" }}
                  />
                  <Bar dataKey="visits" fill="url(#barGradCategories)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </ChartViewport>
        </ChartCard>
      </ChartsGridWide>
    </Wrapper>
  );
}
