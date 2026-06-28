import { systemUiImages, systemUiSection } from "../data/systemUiImages";
import { ShowcaseImageGallerySection } from "./ShowcaseImageGallerySection";

export function SystemUiSection() {
  return (
    <ShowcaseImageGallerySection
      section={systemUiSection}
      images={systemUiImages}
      variant="system-ui"
    />
  );
}
