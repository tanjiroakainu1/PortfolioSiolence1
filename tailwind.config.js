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
        page: "#141414",
        surface: "#181818",
        "surface-2": "#2f2f2f",
        "surface-tile": "#333333",
        muted: "#b3b3b3",
        accent: "#e50914",
        action: "#54b9ff",
        "action-bright": "#7cd4ff",
        "action-deep": "#2b7fff",
        bolt: "#ffffff",
        ion: "#b20710",
        candy: "#e50914",
        nebula: "#831010",
        danger: "#e87c7c",
        netflix: "#e50914",
        "netflix-dark": "#b20710",
      },
      maxWidth: {
        layout: "1240px",
      },
      borderRadius: {
        section: "4px",
      },
      boxShadow: {
        "candy-sm": "0 4px 14px rgba(0, 0, 0, 0.45), 0 0 20px rgba(229, 9, 20, 0.25)",
        "candy-md":
          "0 8px 32px rgba(0, 0, 0, 0.55), 0 0 40px rgba(229, 9, 20, 0.35), 0 0 80px rgba(0, 0, 0, 0.4)",
        "ion-sm": "0 0 24px rgba(229, 9, 20, 0.35)",
        panel:
          "0 8px 40px rgba(0, 0, 0, 0.65), 0 0 48px rgba(229, 9, 20, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "panel-ion":
          "0 8px 40px rgba(0, 0, 0, 0.65), 0 0 48px rgba(229, 9, 20, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        tile: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 24px rgba(229, 9, 20, 0.08)",
        "tile-hover":
          "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.55), 0 0 36px rgba(229, 9, 20, 0.22)",
        "bolt-sm": "0 4px 14px rgba(0, 0, 0, 0.45), 0 0 20px rgba(229, 9, 20, 0.25)",
        "bolt-md": "0 8px 32px rgba(0, 0, 0, 0.55), 0 0 40px rgba(229, 9, 20, 0.35)",
        "action-sm": "0 4px 16px rgba(0, 0, 0, 0.45), 0 0 22px rgba(84, 185, 255, 0.45)",
        "action-md":
          "0 8px 28px rgba(0, 0, 0, 0.5), 0 0 36px rgba(84, 185, 255, 0.5), 0 0 64px rgba(43, 127, 255, 0.2)",
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
          "0%": { boxShadow: "0 0 0 0 rgba(84, 185, 255, 0.65)" },
          "70%": { boxShadow: "0 0 0 12px rgba(84, 185, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(84, 185, 255, 0)" },
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
              "0 0 0 0 rgba(229,9,20,0.5), 0 8px 32px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.15)",
          },
          "50%": {
            boxShadow:
              "0 0 0 10px rgba(229,9,20,0), 0 12px 40px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.2)",
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
          "0%, 100%": { boxShadow: "0 0 24px rgba(229,9,20,0.35), 0 8px 32px rgba(0,0,0,0.45)" },
          "50%": { boxShadow: "0 0 40px rgba(229,9,20,0.55), 0 12px 36px rgba(0,0,0,0.5)" },
        },
        "netflix-logo-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 12px rgba(229,9,20,0.4))" },
          "50%": { filter: "drop-shadow(0 0 28px rgba(229,9,20,0.75))" },
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
        "candy-gradient": "linear-gradient(180deg, #e50914 0%, #b20710 100%)",
        "play-gradient":
          "linear-gradient(180deg, #ff4747 0%, #e50914 38%, #c40812 72%, #831010 100%)",
        "netflix-gradient": "linear-gradient(135deg, #7cd4ff 0%, #54b9ff 42%, #3b8cff 100%)",
        "action-gradient": "linear-gradient(135deg, #7cd4ff 0%, #54b9ff 42%, #3b8cff 100%)",
        "galaxy-nebula":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(229,9,20,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(0,0,0,0.5), transparent 50%)",
        "netflix-hero":
          "linear-gradient(77deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.85) 100%)",
      },
    },
  },
  plugins: [],
};
