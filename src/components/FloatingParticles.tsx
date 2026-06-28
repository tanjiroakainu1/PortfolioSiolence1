import { useEffect, useRef } from "react";
import { preferLiteEffects } from "../lib/preferLiteEffects";

type Variant = "portfolio" | "chat";

const PORTFOLIO_COLOR_CLASSES = [
  "floating-particle--violet",
  "floating-particle--coral",
  "floating-particle--nebula",
  "floating-particle--stardust",
];

export function FloatingParticles({ variant }: { variant: Variant }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (preferLiteEffects()) return;

    const narrow = window.matchMedia("(max-width: 600px)").matches;
    const base = variant === "chat" ? 10 : 14;
    const count = narrow ? Math.max(4, Math.round(base * 0.5)) : base;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      if (Math.random() < 0.18) {
        p.className = "floating-particle floating-particle--dim";
      } else if (variant === "portfolio") {
        const colorClass =
          PORTFOLIO_COLOR_CLASSES[Math.floor(Math.random() * PORTFOLIO_COLOR_CLASSES.length)] ?? "";
        p.className = colorClass
          ? `floating-particle ${colorClass}`
          : "floating-particle";
      } else {
        p.className = "floating-particle";
      }

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = 0.4 + Math.random() * 2.2;
      const duration = 24 + Math.random() * 36;
      const delay = -Math.random() * duration;
      const tx = (Math.random() - 0.5) * 36;
      const ty = (Math.random() - 0.5) * 48;
      p.style.setProperty("--x", `${x}%`);
      p.style.setProperty("--y", `${y}%`);
      p.style.setProperty("--s", `${size}px`);
      p.style.setProperty("--d", `${duration}s`);
      p.style.setProperty("--delay", `${delay}s`);
      p.style.setProperty("--tx", `${tx}px`);
      p.style.setProperty("--ty", `${ty}px`);
      frag.appendChild(p);
    }
    layer.appendChild(frag);
    return () => {
      layer.replaceChildren();
    };
  }, [variant]);

  return (
    <div
      ref={layerRef}
      className={
        variant === "chat"
          ? "floating-particles floating-particles--chat"
          : "floating-particles floating-particles--portfolio"
      }
      aria-hidden
    />
  );
}
