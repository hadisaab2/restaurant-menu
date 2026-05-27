import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CustomerCard({ restaurant }) {
  const hasLogo = !!restaurant.logo_url;
  return (
    <a
      href={`https://${restaurant.subdomain}.menugic.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-4 mx-2 transition-all duration-300 hover:border-indigo-500/20 hover:bg-indigo-500/5 hover:-translate-y-0.5 group"
      style={{ minWidth: 220 }}
    >
      {/* Logo */}
      {hasLogo ? (
        <img
          src={restaurant.logo_url}
          alt={restaurant.name}
          className="h-12 w-12 rounded-xl object-cover border border-white/[0.08] shadow-sm"
        />
      ) : (
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-white/[0.08] flex items-center justify-center text-lg font-bold text-white/50">
          {restaurant.name?.charAt(0)}
        </div>
      )}
      {/* Info */}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors truncate">
          {restaurant.name}
        </span>
        {restaurant.category && (
          <span className="text-xs text-white/30 mt-0.5 truncate">{restaurant.category}</span>
        )}
      </div>
      {/* Arrow */}
      <span className="ml-auto text-white/10 group-hover:text-indigo-400 transition-colors text-sm">
        &rarr;
      </span>
    </a>
  );
}

export default function SocialProof() {
  const [customers, setCustomers] = useState([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (!baseUrl) return;
    fetch(`${baseUrl}/restaurants/public/showcase`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setCustomers(data);
        else if (data?.data && Array.isArray(data.data)) setCustomers(data.data);
      })
      .catch(() => {});
  }, [baseUrl]);

  const doubled = [...customers, ...customers];

  if (customers.length === 0) return null;

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050510] to-[#030303]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10 px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 font-medium">
            Trusted by businesses everywhere
          </span>
        </div>

        {/* Customer marquee - Row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div
            className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #030303, transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #030303, transparent)" }}
          />
          <div className="flex animate-marquee-left">
            {doubled.map((c, i) => (
              <CustomerCard key={`l-${i}`} restaurant={c} />
            ))}
          </div>
        </div>

        {/* Customer marquee - Row 2 */}
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #030303, transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #030303, transparent)" }}
          />
          <div className="flex animate-marquee-right">
            {doubled.map((c, i) => (
              <CustomerCard key={`r-${i}`} restaurant={c} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 70s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
