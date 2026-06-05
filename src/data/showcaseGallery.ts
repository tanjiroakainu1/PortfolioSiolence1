export interface ShowcaseGalleryImage {
  src: string;
  alt: string;
  number: number;
}

export interface ShowcaseGallerySectionMeta {
  id: string;
  kicker: string;
  title: string;
  sub: string;
  countLabel: string;
  cardLabelPrefix: string;
  stackTitle?: string;
  stackSub?: string;
}

/** Load numbered images from a folder; prefers `.png` over `.jpg` when both exist. */
export function loadNumberedShowcaseImages(
  modules: Record<string, { default: string }>,
  options: { min?: number; max?: number; altPrefix: string }
): ShowcaseGalleryImage[] {
  const { min = 1, max = Number.POSITIVE_INFINITY, altPrefix } = options;
  const byNumber = new Map<number, { image: ShowcaseGalleryImage; ext: string }>();

  for (const [path, mod] of Object.entries(modules)) {
    const match = path.match(/\/(\d+)\.(png|jpe?g|webp)$/i);
    if (!match) continue;
    const number = Number(match[1]);
    const ext = (match[2] ?? "jpg").toLowerCase().replace("jpeg", "jpg");
    if (number < min || number > max) continue;

    const existing = byNumber.get(number);
    const prefer = !existing || (existing.ext !== "png" && ext === "png");
    if (prefer) {
      byNumber.set(number, {
        ext,
        image: {
          number,
          src: mod.default,
          alt: `${altPrefix} — screenshot ${number}`,
        },
      });
    }
  }

  return [...byNumber.values()].map((entry) => entry.image).sort((a, b) => a.number - b.number);
}
