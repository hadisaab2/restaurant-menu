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
import axios from "axios";
import { TrendsChart } from "./components/TrendsChart";
import {
  TopProductsChart,
  TopCategoriesChart,
  ProductsList,
  CategoriesList,
} from "./components/ProductCategoryCharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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
  const t = getTranslations(currentLang);
  const [logoUrl, setLogoUrl] = useState(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (restaurantId) {
      fetchData();
      fetchRestaurantLogo();
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
    } catch (err) {
      setError("Failed to load analytics data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "$0.00";
    }
    const numValue = typeof value === "number" ? value : parseFloat(value);
    if (isNaN(numValue)) {
      return "$0.00";
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(numValue);
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
          [t.totalVisits, formatNumber(kpis.totalVisits || 0), formatChange(kpis.totalVisitsChange)],
          [t.uniqueVisitors, formatNumber(kpis.uniqueVisitors || 0), formatChange(kpis.uniqueVisitorsChange)],
          [t.orders, formatNumber(kpis.orders || 0), formatChange(kpis.ordersChange)],
          [t.revenue, formatCurrency(kpis.revenue || 0), formatChange(kpis.revenueChange)],
          [t.conversionRate, formatPercent(kpis.conversionRate || 0), formatChange(kpis.conversionRateChange)],
          [t.avgOrderValue, formatCurrency(kpis.avgOrderValue || 0), formatChange(kpis.avgOrderValueChange)],
          [t.cartAbandonment, formatPercent(kpis.cartAbandonmentRate || 0), formatChange(kpis.cartAbandonmentRateChange)],
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
        <HeaderTitle>Analytics Dashboard</HeaderTitle>
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
              {/* TODO: Load branches dynamically */}
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
        </Tabs>
      </TabsContainer>

      {activeTab === "overview" && kpis && (
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

      {activeTab === "trends" && (
        <TrendsSection>
          <SectionTitle>Trends</SectionTitle>
          {trends ? (
            <>
              {trends.visits && (
                <TrendsChart
                  data={trends.visits}
                  type="line"
                  title="Visits Trend"
                  metric="visits"
                />
              )}
              {trends.orders && (
                <TrendsChart
                  data={trends.orders}
                  type="line"
                  title="Orders Trend"
                  metric="orders"
                />
              )}
              {trends.revenue && (
                <TrendsChart
                  data={trends.revenue}
                  type="line"
                  title="Revenue Trend"
                  metric="revenue"
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
            <div style={{ background: "white", borderRadius: "12px", overflow: "hidden" }}>
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
            </div>
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
                />
              )}

              {/* Categories List */}
              {menu.topCategories?.byRevenue && menu.topCategories.byRevenue.length > 0 && (
                <CategoriesList
                  categories={menu.topCategories.byRevenue}
                  title="Top Categories by Revenue (Detailed)"
                  limit={20}
                />
              )}

              {/* Opportunities */}
              {menu.opportunities?.highViewsLowCart?.length > 0 && (
                <div style={{ background: "#fef3c7", borderRadius: "12px", padding: "24px" }}>
                  <h4 style={{ margin: "0 0 16px 0", fontSize: "16px", fontWeight: 600 }}>
                    Opportunities: High Views, Low Add-to-Cart Rate
                  </h4>
                  <Table>
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
                  </Table>
                </div>
              )}

              {menu.opportunities?.highCartLowOrder?.length > 0 && (
                <div style={{ background: "#fef3c7", borderRadius: "12px", padding: "24px" }}>
                  <h4 style={{ margin: "0 0 16px 0", fontSize: "16px", fontWeight: 600 }}>
                    Opportunities: High Add-to-Cart, Low Order Rate
                  </h4>
                  <Table>
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
                  </Table>
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
            <div style={{ background: "white", borderRadius: "12px", overflow: "hidden" }}>
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
                      <TableCell style={{ fontWeight: 600 }}>{branch.branch_id || "N/A"}</TableCell>
                      <TableCell>{formatNumber(branch.visits)}</TableCell>
                      <TableCell>{formatNumber(branch.orders)}</TableCell>
                      <TableCell>{formatCurrency(branch.revenue)}</TableCell>
                      <TableCell>{formatCurrency(branch.avgOrderValue)}</TableCell>
                      <TableCell>{formatPercent(branch.conversionRate)}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </div>
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
    </Container>
  );
}
