/*
  Template: premium-japanese-restaurant
  Design direction: A travel to Japan — wabi-sabi minimalism meets editorial asymmetry.

  Design variants chosen (distinct from all existing templates):
    Hero:     Asymmetric right-video with vertical Japanese text accent on left
    Sections: Alternating bone/washi with seigaiha wave pattern backgrounds
    Menu:     Vertical side-tabs (desktop) with brush-stroke category dividers
    Reviews:  Horizontal scroll cards with circular mon-crest accents
    Gallery:  Asymmetric grid with one tall vertical + offset smaller images
    Footer:   Full-width dark sumi with centered vertical Japanese text

  Cuisine-specific visual motifs:
    1. Seigaiha (wave) CSS pattern on alternating sections
    2. Vertical Japanese text (writing-mode: vertical-rl) as decorative accents
    3. Brush-stroke dividers (ink-style thick short lines)
    4. Circular mon/crest for logo mark (kanji glyph)
    5. Washi paper texture feel via warm cream backgrounds
    6. Asanoha geometric pattern on dark sections
*/

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DishCarousel } from "@/components/DishCarousel";
import { dishCarouselItems } from "@/lib/dish-carousel-data";
import { OverUs } from "@/components/OverUs";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { Reserve } from "@/components/Reserve";
import { Galerie } from "@/components/Galerie";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      {dishCarouselItems.length >= 3 && <DishCarousel items={dishCarouselItems} />}
      <OverUs />
      <Menu />
      <Reviews />
      <Galerie />
      <Reserve />
      <Footer />
    </main>
  );
}
