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
        {/* Video container — full bleed */}
        <div className="absolute inset-0">
          <img
            src="/hero-poster.webp"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-0" : "opacity-100"}`}
          />
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            disableRemotePlayback
            {...({ "webkit-playsinline": "true", "x5-playsinline": "true" } as Record<string, string>)}
          >
            <source src="/hero-scrub.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Vertical accent — desktop only */}
        <div className="hidden md:flex pointer-events-none absolute left-10 top-1/2 z-20 -translate-y-1/2">
          <span className="vertical-jp text-[11px] tracking-[0.5em] text-bone/70 font-mono uppercase drop-shadow-md">
            Curry House · Eppelheim
          </span>
        </div>

        {/* Content overlay — bottom-left */}
        <div className="pointer-events-none absolute inset-0 z-20 flex">
          <div className="pointer-events-auto flex w-full max-w-[1400px] items-end px-6 pb-16 md:px-10 md:pb-28 lg:px-14">
            <div className="max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              {/* Eyebrow */}
              <p className="hidden md:block text-xs font-mono uppercase tracking-[0.3em] text-sakura-300 mb-4">
                Indische Küche · Eppelheim
              </p>

              <h1 className="font-display text-[40px] leading-[0.95] tracking-tight text-bone sm:text-[52px] md:text-[64px] lg:text-[72px]">
                Curry, Tandoor<span className="hidden md:inline"><br />& mehr.</span>
              </h1>

              <p className="hidden md:block mt-4 font-display text-base italic text-bone/85 md:text-lg">
                Frisch aus dem Tandoor, sorgfältig gewürzt, in Eppelheim.
              </p>

              {/* Brush stroke divider */}
              <div className="hidden md:block mt-5 h-[3px] w-14 bg-sakura-400 rounded-full" />

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/reservierung"
                  className="bg-sakura-500 px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-bone transition-colors hover:bg-sakura-600"
                >
                  Tisch reservieren
                </a>
                <a
                  href="#carta"
                  className="border border-bone/40 bg-bone/10 backdrop-blur px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-bone transition-colors hover:bg-bone/20"
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
