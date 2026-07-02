"use client";

import { Flower2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollFlower() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border cursor-pointer border-amber-200/50 transition-all duration-300 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <Flower2 className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400/80 hover:text-amber-600 transition-colors" />
    </button>
  );
}