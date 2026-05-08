import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  MdOutlineRateReview,
  MdStarRate,
  MdCalendarToday,
  MdThumbUp,
  MdThumbDown,
  MdNotificationImportant,
  MdSearch,
  MdFilterList,
  MdArrowUpward,
  MdArrowDownward,
  MdContentCopy,
  MdClose,
  MdTrendingUp,
  MdTrendingDown,
  MdEmojiEvents,
  MdWarning,
  MdInfo,
  MdLightbulb,
  MdSchedule,
  MdDownload,
  MdRefresh,
} from "react-icons/md";
import {
  Container,
  PageHeader,
  PageHeaderInner,
  PageHeaderLeft,
  PageTitle,
  PageSubtitle,
  HeaderMetaRow,
  MetaPill,
  PageHeaderRight,
  HeaderBtn,
  FilterBar,
  FilterRow,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  FilterSelect,
  SortRow,
  SortLabel,
  SortChip,
  KpiGrid,
  KpiCard,
  KpiIconBox,
  KpiValue,
  KpiLabel,
  KpiMeta,
  AnalyticsGrid,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  SentimentTrack,
  SentimentSegment,
  SentimentRows,
  SentimentRow,
  SentimentDot,
  SentimentLabel,
  SentimentBar,
  SentimentFill,
  SentimentCount,
  SentimentPct,
  RatingDistRows,
  RatingDistRow,
  StarLabel,
  StarIcon,
  RatingBarTrack,
  RatingBarFill,
  RatingDistCount,
  RatingDistPct,
  TrendCard,
  TrendCardHeader,
  InsightsGrid,
  InsightCard,
  InsightTop,
  InsightIconBox,
  InsightChip,
  InsightText,
  InsightAction,
  SectionWrapper,
  SectionHead,
  SectionTitle,
  CountBadge,
  FeedbackList,
  FeedbackCard,
  FeedbackAvatar,
  FeedbackBody,
  FeedbackTopRow,
  FeedbackName,
  FeedbackDate,
  StarRow,
  StarFilled,
  StarEmpty,
  FeedbackComment,
  FeedbackTagRow,
  MoodBadge,
  InfoTag,
  FeedbackActions,
  ActionBtn,
  ModalOverlay,
  ModalPanel,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalField,
  ModalFieldLabel,
  ModalFieldValue,
  ModalCommentBox,
  ModalDivider,
  ModalActions,
  ModalActionBtn,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDesc,
  SkeletonCard,
  SkeletonLine,
  ErrorBanner,
  SectionLabel,
  SectionLabelTitle,
  SectionLabelSub,
} from "./styles";
import { getCookie } from "../../../utilities/manageCookies";
import { getFeedbacks } from "../../../apis/feedback/getFeedbacks";

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const safeRating = (r) => {
  const n = Number(r);
  return isNaN(n) || n < 1 || n > 5 ? null : n;
};

const getMood = (rating) => {
  if (rating === null || rating === undefined) return "neutral";
  const r = Number(rating);
  if (r >= 4) return "positive";
  if (r >= 3) return "neutral";
  return "negative";
};

const formatDate = (raw) => {
  if (!raw) return "—";
  const d = new Date(raw);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatDateShort = (raw) => {
  if (!raw) return "—";
  const d = new Date(raw);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
};

const timeAgo = (raw) => {
  if (!raw) return "—";
  const d = new Date(raw);
  if (isNaN(d)) return "—";
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(raw);
};

const StarDisplay = ({ rating, size = "0.95rem" }) => {
  const r = safeRating(rating) || 0;
  return (
    <StarRow>
      {[1, 2, 3, 4, 5].map((n) =>
        n <= r ? (
          <StarFilled key={n} style={{ fontSize: size }}>
            ★
          </StarFilled>
        ) : (
          <StarEmpty key={n} style={{ fontSize: size }}>
            ★
          </StarEmpty>
        )
      )}
    </StarRow>
  );
};

const AvatarInitial = ({ name, mood }) => {
  const letter = (name || "?").trim().charAt(0).toUpperCase();
  return <FeedbackAvatar $mood={mood}>{letter}</FeedbackAvatar>;
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Feedbacks() {
  /* ── data ── */
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ── filters ── */
  const [search, setSearch] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  const [filterMood, setFilterMood] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  /* ── detail modal ── */
  const [selected, setSelected] = useState(null);

  /* ── user ── */
  const userInformation = useMemo(() => {
    const stored = getCookie("userInfo") || "{}";
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }, []);

  const restaurantId = userInformation?.restaurant_id;

  /* ── fetch ── */
  const load = useCallback(() => {
    if (!restaurantId) return;
    setLoading(true);
    setError("");
    getFeedbacks(restaurantId)
      .then((response) => {
        const payload =
          response?.data?.data || response?.data || [];
        setFeedbacks(Array.isArray(payload) ? payload : []);
      })
      .catch(() => {
        setError("Failed to load feedback data. Please try again.");
        setFeedbacks([]);
      })
      .finally(() => setLoading(false));
  }, [restaurantId]);

  useEffect(() => {
    load();
  }, [load]);

  /* ── normalise rows ── */
  const rows = useMemo(
    () =>
      feedbacks.map((item, idx) => ({
        id: item.id ?? idx,
        rating: safeRating(item.rating),
        comment:
          item.comments || item.comment || item.feedback_text || "",
        createdAt: item.created_at || item.createdAt || null,
        customerName:
          item.customer_name || item.user_name || item.name || null,
        branch: item.branch_name || item.branch || null,
        orderType: item.order_type || item.orderType || null,
        mood: getMood(safeRating(item.rating)),
      })),
    [feedbacks]
  );

  /* ── computed stats ── */
  const stats = useMemo(() => {
    const total = rows.length;
    const rated = rows.filter((r) => r.rating !== null);
    const totalRating = rated.reduce((s, r) => s + r.rating, 0);
    const avgRating = rated.length
      ? (totalRating / rated.length).toFixed(1)
      : null;

    const now = Date.now();
    const MS_30 = 30 * 24 * 60 * 60 * 1000;
    const MS_7 = 7 * 24 * 60 * 60 * 1000;
    const MS_60 = 60 * 24 * 60 * 60 * 1000;

    const thisMonth = rows.filter(
      (r) => r.createdAt && now - new Date(r.createdAt) <= MS_30
    ).length;

    const lastMonth = rows.filter((r) => {
      if (!r.createdAt) return false;
      const diff = now - new Date(r.createdAt);
      return diff > MS_30 && diff <= MS_60;
    }).length;

    const last7 = rows.filter(
      (r) => r.createdAt && now - new Date(r.createdAt) <= MS_7
    ).length;

    const positiveCount = rows.filter((r) => r.mood === "positive").length;
    const negativeCount = rows.filter((r) => r.mood === "negative").length;
    const positiveRate = total
      ? Math.round((positiveCount / total) * 100)
      : 0;

    return {
      total,
      avgRating,
      thisMonth,
      lastMonth,
      last7,
      positiveCount,
      negativeCount,
      positiveRate,
    };
  }, [rows]);

  /* ── sentiment ── */
  const sentiment = useMemo(() => {
    const total = rows.length || 1;
    const pos = rows.filter((r) => r.mood === "positive").length;
    const neu = rows.filter((r) => r.mood === "neutral").length;
    const neg = rows.filter((r) => r.mood === "negative").length;
    return [
      {
        label: "Positive",
        count: pos,
        pct: Math.round((pos / total) * 100),
        color: "#10b981",
      },
      {
        label: "Neutral",
        count: neu,
        pct: Math.round((neu / total) * 100),
        color: "#f59e0b",
      },
      {
        label: "Negative",
        count: neg,
        pct: Math.round((neg / total) * 100),
        color: "#f43f5e",
      },
    ];
  }, [rows]);

  /* ── rating distribution ── */
  const ratingDist = useMemo(() => {
    const total = rows.filter((r) => r.rating !== null).length || 1;
    return [5, 4, 3, 2, 1].map((n) => {
      const count = rows.filter((r) => r.rating === n).length;
      return {
        n,
        count,
        pct: Math.round((count / total) * 100),
      };
    });
  }, [rows]);

  /* ── trend data (last 14 days) ── */
  const trendData = useMemo(() => {
    const buckets = {};
    const now = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = formatDateShort(d.toISOString());
      buckets[key] = { date: key, count: 0, totalRating: 0, rated: 0 };
    }
    rows.forEach((r) => {
      if (!r.createdAt) return;
      const diff = Date.now() - new Date(r.createdAt);
      if (diff > 14 * 24 * 60 * 60 * 1000) return;
      const key = formatDateShort(r.createdAt);
      if (buckets[key]) {
        buckets[key].count += 1;
        if (r.rating !== null) {
          buckets[key].totalRating += r.rating;
          buckets[key].rated += 1;
        }
      }
    });
    return Object.values(buckets).map((b) => ({
      date: b.date,
      Feedbacks: b.count,
      "Avg Rating": b.rated ? +(b.totalRating / b.rated).toFixed(1) : 0,
    }));
  }, [rows]);

  /* ── insights ── */
  const insights = useMemo(() => {
    const list = [];
    if (rows.length === 0) {
      list.push({
        icon: <MdLightbulb />,
        bg: "rgba(59,130,246,0.1)",
        color: "#3b82f6",
        chip: "Tip",
        chipBg: "rgba(59,130,246,0.1)",
        chipColor: "#3b82f6",
        borderColor: "rgba(59,130,246,0.2)",
        text: "No feedback yet.",
        action:
          "Share your menu link with customers and encourage them to rate their experience.",
      });
      return list;
    }
    if (stats.positiveRate >= 75) {
      list.push({
        icon: <MdEmojiEvents />,
        bg: "rgba(16,185,129,0.1)",
        color: "#10b981",
        chip: "Great",
        chipBg: "rgba(16,185,129,0.1)",
        chipColor: "#10b981",
        borderColor: "rgba(16,185,129,0.2)",
        text: `${stats.positiveRate}% of feedback is positive — customers love you!`,
        action: "Keep up the great work and consider promoting positive reviews.",
      });
    }
    if (stats.negativeCount > 0) {
      list.push({
        icon: <MdWarning />,
        bg: "rgba(244,63,94,0.1)",
        color: "#f43f5e",
        chip: "Attention",
        chipBg: "rgba(244,63,94,0.1)",
        chipColor: "#f43f5e",
        borderColor: "rgba(244,63,94,0.2)",
        text: `${stats.negativeCount} negative review${stats.negativeCount > 1 ? "s" : ""} need${stats.negativeCount === 1 ? "s" : ""} attention.`,
        action:
          "Review low-rated feedback and address any recurring issues to improve customer satisfaction.",
      });
    }
    if (stats.last7 === 0 && rows.length > 0) {
      list.push({
        icon: <MdSchedule />,
        bg: "rgba(245,158,11,0.1)",
        color: "#f59e0b",
        chip: "Notice",
        chipBg: "rgba(245,158,11,0.1)",
        chipColor: "#f59e0b",
        borderColor: "rgba(245,158,11,0.2)",
        text: "No feedback received in the last 7 days.",
        action:
          "Try prompting customers via QR code at checkout to leave feedback.",
      });
    }
    if (stats.avgRating && Number(stats.avgRating) >= 4.5) {
      list.push({
        icon: <MdTrendingUp />,
        bg: "rgba(139,92,246,0.1)",
        color: "#8b5cf6",
        chip: "Insight",
        chipBg: "rgba(139,92,246,0.1)",
        chipColor: "#8b5cf6",
        borderColor: "rgba(139,92,246,0.2)",
        text: `Excellent average rating of ${stats.avgRating}/5.`,
        action: "Highlight your top rating on marketing materials.",
      });
    }
    const noCommentCount = rows.filter((r) => !r.comment).length;
    if (noCommentCount > 0 && noCommentCount >= rows.length * 0.5) {
      list.push({
        icon: <MdInfo />,
        bg: "rgba(59,130,246,0.1)",
        color: "#3b82f6",
        chip: "Tip",
        chipBg: "rgba(59,130,246,0.1)",
        chipColor: "#3b82f6",
        borderColor: "rgba(59,130,246,0.2)",
        text: "Many customers left ratings but no comments.",
        action:
          "Add a short prompt asking customers to describe their experience.",
      });
    }
    if (stats.thisMonth > stats.lastMonth && stats.lastMonth > 0) {
      list.push({
        icon: <MdTrendingUp />,
        bg: "rgba(16,185,129,0.1)",
        color: "#10b981",
        chip: "Growing",
        chipBg: "rgba(16,185,129,0.1)",
        chipColor: "#10b981",
        borderColor: "rgba(16,185,129,0.2)",
        text: `Feedback volume up ${stats.thisMonth - stats.lastMonth} vs last month.`,
        action:
          "Keep engaging customers—feedback is increasing which helps improve your service.",
      });
    }
    if (list.length < 2) {
      list.push({
        icon: <MdLightbulb />,
        bg: "rgba(59,130,246,0.1)",
        color: "#3b82f6",
        chip: "Tip",
        chipBg: "rgba(59,130,246,0.1)",
        chipColor: "#3b82f6",
        borderColor: "rgba(59,130,246,0.2)",
        text: "Encourage more customers to share their experience.",
        action:
          "Display a feedback QR code on tables, receipts, and packaging.",
      });
    }
    return list;
  }, [rows, stats]);

  /* ── filtered + sorted list ── */
  const filteredRows = useMemo(() => {
    let list = [...rows];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          (r.comment && r.comment.toLowerCase().includes(q)) ||
          (r.customerName && r.customerName.toLowerCase().includes(q))
      );
    }
    if (filterRating !== "all") {
      const targetRating = Number(filterRating);
      list = list.filter((r) => r.rating === targetRating);
    }
    if (filterMood !== "all") {
      list = list.filter((r) => r.mood === filterMood);
    }
    list.sort((a, b) => {
      const da = a.createdAt ? new Date(a.createdAt) : new Date(0);
      const db = b.createdAt ? new Date(b.createdAt) : new Date(0);
      if (sortBy === "newest") return db - da;
      if (sortBy === "oldest") return da - db;
      if (sortBy === "highest") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "lowest") return (a.rating || 0) - (b.rating || 0);
      if (sortBy === "negative") {
        const moodScore = { negative: 0, neutral: 1, positive: 2 };
        return moodScore[a.mood] - moodScore[b.mood];
      }
      return db - da;
    });
    return list;
  }, [rows, search, filterRating, filterMood, sortBy]);

  /* ── copy comment ── */
  const copyComment = (e, text) => {
    e.stopPropagation();
    if (text && navigator.clipboard)
      navigator.clipboard.writeText(text).catch(() => {});
  };

  /* ── month trend label ── */
  const monthTrend = useMemo(() => {
    if (stats.lastMonth === 0)
      return stats.thisMonth > 0 ? "New this month" : null;
    const delta = stats.thisMonth - stats.lastMonth;
    const pct = Math.round(Math.abs((delta / stats.lastMonth) * 100));
    return delta >= 0 ? `+${pct}% vs last month` : `-${pct}% vs last month`;
  }, [stats]);

  /* ─────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────── */
  return (
    <Container>
      {/* ── PAGE HEADER ── */}
      <PageHeader>
        <PageHeaderInner>
          <PageHeaderLeft>
            <PageTitle>Customer Feedback</PageTitle>
            <PageSubtitle>
              Track satisfaction, comments, and customer mood across your menu.
            </PageSubtitle>
            <HeaderMetaRow>
              <MetaPill>
                <MdOutlineRateReview />
                {loading ? "Loading…" : `${stats.total} total feedback`}
              </MetaPill>
              {stats.avgRating && (
                <MetaPill>
                  <MdStarRate />
                  {stats.avgRating} / 5 avg rating
                </MetaPill>
              )}
              {stats.thisMonth > 0 && (
                <MetaPill>
                  <MdCalendarToday />
                  {stats.thisMonth} this month
                </MetaPill>
              )}
            </HeaderMetaRow>
          </PageHeaderLeft>
          <PageHeaderRight>
            <HeaderBtn type="button" onClick={load} title="Refresh">
              <MdRefresh size={16} />
              Refresh
            </HeaderBtn>
          </PageHeaderRight>
        </PageHeaderInner>
      </PageHeader>

      {/* ── ERROR ── */}
      {error && (
        <ErrorBanner>
          <MdWarning size={18} />
          {error}
        </ErrorBanner>
      )}

      {/* ── KPI CARDS ── */}
      <KpiGrid>
        <KpiCard $accent="#5eabb1">
          <KpiIconBox $bg="rgba(94,171,177,0.12)" $color="#5eabb1">
            <MdOutlineRateReview />
          </KpiIconBox>
          <KpiValue>{loading ? "—" : stats.total}</KpiValue>
          <KpiLabel>Total Feedbacks</KpiLabel>
          <KpiMeta>All time</KpiMeta>
        </KpiCard>

        <KpiCard $accent="#f59e0b">
          <KpiIconBox $bg="rgba(245,158,11,0.12)" $color="#f59e0b">
            <MdStarRate />
          </KpiIconBox>
          <KpiValue>
            {loading ? "—" : stats.avgRating ? `${stats.avgRating}` : "—"}
          </KpiValue>
          <KpiLabel>Average Rating</KpiLabel>
          <KpiMeta>out of 5</KpiMeta>
        </KpiCard>

        <KpiCard $accent="#3b82f6">
          <KpiIconBox $bg="rgba(59,130,246,0.12)" $color="#3b82f6">
            <MdCalendarToday />
          </KpiIconBox>
          <KpiValue>{loading ? "—" : stats.thisMonth}</KpiValue>
          <KpiLabel>This Month</KpiLabel>
          <KpiMeta
            $positive={
              stats.lastMonth > 0 && stats.thisMonth > stats.lastMonth
            }
            $negative={
              stats.lastMonth > 0 && stats.thisMonth < stats.lastMonth
            }
          >
            {loading ? "" : (
              <>
                {stats.lastMonth > 0 && stats.thisMonth > stats.lastMonth && (
                  <MdArrowUpward size={11} />
                )}
                {stats.lastMonth > 0 && stats.thisMonth < stats.lastMonth && (
                  <MdArrowDownward size={11} />
                )}
                {monthTrend || "Recent activity"}
              </>
            )}
          </KpiMeta>
        </KpiCard>

        <KpiCard $accent="#10b981">
          <KpiIconBox $bg="rgba(16,185,129,0.12)" $color="#10b981">
            <MdThumbUp />
          </KpiIconBox>
          <KpiValue>{loading ? "—" : `${stats.positiveRate}%`}</KpiValue>
          <KpiLabel>Positive Rate</KpiLabel>
          <KpiMeta $positive={stats.positiveRate >= 70}>
            {stats.positiveCount} positive reviews
          </KpiMeta>
        </KpiCard>

        <KpiCard $accent="#f43f5e">
          <KpiIconBox $bg="rgba(244,63,94,0.12)" $color="#f43f5e">
            <MdThumbDown />
          </KpiIconBox>
          <KpiValue>{loading ? "—" : stats.negativeCount}</KpiValue>
          <KpiLabel>Negative Count</KpiLabel>
          <KpiMeta $negative={stats.negativeCount > 0}>
            {stats.negativeCount > 0 ? "Needs review" : "None — great!"}
          </KpiMeta>
        </KpiCard>

        <KpiCard $accent="#8b5cf6">
          <KpiIconBox $bg="rgba(139,92,246,0.12)" $color="#8b5cf6">
            <MdNotificationImportant />
          </KpiIconBox>
          <KpiValue>{loading ? "—" : stats.last7}</KpiValue>
          <KpiLabel>Last 7 Days</KpiLabel>
          <KpiMeta>{stats.last7 === 0 ? "No recent feedback" : "Recent activity"}</KpiMeta>
        </KpiCard>
      </KpiGrid>

      {/* ── ANALYTICS GRID ── */}
      {!loading && (
        <AnalyticsGrid>
          {/* Sentiment Summary */}
          <Card>
            <CardHeader>
              <SectionLabel>
                <CardTitle>Sentiment Overview</CardTitle>
                <CardSubtitle>
                  Customer mood based on star ratings
                </CardSubtitle>
              </SectionLabel>
            </CardHeader>

            {rows.length === 0 ? (
              <EmptyState style={{ padding: "24px 0" }}>
                <EmptyIcon>😶</EmptyIcon>
                <EmptyTitle>No data yet</EmptyTitle>
              </EmptyState>
            ) : (
              <>
                <SentimentTrack>
                  {sentiment.map((s) => (
                    <SentimentSegment
                      key={s.label}
                      $color={s.color}
                      style={{ width: `${s.pct}%` }}
                      title={`${s.label}: ${s.pct}%`}
                    />
                  ))}
                </SentimentTrack>
                <SentimentRows>
                  {sentiment.map((s) => (
                    <SentimentRow key={s.label}>
                      <SentimentDot $color={s.color} />
                      <SentimentLabel>{s.label}</SentimentLabel>
                      <SentimentBar>
                        <SentimentFill
                          $color={s.color}
                          style={{ width: `${s.pct}%` }}
                        />
                      </SentimentBar>
                      <SentimentCount>{s.count}</SentimentCount>
                      <SentimentPct>{s.pct}%</SentimentPct>
                    </SentimentRow>
                  ))}
                </SentimentRows>
              </>
            )}
          </Card>

          {/* Rating Distribution */}
          <Card>
            <CardHeader>
              <SectionLabel>
                <CardTitle>Rating Distribution</CardTitle>
                <CardSubtitle>Breakdown by star rating</CardSubtitle>
              </SectionLabel>
            </CardHeader>
            <RatingDistRows>
              {ratingDist.map(({ n, count, pct }) => (
                <RatingDistRow key={n}>
                  <StarLabel>
                    <StarIcon $n={n}>★</StarIcon>
                    {n} star
                  </StarLabel>
                  <RatingBarTrack>
                    <RatingBarFill
                      $n={n}
                      $count={count}
                      style={{ width: `${pct}%` }}
                    />
                  </RatingBarTrack>
                  <RatingDistCount>{count}</RatingDistCount>
                  <RatingDistPct>{pct}%</RatingDistPct>
                </RatingDistRow>
              ))}
            </RatingDistRows>
          </Card>
        </AnalyticsGrid>
      )}

      {loading && (
        <AnalyticsGrid>
          <SkeletonCard $h="220px" />
          <SkeletonCard $h="220px" />
        </AnalyticsGrid>
      )}

      {/* ── TREND CHART ── */}
      {!loading && (
        <TrendCard>
          <TrendCardHeader>
            <SectionLabel>
              <SectionLabelTitle>Feedback Trend</SectionLabelTitle>
              <SectionLabelSub>
                Daily feedback volume and average rating — last 14 days
              </SectionLabelSub>
            </SectionLabel>
          </TrendCardHeader>
          {trendData.every((d) => d.Feedbacks === 0) ? (
            <EmptyState>
              <EmptyIcon>📈</EmptyIcon>
              <EmptyTitle>No recent trend data</EmptyTitle>
              <EmptyDesc>
                Once customers start leaving feedback, your trend will appear here.
              </EmptyDesc>
            </EmptyState>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={trendData}
                margin={{ top: 4, right: 8, left: -24, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(148,163,184,0.15)"
                />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                  interval={1}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "10px",
                    border: "1px solid rgba(148,163,184,0.2)",
                    boxShadow: "0 8px 24px rgba(15,23,42,0.1)",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="Feedbacks"
                  fill="#5eabb1"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </TrendCard>
      )}

      {loading && <SkeletonCard $h="280px" />}

      {/* ── INSIGHTS ── */}
      {!loading && insights.length > 0 && (
        <div>
          <SectionLabelTitle style={{ marginBottom: "12px" }}>
            Smart Insights
          </SectionLabelTitle>
          <InsightsGrid>
            {insights.map((ins, i) => (
              <InsightCard
                key={i}
                $borderColor={ins.borderColor}
              >
                <InsightTop>
                  <InsightIconBox $bg={ins.bg} $color={ins.color}>
                    {ins.icon}
                  </InsightIconBox>
                  <InsightChip
                    $bg={ins.chipBg}
                    $color={ins.chipColor}
                  >
                    {ins.chip}
                  </InsightChip>
                </InsightTop>
                <InsightText>{ins.text}</InsightText>
                <InsightAction>{ins.action}</InsightAction>
              </InsightCard>
            ))}
          </InsightsGrid>
        </div>
      )}

      {/* ── FILTER BAR ── */}
      <FilterBar>
        <FilterRow>
          <SearchWrapper>
            <SearchIcon>
              <MdSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search comments or customer name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrapper>
          <FilterSelect
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            aria-label="Filter by rating"
          >
            <option value="all">All ratings</option>
            <option value="5">★★★★★ 5 Stars</option>
            <option value="4">★★★★☆ 4 Stars</option>
            <option value="3">★★★☆☆ 3 Stars</option>
            <option value="2">★★☆☆☆ 2 Stars</option>
            <option value="1">★☆☆☆☆ 1 Star</option>
          </FilterSelect>
          <FilterSelect
            value={filterMood}
            onChange={(e) => setFilterMood(e.target.value)}
            aria-label="Filter by mood"
          >
            <option value="all">All moods</option>
            <option value="positive">😊 Positive</option>
            <option value="neutral">😐 Neutral</option>
            <option value="negative">😞 Negative</option>
          </FilterSelect>
        </FilterRow>
        <SortRow style={{ marginTop: "12px" }}>
          <SortLabel>Sort:</SortLabel>
          {[
            { key: "newest", label: "Newest" },
            { key: "oldest", label: "Oldest" },
            { key: "highest", label: "Highest rating" },
            { key: "lowest", label: "Lowest rating" },
            { key: "negative", label: "Needs attention" },
          ].map((s) => (
            <SortChip
              key={s.key}
              $active={sortBy === s.key}
              onClick={() => setSortBy(s.key)}
            >
              {s.label}
            </SortChip>
          ))}
        </SortRow>
      </FilterBar>

      {/* ── FEEDBACK LIST ── */}
      <SectionWrapper>
        <SectionHead>
          <SectionTitle>
            All Feedback
            <CountBadge>{filteredRows.length}</CountBadge>
          </SectionTitle>
        </SectionHead>
        <FeedbackList>
          {loading ? (
            <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                  <SkeletonCard $h="44px" style={{ width: "44px", flexShrink: 0, borderRadius: "12px" }} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <SkeletonLine $h="14px" $w="40%" />
                    <SkeletonLine $h="12px" $w="80%" />
                    <SkeletonLine $h="10px" $w="30%" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRows.length === 0 ? (
            <EmptyState>
              <EmptyIcon>🔍</EmptyIcon>
              <EmptyTitle>
                {rows.length === 0
                  ? "No feedback yet"
                  : "No results match your filters"}
              </EmptyTitle>
              <EmptyDesc>
                {rows.length === 0
                  ? "Share your menu link with customers and encourage them to rate their experience."
                  : "Try adjusting your search or filters to find what you're looking for."}
              </EmptyDesc>
            </EmptyState>
          ) : (
            filteredRows.map((item) => (
              <FeedbackCard
                key={item.id}
                onClick={() => setSelected(item)}
              >
                <AvatarInitial
                  name={item.customerName || "Anonymous"}
                  mood={item.mood}
                />
                <FeedbackBody>
                  <FeedbackTopRow>
                    <FeedbackName>
                      {item.customerName || "Anonymous customer"}
                    </FeedbackName>
                    {item.rating !== null && (
                      <StarDisplay rating={item.rating} />
                    )}
                    <FeedbackDate>{timeAgo(item.createdAt)}</FeedbackDate>
                  </FeedbackTopRow>
                  {item.comment ? (
                    <FeedbackComment>{item.comment}</FeedbackComment>
                  ) : (
                    <FeedbackComment
                      style={{ fontStyle: "italic", opacity: 0.55 }}
                    >
                      No comment left
                    </FeedbackComment>
                  )}
                  <FeedbackTagRow>
                    <MoodBadge $mood={item.mood}>
                      {item.mood === "positive"
                        ? "😊 Positive"
                        : item.mood === "negative"
                        ? "😞 Negative"
                        : "😐 Neutral"}
                    </MoodBadge>
                    {item.branch && <InfoTag>📍 {item.branch}</InfoTag>}
                    {item.orderType && (
                      <InfoTag>🛵 {item.orderType}</InfoTag>
                    )}
                    {item.rating !== null && (
                      <InfoTag>⭐ {item.rating}/5</InfoTag>
                    )}
                  </FeedbackTagRow>
                </FeedbackBody>
                <FeedbackActions onClick={(e) => e.stopPropagation()}>
                  {item.comment && (
                    <ActionBtn
                      type="button"
                      title="Copy comment"
                      onClick={(e) => copyComment(e, item.comment)}
                    >
                      <MdContentCopy size={15} />
                    </ActionBtn>
                  )}
                </FeedbackActions>
              </FeedbackCard>
            ))
          )}
        </FeedbackList>
      </SectionWrapper>

      {/* ── DETAIL MODAL ── */}
      {selected && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <ModalPanel onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Feedback Detail</ModalTitle>
              <ModalClose
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <MdClose />
              </ModalClose>
            </ModalHeader>
            <ModalBody>
              {/* Customer */}
              <ModalField>
                <ModalFieldLabel>Customer</ModalFieldLabel>
                <ModalFieldValue>
                  {selected.customerName || "Anonymous customer"}
                </ModalFieldValue>
              </ModalField>

              {/* Rating */}
              <ModalField>
                <ModalFieldLabel>Rating</ModalFieldLabel>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <StarDisplay rating={selected.rating} size="1.2rem" />
                  <ModalFieldValue>
                    {selected.rating !== null
                      ? `${selected.rating} / 5`
                      : "Not rated"}
                  </ModalFieldValue>
                </div>
              </ModalField>

              {/* Mood */}
              <ModalField>
                <ModalFieldLabel>Mood</ModalFieldLabel>
                <MoodBadge $mood={selected.mood}>
                  {selected.mood === "positive"
                    ? "😊 Positive"
                    : selected.mood === "negative"
                    ? "😞 Negative"
                    : "😐 Neutral"}
                </MoodBadge>
              </ModalField>

              <ModalDivider />

              {/* Comment */}
              <ModalField>
                <ModalFieldLabel>Comment</ModalFieldLabel>
                <ModalCommentBox>
                  {selected.comment || (
                    <span style={{ color: "#94a3b8", fontStyle: "italic" }}>
                      No comment provided
                    </span>
                  )}
                </ModalCommentBox>
              </ModalField>

              <ModalDivider />

              {/* Meta */}
              <ModalField>
                <ModalFieldLabel>Date</ModalFieldLabel>
                <ModalFieldValue>{formatDate(selected.createdAt)}</ModalFieldValue>
              </ModalField>
              {selected.branch && (
                <ModalField>
                  <ModalFieldLabel>Branch</ModalFieldLabel>
                  <ModalFieldValue>{selected.branch}</ModalFieldValue>
                </ModalField>
              )}
              {selected.orderType && (
                <ModalField>
                  <ModalFieldLabel>Order Type</ModalFieldLabel>
                  <ModalFieldValue>{selected.orderType}</ModalFieldValue>
                </ModalField>
              )}

              <ModalDivider />

              {/* Actions */}
              <ModalActions>
                {selected.comment && (
                  <ModalActionBtn
                    type="button"
                    onClick={() => {
                      if (navigator.clipboard)
                        navigator.clipboard
                          .writeText(selected.comment)
                          .catch(() => {});
                    }}
                  >
                    <MdContentCopy size={15} />
                    Copy comment
                  </ModalActionBtn>
                )}
                <ModalActionBtn
                  type="button"
                  $primary
                  onClick={() => setSelected(null)}
                >
                  Done
                </ModalActionBtn>
              </ModalActions>
            </ModalBody>
          </ModalPanel>
        </ModalOverlay>
      )}
    </Container>
  );
}
