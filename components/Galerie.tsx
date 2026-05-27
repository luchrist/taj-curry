"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/lib/gallery-data";

const layoutSpans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:col-span-2",
  "",
];

const fallbackImages = [
  { src: "/assets/gallery-1.webp", alt: "Stimmungsbild aus dem Gastraum" },
  { src: "/assets/gallery-2.webp", alt: "Gericht aus unserer Küche" },
  { src: "/assets/gallery-3.webp", alt: "Detailaufnahme einer Speise" },
  { src: "/assets/gallery-4.webp", alt: "Eindruck vom Restaurant" },
  { src: "/assets/gallery-5.webp", alt: "Blick in den Tandoor-Bereich" },
];

const baseImages = galleryItems.length >= 5 ? galleryItems.slice(0, 5) : fallbackImages;
const images = baseImages.map((img, i) => ({ ...img, span: layoutSpans[i] ?? "" }));

export function Galerie() {
  return (
    <section id="galerie" className="relative bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-sakura-600 mb-3">
            Galerie
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Aus dem Curry House
          </h2>
          <div className="mt-4 h-[3px] w-12 bg-sakura-500 rounded-full" />
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={img.src}
              className={`relative overflow-hidden bg-card ${img.span} ${
                idx === 0 ? "aspect-[3/4] md:aspect-auto" : "aspect-[4/3]"
              }`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
