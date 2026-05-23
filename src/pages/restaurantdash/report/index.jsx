import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "../../../utilities/manageCookies";
import {
  Container,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Card,
  SectionLabel,
  PresetsRow,
  PresetBtn,
  DateRow,
  DateInput,
  DateSep,
  DownloadBtn,
  Spinner,
  PreviewCard,
  PreviewTitle,
  PreviewList,
  PreviewItem,
  CheckIcon,
} from "./styles";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PRESETS = [
  { label: "This Week", days: 7 },
  { label: "Last 30 Days", days: 30 },
  { label: "Last 90 Days", days: 90 },
  { label: "Last 6 Months", days: 180 },
  { label: "Last Year", days: 365 },
  { label: "Custom", days: null },
];

const fmtDate = (d) => d.toISOString().split("T")[0];

const REPORT_SECTIONS = [
  "Executive Summary (KPIs)",
  "Daily Visits Trend (Chart)",
  "Traffic by Day of Week (Chart)",
  "Traffic Sources Breakdown",
  "Device Breakdown (Mobile/Desktop)",
  "Conversion Funnel (Visual)",
  "Top Visited Products (Cards + Table)",
  "Top Ordered Products + Conversion",
  "Top Visited Categories (Cards + Table)",
  "Least Visited Products",
  "Revenue & Order Breakdown",
  "Automated Insights & Recommendations",
];

export default function Report({ userInformation }) {
  const [activePreset, setActivePreset] = useState(1); // 30 days
  const [startDate, setStartDate] = useState(fmtDate(new Date(Date.now() - 30 * 86400000)));
  const [endDate, setEndDate] = useState(fmtDate(new Date()));
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePreset = (idx) => {
    setActivePreset(idx);
    const preset = PRESETS[idx];
    if (preset.days !== null) {
      setStartDate(fmtDate(new Date(Date.now() - preset.days * 86400000)));
      setEndDate(fmtDate(new Date()));
    }
  };

  const handleDownload = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    const url = `${BASE_URL}/restaurants/report/generate-report?restaurant_id=${userInformation?.restaurant_id}&startDate=${startDate}&toDate=${endDate}`;

    try {
      setIsDownloading(true);
      const token = getCookie("accessToken");
      const response = await axios.get(url, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `report_${startDate}_to_${endDate}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Could not download the report.\n\n" + (error.response?.data?.message || error.message));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Container>
      <Hero>
        <HeroTitle>Generate Performance Report</HeroTitle>
        <HeroSubtitle>
          Create a comprehensive PDF report with charts, analytics, and
          actionable insights for your business.
        </HeroSubtitle>
      </Hero>

      <Card $delay="0.05s">
        <SectionLabel>Select Period</SectionLabel>
        <PresetsRow>
          {PRESETS.map((p, i) => (
            <PresetBtn
              key={p.label}
              $active={activePreset === i}
              onClick={() => handlePreset(i)}
            >
              {p.label}
            </PresetBtn>
          ))}
        </PresetsRow>

        <DateRow>
          <DateInput
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setActivePreset(5);
            }}
          />
          <DateSep>to</DateSep>
          <DateInput
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setActivePreset(5);
            }}
          />
        </DateRow>
      </Card>

      <Card $delay="0.1s">
        <SectionLabel>Report Contents</SectionLabel>
        <PreviewCard>
          <PreviewTitle>Your report will include:</PreviewTitle>
          <PreviewList>
            {REPORT_SECTIONS.map((section) => (
              <PreviewItem key={section}>
                <CheckIcon>&#10003;</CheckIcon>
                {section}
              </PreviewItem>
            ))}
          </PreviewList>
        </PreviewCard>
      </Card>

      <Card $delay="0.15s">
        <DownloadBtn onClick={handleDownload} disabled={isDownloading}>
          {isDownloading ? (
            <>
              <Spinner /> Generating Report...
            </>
          ) : (
            <>&#128196; Download Report (PDF)</>
          )}
        </DownloadBtn>
      </Card>
    </Container>
  );
}
