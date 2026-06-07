import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../data";

const STORAGE = "https://storage.googleapis.com/ecommerce-bucket-testing/";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value) || 0;
    const dur = 1200;
    const steps = 40;
    const inc = num / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= num) {
        setDisplay(num);
        clearInterval(interval);
      } else {
        setDisplay(Math.floor(current));
      }
    }, dur / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

export default function TrustStrip() {
  const [logos, setLogos] = useState([]);

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
        const mapped = list
          .filter((r) => r?.logoURL)
          .map((r) => ({
            name: r.name || r.restaurantName || "",
            logo: r.logoURL.startsWith("http") ? r.logoURL : `${STORAGE}${r.logoURL}`,
            subdomain: r.name || r.restaurantName || "",
          }));
        if (mounted) setLogos(mapped);
      } catch (_) {}
    }
    load();
    return () => { mounted = false; };
  }, []);

  return (
    <section
      className="relative py-12 md:py-16 border-t border-b border-[#EDE7F5]/60"
      style={{
        background: "linear-gradient(180deg, #F8F6FF 0%, #F3EEFF 50%, #F8F6FF 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5700FF] to-[#8B5CF6] bg-clip-text text-transparent">
                <AnimatedNumber value={s.value.replace(/[^0-9]/g, "")} suffix={s.value.replace(/[0-9]/g, "")} />
              </div>
              <div className="text-xs md:text-sm text-apple-muted mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Logo strip */}
        {logos.length > 0 && (
          <>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-apple-muted/60 mb-5">
              Trusted by businesses across Lebanon
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {logos.slice(0, 12).map((l, i) => (
                <motion.a
                  key={l.subdomain}
                  href={`/${l.subdomain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center justify-center"
                  title={l.name}
                >
                  <img
                    src={l.logo}
                    alt={l.name}
                    className="h-8 md:h-10 w-auto max-w-[80px] object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
