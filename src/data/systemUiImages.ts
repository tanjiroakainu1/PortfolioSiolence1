import type { ShowcaseGalleryImage } from "./showcaseGallery";

/** Gallery copy for the System UI section on Project showcase (`#project-showcase` · `#system-ui`). */
export const systemUiSection = {
  id: "system-ui",
  kicker: "Interface design",
  title: "System UI",
  sub: "Production system interfaces from images/images1 — dashboards, forms, and workflows. Tap any card for fullscreen.",
  countLabel: "UI screenshots",
  cardLabelPrefix: "UI",
} as const;

const SYSTEM_UI_NUMBERS = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
] as const;

/** Served from `/images/images1/` — not bundled (keeps dev server fast). */
export const systemUiImages: ShowcaseGalleryImage[] = SYSTEM_UI_NUMBERS.map((number) => ({
  number,
  src: `/images/images1/${number}.png`,
  alt: `System UI — screenshot ${number}`,
}));
