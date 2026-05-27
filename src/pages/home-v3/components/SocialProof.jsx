import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { STATS } from "../data";
import { useCountUp, fadeUp } from "../animations";

function CountUpStat({ s, started, staggerDelay }) {
  const count = useCountUp(s.target, { duration: 1600, delay: staggerDelay, started });
  return (
    <motion.div
      variants={fadeUp}
      className="text-center px-6 py-5 rounded-2xl transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(87,0,255,0.1)",
        boxShadow: "0 4px 16px rgba(30,12,64,0.05)",
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 24px rgba(30,12,64,0.09)",
        borderColor: "rgba(87,0,255,0.2)",
      }}
    >
      <p className="text-[2.5rem] font-extrabold tracking-tight text-[#1E0C40] leading-none">
        {count}{s.suffix}
      </p>
      <p className="text-sm text-[#5B4A7A] mt-2 font-medium">{s.label}</p>
    </motion.div>
  );
}

function CustomerCard({ c }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`https://${c.subdomain}.menugic.com`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 shrink-0 rounded-xl px-3.5 py-3 no-underline select-none"
      style={{
        width: "210px",
        background: hovered ? "rgba(255,255,255,0.95)" : "rgba(249,247,254,0.9)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${hovered ? "rgba(87,0,255,0.2)" : "rgba(87,0,255,0.08)"}`,
        boxShadow: hovered
          ? "0 8px 24px rgba(87,0,255,0.1), 0 2px 6px rgba(30,12,64,0.05)"
          : "0 1px 4px rgba(30,12,64,0.04)",
        transform: hovered ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.22s ease",
      }}
    >
      <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(30,12,64,0.07)] flex items-center justify-center shrink-0 overflow-hidden">
        <img
          src={c.logo}
          alt={c.name}
          className="w-7 h-7 object-contain"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold text-[#1E0C40] leading-tight truncate">{c.name}</p>
        <p className="text-[11px] mt-1 font-medium flex items-center gap-1 truncate"
          style={{ color: hovered ? "#5700FF" : "#8B7BAA", transition: "color 0.15s" }}
        >
          {hovered ? <><FiArrowRight size={9} />Visit site</> : c.category}
        </p>
      </div>
    </a>
  );
}

function MarqueeRow({ items, direction = "left", speed = 420 }) {
  const [paused, setPaused] = useState(false);
  if (!items || items.length === 0) return null;

  const MIN = 12;
  const padded = items.length >= MIN
    ? items
    : Array.from({ length: Math.ceil(MIN / items.length) }).flatMap(() => items).slice(0, MIN);
  const doubled = [...padded, ...padded];
  const animName = direction === "left" ? "v3-marquee-l" : "v3-marquee-r";

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-3.5 py-1.5"
        style={{
          width: "max-content",
          animation: `${animName} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {doubled.map((c, i) => (
          <CustomerCard key={`${c.subdomain}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const [allCustomers, setAllCustomers] = useState([]);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        if (!baseUrl) return;
        const res = await fetch(`${baseUrl}/restaurants/public/showcase`);
        if (!res.ok) return;
        const payload = await res.json();
        const list = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : [];
        const mapped = list.map((r) => {
          const subdomain = (r?.restaurantName || r?.restaurant_name || r?.subdomain || r?.name || "").toString().trim();
          if (!subdomain) return null;
          return {
            name: (r?.name || r?.restaurant_name || "").toString().trim() || subdomain,
            subdomain,
            logo: r?.logo || (r?.logoURL ? `https://storage.googleapis.com/ecommerce-bucket-testing/${r.logoURL}` : ""),
            category: (r?.business_type || r?.category || "Business").toString(),
          };
        }).filter(Boolean);
        if (!mapped.length || !mounted) return;
        const uniqueMap = new Map();
        mapped.forEach((c) => {
          const key = c.subdomain.toLowerCase();
          if (!uniqueMap.has(key)) uniqueMap.set(key, c);
        });
        setAllCustomers(Array.from(uniqueMap.values()));
      } catch (_) {}
    }
    load();
    return () => { mounted = false; };
  }, []);

  const rowA = allCustomers;
  const rowB = [...allCustomers].reverse();

  return (
    <section
      className="relative py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #F0ECFF 0%, #F7F3FF 30%, #F5F1F2 70%, #FAF8FF 100%)",
      }}
    >
      <style>{`
        @keyframes v3-marquee-l { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes v3-marquee-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats row */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {STATS.map((s, i) => (
            <CountUpStat key={s.label} s={s} started={statsInView} staggerDelay={i * 130} />
          ))}
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#8B7BAA] mb-8"
        >
          Featured businesses on Menugic
        </motion.p>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-3.5 mb-2">
        <MarqueeRow items={rowA} direction="left" speed={420} />
        <MarqueeRow items={rowB} direction="right" speed={485} />
      </div>
    </section>
  );
}
