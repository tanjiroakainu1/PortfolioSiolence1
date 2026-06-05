import { loadNumberedShowcaseImages, type ShowcaseGalleryImage } from "./showcaseGallery";

export interface DatabaseTechItem {
  name: string;
  role: string;
}

/** Production database stack shown in the Database screenshots section only. */
export const databaseTechStack: DatabaseTechItem[] = [
  { name: "MySQL", role: "Relational SQL" },
  { name: "MongoDB", role: "Document NoSQL" },
  { name: "SQLite", role: "Embedded SQL" },
  { name: "Firebase", role: "Realtime cloud" },
  { name: "Supabase", role: "Postgres cloud" },
  { name: "Prisma", role: "Type-safe ORM" },
];

/** Gallery copy for database screenshots on Project showcase (`#database-screenshots`). */
export const databaseScreenshotsSection = {
  id: "database-screenshots",
  kicker: "Data layer · stores & schemas",
  title: "Database screenshots",
  sub: "Schema views, table layouts, and query screens from images/images2 — production data layers across shipped builds.",
  countLabel: "database screenshots",
  cardLabelPrefix: "DB",
  stackTitle: "Database tech stack",
  stackSub: "MySQL · MongoDB · SQLite · Firebase · Supabase · Prisma",
} as const;

const imageModules = import.meta.glob<{ default: string }>("../../images/images2/*.{png,jpg,jpeg}", {
  eager: true,
});

/** Bundled database screenshots from `images/images2/1` … `images/images2/12`. */
export const databaseScreenshotsImages: ShowcaseGalleryImage[] = loadNumberedShowcaseImages(imageModules, {
  min: 1,
  max: 12,
  altPrefix: "Database screenshot",
});
