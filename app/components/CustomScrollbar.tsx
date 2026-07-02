"use client";

import { Flower2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function CustomScrollbar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Hide default scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          background: transparent;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: rgba(251, 191, 36, 0.05);
          border-radius: 10px;
          margin: 20px 0;
          border: 1px solid rgba(251, 191, 36, 0.1);
        }

        /* Thumb with gradient */
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #fbbf24, #f59e0b, #d97706);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          position: relative;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #f59e0b, #d97706, #b45309);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.02);
        }

        /* Scrollbar corner (for when both scrollbars are visible) */
        ::-webkit-scrollbar-corner {
          background: transparent;
        }

        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #f59e0b rgba(251, 191, 36, 0.05);
        }
      `}</style>

      {/* Floating Flower Icon that follows scroll */}
      <div
        className="fixed right-3 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
        style={{
          opacity: scrollPercent > 2 ? 0.6 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="relative">
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-400/40 to-transparent"
            style={{ height: `${scrollPercent * 2}px`, maxHeight: "100px" }}
          />
          <Flower2
            className="w-4 h-4 text-amber-400/60"
            style={{
              transform: `rotate(${scrollPercent * 3.6}deg)`,
              transition: "transform 0.2s ease",
            }}
          />
        </div>
      </div>
    </>
  );
}
