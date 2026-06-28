export interface ProjectShowcaseImage {
  src: string;
  alt: string;
}

/** Gallery images for the Project showcase page — served from `/images/` (not bundled). */
export const projectShowcaseImages: ProjectShowcaseImage[] = Array.from({ length: 14 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/images/${n}.png`,
    alt: `Project showcase — screenshot ${n}`,
  };
});
