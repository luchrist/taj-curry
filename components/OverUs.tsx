"use client";

import { motion } from "framer-motion";
import config from "@/config/restaurant";

const VALUES = [
  { symbol: "Tandoor", label: "Im Tonofen gebacken" },
  { symbol: "Masala", label: "Eigene Gewürzmischungen" },
  { symbol: "Frisch", label: "Täglich neu gekocht" },
] as const;

export function OverUs() {
  return (
    <section id="philosophie" className="relative bg-washi seigaiha py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Left column — decorative */}
          <motion.div
            className="md:col-span-4 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-display italic text-[96px] leading-none text-sakura-500/15 md:text-[150px]">
              {config.name.split(" ")[0]}
            </span>
            <div className="mt-6">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-sakura-600 mb-3">
                Über uns
              </p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Indische Küche,<br />ehrlich gekocht.
              </h2>
              <div className="mt-4 h-[3px] w-12 bg-sakura-500 rounded-full" />
            </div>
          </motion.div>

          {/* Right column — story text */}
          <motion.div
            className="md:col-span-7 md:col-start-6 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-body md:text-xl md:leading-relaxed">
              {config.name} in der Schubertstraße ist die kleine Curry-Küche, in der Eppelheim
              seinen Feierabend abholt. Im Tandoor backen Naans und Tikkas, daneben köcheln
              Currys auf kleiner Flamme, bis die Gewürze wirklich sitzen.
            </p>
            <p className="mt-6 text-base leading-relaxed text-body/80">
              Wir mahlen unsere Masalas selbst, kochen jeden Mittag frisch und passen die
              Schärfe Gericht für Gericht an. Ob im Restaurant, zum Mitnehmen oder zur
              Lieferung nach Hause: bei uns soll jede Portion so schmecken, als wäre sie
              extra für Sie zubereitet.
            </p>

            {/* Values row */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {VALUES.map((v) => (
                <div key={v.symbol} className="text-center">
                  <span className="font-display text-base font-medium text-sakura-600 md:text-lg">
                    {v.symbol}
                  </span>
                  <p className="mt-2 text-xs uppercase tracking-widest text-body/60">
                    {v.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
