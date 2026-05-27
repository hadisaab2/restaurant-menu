import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FOOTER_COLUMNS } from "../data";

const SOCIAL = [
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ background: "#1E0C40" }}>
      {/* Shimmer divider line */}
      <div className="relative h-[1px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5700FF]/40 to-transparent" />
        <motion.div
          className="absolute top-0 h-full w-32"
          style={{ background: "linear-gradient(90deg, transparent, rgba(87,0,255,0.8), transparent)" }}
          initial={{ left: "-20%" }}
          animate={inView ? { left: "120%" } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-10 lg:gap-x-12 mb-14 md:mb-16">
          {/* Brand column */}
          <motion.div
            className="col-span-2 md:col-span-2 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-white text-lg tracking-tight mb-3">Menugic</p>
            <p className="text-sm text-[#B7A8D4] leading-relaxed">
              Premium menus, catalogs, and ordering websites for modern businesses.
            </p>
            <div className="flex gap-2.5 mt-6">
              {SOCIAL.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3A2460] bg-[#2A1750] text-[#B7A8D4] transition-all duration-200 hover:border-[#5700FF]/50 hover:bg-[#321E60] hover:text-[#C7B8FF] hover:shadow-[0_4px_14px_-4px_rgba(87,0,255,0.3)]"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col, ci) => (
            <motion.div
              key={col.title}
              className="min-w-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-[#8B7BAA] mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={`${col.title}-${item.label}`}>
                    <a
                      href={item.href}
                      className="text-sm text-[#B7A8D4] transition-colors duration-200 hover:text-white no-underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-[#2A1750] pt-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
          <p className="text-[0.6875rem] sm:text-xs text-[#8B7BAA]/80 tracking-wide text-center sm:text-left">
            © 2026 Menugic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
