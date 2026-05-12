import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // moonsdata design system
        "void": "#0A0A0A",
        "moon-cream": "#F5F2ED",
        "acid": "#E5FF3D",
        "voltage": "#F4FF7A",
        "deep-acid": "#B8CC1F",
        "surface": "#1a1a1a",
        "muted": "#666666",
        "faint": "#444444",
        "body": "#B5B0A8",
        "subtle": "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      fontSize: {
        // moonsdata type scale
        "hero": ["168px", { lineHeight: "0.85", letterSpacing: "-8px" }],
        "hero-italic": ["152px", { lineHeight: "0.9", letterSpacing: "-5px" }],
        "section": ["88px", { lineHeight: "0.88", letterSpacing: "-3px" }],
        "featured": ["112px", { lineHeight: "0.85", letterSpacing: "-5px" }],
        "footer-title": ["116px", { lineHeight: "0.88", letterSpacing: "-5px" }],
      },
      backgroundImage: {
        "blueprint": `repeating-linear-gradient(0deg, transparent 0, transparent 39px, rgba(229,255,61,0.04) 39px, rgba(229,255,61,0.04) 40px), repeating-linear-gradient(90deg, transparent 0, transparent 39px, rgba(229,255,61,0.04) 39px, rgba(229,255,61,0.04) 40px)`,
        "moon-gradient": "radial-gradient(circle at 35% 35%, #F4FF7A 0%, #E5FF3D 40%, #B8CC1F 100%)",
      },
      animation: {
        "marquee": "marquee 50s linear infinite",
        "moon-float": "moonFloat 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        moonFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
