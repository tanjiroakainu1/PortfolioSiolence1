/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Inter"', "system-ui", "sans-serif"],
        hero: ['"Inter"', '"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        netflix: ['"Inter"', "system-ui", "sans-serif"],
        galaxy: ['"Inter"', '"DM Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        page: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        "surface-tile": "#222222",
        muted: "#a3a3a3",
        accent: "#ffffff",
        action: "#e5e5e5",
        "action-bright": "#ffffff",
        "action-deep": "#737373",
        bolt: "#ffffff",
        ion: "#525252",
        candy: "#d4d4d4",
        nebula: "#262626",
        "nebula-bright": "#404040",
        stardust: "#f5f5f5",
        danger: "#d4d4d4",
        netflix: "#ffffff",
        "netflix-dark": "#525252",
      },
      maxWidth: {
        layout: "1240px",
      },
      borderRadius: {
        section: "4px",
      },
      boxShadow: {
        "candy-sm": "0 4px 14px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06)",
        "candy-md": "0 8px 32px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "ion-sm": "0 0 0 1px rgba(255, 255, 255, 0.08)",
        panel: "0 8px 40px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "panel-ion": "0 8px 40px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        tile: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.5)",
        "tile-hover": "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.55)",
        "bolt-sm": "0 4px 14px rgba(0, 0, 0, 0.45)",
        "bolt-md": "0 8px 32px rgba(0, 0, 0, 0.55)",
        "action-sm": "0 4px 16px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "action-md": "0 8px 28px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
      keyframes: {
        "float-particle": {
          "0%, 100%": { transform: "translate3d(0,0,0)", opacity: "0.12" },
          "50%": { transform: "translate3d(var(--tx), var(--ty), 0)", opacity: "0.35" },
        },
        "chat-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.35)" },
          "70%": { boxShadow: "0 0 0 12px rgba(255, 255, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
        "typing-bounce": {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "40%": { transform: "translateY(-4px)", opacity: "1" },
        },
        "nav-welcome-line": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "galaxy-shimmer": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.02)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
        "envelope-flap-open": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-175deg)" },
        },
        "envelope-letter-rise": {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "envelope-seal-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.12)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(255,255,255,0), 0 12px 40px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.16)",
          },
        },
        "envelope-shell-fade": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.98)" },
        },
        "envelope-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "unlock-ring-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "flap-shimmer": {
          "0%, 100%": { opacity: "0.25", transform: "translateX(-30%)" },
          "50%": { opacity: "0.55", transform: "translateX(30%)" },
        },
        "unlock-btn-glow": {
          "0%, 100%": { boxShadow: "0 0 24px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.45)" },
          "50%": { boxShadow: "0 0 40px rgba(255,255,255,0.2), 0 12px 36px rgba(0,0,0,0.5)" },
        },
        "netflix-logo-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(255,255,255,0.25))" },
          "50%": { filter: "drop-shadow(0 0 16px rgba(255,255,255,0.45))" },
        },
        "netflix-scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "float-particle": "float-particle var(--d, 30s) ease-in-out infinite",
        "chat-pulse": "chat-pulse 2.4s ease-out infinite",
        "typing-bounce": "typing-bounce 1.2s infinite ease-in-out",
        "grid-pulse": "grid-pulse 8s ease-in-out infinite",
        "nav-welcome-line": "nav-welcome-line 0.55s ease-out both",
        "galaxy-shimmer": "galaxy-shimmer 6s ease-in-out infinite",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
        "envelope-flap-open": "envelope-flap-open 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "envelope-letter-rise": "envelope-letter-rise 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
        "envelope-seal-pulse": "envelope-seal-pulse 2.4s ease-in-out infinite",
        "envelope-shell-fade": "envelope-shell-fade 0.5s ease-out forwards",
        "envelope-float": "envelope-float 5s ease-in-out infinite",
        "unlock-ring-spin": "unlock-ring-spin 4s linear infinite",
        "flap-shimmer": "flap-shimmer 3.5s ease-in-out infinite",
        "unlock-btn-glow": "unlock-btn-glow 2.5s ease-in-out infinite",
        "netflix-logo-glow": "netflix-logo-glow 3s ease-in-out infinite",
        "netflix-scan": "netflix-scan 2.8s ease-in-out infinite",
      },
      backgroundImage: {
        "candy-gradient": "linear-gradient(180deg, #e5e5e5 0%, #525252 100%)",
        "play-gradient": "linear-gradient(180deg, #fafafa 0%, #d4d4d4 38%, #737373 72%, #262626 100%)",
        "netflix-gradient": "linear-gradient(135deg, #fafafa 0%, #d4d4d4 42%, #a3a3a3 100%)",
        "action-gradient": "linear-gradient(135deg, #ffffff 0%, #e5e5e5 42%, #a3a3a3 100%)",
        "galaxy-nebula":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.04), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(64,64,64,0.3), transparent 50%)",
        "netflix-hero":
          "linear-gradient(77deg, rgba(10,10,10,0.95) 0%, rgba(38,38,38,0.35) 45%, rgba(10,10,10,0.95) 100%)",
      },
    },
  },
  plugins: [],
};
