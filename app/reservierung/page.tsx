"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "@/config/restaurant";
import { restaurant, isClosedDay } from "@/lib/restaurant";

function getTodayStr(): string {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

function parseTimeSlots(hoursStr: string): string[] {
  if (!hoursStr || hoursStr === "Ruhetag") return [];
  const slots: string[] = [];
  const ranges = hoursStr.split(",").map((s) => s.trim());

  for (const range of ranges) {
    const parts = range.split("-").map((s) => s.trim());
    if (parts.length !== 2) continue;
    const [startStr, endStr] = parts;
    const [startH, startM] = startStr.split(":").map(Number);
    const [endH, endM] = endStr.split(":").map(Number);

    let startMin = startH * 60 + startM;
    let endMin = endH * 60 + endM;
    if (endMin <= startMin) endMin += 24 * 60;

    const lastSlot = endMin - 60;
    for (let m = startMin; m <= lastSlot; m += 30) {
      const h = Math.floor(m / 60) % 24;
      const min = m % 60;
      slots.push(`${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`);
    }
  }
  return slots;
}

function getDayName(dateStr: string): string {
  const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  return days[new Date(dateStr).getDay()];
}

export default function ReservierungPage() {
  const [date, setDate] = useState(getTodayStr());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const dayName = getDayName(date);
  const closedToday = isClosedDay(date);
  const hoursEntry = config.openingHours.find((h) => h.day === dayName);
  const timeSlots = useMemo(() => parseTimeSlots(hoursEntry?.hours || ""), [hoursEntry?.hours]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      await fetch("/api/reservierung", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="min-h-[100dvh] bg-bone pt-24 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="flex min-h-[60vh] flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-sakura-500/15 text-3xl font-display italic text-sakura-600">✓</span>
              <h1 className="mt-6 font-display text-3xl md:text-4xl">Danke für Ihre Reservierung.</h1>
              <p className="mt-4 max-w-md text-body/75">
                Wir melden uns kurz telefonisch zur Bestätigung. Bis bald in der Schubertstraße.
              </p>
              <a href="/" className="mt-8 text-sm underline underline-offset-4 text-body hover:text-ink">
                Zurück zur Startseite
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-12">
                <a href="/" className="text-sm text-body/60 hover:text-ink transition-colors">
                  ← Zurück
                </a>
                <h1 className="mt-4 font-display text-3xl md:text-4xl">Tisch reservieren</h1>
                <div className="mt-3 h-[3px] w-12 bg-sakura-500 rounded-full" />
                <p className="mt-4 max-w-xl text-sm text-body/70">
                  Reservieren Sie online oder rufen Sie uns einfach an. Bei großen Gruppen und
                  besonderen Wünschen am liebsten direkt am Telefon.
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-12 md:gap-10">
                {/* Form */}
                <form onSubmit={handleSubmit} className="md:col-span-7 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">Name</label>
                      <input
                        name="name"
                        required
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">E-Mail</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">Telefon</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">Personen</label>
                      <input
                        name="guests"
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        min={1}
                        defaultValue={2}
                        required
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">Datum</label>
                      <input
                        name="date"
                        type="date"
                        value={date}
                        min={getTodayStr()}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">Uhrzeit</label>
                      {closedToday ? (
                        <p className="px-4 py-3 text-sm text-sakura-600">
                          {dayName} ist Ruhetag
                        </p>
                      ) : timeSlots.length === 0 ? (
                        <p className="px-4 py-3 text-sm text-body/50">Keine Zeiten verfügbar</p>
                      ) : (
                        <select
                          name="time"
                          required
                          className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot} Uhr</option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-body/60">Nachricht (optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || closedToday}
                    className="w-full bg-sakura-500 py-4 text-[13px] font-medium uppercase tracking-wider text-bone transition-colors hover:bg-sakura-600 disabled:opacity-40 disabled:cursor-not-allowed sm:w-auto sm:px-12"
                  >
                    {loading ? "Wird gesendet..." : "Reservierung absenden"}
                  </button>
                </form>

                {/* Sidebar */}
                <div className="md:col-span-4 md:col-start-9">
                  <div className="bg-card p-8">
                    <h3 className="text-sm font-medium uppercase tracking-widest text-body/60 mb-6">
                      Öffnungszeiten
                    </h3>
                    <div className="space-y-3">
                      {config.openingHours.map((entry) => (
                        <div key={entry.day} className="flex justify-between text-sm">
                          <span className="text-body/70">{entry.day}</span>
                          <span className={`font-mono text-xs ${entry.hours === "Ruhetag" ? "text-sakura-600" : "text-body/70"}`}>
                            {entry.hours}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-border pt-6 space-y-3">
                      <p className="text-sm text-body/70">{config.address.street}</p>
                      <p className="text-sm text-body/70">{config.address.city}</p>
                      <p className="text-sm text-body/70">{config.contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
