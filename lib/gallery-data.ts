export interface GalleryItem {
  src: string;
  alt: string;
}

// Populated by the content pipeline from /assets/acquisition/restaurant and /assets/acquisition/dishes.
// Exactly 5 items are required to render the curated gallery; an empty array falls back to template defaults.
export const galleryItems: GalleryItem[] = [];
