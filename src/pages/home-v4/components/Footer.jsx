import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FOOTER_COLUMNS, mainLogo } from "../data";

const socialIcons = {
  Instagram: FiInstagram,
  Facebook: FiFacebook,
  LinkedIn: FiLinkedin,
};

export default function Footer({ scrollTo }) {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Shimmer divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
          className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 mb-4"
            >
              <img src={mainLogo} alt="Menugic" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white tracking-tight">
                Menugic
              </span>
            </button>
            <p className="text-sm text-white/30 mb-5 max-w-[240px] leading-relaxed">
              Beautiful digital menus, catalogs, and storefronts for every business.
            </p>
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((key) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all hover:border-white/[0.15] hover:text-white hover:bg-white/[0.06]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollTo(link.href.replace("#", ""));
                        }
                      }}
                      className="text-sm text-white/30 hover:text-white/60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-xs text-white/20 text-center">
            &copy; {new Date().getFullYear()} Menugic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
