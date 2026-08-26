import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderActions,
  ExportButton,
  FiltersContainer,
  FilterRow,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  FilterInput,
  CompareToggle,
  KPICards,
  KPICard,
  KPILabel,
  KPIValue,
  KPIChange,
  TrendsSection,
  SectionTitle,
  ChartContainer,
  EmptyState,
  LoadingState,
  ErrorState,
  TabsContainer,
  Tabs,
  Tab,
  TableWrapper,
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  FunnelContainer,
  FunnelStep,
  FunnelStepLabel,
  FunnelStepBar,
  FunnelStepFill,
  InsightCard,
  InsightTitle,
  InsightMessage,
  InsightSuggestion,
} from "./styles";
import { getCookie } from "../../../utilities/manageCookies";
import { getCurrencySymbol } from "../../../utilities/getCurrencySymbol";
import axios from "axios";
import { TrendsChart } from "./components/TrendsChart";
import {
  TopProductsChart,
  TopCategoriesChart,
  ProductsList,
  CategoriesList,
} from "./components/ProductCategoryCharts";
import jsPDF from "jspdf";

import { getTranslations } from "./translations";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getOverviewKPIs = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const url = `${BASE_URL}/analytics/overview?${queryParams.toString()}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching overview KPIs:", error);
    throw error;
  }
};

const getTrends = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const url = `${BASE_URL}/analytics/trends?${queryParams.toString()}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trends:", error);
    throw error;
  }
};

const getFunnel = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const response = await axios.get(`${BASE_URL}/analytics/funnel?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching funnel:", error);
    throw error;
  }
};

const getSourceAnalytics = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const response = await axios.get(`${BASE_URL}/analytics/sources?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching source analytics:", error);
    throw error;
  }
};

const getMenuAnalytics = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const response = await axios.get(`${BASE_URL}/analytics/menu?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching menu analytics:", error);
    throw error;
  }
};

const getBranchAnalytics = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const response = await axios.get(`${BASE_URL}/analytics/branches?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching branch analytics:", error);
    throw error;
  }
};

const getInsights = async (params) => {
  try {
    const token = getCookie("accessToken");
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== "") {
        queryParams.append(key, params[key]);
      }
    });
    const response = await axios.get(`${BASE_URL}/analytics/insights?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching insights:", error);
    throw error;
  }
};

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kpis, setKpis] = useState(null);
  const [trends, setTrends] = useState(null);
  const [funnel, setFunnel] = useState(null);
  const [sources, setSources] = useState(null);
  const [menu, setMenu] = useState(null);
  const [branches, setBranches] = useState(null);
  const [insights, setInsights] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Filters
  const [dateRange, setDateRange] = useState("30d");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [branchId, setBranchId] = useState("");
  const [orderType, setOrderType] = useState("");
  const [source, setSource] = useState("");
  const [compare, setCompare] = useState(false);
  const [groupBy, setGroupBy] = useState("day");

  const userInfo = JSON.parse(getCookie("userInfo") || "{}");
  const restaurantId = userInfo?.restaurant_id;
  const restaurantName = userInfo?.restaurant_name;
  const currentLang = userInfo?.Lang || "en";
  const currencySymbol = getCurrencySymbol(userInfo?.currency || "dollar");
  const t = getTranslations(currentLang);
  const [logoUrl, setLogoUrl] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [liveFeed, setLiveFeed] = useState([]);
  const [liveAutoRefresh, setLiveAutoRefresh] = useState(false);
  const [segments, setSegments] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (restaurantId) {
      fetchData();
      fetchRestaurantLogo();
      fetchBranches();
    }
  }, [restaurantId, dateRange, startDate, endDate, branchId, orderType, source, compare, groupBy]);

  const fetchRestaurantLogo = async () => {
    try {
      if (!restaurantName) return;
      const token = getCookie("accessToken");
      const response = await axios.get(`${BASE_URL}/restaurants/${restaurantName}?onlyLogo=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data?.logoURL) {
        setLogoUrl(`https://storage.googleapis.com/ecommerce-bucket-testing/${response.data.logoURL}`);
      }
    } catch (error) {
      console.error("Error fetching restaurant logo:", error);
    }
  };

  const fetchBranches = async () => {
    try {
      const token = getCookie("accessToken");
      const response = await axios.get(`${BASE_URL}/branches?restaurantId=${restaurantId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data && Array.isArray(response.data)) {
        setBranchList(response.data);
      }
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };

  const fetchLiveFeed = async () => {
    try {
      const token = getCookie("accessToken");
      const response = await axios.get(`${BASE_URL}/analytics/live-feed?limit=100`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data?.data) setLiveFeed(response.data.data);
    } catch (error) {
      console.error("Error fetching live feed:", error);
    }
  };

  const fetchSegments = async () => {
    try {
      const token = getCookie("accessToken");
      const dates = getDateRange();
      const response = await axios.get(`${BASE_URL}/analytics/segments?start_date=${dates.start_date}&end_date=${dates.end_date}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data?.data) setSegments(response.data.data);
    } catch (error) {
      console.error("Error fetching segments:", error);
    }
  };

  const fetchSearchAnalytics = async () => {
    try {
      const token = getCookie("accessToken");
      const dates = getDateRange();
      const response = await axios.get(`${BASE_URL}/analytics/search-analytics?start_date=${dates.start_date}&end_date=${dates.end_date}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data?.data) setSearchData(response.data.data);
    } catch (error) {
      console.error("Error fetching search analytics:", error);
    }
  };

  // Auto-refresh live feed every 10 seconds when enabled
  useEffect(() => {
    if (!liveAutoRefresh || activeTab !== "live") return;
    const interval = setInterval(fetchLiveFeed, 10000);
    return () => clearInterval(interval);
  }, [liveAutoRefresh, activeTab]);

  const getDateRange = () => {
    const end = new Date();
    let start = new Date();

    switch (dateRange) {
      case "today":
        start = new Date(end);
        start.setHours(0, 0, 0, 0);
        break;
      case "7d":
        start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "30d":
        start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case "90d":
        start = new Date(end.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      case "ytd":
        start = new Date(end.getFullYear(), 0, 1);
        break;
      case "1y":
        start = new Date(end.getTime() - 365 * 24 * 60 * 60 * 1000);
        break;
      case "all":
        start = new Date("2020-01-01");
        break;
      case "custom":
        if (startDate && endDate) {
          start = new Date(startDate);
          end = new Date(endDate);
        }
        break;
      default:
        start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    return {
      start_date: start.toISOString().split("T")[0],
      end_date: end.toISOString().split("T")[0],
    };
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const dates = getDateRange();
      const params = {
        ...dates,
        branch_id: branchId || null,
        order_type: orderType || null,
        source: source || null,
        compare: compare,
        group_by: groupBy,
      };

      const [kpisData, trendsData, funnelData, sourcesData, menuData, branchesData, insightsData] =
        await Promise.all([
          getOverviewKPIs(params),
          getTrends(params),
          getFunnel(params),
          getSourceAnalytics(params),
          getMenuAnalytics(params),
          getBranchAnalytics(params),
          getInsights(params),
        ]);

      setKpis(kpisData.data);
      setTrends(trendsData.data);
      setFunnel(funnelData.data);
      setSources(sourcesData.data);
      setMenu(menuData.data);
      setBranches(branchesData.data);
      setInsights(insightsData.data);
      setLastUpdated(new Date());
    } catch (err) {
      setError("Failed to load analytics data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return `${currencySymbol}0.00`;
    }
    const numValue = typeof value === "number" ? value : parseFloat(value);
    if (isNaN(numValue)) {
      return `${currencySymbol}0.00`;
    }
    return `${currencySymbol}${numValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatNumber = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0";
    }
    const numValue = typeof value === "number" ? value : parseFloat(value);
    if (isNaN(numValue)) {
      return "0";
    }
    return new Intl.NumberFormat("en-US").format(numValue);
  };

  const formatPercent = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0.00%";
    }
    const numValue = typeof value === "number" ? value : parseFloat(value);
    if (isNaN(numValue)) {
      return "0.00%";
    }
    return `${numValue.toFixed(2)}%`;
  };

  const getChangeColor = (change) => {
    if (!change) return "#666";
    if (change > 0) return "#10b981"; // green
    if (change < 0) return "#ef4444"; // red
    return "#666"; // gray
  };

  const getChangeIcon = (change) => {
    if (!change) return "";
    if (change > 0) return "↑";
    if (change < 0) return "↓";
    return "→";
  };

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      // Add timeout for image loading
      const timeout = setTimeout(() => {
        reject(new Error("Image load timeout"));
      }, 10000);
      
      img.onload = () => {
        clearTimeout(timeout);
        resolve(img);
      };
      
      img.onerror = (error) => {
        clearTimeout(timeout);
        console.error("Error loading image:", error);
        reject(new Error("Failed to load image"));
      };
      
      img.src = url;
    });
  };

  const formatChange = (change) => {
    if (change === null || change === undefined) return "-";
    const numChange = typeof change === "number" ? change : parseFloat(change);
    if (isNaN(numChange)) return "-";
    const sign = numChange > 0 ? "+" : "";
    return `${sign}${numChange.toFixed(2)}%`;
  };

  const exportToPDF = async () => {
    try {
      setExporting(true);
      console.log("Starting PDF export...");
      
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      let yPosition = 20;
      const margin = 20;
      const titleX = currentLang === "ar" ? pageWidth - margin : margin;
      
      console.log("PDF initialized, pageWidth:", pageWidth, "currentLang:", currentLang);

      // Add logo
      if (logoUrl) {
        try {
          console.log("Loading logo from:", logoUrl);
          const logoImg = await loadImage(logoUrl);
          if (logoImg) {
            const logoHeight = 20;
            const logoWidth = (logoImg.width / logoImg.height) * logoHeight;
            const logoX = currentLang === "ar" ? margin : pageWidth - margin - logoWidth;
            pdf.addImage(logoImg, "PNG", logoX, yPosition, logoWidth, logoHeight);
            console.log("Logo added successfully");
          }
        } catch (error) {
          console.warn("Error loading logo, continuing without logo:", error);
          // Continue without logo
        }
      } else {
        console.log("No logo URL available");
      }

      // Add title
      console.log("Adding title:", t.title);
      pdf.setFontSize(20);
      pdf.setFont("helvetica", "bold");
      try {
        if (currentLang === "ar") {
          pdf.text(t.title, titleX, yPosition + 10, { align: "right" });
        } else {
          pdf.text(t.title, titleX, yPosition + 10);
        }
      } catch (error) {
        console.error("Error adding title:", error);
        pdf.text(t.title, titleX, yPosition + 10);
      }

      // Add date range
      const dates = getDateRange();
      console.log("Date range:", dates);
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(100, 100, 100);
      yPosition += 20;
      const periodText = `${t.period}: ${dates.start_date} ${currentLang === "ar" ? "إلى" : "to"} ${dates.end_date}`;
      try {
        if (currentLang === "ar") {
          pdf.text(periodText, titleX, yPosition, { align: "right" });
        } else {
          pdf.text(periodText, titleX, yPosition);
        }
      } catch (error) {
        console.error("Error adding period text:", error);
        pdf.text(periodText, titleX, yPosition);
      }
      if (compare) {
        yPosition += 5;
        try {
          if (currentLang === "ar") {
            pdf.text(t.comparedToPrevious, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.comparedToPrevious, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.comparedToPrevious, titleX, yPosition);
        }
      }
      yPosition += 10;

      // Add KPIs
      console.log("Adding KPIs, kpis data:", kpis);
      if (kpis) {
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
        try {
          if (currentLang === "ar") {
            pdf.text(t.overviewKPIs, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.overviewKPIs, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.overviewKPIs, titleX, yPosition);
        }
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        const kpiRows = [
          [t.metric, t.value, t.change],
          [t.totalVisits, formatNumber(kpis.visits?.value || 0), formatChange(kpis.visits?.change)],
          [t.uniqueVisitors, formatNumber(kpis.uniqueVisitors?.value || 0), formatChange(kpis.uniqueVisitors?.change)],
          [t.orders, formatNumber(kpis.orders?.value || 0), formatChange(kpis.orders?.change)],
          [t.revenue, formatCurrency(kpis.revenue?.value || 0), formatChange(kpis.revenue?.change)],
          [t.conversionRate, formatPercent(kpis.conversionRate?.value || 0), formatChange(kpis.conversionRate?.change)],
          [t.avgOrderValue, formatCurrency(kpis.avgOrderValue?.value || 0), formatChange(kpis.avgOrderValue?.change)],
          [t.cartAbandonment, formatPercent(kpis.cartAbandonmentRate?.value || 0), formatChange(kpis.cartAbandonmentRate?.change)],
        ];

        kpiRows.forEach((row, index) => {
          if (yPosition > pageHeight - 30) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.setFont("helvetica", index === 0 ? "bold" : "normal");
          try {
            if (currentLang === "ar") {
              pdf.text(String(row[2] || ""), pageWidth - margin, yPosition, { align: "right" });
              pdf.text(String(row[1] || ""), pageWidth - margin - 50, yPosition, { align: "right" });
              pdf.text(String(row[0] || ""), pageWidth - margin - 100, yPosition, { align: "right" });
            } else {
              pdf.text(String(row[0] || ""), margin, yPosition);
              pdf.text(String(row[1] || ""), margin + 80, yPosition);
              pdf.text(String(row[2] || ""), margin + 130, yPosition);
            }
          } catch (error) {
            console.error(`Error adding KPI row ${index}:`, error);
            // Fallback to simple text
            pdf.text(String(row[0] || ""), margin, yPosition);
            pdf.text(String(row[1] || ""), margin + 80, yPosition);
            pdf.text(String(row[2] || ""), margin + 130, yPosition);
          }
          yPosition += 7;
        });
        yPosition += 5;
      }

      // Add Funnel
      if (funnel) {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
        try {
          if (currentLang === "ar") {
            pdf.text(t.conversionFunnel, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.conversionFunnel, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.conversionFunnel, titleX, yPosition);
        }
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        const funnelSteps = [
          [t.step, t.count, t.dropOff],
          [t.visits, formatNumber(funnel.visits || 0), "-"],
          [t.itemViews, formatNumber(funnel.itemViews || 0), formatPercent(funnel.visitsToItemViewDropOff || 0)],
          [t.addToCart, formatNumber(funnel.addToCart || 0), formatPercent(funnel.itemViewToCartDropOff || 0)],
          [t.checkoutStarted, formatNumber(funnel.checkoutStarted || 0), formatPercent(funnel.cartToCheckoutDropOff || 0)],
          [t.orders, formatNumber(funnel.orders || 0), formatPercent(funnel.checkoutToOrderDropOff || 0)],
        ];

        funnelSteps.forEach((row, index) => {
          if (yPosition > pageHeight - 30) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.setFont("helvetica", index === 0 ? "bold" : "normal");
          try {
            if (currentLang === "ar") {
              pdf.text(String(row[2] || ""), pageWidth - margin, yPosition, { align: "right" });
              pdf.text(String(row[1] || ""), pageWidth - margin - 50, yPosition, { align: "right" });
              pdf.text(String(row[0] || ""), pageWidth - margin - 100, yPosition, { align: "right" });
            } else {
              pdf.text(String(row[0] || ""), margin, yPosition);
              pdf.text(String(row[1] || ""), margin + 80, yPosition);
              pdf.text(String(row[2] || ""), margin + 130, yPosition);
            }
          } catch (error) {
            pdf.text(String(row[0] || ""), margin, yPosition);
            pdf.text(String(row[1] || ""), margin + 80, yPosition);
            pdf.text(String(row[2] || ""), margin + 130, yPosition);
          }
          yPosition += 7;
        });
        yPosition += 5;
      }

      // Add Top Products
      if (menu?.topProducts?.byRevenue && menu.topProducts.byRevenue.length > 0) {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
        try {
          if (currentLang === "ar") {
            pdf.text(t.topProductsByRevenue, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.topProductsByRevenue, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.topProductsByRevenue, titleX, yPosition);
        }
        yPosition += 8;

        pdf.setFontSize(9);
        pdf.setFont("helvetica", "normal");
        const productRows = [
          [t.product, t.views, t.orders, t.revenue],
        ];
        menu.topProducts.byRevenue.slice(0, 10).forEach((product) => {
          productRows.push([
            (product.product_name || `Product #${product.product_id}`).substring(0, 30),
            formatNumber(product.views || 0),
            formatNumber(product.orders || 0),
            formatCurrency(product.revenue || 0),
          ]);
        });

        productRows.forEach((row, index) => {
          if (yPosition > pageHeight - 30) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.setFont("helvetica", index === 0 ? "bold" : "normal");
          try {
            if (currentLang === "ar") {
              pdf.text(String(row[3] || ""), pageWidth - margin, yPosition, { align: "right" });
              pdf.text(String(row[2] || ""), pageWidth - margin - 40, yPosition, { align: "right" });
              pdf.text(String(row[1] || ""), pageWidth - margin - 70, yPosition, { align: "right" });
              pdf.text(String(row[0] || ""), pageWidth - margin - 100, yPosition, { align: "right" });
            } else {
              pdf.text(String(row[0] || ""), margin, yPosition);
              pdf.text(String(row[1] || ""), margin + 60, yPosition);
              pdf.text(String(row[2] || ""), margin + 90, yPosition);
              pdf.text(String(row[3] || ""), margin + 120, yPosition);
            }
          } catch (error) {
            pdf.text(String(row[0] || ""), margin, yPosition);
            pdf.text(String(row[1] || ""), margin + 60, yPosition);
            pdf.text(String(row[2] || ""), margin + 90, yPosition);
            pdf.text(String(row[3] || ""), margin + 120, yPosition);
          }
          yPosition += 6;
        });
        yPosition += 5;
      }

      // Add Top Categories
      if (menu?.topCategories?.byRevenue && menu.topCategories.byRevenue.length > 0) {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
        try {
          if (currentLang === "ar") {
            pdf.text(t.topCategoriesByRevenue, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.topCategoriesByRevenue, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.topCategoriesByRevenue, titleX, yPosition);
        }
        yPosition += 8;

        pdf.setFontSize(9);
        pdf.setFont("helvetica", "normal");
        const categoryRows = [
          [t.category, t.views, t.orders, t.revenue],
        ];
        menu.topCategories.byRevenue.slice(0, 10).forEach((category) => {
          categoryRows.push([
            (category.category_name || `Category #${category.category_id}`).substring(0, 30),
            formatNumber(category.views || 0),
            formatNumber(category.orders || 0),
            formatCurrency(category.revenue || 0),
          ]);
        });

        categoryRows.forEach((row, index) => {
          if (yPosition > pageHeight - 30) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.setFont("helvetica", index === 0 ? "bold" : "normal");
          try {
            if (currentLang === "ar") {
              pdf.text(String(row[3] || ""), pageWidth - margin, yPosition, { align: "right" });
              pdf.text(String(row[2] || ""), pageWidth - margin - 40, yPosition, { align: "right" });
              pdf.text(String(row[1] || ""), pageWidth - margin - 70, yPosition, { align: "right" });
              pdf.text(String(row[0] || ""), pageWidth - margin - 100, yPosition, { align: "right" });
            } else {
              pdf.text(String(row[0] || ""), margin, yPosition);
              pdf.text(String(row[1] || ""), margin + 60, yPosition);
              pdf.text(String(row[2] || ""), margin + 90, yPosition);
              pdf.text(String(row[3] || ""), margin + 120, yPosition);
            }
          } catch (error) {
            pdf.text(String(row[0] || ""), margin, yPosition);
            pdf.text(String(row[1] || ""), margin + 60, yPosition);
            pdf.text(String(row[2] || ""), margin + 90, yPosition);
            pdf.text(String(row[3] || ""), margin + 120, yPosition);
          }
          yPosition += 6;
        });
        yPosition += 5;
      }

      // Add Source Analytics
      if (sources && sources.length > 0) {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
        try {
          if (currentLang === "ar") {
            pdf.text(t.sourceAnalytics, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.sourceAnalytics, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.sourceAnalytics, titleX, yPosition);
        }
        yPosition += 8;

        pdf.setFontSize(9);
        pdf.setFont("helvetica", "normal");
        const sourceRows = [
          [t.source, t.visits, t.orders, t.revenue, t.convRate],
        ];
        sources.slice(0, 10).forEach((source) => {
          sourceRows.push([
            source.source || "Unknown",
            formatNumber(source.visits || 0),
            formatNumber(source.orders || 0),
            formatCurrency(source.revenue || 0),
            formatPercent(source.conversionRate || 0),
          ]);
        });

        sourceRows.forEach((row, index) => {
          if (yPosition > pageHeight - 30) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.setFont("helvetica", index === 0 ? "bold" : "normal");
          try {
            if (currentLang === "ar") {
              pdf.text(String(row[4] || ""), pageWidth - margin, yPosition, { align: "right" });
              pdf.text(String(row[3] || ""), pageWidth - margin - 40, yPosition, { align: "right" });
              pdf.text(String(row[2] || ""), pageWidth - margin - 70, yPosition, { align: "right" });
              pdf.text(String(row[1] || ""), pageWidth - margin - 100, yPosition, { align: "right" });
              pdf.text(String(row[0] || ""), pageWidth - margin - 130, yPosition, { align: "right" });
            } else {
              pdf.text(String(row[0] || ""), margin, yPosition);
              pdf.text(String(row[1] || ""), margin + 50, yPosition);
              pdf.text(String(row[2] || ""), margin + 75, yPosition);
              pdf.text(String(row[3] || ""), margin + 100, yPosition);
              pdf.text(String(row[4] || ""), margin + 140, yPosition);
            }
          } catch (error) {
            pdf.text(String(row[0] || ""), margin, yPosition);
            pdf.text(String(row[1] || ""), margin + 50, yPosition);
            pdf.text(String(row[2] || ""), margin + 75, yPosition);
            pdf.text(String(row[3] || ""), margin + 100, yPosition);
            pdf.text(String(row[4] || ""), margin + 140, yPosition);
          }
          yPosition += 6;
        });
        yPosition += 5;
      }

      // Add Insights
      if (insights && insights.length > 0) {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        yPosition += 10;
        try {
          if (currentLang === "ar") {
            pdf.text(t.keyInsights, titleX, yPosition, { align: "right" });
          } else {
            pdf.text(t.keyInsights, titleX, yPosition);
          }
        } catch (error) {
          pdf.text(t.keyInsights, titleX, yPosition);
        }
        yPosition += 8;

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        insights.slice(0, 5).forEach((insight) => {
          if (yPosition > pageHeight - 40) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.setFont("helvetica", "bold");
          try {
            const insightTitle = String(insight.title || t.insight || "");
            if (currentLang === "ar") {
              pdf.text(insightTitle, titleX, yPosition, { align: "right" });
            } else {
              pdf.text(insightTitle, titleX, yPosition);
            }
          } catch (error) {
            pdf.text(String(insight.title || t.insight || ""), titleX, yPosition);
          }
          yPosition += 6;
          pdf.setFont("helvetica", "normal");
          const message = String((insight.message || "").substring(0, 150));
          try {
            if (currentLang === "ar") {
              pdf.text(message, titleX, yPosition, { align: "right" });
            } else {
              pdf.text(message, titleX, yPosition);
            }
          } catch (error) {
            pdf.text(message, titleX, yPosition);
          }
          yPosition += 8;
        });
      }

      // Add footer with generation date
      const totalPages = pdf.internal.pages.length - 1;
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(150, 150, 150);
        const footerText = `${t.generatedOn} ${new Date().toLocaleString()} - ${t.page} ${i} ${t.of} ${totalPages}`;
        const footerX = currentLang === "ar" ? pageWidth - margin : margin;
        try {
          if (currentLang === "ar") {
            pdf.text(footerText, footerX, pageHeight - 10, { align: "right" });
          } else {
            pdf.text(footerText, footerX, pageHeight - 10);
          }
        } catch (error) {
          pdf.text(footerText, footerX, pageHeight - 10);
        }
      }

      // Save PDF
      console.log("Saving PDF...");
      const fileName = `Analytics_Report_${restaurantName || "Restaurant"}_${dates.start_date}_to_${dates.end_date}.pdf`;
      pdf.save(fileName);
      console.log("PDF saved successfully:", fileName);
    } catch (error) {
      console.error("Error exporting to PDF:", error);
      console.error("Error stack:", error.stack);
      console.error("Error details:", {
        message: error.message,
        name: error.name,
        currentLang,
        hasKpis: !!kpis,
        hasFunnel: !!funnel,
        hasMenu: !!menu,
        hasSources: !!sources,
        hasInsights: !!insights,
      });
      alert(t.exportFailed + "\n\nError: " + (error.message || "Unknown error"));
    } finally {
      setExporting(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingState>Loading analytics...</LoadingState>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorState>{error}</ErrorState>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <div>
          <HeaderTitle>Analytics Dashboard</HeaderTitle>
          {lastUpdated && (
            <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 400 }}>
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
        </div>
        <HeaderActions>
          <ExportButton onClick={exportToPDF} disabled={exporting || loading}>
            {exporting ? t.exporting : `📄 ${t.exportToPDF}`}
          </ExportButton>
        </HeaderActions>
      </Header>

      <FiltersContainer>
        <FilterRow>
          <FilterGroup>
            <FilterLabel>Date Range</FilterLabel>
            <FilterSelect
              value={dateRange}
              onChange={(e) => {
                setDateRange(e.target.value);
                if (e.target.value !== "custom") {
                  setStartDate("");
                  setEndDate("");
                }
              }}
            >
              <option value="today">Today</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="ytd">Year to Date</option>
              <option value="1y">Last 1 year</option>
              <option value="all">All Time</option>
              <option value="custom">Custom</option>
            </FilterSelect>
          </FilterGroup>

          {dateRange === "custom" && (
            <>
              <FilterGroup>
                <FilterLabel>Start Date</FilterLabel>
                <FilterInput
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FilterGroup>
              <FilterGroup>
                <FilterLabel>End Date</FilterLabel>
                <FilterInput
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FilterGroup>
            </>
          )}

          <FilterGroup>
            <FilterLabel>Branch</FilterLabel>
            <FilterSelect
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
            >
              <option value="">All Branches</option>
              {branchList.map((b) => (
                <option key={b.id} value={b.id}>{b.en_name || b.ar_name || `Branch #${b.id}`}</option>
              ))}
            </FilterSelect>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Order Type</FilterLabel>
            <FilterSelect
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Delivery">Delivery</option>
              <option value="Takeaway">Takeaway</option>
              <option value="DineIn">Dine In</option>
            </FilterSelect>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Source</FilterLabel>
            <FilterSelect
              value={source}
              onChange={(e) => setSource(e.target.value)}
            >
              <option value="">All Sources</option>
              <option value="QR">QR Code</option>
              <option value="Instagram">Instagram</option>
              <option value="Google">Google</option>
              <option value="Direct">Direct</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Facebook">Facebook</option>
              <option value="TikTok">TikTok</option>
              <option value="Other">Other</option>
            </FilterSelect>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>Group By</FilterLabel>
            <FilterSelect
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </FilterSelect>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>
              <CompareToggle
                type="checkbox"
                checked={compare}
                onChange={(e) => setCompare(e.target.checked)}
              />
              Compare to Previous Period
            </FilterLabel>
          </FilterGroup>
        </FilterRow>
      </FiltersContainer>

      {kpis && (
        <KPICards>
          <KPICard>
            <KPILabel>Total Visits</KPILabel>
            <KPIValue>{formatNumber(kpis.visits?.value || 0)}</KPIValue>
            {kpis.visits?.change !== null && (
              <KPIChange $color={getChangeColor(kpis.visits.change)}>
                {getChangeIcon(kpis.visits.change)} {formatPercent(Math.abs(kpis.visits.change))}
              </KPIChange>
            )}
          </KPICard>

          <KPICard>
            <KPILabel>Unique Visitors</KPILabel>
            <KPIValue>{formatNumber(kpis.uniqueVisitors?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Orders</KPILabel>
            <KPIValue>{formatNumber(kpis.orders?.value || 0)}</KPIValue>
            {kpis.orders?.change !== null && (
              <KPIChange $color={getChangeColor(kpis.orders.change)}>
                {getChangeIcon(kpis.orders.change)} {formatPercent(Math.abs(kpis.orders.change))}
              </KPIChange>
            )}
          </KPICard>

          <KPICard>
            <KPILabel>Revenue</KPILabel>
            <KPIValue>{formatCurrency(kpis.revenue?.value || 0)}</KPIValue>
            {kpis.revenue?.change !== null && (
              <KPIChange $color={getChangeColor(kpis.revenue.change)}>
                {getChangeIcon(kpis.revenue.change)} {formatPercent(Math.abs(kpis.revenue.change))}
              </KPIChange>
            )}
          </KPICard>

          <KPICard>
            <KPILabel>Conversion Rate</KPILabel>
            <KPIValue>{formatPercent(kpis.conversionRate?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Avg Order Value</KPILabel>
            <KPIValue>{formatCurrency(kpis.avgOrderValue?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Cart Abandonment</KPILabel>
            <KPIValue>{formatPercent(kpis.cartAbandonmentRate?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Return Visitors</KPILabel>
            <KPIValue>{formatPercent(kpis.returnVisitorRate?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Item Views</KPILabel>
            <KPIValue>{formatNumber(kpis.itemViews?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Add to Cart</KPILabel>
            <KPIValue>{formatNumber(kpis.addToCart?.value || 0)}</KPIValue>
          </KPICard>

          <KPICard>
            <KPILabel>Checkout Starts</KPILabel>
            <KPIValue>{formatNumber(kpis.checkoutStarts?.value || 0)}</KPIValue>
          </KPICard>
        </KPICards>
      )}

      <TabsContainer>
        <Tabs>
          <Tab $active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
            Overview
          </Tab>
          <Tab $active={activeTab === "trends"} onClick={() => setActiveTab("trends")}>
            Trends
          </Tab>
          <Tab $active={activeTab === "funnel"} onClick={() => setActiveTab("funnel")}>
            Funnel
          </Tab>
          <Tab $active={activeTab === "sources"} onClick={() => setActiveTab("sources")}>
            Sources
          </Tab>
          <Tab $active={activeTab === "menu"} onClick={() => setActiveTab("menu")}>
            Menu
          </Tab>
          <Tab $active={activeTab === "branches"} onClick={() => setActiveTab("branches")}>
            Branches
          </Tab>
          <Tab $active={activeTab === "insights"} onClick={() => setActiveTab("insights")}>
            Insights
          </Tab>
          <Tab $active={activeTab === "segments"} onClick={() => { setActiveTab("segments"); fetchSegments(); }}>
            Segments
          </Tab>
          <Tab $active={activeTab === "search"} onClick={() => { setActiveTab("search"); fetchSearchAnalytics(); }}>
            Search
          </Tab>
          <Tab $active={activeTab === "live"} onClick={() => { setActiveTab("live"); fetchLiveFeed(); }}>
            Live
          </Tab>
        </Tabs>
      </TabsContainer>

      {activeTab === "overview" && funnel && (
        <TrendsSection>
          <SectionTitle>Conversion Funnel</SectionTitle>
          <div style={{ background: "white", borderRadius: "12px" }}>
            <FunnelContainer>
              {funnel.funnel?.map((step, index) => {
                const maxCount = funnel.funnel[0]?.count || 1;
                const percentage = (step.count / maxCount) * 100;
                const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];
                return (
                  <FunnelStep key={index}>
                    <FunnelStepLabel>{step.step}</FunnelStepLabel>
                    <FunnelStepBar>
                      <FunnelStepFill
                        $percentage={percentage}
                        $color={colors[index % colors.length]}
                      >
                        {step.count}
                      </FunnelStepFill>
                    </FunnelStepBar>
                    <div style={{ minWidth: "100px", textAlign: "right" }}>
                      {formatPercent(step.dropOff)} drop-off
                    </div>
                  </FunnelStep>
                );
              })}
            </FunnelContainer>
            <div style={{ marginTop: "20px", padding: "16px", background: "#f8fafc", borderRadius: "8px" }}>
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>Overall Conversion</div>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#10b981" }}>
                {formatPercent(funnel.overallConversion || 0)}
              </div>
            </div>
          </div>
        </TrendsSection>
      )}

      {activeTab === "trends" && (
        <TrendsSection>
          <SectionTitle>Trends</SectionTitle>
          {trends ? (
            <>
              {trends.visits && trends.visits.length > 0 && (
                <TrendsChart
                  data={trends.visits}
                  type="line"
                  title="Visits Trend"
                  metric="visits"
                />
              )}
              {trends.orders && trends.orders.length > 0 && (
                <TrendsChart
                  data={trends.orders}
                  type="line"
                  title="Orders & Revenue Trend"
                  metric="orders"
                />
              )}
            </>
          ) : (
            <EmptyState>No trends data available</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "funnel" && (
        <TrendsSection>
          <SectionTitle>Funnel & Abandonment</SectionTitle>
          {funnel ? (
            <div style={{ background: "white", borderRadius: "12px", padding: "24px" }}>
              <FunnelContainer>
                {funnel.funnel?.map((step, index) => {
                  const maxCount = funnel.funnel[0]?.count || 1;
                  const percentage = (step.count / maxCount) * 100;
                  const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];
                  return (
                    <FunnelStep key={index}>
                      <FunnelStepLabel>{step.step}</FunnelStepLabel>
                      <FunnelStepBar>
                        <FunnelStepFill
                          $percentage={percentage}
                          $color={colors[index % colors.length]}
                        >
                          {step.count}
                        </FunnelStepFill>
                      </FunnelStepBar>
                      <div style={{ minWidth: "100px", textAlign: "right" }}>
                        {formatPercent(step.dropOff)} drop-off
                      </div>
                    </FunnelStep>
                  );
                })}
              </FunnelContainer>
              <div style={{ marginTop: "20px", padding: "16px", background: "#f8fafc", borderRadius: "8px" }}>
                <div style={{ fontWeight: 600, marginBottom: "8px" }}>Overall Conversion</div>
                <div style={{ fontSize: "24px", fontWeight: 700, color: "#10b981" }}>
                  {formatPercent(funnel.overallConversion || 0)}
                </div>
                <div style={{ marginTop: "12px", fontSize: "13px", color: "#64748b" }}>
                  Top Drop-off Step: <strong>{funnel.topDropOffStep}</strong> (
                  {formatPercent(funnel.topDropOffRate || 0)})
                </div>
              </div>
            </div>
          ) : (
            <EmptyState>No funnel data available</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "sources" && (
        <TrendsSection>
          <SectionTitle>Source / Channel Analytics</SectionTitle>
          {sources && sources.length > 0 ? (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Source</TableHeaderCell>
                    <TableHeaderCell>Visits</TableHeaderCell>
                    <TableHeaderCell>Unique Visitors</TableHeaderCell>
                    <TableHeaderCell>Orders</TableHeaderCell>
                    <TableHeaderCell>Revenue</TableHeaderCell>
                    <TableHeaderCell>Conversion Rate</TableHeaderCell>
                    <TableHeaderCell>Avg Order Value</TableHeaderCell>
                  </tr>
                </TableHeader>
                <tbody>
                  {sources.map((source, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: 600 }}>{source.source}</TableCell>
                      <TableCell>{formatNumber(source.visits)}</TableCell>
                      <TableCell>{formatNumber(source.uniqueVisitors)}</TableCell>
                      <TableCell>{formatNumber(source.orders)}</TableCell>
                      <TableCell>{formatCurrency(source.revenue)}</TableCell>
                      <TableCell>{formatPercent(source.conversionRate)}</TableCell>
                      <TableCell>{formatCurrency(source.avgOrderValue)}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
          ) : (
            <EmptyState>No source data available</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "menu" && (
        <TrendsSection>
          <SectionTitle>Menu Analytics</SectionTitle>
          {menu ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Top Products Charts */}
              {menu.topProducts?.byViews && menu.topProducts.byViews.length > 0 && (
                <TopProductsChart
                  products={menu.topProducts.byViews}
                  metric="views"
                  limit={10}
                />
              )}
              {menu.topProducts?.byOrders && menu.topProducts.byOrders.length > 0 && (
                <TopProductsChart
                  products={menu.topProducts.byOrders}
                  metric="orders"
                  limit={10}
                />
              )}
              {menu.topProducts?.byRevenue && menu.topProducts.byRevenue.length > 0 && (
                <TopProductsChart
                  products={menu.topProducts.byRevenue}
                  metric="revenue"
                  limit={10}
                />
              )}

              {/* Top Categories Charts */}
              {menu.topCategories?.byViews && menu.topCategories.byViews.length > 0 && (
                <TopCategoriesChart
                  categories={menu.topCategories.byViews}
                  metric="views"
                  limit={10}
                />
              )}
              {menu.topCategories?.byOrders && menu.topCategories.byOrders.length > 0 && (
                <TopCategoriesChart
                  categories={menu.topCategories.byOrders}
                  metric="orders"
                  limit={10}
                />
              )}
              {menu.topCategories?.byRevenue && menu.topCategories.byRevenue.length > 0 && (
                <TopCategoriesChart
                  categories={menu.topCategories.byRevenue}
                  metric="revenue"
                  limit={10}
                />
              )}

              {/* Products List */}
              {menu.topProducts?.byRevenue && menu.topProducts.byRevenue.length > 0 && (
                <ProductsList
                  products={menu.topProducts.byRevenue}
                  title="Top Products by Revenue (Detailed)"
                  limit={20}
                  currencySymbol={currencySymbol}
                />
              )}

              {/* Categories List */}
              {menu.topCategories?.byRevenue && menu.topCategories.byRevenue.length > 0 && (
                <CategoriesList
                  categories={menu.topCategories.byRevenue}
                  title="Top Categories by Revenue (Detailed)"
                  limit={20}
                  currencySymbol={currencySymbol}
                />
              )}

              {/* Opportunities */}
              {menu.opportunities?.highViewsLowCart?.length > 0 && (
                <div style={{ background: "#fef3c7", borderRadius: "12px", padding: "24px" }}>
                  <h4 style={{ margin: "0 0 16px 0", fontSize: "16px", fontWeight: 600 }}>
                    Opportunities: High Views, Low Add-to-Cart Rate
                  </h4>
                  <TableWrapper><Table>
                    <TableHeader>
                      <tr>
                        <TableHeaderCell>Product Name</TableHeaderCell>
                        <TableHeaderCell>Views</TableHeaderCell>
                        <TableHeaderCell>Add to Cart</TableHeaderCell>
                        <TableHeaderCell>View→Cart Rate</TableHeaderCell>
                      </tr>
                    </TableHeader>
                    <tbody>
                      {menu.opportunities.highViewsLowCart.slice(0, 10).map((product, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ fontWeight: 600 }}>
                            {product.product_name || product.product_name_en || product.product_name_ar || `Product #${product.product_id}`}
                            {product.product_id && (
                              <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "normal" }}>
                                ID: {product.product_id}
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{formatNumber(product.views)}</TableCell>
                          <TableCell>{formatNumber(product.addToCart)}</TableCell>
                          <TableCell>{formatPercent(product.viewToCartRate)}</TableCell>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table></TableWrapper>
                </div>
              )}

              {menu.opportunities?.highCartLowOrder?.length > 0 && (
                <div style={{ background: "#fef3c7", borderRadius: "12px", padding: "24px" }}>
                  <h4 style={{ margin: "0 0 16px 0", fontSize: "16px", fontWeight: 600 }}>
                    Opportunities: High Add-to-Cart, Low Order Rate
                  </h4>
                  <TableWrapper><Table>
                    <TableHeader>
                      <tr>
                        <TableHeaderCell>Product Name</TableHeaderCell>
                        <TableHeaderCell>Add to Cart</TableHeaderCell>
                        <TableHeaderCell>Orders</TableHeaderCell>
                        <TableHeaderCell>Cart→Order Rate</TableHeaderCell>
                      </tr>
                    </TableHeader>
                    <tbody>
                      {menu.opportunities.highCartLowOrder.slice(0, 10).map((product, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ fontWeight: 600 }}>
                            {product.product_name || product.product_name_en || product.product_name_ar || `Product #${product.product_id}`}
                            {product.product_id && (
                              <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "normal" }}>
                                ID: {product.product_id}
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{formatNumber(product.addToCart)}</TableCell>
                          <TableCell>{formatNumber(product.orders)}</TableCell>
                          <TableCell>{formatPercent(product.cartToOrderRate)}</TableCell>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table></TableWrapper>
                </div>
              )}
            </div>
          ) : (
            <EmptyState>No menu data available</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "branches" && (
        <TrendsSection>
          <SectionTitle>Branch Analytics</SectionTitle>
          {branches && branches.length > 0 ? (
            <TableWrapper>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Branch ID</TableHeaderCell>
                    <TableHeaderCell>Visits</TableHeaderCell>
                    <TableHeaderCell>Orders</TableHeaderCell>
                    <TableHeaderCell>Revenue</TableHeaderCell>
                    <TableHeaderCell>Avg Order Value</TableHeaderCell>
                    <TableHeaderCell>Conversion Rate</TableHeaderCell>
                  </tr>
                </TableHeader>
                <tbody>
                  {branches.map((branch, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: 600 }}>{branch.branch_name || `Branch #${branch.branch_id}` || "N/A"}</TableCell>
                      <TableCell>{formatNumber(branch.visits)}</TableCell>
                      <TableCell>{formatNumber(branch.orders)}</TableCell>
                      <TableCell>{formatCurrency(branch.revenue)}</TableCell>
                      <TableCell>{formatCurrency(branch.avgOrderValue)}</TableCell>
                      <TableCell>{formatPercent(branch.conversionRate)}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>
          ) : (
            <EmptyState>No branch data available</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "insights" && (
        <TrendsSection>
          <SectionTitle>Insights & Recommendations</SectionTitle>
          {insights && insights.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {insights.map((insight, index) => (
                <InsightCard key={index} $type={insight.type}>
                  <InsightTitle>{insight.title}</InsightTitle>
                  <InsightMessage>{insight.message}</InsightMessage>
                  <InsightSuggestion>
                    <strong>Suggested Action:</strong> {insight.suggestion}
                  </InsightSuggestion>
                </InsightCard>
              ))}
            </div>
          ) : (
            <EmptyState>No insights available. All metrics are performing well!</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "search" && (
        <TrendsSection>
          <SectionTitle>Search Analytics</SectionTitle>
          {searchData ? (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#5eabb1" }}>{searchData.totalSearches}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Total Searches</div>
                </div>
                <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#8b5cf6" }}>{searchData.uniqueQueries}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Unique Queries</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", marginBottom: 12 }}>Top Search Queries</div>
                  {searchData.topQueries?.length > 0 ? searchData.topQueries.map((q, i) => (
                    <div key={q.query} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #f8fafc", fontSize: 13 }}>
                      <span style={{ color: "#334155" }}>{q.query}</span>
                      <span style={{ color: "#64748b", fontWeight: 600 }}>{q.count}x ({q.avgResults} results)</span>
                    </div>
                  )) : (
                    <EmptyState>No search data yet. Search tracking is active and will collect data as customers use the search feature.</EmptyState>
                  )}
                </div>

                <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ef4444", marginBottom: 12 }}>Zero-Result Queries</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginBottom: 12 }}>Customers searched for these but found nothing — consider adding these items to your menu.</div>
                  {searchData.zeroResultQueries?.length > 0 ? searchData.zeroResultQueries.map((q) => (
                    <div key={q.query} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #f8fafc", fontSize: 13 }}>
                      <span style={{ color: "#334155" }}>{q.query}</span>
                      <span style={{ color: "#ef4444", fontWeight: 600 }}>{q.count}x</span>
                    </div>
                  )) : (
                    <div style={{ fontSize: 13, color: "#10b981", textAlign: "center", padding: 20 }}>No zero-result queries — great coverage!</div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <EmptyState>Loading search analytics...</EmptyState>
          )}
        </TrendsSection>
      )}

      {activeTab === "segments" && segments && (
        <TrendsSection>
          <SectionTitle>Customer Segmentation</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#3b82f6" }}>{segments.newVisitors}</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>New Visitors ({segments.newRate}%)</div>
            </div>
            <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#10b981" }}>{segments.returningVisitors}</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Returning ({segments.returningRate}%)</div>
            </div>
            <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#0f172a" }}>{segments.totalVisitors}</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Total Visitors</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Frequency Distribution */}
            <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", marginBottom: 12 }}>Visit Frequency</div>
              {segments.frequencyDistribution?.map((f) => (
                <div key={f.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f8fafc" }}>
                  <span style={{ fontSize: 13, color: "#334155" }}>{f.label}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 80, height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ width: `${segments.totalVisitors > 0 ? (f.count / segments.totalVisitors) * 100 : 0}%`, height: "100%", background: "#5eabb1", borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#64748b", minWidth: 30, textAlign: "right" }}>{f.count}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* High Value Customers */}
            <div style={{ background: "white", borderRadius: 12, padding: 16, border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", marginBottom: 12 }}>Top Customers (by Spend)</div>
              {segments.highValueCustomers?.length > 0 ? segments.highValueCustomers.slice(0, 10).map((c, i) => (
                <div key={c.visitor_id} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #f8fafc", fontSize: 13 }}>
                  <span style={{ color: "#334155" }}>#{i + 1} {(c.visitor_id || "").slice(0, 12)}...</span>
                  <span style={{ color: "#10b981", fontWeight: 600 }}>{c.orders} orders — {currencySymbol}{c.totalSpent.toFixed(2)}</span>
                </div>
              )) : (
                <div style={{ fontSize: 13, color: "#94a3b8", textAlign: "center", padding: 20 }}>No order data for this period</div>
              )}
            </div>
          </div>
        </TrendsSection>
      )}

      {activeTab === "live" && (
        <TrendsSection>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <SectionTitle style={{ margin: 0 }}>Live Activity Feed</SectionTitle>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#64748b", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={liveAutoRefresh}
                onChange={(e) => setLiveAutoRefresh(e.target.checked)}
              />
              Auto-refresh (10s)
            </label>
          </div>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TableHeaderCell>Time</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Visitor</TableHeaderCell>
                  <TableHeaderCell>Details</TableHeaderCell>
                  <TableHeaderCell>Source</TableHeaderCell>
                </tr>
              </thead>
              <tbody>
                {liveFeed.map((item, i) => (
                  <TableRow key={`${item.type}-${item.id}`}>
                    <TableCell style={{ fontSize: 12, whiteSpace: "nowrap" }}>
                      {new Date(item.timestamp).toLocaleString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", day: "2-digit", month: "short" })}
                    </TableCell>
                    <TableCell>
                      <span style={{
                        padding: "2px 8px", borderRadius: 12, fontSize: 11, fontWeight: 600, color: "white",
                        background: item.type === "visit" ? "#3b82f6" : item.event_type === "order_placed" ? "#10b981" : item.event_type === "add_to_cart" ? "#f59e0b" : "#8b5cf6"
                      }}>
                        {item.type === "visit" ? "Visit" : item.event_type?.replace("_", " ")}
                      </span>
                    </TableCell>
                    <TableCell style={{ fontSize: 11, color: "#64748b" }}>
                      {(item.visitor_id || "").slice(0, 16)}...
                    </TableCell>
                    <TableCell style={{ fontSize: 12 }}>
                      {item.type === "visit"
                        ? `${item.device_type || "?"} - ${item.landing_page || "/"}`
                        : `${item.product_name || ""}${item.revenue ? ` - ${currencySymbol}${item.revenue}` : ""}${item.order_id ? ` (Order #${item.order_id})` : ""}`
                      }
                    </TableCell>
                    <TableCell style={{ fontSize: 12 }}>{item.source || "-"}</TableCell>
                  </TableRow>
                ))}
                {liveFeed.length === 0 && (
                  <TableRow><TableCell colSpan={5} style={{ textAlign: "center", color: "#94a3b8" }}>No activity yet</TableCell></TableRow>
                )}
              </tbody>
            </Table>
          </TableWrapper>
        </TrendsSection>
      )}
    </Container>
  );
}
