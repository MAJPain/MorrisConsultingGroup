import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        lg: "3.5rem",
      },
    },
    extend: {
      colors: {
        // Anchor blues
        "deep-blue": "#0B2545",
        "midnight-blue": "#13315C",
        // Brown accents
        "warm-brown": "#8B5E3C",
        "soft-brown": "#B08968",
        // Papers
        "bone-white": "#F7F3EE",
        "pure-white": "#FFFFFF",
        // Text
        ink: "#0A0A0A",
        fog: "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        // Label / eyebrow voice. Monospace was retired in favor of
        // letterspaced sans caps, so `font-mono` now resolves to the body
        // sans. Kept as a named utility so label call sites need no changes.
        mono: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid editorial display sizes
        editorial: ["clamp(2.5rem, 8vw, 9rem)", { lineHeight: "0.95" }],
        "editorial-sm": ["clamp(2rem, 5.5vw, 5rem)", { lineHeight: "0.98" }],
        "editorial-xs": ["clamp(1.75rem, 4vw, 3.25rem)", { lineHeight: "1.02" }],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "draw-underline": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
