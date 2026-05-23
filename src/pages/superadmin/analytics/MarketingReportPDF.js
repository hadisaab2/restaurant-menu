import jsPDF from "jspdf";

/**
 * Generate a professional Marketing Report PDF for a restaurant.
 * Designed to be sent to restaurant owners as a retargeting proposal.
 */

const BRAND_COLOR = [94, 171, 177]; // #5eabb1
const DARK = [15, 23, 42];
const GRAY = [100, 116, 139];
const LIGHT_BG = [248, 250, 252];
const WHITE = [255, 255, 255];
const GREEN = [16, 185, 129];
const BLUE = [24, 119, 242]; // Meta blue
const RED = [239, 68, 68];

export async function generateMarketingReportPDF({ restaurantName, dateRange, kpis, funnel, sources, topProducts, devices }) {
  const pdf = new jsPDF("p", "mm", "a4");
  const W = pdf.internal.pageSize.getWidth();
  const H = pdf.internal.pageSize.getHeight();
  const M = 18; // margin
  const CW = W - M * 2; // content width
  let y = 0;

  const safePct = (v) => `${(Number(v) || 0).toFixed(1)}%`;
  const safeNum = (v) => Number(v) || 0;
  const fmtNum = (n) => {
    n = Number(n) || 0;
    return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toFixed(n % 1 === 0 ? 0 : 2);
  };

  const checkPage = (needed = 30) => {
    if (y + needed > H - 20) {
      pdf.addPage();
      y = 20;
    }
  };

  const drawLine = (x1, y1, x2, y2, color = [226, 232, 240]) => {
    pdf.setDrawColor(...color);
    pdf.setLineWidth(0.3);
    pdf.line(x1, y1, x2, y2);
  };

  const drawRect = (x, ry, w, h, color) => {
    pdf.setFillColor(...color);
    pdf.roundedRect(x, ry, w, h, 3, 3, "F");
  };

  // ── PAGE 1: COVER ──
  // Background gradient effect
  pdf.setFillColor(12, 15, 29);
  pdf.rect(0, 0, W, H, "F");

  // Decorative circles
  pdf.setFillColor(94, 171, 177, 30);
  pdf.circle(W * 0.8, H * 0.3, 60, "F");
  pdf.setFillColor(139, 92, 246, 20);
  pdf.circle(W * 0.15, H * 0.7, 45, "F");

  // Menugic branding
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(94, 171, 177);
  pdf.text("MENUGIC", M, 35);

  // Title
  pdf.setFontSize(32);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  pdf.text("Analytics &", M, H * 0.35);
  pdf.text("Audience Data Report", M, H * 0.35 + 14);

  // Restaurant name
  pdf.setFontSize(22);
  pdf.setTextColor(...BRAND_COLOR);
  pdf.text(restaurantName, M, H * 0.35 + 35);

  // Date range
  pdf.setFontSize(12);
  pdf.setTextColor(148, 163, 184);
  pdf.text(`Report Period: ${dateRange}`, M, H * 0.35 + 48);

  // Footer
  pdf.setFontSize(10);
  pdf.setTextColor(100, 116, 139);
  pdf.text("Prepared by Menugic - Data Support", M, H - 20);
  pdf.text(new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), M, H - 14);

  // ── PAGE 2: EXECUTIVE SUMMARY ──
  pdf.addPage();
  y = 20;

  // Header bar
  drawRect(0, 0, W, 12, BRAND_COLOR);
  pdf.setFontSize(8);
  pdf.setTextColor(...WHITE);
  pdf.text(`MENUGIC  |  Data Report  |${restaurantName}`, M, 8);

  y = 25;
  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Executive Summary", M, y);
  y += 12;

  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text(`Performance overview for ${restaurantName} during ${dateRange}`, M, y);
  y += 14;

  // KPI Cards (2 rows x 3)
  const kpiData = [
    { label: "Total Visits", value: fmtNum(kpis?.visits?.value), color: BRAND_COLOR },
    { label: "Unique Visitors", value: fmtNum(kpis?.uniqueVisitors?.value), color: [59, 130, 246] },
    { label: "Orders Placed", value: fmtNum(kpis?.orders?.value), color: GREEN },
    { label: "Revenue", value: `$${fmtNum(kpis?.revenue?.value)}`, color: [139, 92, 246] },
    { label: "Conversion Rate", value: safePct(kpis?.conversionRate?.value), color: [245, 158, 11] },
    { label: "Cart Abandonment", value: safePct(kpis?.cartAbandonmentRate?.value), color: RED },
  ];

  const cardW = (CW - 8) / 3;
  const cardH = 28;
  kpiData.forEach((kpi, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const cx = M + col * (cardW + 4);
    const cy = y + row * (cardH + 4);

    drawRect(cx, cy, cardW, cardH, LIGHT_BG);
    // Color accent bar
    pdf.setFillColor(...kpi.color);
    pdf.roundedRect(cx, cy, 3, cardH, 1.5, 1.5, "F");

    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(String(kpi.value), cx + 10, cy + 13);

    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(kpi.label, cx + 10, cy + 21);
  });

  y += (cardH + 4) * 2 + 12;

  // ── CONVERSION FUNNEL ──
  checkPage(80);
  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Conversion Funnel", M, y);
  y += 4;

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("How visitors move through the ordering process", M, y + 5);
  y += 14;

  const funnelSteps = funnel?.funnel || [];
  const maxCount = Math.max(...funnelSteps.map((s) => s.count || 0), 1);

  funnelSteps.forEach((step, i) => {
    const barMaxW = CW - 70;
    const barW = Math.max(((step.count || 0) / maxCount) * barMaxW, 2);
    const barY = y + i * 16;

    // Label
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...DARK);
    pdf.text(step.step, M, barY + 5);

    // Bar
    const opacity = 1 - i * 0.15;
    pdf.setFillColor(94, 171, 177);
    pdf.setGState(new pdf.GState({ opacity }));
    pdf.roundedRect(M + 55, barY, barW, 8, 2, 2, "F");
    pdf.setGState(new pdf.GState({ opacity: 1 }));

    // Count
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(String(step.count || 0), M + 58 + barW, barY + 5);

    // Drop-off
    if (i > 0 && step.dropOff > 0) {
      pdf.setFontSize(7);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(...RED);
      pdf.text(`-${safeNum(step.dropOff).toFixed(0)}%`, CW + M - 5, barY + 5);
    }
  });

  y += funnelSteps.length * 16 + 10;

  // ── PAGE 3: AUDIENCE OPPORTUNITIES ──
  checkPage(60);
  if (y > 180) { pdf.addPage(); y = 20; drawRect(0, 0, W, 12, BRAND_COLOR); pdf.setFontSize(8); pdf.setTextColor(...WHITE); pdf.text(`MENUGIC  |  Data Report  |${restaurantName}`, M, 8); y = 25; }

  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Retargeting Audiences", M, y);
  y += 5;
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("Ready-to-use audiences for Meta (Facebook & Instagram) ad campaigns", M, y + 5);
  y += 16;

  const visits = safeNum(kpis?.visits?.value);
  const orders = safeNum(kpis?.orders?.value);
  const itemViews = safeNum(kpis?.itemViews?.value);
  const addToCart = safeNum(kpis?.addToCart?.value);
  const checkoutStarts = safeNum(kpis?.checkoutStarts?.value);
  const cartAbandoners = checkoutStarts > orders ? checkoutStarts - orders : 0;
  const viewedNotBought = itemViews > orders ? itemViews - orders : 0;

  const audiences = [
    {
      name: "All Visitors",
      size: visits,
      rule: "Everyone who visited in the last 30 days",
      campaign: "Brand awareness, new menu items, promotions",
      budget: "$5-10/day",
      color: BRAND_COLOR,
    },
    {
      name: "Product Viewers (No Purchase)",
      size: viewedNotBought,
      rule: "Viewed a product but didn't place an order",
      campaign: "\"Still interested? Order now!\" with product images",
      budget: "$5-8/day",
      color: [139, 92, 246],
    },
    {
      name: "Cart Abandoners",
      size: cartAbandoners,
      rule: "Added to cart or started checkout but didn't complete",
      campaign: "\"Your order is waiting!\" with discount offer",
      budget: "$3-5/day",
      color: RED,
    },
    {
      name: "Past Buyers",
      size: orders,
      rule: "Completed at least one order",
      campaign: "\"We miss you!\" + new menu items, loyalty rewards",
      budget: "$3-5/day",
      color: GREEN,
    },
    {
      name: "Lookalike Audience",
      size: "~50k-200k",
      rule: "People similar to your past buyers (Meta finds them)",
      campaign: "Reach new customers who look like your best buyers",
      budget: "$10-20/day",
      color: BLUE,
    },
  ];

  audiences.forEach((aud) => {
    checkPage(32);
    drawRect(M, y, CW, 26, LIGHT_BG);
    pdf.setFillColor(...aud.color);
    pdf.roundedRect(M, y, 3, 26, 1.5, 1.5, "F");

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(aud.name, M + 8, y + 7);

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...aud.color);
    pdf.text(`${aud.size} people`, W - M - 5, y + 7, { align: "right" });

    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(`Rule: ${aud.rule}`, M + 8, y + 14);
    pdf.text(`Campaign idea: ${aud.campaign}`, M + 8, y + 20);
    pdf.text(`Suggested budget: ${aud.budget}`, W - M - 5, y + 20, { align: "right" });

    y += 30;
  });

  // ── PAGE 4: CAMPAIGN RECOMMENDATIONS ──
  pdf.addPage();
  y = 20;
  drawRect(0, 0, W, 12, BRAND_COLOR);
  pdf.setFontSize(8);
  pdf.setTextColor(...WHITE);
  pdf.text(`MENUGIC  |  Data Report  |${restaurantName}`, M, 8);
  y = 25;

  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Recommended Campaigns", M, y);
  y += 14;

  const campaigns = [
    {
      title: "Campaign 1: Recover Lost Sales",
      target: "Cart Abandoners",
      platform: "Instagram Stories + Facebook Feed",
      message: `"You left something behind! Complete your order from ${restaurantName} and enjoy 10% off your first delivery."`,
      budget: "$3-5/day for 14 days",
      expectedResults: "10-15% conversion rate, recover 30-50% of abandoned carts",
      priority: "HIGH",
      prColor: RED,
    },
    {
      title: "Campaign 2: Re-engage Past Customers",
      target: "Past Buyers (no order in 14+ days)",
      platform: "Instagram Feed + Stories",
      message: `"We miss you! Check out what's new at ${restaurantName}. Order now and get free delivery!"`,
      budget: "$3-5/day ongoing",
      expectedResults: "Increase repeat orders by 20-35%",
      priority: "HIGH",
      prColor: [245, 158, 11],
    },
    {
      title: "Campaign 3: Acquire New Customers",
      target: "Lookalike Audience (similar to your buyers)",
      platform: "Instagram Reels + Stories + Facebook",
      message: `"Hungry? Discover ${restaurantName} - order your favorite meal online!"`,
      budget: "$10-20/day for 30 days",
      expectedResults: "Reach 10k-50k new potential customers, 2-5% conversion",
      priority: "MEDIUM",
      prColor: BLUE,
    },
  ];

  campaigns.forEach((camp) => {
    checkPage(55);
    // Campaign card
    drawRect(M, y, CW, 48, WHITE);
    pdf.setDrawColor(226, 232, 240);
    pdf.setLineWidth(0.3);
    pdf.roundedRect(M, y, CW, 48, 3, 3, "S");

    // Priority badge
    pdf.setFillColor(...camp.prColor);
    pdf.roundedRect(W - M - 22, y + 3, 19, 6, 2, 2, "F");
    pdf.setFontSize(6);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...WHITE);
    pdf.text(camp.priority, W - M - 12.5, y + 7.5, { align: "center" });

    // Title
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(camp.title, M + 6, y + 9);

    // Details
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(`Target: ${camp.target}`, M + 6, y + 17);
    pdf.text(`Platform: ${camp.platform}`, M + 6, y + 23);

    pdf.setTextColor(...DARK);
    pdf.setFont("helvetica", "italic");
    const msgLines = pdf.splitTextToSize(`"${camp.message}"`, CW - 16);
    pdf.text(msgLines, M + 6, y + 30);

    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(`Budget: ${camp.budget}`, M + 6, y + 40);
    pdf.setTextColor(...GREEN);
    pdf.text(`Expected: ${camp.expectedResults}`, M + 6, y + 45);

    y += 54;
  });

  // ── PAGE 5: HOW TO EXECUTE (Step-by-step) ──
  pdf.addPage();
  y = 20;
  drawRect(0, 0, W, 12, BRAND_COLOR);
  pdf.setFontSize(8);
  pdf.setTextColor(...WHITE);
  pdf.text(`MENUGIC  |  Data Report  |${restaurantName}`, M, 8);
  y = 25;

  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("How to Execute: Step-by-Step", M, y);
  y += 5;
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("Follow these steps in Meta Ads Manager to launch each campaign", M, y + 5);
  y += 16;

  const steps = [
    {
      title: "Step 1: Create Custom Audiences",
      instructions: [
        "Go to business.facebook.com > Audiences > Create Audience > Custom Audience",
        "Select 'Website' as the source",
        "Select the Menugic Pixel from the dropdown (already tracking your customers)",
        "",
        "Audience A - Cart Abandoners:",
        "  - Event: 'AddToCart' in the last 14 days",
        "  - Exclude: 'Purchase' in the last 14 days",
        "  - Name it: 'Cart Abandoners - " + restaurantName + "'",
        "",
        "Audience B - Past Buyers:",
        "  - Event: 'Purchase' in the last 60 days",
        "  - Name it: 'Past Buyers - " + restaurantName + "'",
        "",
        "Audience C - Lookalike:",
        "  - Go to Create Audience > Lookalike Audience",
        "  - Source: 'Past Buyers' audience you just created",
        "  - Location: Select your country/city",
        "  - Size: 1% (most similar people)",
        "",
        "Note: Menugic's pixel is already installed and collecting data.",
        "Contact Menugic to share pixel access with your ad account.",
      ],
    },
    {
      title: "Step 2: Create Campaign 1 (Cart Recovery)",
      instructions: [
        "Go to Ads Manager > Create > Choose 'Sales' objective",
        "Campaign name: '" + restaurantName + " - Cart Recovery'",
        "Budget: $3-5/day  |  Duration: 14 days",
        "",
        "Ad Set settings:",
        "  - Audience: Select 'Cart Abandoners' custom audience",
        "  - Placements: Instagram Stories + Facebook Feed",
        "  - Age/Location: Leave as default (audience is already targeted)",
        "",
        "Ad Creative:",
        "  - Format: Single image or short video of food",
        "  - Primary text: 'You left something behind!'",
        "  - Headline: 'Complete your order - 10% off!'",
        "  - CTA button: 'Order Now'",
        "  - Link: menugic.com/" + (restaurantName || "").toLowerCase().replace(/\s+/g, "-"),
      ],
    },
    {
      title: "Step 3: Create Campaign 2 (Re-engagement)",
      instructions: [
        "Create > Choose 'Sales' objective",
        "Campaign name: '" + restaurantName + " - Re-engage'",
        "Budget: $3-5/day  |  Duration: Ongoing",
        "",
        "Ad Set settings:",
        "  - Audience: Select 'Past Buyers' custom audience",
        "  - Exclude: People who purchased in last 3 days (avoid annoying recent buyers)",
        "  - Placements: Instagram Feed + Stories",
        "",
        "Ad Creative:",
        "  - Format: Carousel of best-selling items (see Top Products page)",
        "  - Primary text: 'We miss you! Check out what\\'s new'",
        "  - Headline: 'Order again - Free delivery!'",
        "  - CTA button: 'Order Now'",
      ],
    },
    {
      title: "Step 4: Create Campaign 3 (New Customers)",
      instructions: [
        "Create > Choose 'Sales' objective",
        "Campaign name: '" + restaurantName + " - New Customers'",
        "Budget: $10-20/day  |  Duration: 30 days",
        "",
        "Ad Set settings:",
        "  - Audience: Select 'Lookalike' audience",
        "  - Narrow by: Location (your delivery area) + Age 18-45",
        "  - Placements: Instagram Reels + Stories + Facebook Feed",
        "",
        "Ad Creative:",
        "  - Format: Video (15-30 sec food preparation or menu showcase)",
        "  - Primary text: 'Hungry? Discover " + restaurantName + "!'",
        "  - Headline: 'Order online - Fast delivery'",
        "  - CTA button: 'Order Now'",
      ],
    },
    {
      title: "Step 5: Monitor & Optimize",
      instructions: [
        "After 3-5 days, check Ads Manager for results:",
        "  - Cost per result (aim for < $1 per click)",
        "  - CTR - Click-through rate (aim for > 1%)",
        "  - ROAS - Return on ad spend (aim for > 3x)",
        "",
        "Optimization tips:",
        "  - Pause ads with CTR < 0.5% after 3 days",
        "  - Duplicate winning ads and increase budget by 20%",
        "  - Refresh ad creative every 2 weeks to avoid ad fatigue",
        "  - Test different images: food close-ups vs. lifestyle shots",
        "",
        "Weekly reporting:",
        "  - Export updated data from Menugic Superadmin dashboard",
        "  - Compare 'before ads' vs 'after ads' metrics",
        "  - Share results with the restaurant owner",
      ],
    },
  ];

  steps.forEach((step) => {
    checkPage(12 + step.instructions.length * 4.5);

    // Step title
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(step.title, M, y);
    y += 6;

    // Instructions
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    step.instructions.forEach((line) => {
      checkPage(6);
      if (line === "") {
        y += 2;
        return;
      }
      if (line.startsWith("  -") || line.startsWith("  ")) {
        pdf.setTextColor(...GRAY);
      } else {
        pdf.setTextColor(...DARK);
      }
      pdf.text(line, M + 4, y);
      y += 4.5;
    });

    y += 6;
    drawLine(M, y - 3, W - M, y - 3);
    y += 2;
  });

  // ── PAGE 6: TRAFFIC SOURCES + TOP PRODUCTS ──
  checkPage(60);
  if (y > 150) { pdf.addPage(); y = 20; drawRect(0, 0, W, 12, BRAND_COLOR); pdf.setFontSize(8); pdf.setTextColor(...WHITE); pdf.text(`MENUGIC  |  Data Report  |${restaurantName}`, M, 8); y = 25; }

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Traffic Sources", M, y);
  y += 8;

  // Sources table
  const srcHeaders = ["Source", "Visits", "Orders", "Revenue", "Conversion"];
  const colW = [35, 25, 25, 30, 30];

  drawRect(M, y, CW, 8, BRAND_COLOR);
  pdf.setFontSize(8);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...WHITE);
  let sx = M + 3;
  srcHeaders.forEach((h, i) => { pdf.text(h, sx, y + 5.5); sx += colW[i]; });
  y += 10;

  (sources || []).slice(0, 8).forEach((src, i) => {
    if (i % 2 === 0) drawRect(M, y - 2, CW, 7, LIGHT_BG);
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...DARK);
    sx = M + 3;
    pdf.text(String(src.source || ""), sx, y + 3); sx += colW[0];
    pdf.text(String(src.visits || 0), sx, y + 3); sx += colW[1];
    pdf.text(String(src.orders || 0), sx, y + 3); sx += colW[2];
    pdf.text(`$${fmtNum(src.revenue)}`, sx, y + 3); sx += colW[3];
    pdf.text(safePct(src.conversionRate), sx, y + 3);
    y += 7;
  });

  y += 10;
  checkPage(60);

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Top Products", M, y);
  y += 8;

  const prodHeaders = ["Product", "Views", "Orders", "Revenue"];
  const prodW = [60, 25, 25, 35];

  drawRect(M, y, CW, 8, BRAND_COLOR);
  pdf.setFontSize(8);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...WHITE);
  sx = M + 3;
  prodHeaders.forEach((h, i) => { pdf.text(h, sx, y + 5.5); sx += prodW[i]; });
  y += 10;

  (topProducts || []).slice(0, 8).forEach((prod, i) => {
    if (i % 2 === 0) drawRect(M, y - 2, CW, 7, LIGHT_BG);
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...DARK);
    sx = M + 3;
    const name = String(prod.product_name || "").substring(0, 30);
    pdf.text(name, sx, y + 3); sx += prodW[0];
    pdf.text(String(prod.views || 0), sx, y + 3); sx += prodW[1];
    pdf.text(String(prod.orders || 0), sx, y + 3); sx += prodW[2];
    pdf.text(`$${fmtNum(prod.revenue)}`, sx, y + 3);
    y += 7;
  });

  // ── LAST PAGE: DATA SUMMARY & NEXT STEPS ──
  pdf.addPage();
  y = 20;
  drawRect(0, 0, W, 12, BRAND_COLOR);
  pdf.setFontSize(8);
  pdf.setTextColor(...WHITE);
  pdf.text(`MENUGIC  |  Data Report  |${restaurantName}`, M, 8);
  y = 35;

  pdf.setFontSize(22);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Data Summary", M, y);
  y += 10;

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  const summaryText = pdf.splitTextToSize(
    `This report was generated from real user data collected through the Menugic platform for ${restaurantName}. Below is a summary of the key data points and actionable insights available for marketing use.`,
    CW
  );
  pdf.text(summaryText, M, y);
  y += summaryText.length * 6 + 12;

  // Key data points
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Available Data Points", M, y);
  y += 10;

  const dataPoints = [
    { label: "Total tracked visitors", value: String(visits), desc: "Unique users who visited the menu" },
    { label: "Product interactions", value: String(itemViews), desc: "Product views, add-to-cart, and checkout events" },
    { label: "Completed orders", value: String(orders), desc: "Orders placed with customer details" },
    { label: "Cart abandoners identified", value: String(cartAbandoners), desc: "Users who started checkout but did not complete" },
    { label: "Traffic sources tracked", value: String((sources || []).length), desc: "QR, Instagram, Facebook, Google, Direct, etc." },
    { label: "Device & behavior data", value: "Yes", desc: "Mobile vs desktop, peak hours, session duration" },
  ];

  dataPoints.forEach((dp) => {
    drawRect(M, y, CW, 14, LIGHT_BG);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(dp.label, M + 5, y + 6);

    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...BRAND_COLOR);
    pdf.text(dp.value, M + CW * 0.6, y + 6);

    pdf.setFontSize(7);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(dp.desc, M + 5, y + 11);

    y += 16;
  });

  y += 8;

  // Next steps
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...DARK);
  pdf.text("Next Steps", M, y);
  y += 8;

  const nextSteps = [
    "Use the audience data in this report to set up retargeting campaigns via Meta Ads Manager.",
    "The step-by-step instructions on the previous pages explain exactly how to create each campaign.",
    "All data is collected and updated automatically through the Menugic platform.",
    "Updated reports can be generated at any time from the Menugic dashboard.",
  ];

  nextSteps.forEach((step, i) => {
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...DARK);
    const stepText = pdf.splitTextToSize(`${i + 1}. ${step}`, CW - 10);
    pdf.text(stepText, M + 5, y);
    y += stepText.length * 5 + 4;
  });

  y += 10;

  // Footer box
  drawRect(M, y, CW, 18, LIGHT_BG);
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("This report is provided by Menugic as a data support service.", M + CW / 2, y + 7, { align: "center" });
  pdf.text("www.menugic.com", M + CW / 2, y + 13, { align: "center" });

  // Footer on all pages
  const totalPages = pdf.internal.getNumberOfPages();
  for (let i = 2; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(180, 180, 180);
    pdf.text(`Page ${i - 1} of ${totalPages - 1}`, W / 2, H - 8, { align: "center" });
    pdf.text("Menugic - Data Support", W - M, H - 8, { align: "right" });
  }

  // Save
  const safeName = restaurantName.replace(/[^a-zA-Z0-9]/g, "_");
  pdf.save(`${safeName}_Marketing_Report.pdf`);
}
