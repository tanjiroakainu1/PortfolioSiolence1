import {
  databaseScreenshotsImages,
  databaseScreenshotsSection,
  databaseTechStack,
} from "../data/databaseScreenshotsImages";
import { ShowcaseImageGallerySection } from "./ShowcaseImageGallerySection";

export function DatabaseScreenshotsSection() {
  return (
    <ShowcaseImageGallerySection
      section={databaseScreenshotsSection}
      images={databaseScreenshotsImages}
      variant="database"
      techStack={databaseTechStack}
    />
  );
}
