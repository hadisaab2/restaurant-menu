/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "#F5F1F2",
          panel: "#ffffff",
          border: "#d8d0db",
          text: "#1E0C40",
          muted: "#5B4A7A",
          accent: "#5700FF",
          accentHover: "#6D2BFF",
        },
        menugic: {
          bg: "#07070b",
          panel: "#11111a",
          panelSoft: "#171724",
          line: "#2a2a37",
          text: "#f6f1e8",
          muted: "#b7b0a6",
          gold: "#d4af6b",
          amber: "#a56a1f",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', '"Segoe UI"', "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 16px 40px rgba(0,0,0,0.45)",
        glow: "0 0 0 1px rgba(212,175,107,0.2), 0 12px 34px rgba(212,175,107,0.14)",
        apple: "0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        "apple-md": "0 4px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)",
        "apple-lg": "0 12px 48px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(80rem 40rem at 20% -10%, rgba(212,175,107,0.2), transparent 60%), radial-gradient(80rem 40rem at 90% 0%, rgba(125,65,255,0.18), transparent 60%)",
        "hero-light":
          "radial-gradient(ellipse 70% 40% at 60% 0%, rgba(87,0,255,0.12), transparent 70%)",
      },
      letterSpacing: {
        tight: "-0.022em",
        tighter: "-0.028em",
      },
    },
  },
  plugins: [],
};
