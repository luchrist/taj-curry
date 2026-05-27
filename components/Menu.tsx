"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "@/config/restaurant";

type Highlight = { name: string; description: string };
type Category = { category: string; subtitle: string; items: Highlight[] };

const CURATED_MENU: Category[] = [
  {
    category: "Tandoori",
    subtitle: "Aus dem heißen Tonofen: mariniert, gegrillt und kurz geruht.",
    items: [
      { name: "Chicken Tikka", description: "In Joghurt und Garam Masala marinierte Hähnchenstücke, im Tandoor gebacken." },
      { name: "Tandoori Lamm", description: "Lammkeulenstücke, langsam mariniert und mit Holzkohlenoten serviert." },
      { name: "Paneer Tikka", description: "Hausgemachter Frischkäse mit Paprika und Zwiebel vom Spieß." },
    ],
  },
  {
    category: "Curry-Klassiker",
    subtitle: "Auf kleiner Flamme gekocht, Schärfe nach Wunsch.",
    items: [
      { name: "Butter Chicken", description: "Tomaten-Sahne-Curry mit Tandoori-Hähnchen, mild und buttrig." },
      { name: "Chicken Korma", description: "Mit Cashew, Sahne und Kardamom abgerundet." },
      { name: "Lamm Vindaloo", description: "Aus Goa: scharf, säuerlich, mit Knoblauch und Essig." },
      { name: "Fisch Curry", description: "Mit Kokos, Curryblättern und frischem Koriander." },
    ],
  },
  {
    category: "Biryani & Reis",
    subtitle: "Basmati, im Topf geschichtet und mit Safran abgerundet.",
    items: [
      { name: "Hähnchen Biryani", description: "Basmati, Hähnchen, gerösteter Zwiebel, Joghurt-Raita dazu." },
      { name: "Lamm Biryani", description: "Klassisch nach Hyderabad-Art, langsam dampfgegart." },
      { name: "Gemüse Biryani", description: "Saisongemüse, Cashew, Rosinen." },
    ],
  },
  {
    category: "Vegetarisch",
    subtitle: "Hülsenfrüchte, Paneer und Gemüse stehen bei uns nicht in der zweiten Reihe.",
    items: [
      { name: "Palak Paneer", description: "Spinatpüree mit hausgemachtem Paneer." },
      { name: "Dal Makhani", description: "Schwarze Linsen, über Nacht eingelegt, mit Butter und Sahne." },
      { name: "Chana Masala", description: "Kichererbsen in würziger Tomatensauce." },
      { name: "Aloo Gobi", description: "Kartoffel und Blumenkohl mit Kreuzkümmel und Kurkuma." },
    ],
  },
  {
    category: "Naan & Brote",
    subtitle: "Frisch aus dem Tandoor an die Wand geklebt.",
    items: [
      { name: "Butter Naan", description: "Klassisch, weich, mit Butter bestrichen." },
      { name: "Knoblauch Naan", description: "Mit frischem Knoblauch und Koriander." },
      { name: "Cheese Naan", description: "Gefüllt mit zerlaufenem Käse." },
      { name: "Roti", description: "Vollkornbrot vom Tandoor, knackig dünn." },
    ],
  },
  {
    category: "Dessert & Lassi",
    subtitle: "Süß, kühl und ein guter Abschluss nach scharfem Curry.",
    items: [
      { name: "Mango Lassi", description: "Joghurt-Mango-Drink, gekühlt." },
      { name: "Gulab Jamun", description: "Warme Milchbällchen in Rosenwassersirup." },
      { name: "Kheer", description: "Reispudding mit Kardamom, Mandel und Pistazie." },
    ],
  },
];

export function Menu() {
  const [activeIdx, setActiveIdx] = useState(0);
  const categories = CURATED_MENU;
  const active = categories[activeIdx];

  return (
    <section id="carta" className="relative bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-sakura-600 mb-3">
            Speisekarte
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Unsere Küche
          </h2>
          <div className="mt-4 h-[3px] w-12 bg-sakura-500 rounded-full" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-body/70 md:text-base">
            Ein Überblick über das, was bei uns regelmäßig auf dem Teller landet. Die vollständige
            Karte mit allen Preisen und Tagesangeboten finden Sie vor Ort oder telefonisch unter{" "}
            <a href={config.contact.phone ? `tel:${config.contact.phone}` : "#"} className="underline decoration-sakura-500/60 underline-offset-2 hover:text-sakura-600">
              {config.contact.phone}
            </a>
            .
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          {/* Category tabs */}
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-2 pb-4 md:flex-col md:gap-1 md:pb-0">
              {categories.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-3 text-left text-sm transition-all md:px-5 md:py-4 ${
                    idx === activeIdx
                      ? "bg-sakura-500 text-bone font-medium"
                      : "bg-card text-body hover:bg-border"
                  }`}
                >
                  <span className="block">{cat.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu items */}
          <div className="md:col-span-8 md:col-start-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {active.subtitle && (
                  <p className="mb-8 text-sm text-body/70 italic border-l-2 border-sakura-500/50 pl-4">
                    {active.subtitle}
                  </p>
                )}

                <div className="space-y-0">
                  {active.items.map((item, idx) => (
                    <div
                      key={item.name}
                      className={`py-5 ${
                        idx < active.items.length - 1 ? "border-b border-border/60" : ""
                      }`}
                    >
                      <h3 className="font-display text-base md:text-lg">{item.name}</h3>
                      {item.description && (
                        <p className="mt-1 text-sm text-body/70">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-xs uppercase tracking-[0.25em] text-body/50">
                  Beispiele aus der Karte. Auswahl, Schärfe und Tagesgerichte vor Ort.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
