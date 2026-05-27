"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react/dist/ssr";
import config from "@/config/restaurant";

const REVIEW_TRUNCATE_AT = 240;

function ReviewBody({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = (text ?? "").length > REVIEW_TRUNCATE_AT;
  const showClamp = isLong && !expanded;
  return (
    <>
      <p
        className={`text-sm leading-relaxed text-bone/80 ${
          showClamp ? "line-clamp-5" : ""
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-mono uppercase tracking-[0.3em] text-sakura-400 hover:text-sakura-300 transition-colors"
        >
          {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
        </button>
      )}
    </>
  );
}

export function Reviews() {
  const { rating, count, source, excerpts } = config.reviews;

  if (!excerpts.length) return null;

  return (
    <section id="bewertungen" className="relative bg-sumi-800 asanoha py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-sakura-400 mb-3">
              Stimmen aus Eppelheim
            </p>
            <h2 className="font-display text-3xl leading-tight text-bone md:text-5xl">
              Was unsere Gäste sagen
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-sakura-500 rounded-full" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/60">
              Köstliches Essen, gutes Preis-Leistungs-Verhältnis, immer wieder gerne wieder hier:
              das schreiben die Google-Gäste über uns.
            </p>
          </div>

          {/* Rating badge */}
          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const fill = Math.max(0, Math.min(1, rating - i));
                  return (
                    <span key={i} className="relative inline-block leading-none" style={{ width: 18, height: 18 }}>
                      <Star size={18} weight="regular" className="absolute inset-0 text-bone/30" />
                      {fill > 0 && (
                        <span
                          className="absolute inset-0 overflow-hidden"
                          style={{ width: `${fill * 100}%` }}
                          aria-hidden
                        >
                          <Star size={18} weight="fill" className="text-sakura-400" />
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
              <p className="mt-1 text-sm text-bone/50">
                {rating} / 5 bei {count} {source}-Bewertungen
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {excerpts.slice(0, 5).map((review, idx) => (
            <motion.div
              key={review.name}
              className={`bg-sumi-700/50 backdrop-blur-sm border border-bone/[0.06] p-8 ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" className="text-sakura-400" />
                ))}
              </div>

              <ReviewBody text={review.text} />

              <div className="mt-6 flex items-center justify-between border-t border-bone/[0.08] pt-4">
                <span className="text-sm font-medium text-bone/90">{review.name}</span>
                <span className="text-xs text-bone/40">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
