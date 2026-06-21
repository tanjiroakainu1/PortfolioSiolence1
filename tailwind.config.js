/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', '"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Bebas Neue"', '"Syne"', "system-ui", "sans-serif"],
        hero: ['"Plus Jakarta Sans"', '"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        netflix: ['"Bebas Neue"', "system-ui", "sans-serif"],
      },
      colors: {
        page: "#0c0814",
        surface: "#140f1e",
        "surface-2": "#1f1830",
        "surface-tile": "#2a2040",
        muted: "#b8b0c8",
        accent: "#a855f7",
        action: "#c084fc",
        "action-bright": "#ddd6fe",
        "action-deep": "#9333ea",
        bolt: "#ffffff",
        ion: "#7c3aed",
        candy: "#a855f7",
        nebula: "#4c1d95",
        danger: "#f0abfc",
        netflix: "#a855f7",
        "netflix-dark": "#6d28d9",
      },
      maxWidth: {
        layout: "1240px",
      },
      borderRadius: {
        section: "4px",
      },
      boxShadow: {
        "candy-sm": "0 4px 14px rgba(0, 0, 0, 0.45), 0 0 20px rgba(168, 85, 247, 0.28)",
        "candy-md":
          "0 8px 32px rgba(0, 0, 0, 0.55), 0 0 40px rgba(168, 85, 247, 0.38), 0 0 80px rgba(0, 0, 0, 0.4)",
        "ion-sm": "0 0 24px rgba(168, 85, 247, 0.35)",
        panel:
          "0 8px 40px rgba(0, 0, 0, 0.65), 0 0 48px rgba(168, 85, 247, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "panel-ion":
          "0 8px 40px rgba(0, 0, 0, 0.65), 0 0 48px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        tile: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 24px rgba(168, 85, 247, 0.1)",
        "tile-hover":
          "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.55), 0 0 36px rgba(168, 85, 247, 0.24)",
        "bolt-sm": "0 4px 14px rgba(0, 0, 0, 0.45), 0 0 20px rgba(168, 85, 247, 0.28)",
        "bolt-md": "0 8px 32px rgba(0, 0, 0, 0.55), 0 0 40px rgba(168, 85, 247, 0.38)",
        "action-sm": "0 4px 16px rgba(0, 0, 0, 0.45), 0 0 22px rgba(192, 132, 252, 0.45)",
        "action-md":
          "0 8px 28px rgba(0, 0, 0, 0.5), 0 0 36px rgba(192, 132, 252, 0.5), 0 0 64px rgba(147, 51, 234, 0.22)",
      },
      keyframes: {
        "float-particle": {
          "0%, 100%": { transform: "translate3d(0,0,0)", opacity: "0.22" },
          "50%": {
            transform: "translate3d(var(--tx), var(--ty), 0)",
            opacity: "0.72",
          },
        },
        "chat-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(192, 132, 252, 0.65)" },
          "70%": { boxShadow: "0 0 0 12px rgba(192, 132, 252, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(192, 132, 252, 0)" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.04" },
          "50%": { opacity: "0.09" },
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
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
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
            boxShadow:
              "0 0 0 0 rgba(168,85,247,0.5), 0 8px 32px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.15)",
          },
          "50%": {
            boxShadow:
              "0 0 0 10px rgba(168,85,247,0), 0 12px 40px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.2)",
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
          "0%, 100%": { opacity: "0.35", transform: "translateX(-30%)" },
          "50%": { opacity: "0.85", transform: "translateX(30%)" },
        },
        "unlock-btn-glow": {
          "0%, 100%": { boxShadow: "0 0 24px rgba(168,85,247,0.35), 0 8px 32px rgba(0,0,0,0.45)" },
          "50%": { boxShadow: "0 0 40px rgba(168,85,247,0.55), 0 12px 36px rgba(0,0,0,0.5)" },
        },
        "netflix-logo-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 12px rgba(168,85,247,0.45))" },
          "50%": { filter: "drop-shadow(0 0 28px rgba(168,85,247,0.8))" },
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
        "candy-gradient": "linear-gradient(180deg, #c084fc 0%, #9333ea 100%)",
        "play-gradient":
          "linear-gradient(180deg, #ddd6fe 0%, #a855f7 38%, #9333ea 72%, #4c1d95 100%)",
        "netflix-gradient": "linear-gradient(135deg, #ddd6fe 0%, #c084fc 42%, #9333ea 100%)",
        "action-gradient": "linear-gradient(135deg, #ddd6fe 0%, #c084fc 42%, #9333ea 100%)",
        "galaxy-nebula":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168,85,247,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(0,0,0,0.5), transparent 50%)",
        "netflix-hero":
          "linear-gradient(77deg, rgba(12,8,20,0.92) 0%, rgba(12,8,20,0.45) 45%, rgba(12,8,20,0.92) 100%)",
      },
    },
  },
  plugins: [],
};
