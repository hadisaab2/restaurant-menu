import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMessageCircle, FiCheck, FiSend } from "react-icons/fi";
import { CONTACT_BUSINESS_TYPES, CONTACT_DETAILS } from "../data";

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20";

export default function ContactLead() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [form, setForm] = useState({
    full_name: "",
    business_name: "",
    email: "",
    phone: "",
    business_type: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${baseUrl}/public/contact-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ full_name: "", business_name: "", email: "", phone: "", business_type: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050510] to-[#030303]" />

      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">
              Contact
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              Let's get started
            </h2>
            <p className="mt-4 text-base text-white/40 leading-relaxed">
              Ready to launch your digital menu? Reach out and we'll help you set up in no time.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${CONTACT_DETAILS.phoneTel}`}
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <FiPhone className="h-4 w-4" />
                </div>
                <span className="text-sm">{CONTACT_DETAILS.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <FiMail className="h-4 w-4" />
                </div>
                <span className="text-sm">{CONTACT_DETAILS.email}</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_DETAILS.phoneWhatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500/20"
              >
                <FiMessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-7">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/20 mb-4">
                      <FiCheck className="h-7 w-7 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                    <p className="text-sm text-white/40 mb-6">We'll get back to you shortly.</p>
                    <button
                      onClick={reset}
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        required
                        className={inputClass}
                      />
                      <input
                        name="business_name"
                        value={form.business_name}
                        onChange={handleChange}
                        placeholder="Business Name"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        required
                        className={inputClass}
                      />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone / WhatsApp"
                        className={inputClass}
                      />
                    </div>
                    <select
                      name="business_type"
                      value={form.business_type}
                      onChange={handleChange}
                      className={`${inputClass} ${!form.business_type ? "text-white/25" : ""}`}
                    >
                      <option value="" disabled>Business Type</option>
                      {CONTACT_BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#111] text-white">{t}</option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />

                    {status === "error" && errorMsg && (
                      <p className="text-sm text-rose-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <FiSend className="h-4 w-4" />
                        </>
                      )}
                    </button>
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
