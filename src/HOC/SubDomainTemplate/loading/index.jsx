import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import "./styles.css";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

const backgroundColors = [
  { name: "kacodoner", color: "rgb(255 233 226)" },
  { name: "aldaouksweets", color: "#E1DBCA" },
  { name: "junkies", color: "#111111" },
  { name: "cheeseboard", color: "#194b70" },
  { name: "balloweenevent", color: "#1a1a1a" },
  { name: "the1burger", color: "#038796" },
  { name: "alsharqsweets", color: "#f5f5f5" },
  { name: "paradise", color: "#F9E2F0" },
  { name: "medilaser", color: "#f8f8f8" },
  { name: "pizzafactory", color: "#232323" },
  { name: "magnifico", color: "#719371" },
  { name: "jadeerorganics", color: "#bcc1aa" },
  { name: "shamacosmetics", color: "#FDE4FD" },
  { name: "brewsociety", color: "#ededed" },
  { name: "beit-wurud", color: "#FEE6F3" },
  { name: "beitmariam", color: "#01ACB9" },
  { name: "powermunch", color: "#A9D05E" },
  { name: "albahar", color: "#EDEDED" },
  { name: "harkousfoods", color: "#FCFCFF" },
  { name: "pizzalata", color: "#80A475" },
  { name: "syrian-restaurant", color: "#80A475" },
  { name: "majedzuheir", color: "#29AEB7" },
  { name: "frieslab", color: "#FFF5E6" },
  { name: "aseel", color: "#184A47" },
  { name: "kraydes", color: "#0f003b" },
  { name: "lafleur-doree", color: "#DFC4CA" },
  { name: "yorgosupp", color: "#DCDCDC" },
  { name: "reflex", color: "#F6F5F5" },
];

function isLightColor(hex) {
  if (!hex) return false;
  let c = hex.replace("#", "");
  if (hex.startsWith("rgb")) {
    const m = hex.match(/\d+/g);
    if (m) return (parseInt(m[0]) * 299 + parseInt(m[1]) * 587 + parseInt(m[2]) * 114) / 1000 > 155;
  }
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}

export default function Loading({ restaurantName, viewLoading }) {
  const [hidden, setHidden] = useState(false);

  const restaurant = backgroundColors.find(
    (bg) => bg.name.toLowerCase() === restaurantName?.toLowerCase()
  );
  const bgColor = restaurant ? restaurant.color : "#0a0a0a";
  const light = isLightColor(bgColor);

  const ringStyle = light
    ? { borderTopColor: "rgba(0,0,0,0.6)" }
    : { borderTopColor: "rgba(255,255,255,0.8)" };
  const ring2Style = light
    ? { borderRightColor: "rgba(0,0,0,0.3)" }
    : { borderRightColor: "rgba(255,255,255,0.4)" };
  const ring3Style = light
    ? { borderBottomColor: "rgba(0,0,0,0.15)" }
    : { borderBottomColor: "rgba(255,255,255,0.2)" };
  const dotBg = light ? "rgba(0,0,0,0.5)" : "white";
  const progressTrackBg = light ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)";
  const progressBarBg = light ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.5)";
  const orbBg = light ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)";
  const poweredColor = light ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)";
  const poweredLinkColor = light ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)";

  useEffect(() => {
    if (viewLoading) {
      const timer = setTimeout(() => setHidden(true), 600);
      return () => clearTimeout(timer);
    }
  }, [viewLoading]);

  if (hidden) return null;

  const isHardcoded = restaurant != null;
  const splashSrc = isHardcoded ? `${STORAGE_URL}${restaurantName}` : null;

  return (
    <Container viewLoading={viewLoading} bg={bgColor}>
      {isHardcoded && splashSrc ? (
        /* ── Hardcoded restaurant: full splash image like original ── */
        <>
          <img
            src={splashSrc}
            alt={restaurantName}
            className="loading-splash-img"
            onError={(e) => { e.target.style.display = "none"; }}
          />

          {/* Powered by Menugic */}
          <div className="loading-powered-by" style={{ color: poweredColor }}>
            powered by{" "}
            <a
              href="https://menugic.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: poweredLinkColor, textDecoration: "none", fontWeight: 600 }}
            >
              MENUGIC
            </a>
          </div>
        </>
      ) : (
        /* ── Generic: rings + name + progress ── */
        <>
          {/* Background pattern */}
          <div className="loading-bg-pattern" />

          {/* Ambient orbs */}
          <div className="loading-orb loading-orb-1" style={{ background: orbBg }} />
          <div className="loading-orb loading-orb-2" style={{ background: orbBg }} />

          <div className="loading-screen">
            <div className="loading-rings">
              <div className="ring" style={ringStyle} />
              <div className="ring" style={ring2Style} />
              <div className="ring" style={ring3Style} />
              <div className="center-dot" style={{ background: dotBg }} />
            </div>

            {/* Restaurant name with shimmer */}
            {restaurantName && (
              <span
                className="loading-name"
                style={light ? {
                  background: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "loading-shimmer 2s ease-in-out infinite",
                } : {}}
              >
                {restaurantName.replace(/-/g, " ")}
              </span>
            )}

            {/* Thin progress bar */}
            <div className="loading-progress-track" style={{ background: progressTrackBg }}>
              <div className="loading-progress-bar" style={{ background: progressBarBg }} />
            </div>
          </div>

          {/* Powered by Menugic */}
          <div className="loading-powered-by" style={{ color: poweredColor }}>
            powered by{" "}
            <a
              href="https://menugic.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: poweredLinkColor, textDecoration: "none", fontWeight: 600 }}
            >
              MENUGIC
            </a>
          </div>
        </>
      )}
    </Container>
  );
}
