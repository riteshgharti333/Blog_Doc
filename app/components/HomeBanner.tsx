// components/HomeBanner.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Leaf, Flower2 } from "lucide-react";

const HomeBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen w-full erflow-hidden">
      {/* Abstract floral pattern background */}
      <div className="absolute inset-0 opacity-10">
        {/* Large flower shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-stone-200/40 blur-3xl" />

        {/* Scattered leaf icons */}
        <Leaf className="absolute top-20 right-20 w-12 h-12 text-stone-300 rotate-12" />
        <Leaf className="absolute bottom-32 left-16 w-16 h-16 text-stone-300 -rotate-12" />
        <Flower2 className="absolute top-40 left-1/3 w-10 h-10 text-stone-300" />
        <Flower2 className="absolute bottom-40 right-1/4 w-14 h-14 text-stone-300 rotate-45" />

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Decorative top */}
        <div className="mb-12 relative">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-amber-300/60" />
            <Flower2 className="w-5 h-5 text-amber-400/80" />
            <div className="w-12 h-px bg-amber-300/60" />
          </div>
        </div>

        {/* Title with handwritten feel */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-stone-800 mb-6">
          Gmaal
          <span className="block text-5xl md:text-6xl lg:text-7xl font-extralight text-stone-600 mt-2">
            Diary
          </span>
        </h1>

        {/* Quote with organic styling */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-700 leading-relaxed relative">
            <span className="absolute -left-6 top-0 text-5xl text-yellow-400 s font-serif">
              “
            </span>
            I go places no one talks about.
            <span className="absolute -right-6 bottom-0 text-5xl text-yellow-400 font-serif">
              ”
            </span>
          </p>
        </div>

        {/* Subtitle with line decorations */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="w-20 h-px bg-yellow-400" />
          <p className="text-stone-500 uppercase tracking-[0.3em] text-sm font-light">
            Real experiences. No filters.
          </p>
          <div className="w-20 h-px bg-yellow-400" />
        </div>

        {/* Decorative bottom */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center">
          <div className="flex gap-6">
            <Leaf className="w-4 h-4 text-stone-400 rotate-12" />
            <Leaf className="w-4 h-4 text-stone-400 -rotate-12" />
            <Leaf className="w-4 h-4 text-stone-400 rotate-45" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="group flex flex-col items-center gap-2 text-stone-500 hover:text-stone-700 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest font-light">
            Explore
          </span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HomeBanner;
