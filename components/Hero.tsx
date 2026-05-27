"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import config from "@/config/restaurant";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let ctx: gsap.Context | undefined;

    const init = () => {
      if (!video.duration || !isFinite(video.duration)) return;
      ctx = gsap.context(() => {
        gsap.to(video, {
          currentTime: video.duration,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.12,
          },
        });
      }, section);
    };

    const onReady = () => {
      video.currentTime = 0.01;
      setVideoReady(true);
      init();
    };

    if (video.readyState >= 2 && video.duration) {
      onReady();
    } else {
      video.addEventListener("loadeddata", onReady, { once: true });
      video.load();
    }

    return () => {
      video.removeEventListener("loadeddata", onReady);
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-bone md:h-[300vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Video container — full bleed mobile, right-shifted desktop */}
        <div className="absolute inset-0 md:left-[25%]">
          <img
            src="/hero-poster.webp"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 top-[4%] z-[1] h-[58%] w-full object-cover transition-opacity duration-700 md:inset-0 md:h-full md:object-contain ${videoReady ? "opacity-0" : "opacity-100"}`}
          />
          <video
            ref={videoRef}
            className="absolute inset-x-0 top-[4%] h-[58%] w-full object-cover md:inset-0 md:h-full md:object-contain"
            muted
            playsInline
            preload="auto"
            disableRemotePlayback
            {...({ "webkit-playsinline": "true", "x5-playsinline": "true" } as Record<string, string>)}
          >
            <source src="/hero-scrub.webm" type="video/webm" />
          </video>

          {/* Mobile-only fades — top blends video edge into bg, bottom adds readability behind text */}
          <div className="md:hidden pointer-events-none absolute inset-x-0 top-0 z-10 h-[14%] bg-gradient-to-b from-bone via-bone/80 to-transparent" />
          <div className="md:hidden pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-b from-transparent via-bone/70 to-bone" />

          {/* Soft fades — desktop only */}
          <div className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0 z-10 h-72 bg-gradient-to-b from-transparent via-bone/70 to-bone" />
          <div className="hidden md:block pointer-events-none absolute inset-x-0 top-0 z-10 h-72 bg-gradient-to-t from-transparent via-bone/70 to-bone" />
          <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-bone via-bone/40 to-transparent" />
          <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-bone via-bone/40 to-transparent" />
        </div>

        {/* Vertical accent — desktop only */}
        <div className="hidden md:flex pointer-events-none absolute left-10 top-1/2 z-20 -translate-y-1/2">
          <span className="vertical-jp text-[11px] tracking-[0.5em] text-sakura-600/50 font-mono uppercase">
            Curry House · Eppelheim
          </span>
        </div>

        {/* Content overlay — bottom-left */}
        <div className="pointer-events-none absolute inset-0 z-20 flex">
          <div className="pointer-events-auto flex w-full max-w-[1400px] items-end px-6 pb-16 md:px-10 md:pb-28 lg:px-14">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-sakura-600 mb-4">
                Indische Küche · Eppelheim
              </p>

              <h1 className="font-display text-[40px] leading-[0.95] tracking-tight text-ink sm:text-[52px] md:text-[64px] lg:text-[72px]">
                Curry, Tandoor<br />und alles dazwischen.
              </h1>

              <p className="mt-4 font-display text-base italic text-body/85 md:text-lg">
                Frisch aus dem Tandoor, sorgfältig gewürzt, im Herzen von Eppelheim.
              </p>

              {/* Brush stroke divider */}
              <div className="mt-5 h-[3px] w-14 bg-sakura-500 rounded-full" />

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/reservierung"
                  className="bg-sakura-500 px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-bone transition-colors hover:bg-sakura-600"
                >
                  Tisch reservieren
                </a>
                <a
                  href="#carta"
                  className="border border-ink/40 bg-bone/70 backdrop-blur px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
                >
                  Zur Speisekarte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
