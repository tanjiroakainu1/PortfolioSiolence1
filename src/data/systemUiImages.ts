import { loadNumberedShowcaseImages, type ShowcaseGalleryImage } from "./showcaseGallery";

/** Gallery copy for the System UI section on Project showcase (`#project-showcase` · `#system-ui`). */
export const systemUiSection = {
  id: "system-ui",
  kicker: "Interface design",
  title: "System UI",
  sub: "Production system interfaces from images/images1 — dashboards, forms, and workflows. Tap any card for fullscreen.",
  countLabel: "UI screenshots",
  cardLabelPrefix: "UI",
} as const;

const imageModules = import.meta.glob<{ default: string }>("../../images/images1/*.png", {
  eager: true,
});

/** Bundled UI screenshots from `images/images1/1.png` … `images/images1/28.png`. */
export const systemUiImages: ShowcaseGalleryImage[] = loadNumberedShowcaseImages(imageModules, {
  altPrefix: "System UI",
});
