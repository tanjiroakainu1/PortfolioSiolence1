/** Skip heavy particles, blurs, and long transitions on slower or mobile devices. */
export function preferLiteEffects(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (window.matchMedia("(max-width: 1024px)").matches) return true;
  if ((navigator.hardwareConcurrency ?? 8) <= 6) return true;
  return false;
}
