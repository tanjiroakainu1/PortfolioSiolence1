import {
  databaseScreenshotsImages,
  databaseScreenshotsSection,
  databaseTechStack,
} from "../data/databaseScreenshotsImages";
import { ShowcaseImageGallerySection } from "./ShowcaseImageGallerySection";

export function DatabaseScreenshotsSection({ hidden = false }: { hidden?: boolean }) {
  return (
    <ShowcaseImageGallerySection
      hidden={hidden}
      section={databaseScreenshotsSection}
      images={databaseScreenshotsImages}
      variant="database"
      techStack={databaseTechStack}
    />
  );
}
