import React from "react";
import { FiInstagram, FiFacebook, FiTwitter, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function Footer({ restaurant, accentColor, activeLanguage, popupHandler }) {
  const branch = restaurant?.branches?.[0];
  const socialMedia = (() => {
    try { return JSON.parse(restaurant?.social_media || "{}"); } catch { return {}; }
  })();

  const hasSocial = socialMedia.instagram || socialMedia.facebook || socialMedia.twitter;

  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            {restaurant?.logoURL && (
              <img
                src={`${STORAGE_URL}${restaurant.logoURL}`}
                alt={restaurant?.name}
                className="h-10 w-10 rounded-xl object-cover border border-white/10"
              />
            )}
            <span className="text-xl font-bold" style={{ color: accentColor }}>
              {restaurant?.name}
            </span>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            {branch?.phone && (
              <a href={`tel:${branch.phone}`} className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <FiPhone className="w-4 h-4" /> {branch.phone}
              </a>
            )}
            {branch?.email && (
              <a href={`mailto:${branch.email}`} className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <FiMail className="w-4 h-4" /> {branch.email}
              </a>
            )}
            {branch?.address && (
              <span className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4" /> {branch.address}
              </span>
            )}
          </div>

          {/* Social */}
          {hasSocial && (
            <div className="flex items-center gap-3">
              {socialMedia.instagram && (
                <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white hover:border-white/[0.15] transition-all">
                  <FiInstagram className="w-4 h-4" />
                </a>
              )}
              {socialMedia.facebook && (
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white hover:border-white/[0.15] transition-all">
                  <FiFacebook className="w-4 h-4" />
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-white hover:border-white/[0.15] transition-all">
                  <FiTwitter className="w-4 h-4" />
                </a>
              )}
            </div>
          )}

          {/* Powered by */}
          <div className="pt-4 border-t border-white/[0.04] w-full">
            <p className="text-xs text-white/15">
              Powered by{" "}
              <a href="https://menugic.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors">
                Menugic
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
