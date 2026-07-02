// components/Category.tsx
import { Leaf } from "lucide-react";

import Link from "next/link";

const Category = () => {
  const categories = [
    { name: "Personal", count: 12 },
    { name: "Traveling", count: 24 },
    { name: "Hack", count: 8 },
    { name: "Tips", count: 15 },
    { name: "India", count: 18 },
    { name: "China", count: 6 },
    { name: "Japan", count: 9 },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Browse Topics
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Categories
          </h2>

          {/* Subtitle */}
          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "Stories sorted by mood, place, and curiosity"
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {categories.map((category, index) => (
    <Link
      href={`/category/${category.name.toLowerCase()}`}
      key={index}
      className="group relative p-6 bg-white/40 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 border border-stone-200/50 hover:border-amber-200/50 shadow-sm hover:shadow-md text-center cursor-pointer block"
    >
      {/* Category Name */}
      <h3 className="text-xl md:text-2xl font-light text-stone-700 group-hover:text-amber-700 transition-colors mb-2">
        {category.name}
      </h3>

      {/* Entry Count */}
      <p className="text-sm text-stone-400 group-hover:text-purple-600 transition-colors">
        {category.count} {category.count === 1 ? "entry" : "entries"}
      </p>

      {/* Decorative Corner */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <Leaf className="w-4 h-4 text-amber-300 rotate-12" />
      </div>
    </Link>
  ))}
</div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-3 mt-16">
          <div className="w-2 h-2 rounded-full bg-amber-300/40" />
          <div className="w-2 h-2 rounded-full bg-amber-300/60" />
          <div className="w-2 h-2 rounded-full bg-amber-300/40" />
        </div>

        {/* Simple Description */}
        <p className="text-center text-stone-400 text-sm mt-8 font-light">
          Click on any category to explore related stories
        </p>
      </div>

      {/* Background floral elements - matching the aesthetic */}
      <div className="absolute left-0 right-0 pointer-events-none opacity-20">
        <div className="relative">
          <Leaf className="absolute -top-32 left-20 w-20 h-20 text-stone-300 -rotate-12" />
          <Leaf className="absolute -bottom-32 right-20 w-24 h-24 text-stone-300 rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default Category;
