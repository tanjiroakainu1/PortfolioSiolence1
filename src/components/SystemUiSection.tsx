import { systemUiImages, systemUiSection } from "../data/systemUiImages";
import { ShowcaseImageGallerySection } from "./ShowcaseImageGallerySection";

export function SystemUiSection({ hidden = false }: { hidden?: boolean }) {
  return (
    <ShowcaseImageGallerySection
      hidden={hidden}
      section={systemUiSection}
      images={systemUiImages}
      variant="system-ui"
    />
  );
}
