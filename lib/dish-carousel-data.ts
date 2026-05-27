export interface DishCarouselItem {
  name: string;
  description: string;
  price?: string;
  image: string;
  alt: string;
}

// Populated by the content pipeline when ≥3 dish photos are available.
// Keep empty to hide the section; add items to show it.
export const dishCarouselItems: DishCarouselItem[] = [];
