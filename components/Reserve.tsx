"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, EnvelopeSimple, Clock } from "@phosphor-icons/react/dist/ssr";
import config from "@/config/restaurant";

export function Reserve() {
  const today = new Date().toLocaleDateString("de-DE", { weekday: "long" });

  return (
    <section id="besuch" className="relative bg-washi seigaiha py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Left — info */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-sakura-600 mb-3">
              Besuch
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Vorbeikommen oder bestellen
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-sakura-500 rounded-full" />

            <p className="mt-6 text-sm leading-relaxed text-body/75">
              Wir sind die kleine indische Küche in der Schubertstraße in Eppelheim. Tische werden
              schnell warm, ein Anruf reicht für Reservierung oder Abholung.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 text-sakura-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium">{config.address.street}</p>
                  <p className="text-sm text-body/70">{config.address.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-sakura-500 shrink-0" />
                <a href={`tel:${config.contact.phone}`} className="text-sm hover:underline">
                  {config.contact.phone}
                </a>
              </div>
              {config.contact.email && (
                <div className="flex items-center gap-4">
                  <EnvelopeSimple size={20} className="text-sakura-500 shrink-0" />
                  <a href={`mailto:${config.contact.email}`} className="text-sm hover:underline">
                    {config.contact.email}
                  </a>
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/reservierung"
                className="inline-block bg-sakura-500 px-8 py-4 text-[13px] font-medium uppercase tracking-wider text-bone transition-colors hover:bg-sakura-600"
              >
                Tisch reservieren
              </a>
              <a
                href={`tel:${config.contact.phone}`}
                className="inline-block border border-ink/30 px-8 py-4 text-[13px] font-medium uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
              >
                Anrufen
              </a>
            </div>
          </motion.div>

          {/* Right — opening hours */}
          <motion.div
            className="md:col-span-6 md:col-start-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock size={20} className="text-body/50" />
              <h3 className="text-sm font-medium uppercase tracking-widest text-body/60">
                Öffnungszeiten
              </h3>
            </div>

            <div className="space-y-0">
              {config.openingHours.map((entry) => {
                const isToday = entry.day === today;
                return (
                  <div
                    key={entry.day}
                    className={`flex items-center justify-between py-3.5 border-b border-border/50 ${
                      isToday ? "bg-card/50 -mx-4 px-4" : ""
                    }`}
                  >
                    <span className={`text-sm ${isToday ? "font-medium" : "text-body/80"}`}>
                      {entry.day}
                      {isToday && (
                        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-sakura-500" />
                      )}
                    </span>
                    <span className={`text-sm font-mono ${
                      entry.hours === "Ruhetag" ? "text-sakura-600" : isToday ? "font-medium" : "text-body/70"
                    }`}>
                      {entry.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
