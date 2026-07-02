"use client";

import { useState } from "react";
import { Flower2, Leaf, X, MapPin } from "lucide-react";
import Image from "next/image";

const VisualDiary = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      alt: "Mountain morning",
      title: "Mountain Morning",
      location: "Himachal Pradesh"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Varanasi ghats",
      title: "Sunset at Assi Ghat",
      location: "Varanasi"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1594514113865-d1deac339435?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Meghalaya forest",
      title: "Living Root Bridge Trail",
      location: "Meghalaya"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80",
      alt: "Desert stars",
      title: "Desert Night Sky",
      location: "Rajasthan"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
      alt: "Chai time",
      title: "Roadside Chai",
      location: "Somewhere in India"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      alt: "Kyoto garden",
      title: "Quiet Corner in Kyoto",
      location: "Japan"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1590123732197-e7079d2ceb89?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Kochi nets",
      title: "Chinese Fishing Nets",
      location: "Kochi"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      alt: "Road trip",
      title: "Somewhere Between",
      location: "Western Ghats"
    }
  ];

  // Lock body scroll when lightbox is open
  useState(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl" />
        <Leaf className="absolute top-32 left-32 w-16 h-16 text-stone-300 rotate-12" />
        <Flower2 className="absolute bottom-40 right-40 w-14 h-14 text-stone-300 -rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Through My Lens
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Visual Diary
          </h2>

          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "A glimpse of the world as I see it"
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo.id)}
              className="group cursor-pointer"
            >
              {/* Photo card */}
              <div className="bg-white p-2 pb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-stone-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Title & Location */}
                <div className="px-1">
                  <h3 className="text-xs font-light text-stone-700 mb-1 tracking-wide">
                    {photo.title}
                  </h3>
                  <p className="text-[10px] text-stone-400 font-light flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {photo.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative */}
        <div className="flex justify-center items-center gap-3 mt-20">
          <Leaf className="w-5 h-5 text-stone-300 -rotate-12" />
          <div className="flex gap-1.5">
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
            <div className="w-1 h-1 rounded-full bg-amber-300/80" />
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          </div>
          <Leaf className="w-5 h-5 text-stone-300 rotate-45" />
        </div>

        <p className="text-center text-stone-400 text-sm mt-6 font-light italic">
          More moments on Instagram @cherrydiary
        </p>
      </div>

      {/* Lightbox Modal - Fixed */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image container */}
          {(() => {
            const photo = photos.find(p => p.id === selectedImage);
            if (!photo) return null;
            return (
              <div 
                className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={1600}
                    className="max-w-full max-h-[75vh] object-contain"
                    priority
                  />
                </div>
                
                {/* Info below image */}
                <div className="mt-4 text-center">
                  <h3 className="text-white text-lg font-light mb-1">{photo.title}</h3>
                  <p className="text-white/60 text-sm font-light flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {photo.location}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Bottom hint */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/30 text-xs font-light">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VisualDiary;