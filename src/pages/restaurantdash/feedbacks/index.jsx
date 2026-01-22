import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  CardsGrid,
  StatCard,
  StatLabel,
  StatValue,
  StatMeta,
  Section,
  SectionTitle,
  ResultsGrid,
  ResultCard,
  ResultLabel,
  ResultValue,
  ProgressTrack,
  ProgressFill,
  List,
  ListItem,
  ListMain,
  ListTitle,
  ListMeta,
  Badge,
  ListEmpty,
  ErrorText,
  SkeletonText,
} from "./styles";
import { getCookie } from "../../../utilities/manageCookies";
import { getFeedbacks } from "../../../apis/feedback/getFeedbacks";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userInformation = (() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    try {
      return JSON.parse(storedUserInfo);
    } catch (err) {
      return {};
    }
  })();

  const restaurantId = userInformation?.restaurant_id;

  useEffect(() => {
    if (!restaurantId) return;
    setLoading(true);
    setError("");
    getFeedbacks(restaurantId)
      .then((response) => {
        const payload = response?.data?.data || response?.data || [];
        setFeedbacks(Array.isArray(payload) ? payload : []);
      })
      .catch(() => {
        setError("Failed to load");
        setFeedbacks([]);
      })
      .finally(() => setLoading(false));
  }, [restaurantId]);

  const stats = useMemo(() => {
    const total = feedbacks.length;
    const totalRating = feedbacks.reduce(
      (sum, item) => sum + Number(item.rating || 0),
      0
    );
    const avgRating = total ? (totalRating / total).toFixed(1) : "--";
    const now = new Date();
    const last30DaysCount = feedbacks.filter((item) => {
      const createdAt = new Date(item.created_at || item.createdAt);
      const diff = now - createdAt;
      return diff >= 0 && diff <= 30 * 24 * 60 * 60 * 1000;
    }).length;
    const topMood =
      total === 0
        ? "--"
        : Number(avgRating) >= 4
        ? "Positive"
        : Number(avgRating) >= 3
        ? "Neutral"
        : "Needs attention";

    return [
      { label: "Total Feedbacks", value: total, meta: "All time" },
      { label: "Average Rating", value: `${avgRating}/5`, meta: "All time" },
      { label: "Last 30 Days", value: last30DaysCount, meta: "Recent activity" },
      { label: "Top Mood", value: topMood, meta: "Based on ratings" },
    ];
  }, [feedbacks]);

  const results = useMemo(() => {
    const total = feedbacks.length || 1;
    const ratingCounts = feedbacks.reduce(
      (acc, item) => {
        const rating = Number(item.rating || 0);
        if (rating >= 5) acc.excellent += 1;
        else if (rating === 4) acc.good += 1;
        else if (rating === 3) acc.average += 1;
        else acc.poor += 1;
        return acc;
      },
      { excellent: 0, good: 0, average: 0, poor: 0 }
    );

    return [
      {
        label: "Excellent",
        value: Math.round((ratingCounts.excellent / total) * 100),
        color: "#16a34a",
      },
      {
        label: "Good",
        value: Math.round((ratingCounts.good / total) * 100),
        color: "#22c55e",
      },
      {
        label: "Average",
        value: Math.round((ratingCounts.average / total) * 100),
        color: "#f59e0b",
      },
      {
        label: "Poor",
        value: Math.round((ratingCounts.poor / total) * 100),
        color: "#ef4444",
      },
    ];
  }, [feedbacks]);

  const recentFeedbacks = useMemo(
    () =>
      [...feedbacks]
        .sort(
          (a, b) =>
            new Date(b.created_at || b.createdAt) -
            new Date(a.created_at || a.createdAt)
        )
        .slice(0, 5)
        .map((item) => ({
          title: item.comments || "No comments",
          meta: `${new Date(item.created_at || item.createdAt).toLocaleString()} · Rating ${item.rating || "--"}`,
          tag: item.rating >= 4 ? "Positive" : item.rating >= 3 ? "Neutral" : "Low",
        })),
    [feedbacks]
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Feedbacks</HeaderTitle>
        <HeaderSubtitle>Insights and results from customer feedback.</HeaderSubtitle>
      </Header>

      <CardsGrid>
        {stats.map((item) => (
          <StatCard key={item.label}>
            <StatLabel>{item.label}</StatLabel>
            <StatValue>{loading ? "--" : item.value}</StatValue>
            <StatMeta>{item.meta}</StatMeta>
          </StatCard>
        ))}
      </CardsGrid>

      <Section>
        <SectionTitle>Feedback Results</SectionTitle>
        {error && <ErrorText>{error}</ErrorText>}
        {loading && (
          <>
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </>
        )}
        <ResultsGrid>
          {results.map((result) => (
            <ResultCard key={result.label}>
              <ResultLabel>{result.label}</ResultLabel>
              <ResultValue>{result.value}%</ResultValue>
              <ProgressTrack>
                <ProgressFill
                  style={{
                    width: `${result.value}%`,
                    backgroundColor: result.color,
                  }}
                />
              </ProgressTrack>
            </ResultCard>
          ))}
        </ResultsGrid>
      </Section>

      <Section>
        <SectionTitle>Recent Feedbacks</SectionTitle>
        {error && <ErrorText>{error}</ErrorText>}
        {!loading && recentFeedbacks.length === 0 && !error && (
          <ListEmpty>No feedback yet</ListEmpty>
        )}
        <List>
          {recentFeedbacks.map((item, index) => (
            <ListItem key={`${item.title}-${index}`}>
              <ListMain>
                <ListTitle>{item.title}</ListTitle>
                <ListMeta>{item.meta}</ListMeta>
              </ListMain>
              <Badge>{item.tag}</Badge>
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  );
}
