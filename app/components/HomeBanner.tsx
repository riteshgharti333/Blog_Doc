// components/HomeBanner.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Leaf, Flower2, Sparkles } from "lucide-react";

const HomeBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Abstract floral pattern background */}
      <div className="absolute inset-0 opacity-[0.07]">
        {/* Large flower shapes - responsive sizes */}
        <div className="absolute -top-20 -left-20 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full bg-amber-200/40 blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-rose-200/40 blur-3xl animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-stone-200/50 blur-3xl animate-pulse" 
          style={{ animationDuration: '12s', animationDelay: '1s' }} />

        {/* Scattered leaf icons - responsive positioning */}
        <Leaf className="absolute top-20 right-10 md:right-20 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-stone-300 rotate-12 hidden sm:block" />
        <Leaf className="absolute bottom-32 left-8 md:left-16 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-stone-300 -rotate-12 hidden sm:block" />
        <Flower2 className="absolute top-40 left-1/4 md:left-1/3 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-stone-300 hidden md:block" />
        <Flower2 className="absolute bottom-40 right-1/5 md:right-1/4 w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-stone-300 rotate-45 hidden md:block" />

        {/* Hand-drawn line pattern */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#e5d9d0" />
              <circle cx="30" cy="15" r="1" fill="#e5d9d0" />
              <circle cx="15" cy="30" r="1" fill="#e5d9d0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center">
        {/* Decorative top */}
        <div className="mb-6 sm:mb-8 md:mb-12 relative">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-8 sm:w-10 md:w-12 h-px bg-amber-300/60" />
            <Flower2 className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400/80" />
            <div className="w-8 sm:w-10 md:w-12 h-px bg-amber-300/60" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-stone-800 mb-4 sm:mb-6">
          <span className="inline-block">Cherry</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-stone-600 mt-1 sm:mt-2">
            Diary
          </span>
        </h1>

        {/* Quote */}
        <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-6 sm:px-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-stone-700 leading-relaxed relative">
            <span className="absolute -left-2 sm:-left-4 md:-left-6 top-0 text-3xl sm:text-4xl md:text-5xl text-amber-400 font-serif leading-none">
              “
            </span>
            <span className="px-4 sm:px-6 block">
              I go places no one talks about.
            </span>
            <span className="absolute -right-2 sm:-right-4 md:-right-6 bottom-0 text-3xl sm:text-4xl md:text-5xl text-amber-400 font-serif leading-none">
              ”
            </span>
          </p>
        </div>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-16 sm:mb-20">
          <div className="w-12 sm:w-16 md:w-20 h-px bg-amber-400/60" />
          <p className="text-stone-500 uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-light whitespace-nowrap">
            Real experiences. No filters.
          </p>
          <div className="w-12 sm:w-16 md:w-20 h-px bg-amber-400/60" />
        </div>

        {/* Decorative bottom */}
        <div className="absolute bottom-20 sm:bottom-24 left-0 right-0 flex justify-center">
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            <Leaf className="w-3 sm:w-4 h-3 sm:h-4 text-stone-400 rotate-12" />
            <Leaf className="w-3 sm:w-4 h-3 sm:h-4 text-stone-400 -rotate-12" />
            <Leaf className="w-3 sm:w-4 h-3 sm:h-4 text-stone-400 rotate-45" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="group flex flex-col items-center gap-1 sm:gap-2 text-stone-400 hover:text-stone-600 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-light">
            Explore
          </span>
          <ArrowDown className="w-3 sm:w-4 h-3 sm:h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HomeBanner;