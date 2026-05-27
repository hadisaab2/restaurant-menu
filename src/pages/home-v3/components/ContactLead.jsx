import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheck, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_BUSINESS_TYPES, CONTACT_DETAILS } from "../data";
import { fadeBlur } from "../animations";
import GlassCard from "../ui/GlassCard";

export default function ContactLead() {
  const waPrefill = `https://wa.me/${CONTACT_DETAILS.phoneWhatsappDigits}?text=${encodeURIComponent(
    "Hi Menugic — I'd like to learn more about launching my storefront."
  )}`;

  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.fullName.trim() || !form.businessName.trim() || !form.email.trim() || !emailOk || !form.businessType || !form.message.trim()) return;

    const baseUrl = process.env.REACT_APP_BASE_URL;
    if (!baseUrl) {
      setSubmitError("Missing REACT_APP_BASE_URL. Cannot send your message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${baseUrl}/public/contact-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          businessName: form.businessName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          businessType: form.businessType,
          message: form.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || "Something went wrong. Please try WhatsApp or email.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Check your connection or try WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({ fullName: "", businessName: "", email: "", phone: "", businessType: "", message: "" });
    setSubmitted(false);
    setSubmitError("");
  };

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-[#E6E0EF] bg-white px-4 py-3 text-[0.9375rem] text-apple-text placeholder:text-apple-muted/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-all outline-none focus:border-apple-accent focus:ring-2 focus:ring-apple-accent/20 focus:shadow-[0_0_0_3px_rgba(87,0,255,0.06)]";
  const labelClass = "block text-[0.8125rem] font-medium text-apple-text/92 tracking-tight";

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#EDE7F5]/90 bg-gradient-to-b from-[#FCFAFF] via-[#F8F4FC] to-[#F3EFF8] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DDD4EC]/80 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(87,0,255,0.06)_0%,transparent_68%)]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-4"
          >
            <p className="text-xs font-semibold tracking-[0.22em] text-apple-accent">CONTACT</p>
            <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-apple-text sm:text-4xl md:text-[2.45rem] md:leading-[1.08]">
              Let's build your digital storefront
            </h2>
            <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-apple-muted md:text-[1.05rem]">
              Tell us about your business and we'll help you launch a premium menu, catalog, or ordering website with Menugic.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { icon: FiPhone, label: "Phone", value: CONTACT_DETAILS.phoneDisplay, href: `tel:${CONTACT_DETAILS.phoneTel}`, color: "text-apple-accent", shadow: "rgba(87,0,255,0.18)" },
                { icon: FiMail, label: "Email", value: CONTACT_DETAILS.email, href: `mailto:${CONTACT_DETAILS.email}`, color: "text-apple-accent", shadow: "rgba(87,0,255,0.18)" },
                { icon: FaWhatsapp, label: "WhatsApp", value: "Chat with us directly", href: waPrefill, color: "text-[#25D366]", shadow: "rgba(37,211,102,0.2)", target: "_blank" },
              ].map((c, i) => (
                <motion.li
                  key={c.label}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <span
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E8E2F2] bg-white/90 ${c.color}`}
                    style={{ boxShadow: `0 2px 10px -4px ${c.shadow}` }}
                  >
                    <c.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-apple-muted/90">{c.label}</p>
                    <a
                      href={c.href}
                      target={c.target}
                      rel={c.target ? "noopener noreferrer" : undefined}
                      className="mt-1 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-apple-text underline decoration-[#D9CFE8] underline-offset-4 transition-colors hover:text-apple-accent hover:decoration-apple-accent/40"
                    >
                      {c.value}
                      {c.target && <FiArrowRight size={14} className="shrink-0 opacity-70" />}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={waPrefill}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-[#D4E8DC] bg-white/90 px-5 py-3 text-sm font-medium text-[#128C7E] transition-all hover:border-[#25D366]/55 hover:bg-[#F3FCF6]"
              style={{ boxShadow: "0 2px 12px -4px rgba(18,140,126,0.12)" }}
              whileHover={{ y: -2, boxShadow: "0 6px 20px -8px rgba(37,211,102,0.22)" }}
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 100 }}
          >
            <div
              className="rounded-[1.65rem] border border-[#E4DCF0]/90 bg-white/95 p-7 sm:p-8 md:p-9 backdrop-blur-[2px]"
              style={{
                boxShadow: "0 28px 64px -36px rgba(95,55,140,0.28), 0 12px 40px -24px rgba(30,12,64,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <h3 className="text-lg font-semibold tracking-tight text-apple-text md:text-xl">Send us a message</h3>
              <p className="mt-2 text-sm leading-relaxed text-apple-muted">Share a few details and we'll get back to you shortly.</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 rounded-2xl border border-[#E0D8EF] bg-gradient-to-b from-[#FAF8FF] to-white px-6 py-10 text-center"
                  >
                    <motion.div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE8FF] text-apple-accent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                      <FiCheck className="h-7 w-7" strokeWidth={2.25} />
                    </motion.div>
                    <p className="mt-5 text-lg font-semibold text-apple-text">Thank you</p>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-apple-muted">
                      Your message was sent. We'll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-8 rounded-full border border-[#E4DCF0] bg-white px-6 py-2.5 text-sm font-medium text-apple-text transition-all hover:border-apple-accent/35 hover:bg-[#FAF8FF] cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-8 space-y-5"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {submitError && (
                      <p className="rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800" role="alert">
                        {submitError}
                      </p>
                    )}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="v3-full-name" className={labelClass}>Full Name</label>
                        <input id="v3-full-name" type="text" autoComplete="name" value={form.fullName} onChange={update("fullName")} className={inputClass} placeholder="Your name" required />
                      </div>
                      <div>
                        <label htmlFor="v3-business-name" className={labelClass}>Business Name</label>
                        <input id="v3-business-name" type="text" autoComplete="organization" value={form.businessName} onChange={update("businessName")} className={inputClass} placeholder="Business or brand" required />
                      </div>
                      <div>
                        <label htmlFor="v3-email" className={labelClass}>Email Address</label>
                        <input id="v3-email" type="email" autoComplete="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@example.com" required />
                      </div>
                      <div>
                        <label htmlFor="v3-phone" className={labelClass}>Phone / WhatsApp</label>
                        <input id="v3-phone" type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="Optional" />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="v3-business-type" className={labelClass}>Business Type</label>
                        <select
                          id="v3-business-type"
                          value={form.businessType}
                          onChange={update("businessType")}
                          className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235B4A7A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          }}
                          required
                        >
                          <option value="">Select a type</option>
                          {CONTACT_BUSINESS_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="v3-message" className={labelClass}>Message</label>
                        <textarea
                          id="v3-message"
                          rows={4}
                          value={form.message}
                          onChange={update("message")}
                          className={`${inputClass} resize-y min-h-[120px]`}
                          placeholder="Tell us what you'd like to launch..."
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full bg-apple-accent px-8 text-[0.95rem] font-medium text-white transition-all hover:bg-apple-accentHover disabled:opacity-70 sm:flex-none border-none cursor-pointer"
                        style={{ boxShadow: "0 4px 22px -4px rgba(87,0,255,0.45)" }}
                      >
                        {submitting ? "Sending..." : "Send Message"}
                        {!submitting && <FiArrowRight size={18} />}
                      </button>
                      <a
                        href={waPrefill}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full border border-[#E4DCF0] bg-white/90 px-8 text-[0.95rem] font-medium text-apple-text no-underline transition-all hover:border-[#25D366]/45 hover:bg-[#F6FFFA] sm:flex-none"
                      >
                        <FaWhatsapp className="text-[#25D366]" size={18} /> Chat on WhatsApp
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
