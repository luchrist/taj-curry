"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import config from "@/config/restaurant";

const navLinks = [
  { label: "Über uns", href: "#philosophie" },
  { label: "Speisekarte", href: "#carta" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Besuch", href: "#besuch" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bone/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-[2px] md:px-10">
          {/* Brand mark */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/assets/logo-mark.png"
              alt={`${config.name} Logo`}
              className="h-20 w-20 md:h-28 md:w-28 object-contain"
            />
            <span className="sr-only">{config.name}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors hover:text-sakura-600 ${scrolled ? "text-body" : "text-bone drop-shadow-md"}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/reservierung"
              className="border border-sakura-500 bg-sakura-500 px-5 py-2 text-[13px] font-medium tracking-wide text-bone transition-colors hover:bg-transparent hover:text-sakura-600"
            >
              Reservieren
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} className={scrolled ? "text-body" : "text-bone drop-shadow-md"} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bone pt-24">
          <nav className="flex flex-col items-center gap-6 pt-8">
            <img
              src="/assets/logo-mark.png"
              alt={`${config.name} Logo`}
              className="h-24 w-24 object-contain"
            />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/reservierung"
              className="mt-4 border border-sakura-500 bg-sakura-500 px-8 py-3 text-sm font-medium tracking-wide text-bone"
            >
              Reservieren
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
