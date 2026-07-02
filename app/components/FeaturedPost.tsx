// components/FeaturedPost.tsx
import { ArrowRight, Calendar, Flower2, Leaf, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPost = () => {
  const featuredPost = {
    title: "The Art of Slow Travel: Finding Myself in Kyoto's Hidden Gardens",
    excerpt:
      "Between the crowded temples and busy streets, I discovered quiet corners where time stands still. This is a story about letting go of itineraries and letting the path unfold naturally. From chance encounters with tea masters to moon-viewing parties with strangers who became friends.",
    date: "June 2024",
    author: "Cherry",
    category: "Featured Story",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Editor's Pick
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Featured Post
          </h2>

          {/* Subtitle */}
          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "A story that deserves to be told slowly"
          </p>
        </div>

        {/* Featured Card */}
        <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-80 lg:h-full overflow-hidden">
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 lg:bg-gradient-to-r lg:from-transparent lg:to-white/20" />

              {/* Decorative elements on image */}
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-xs uppercase tracking-wider text-amber-700 font-light">
                  {featuredPost.category}
                </span>
              </div>

              <Flower2 className="absolute bottom-6 right-6 w-8 h-8 text-white/60 rotate-12" />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Decorative top line */}
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-4 h-4 text-amber-400 rotate-12" />
                <div className="flex-1 h-px bg-amber-200/50" />
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-light text-stone-800 mb-6 group-hover:text-amber-700 transition-colors leading-snug">
                {featuredPost.title}
              </h3>

              {/* Excerpt */}
              <p className="text-stone-600 font-light leading-relaxed mb-8 text-base lg:text-lg">
                {featuredPost.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500 mb-8 pb-8 border-b border-stone-200/50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span className="font-light">{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400" />
                  <span className="font-light">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  <span className="font-light">{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Read More Button */}
              <Link
                href="/blog/the-art-of-slow-travel-finding-myself-in-kyotos-hidden-gardens"
                className="group/btn inline-flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                <span className="text-sm uppercase tracking-[0.2em] font-light">
                  Read Full Story
                </span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </Link>

              {/* Decorative bottom */}
              <div className="flex items-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-amber-300/40" />
                <div className="w-2 h-2 rounded-full bg-amber-300/60" />
                <div className="w-2 h-2 rounded-full bg-amber-300/40" />
              </div>
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-4 right-4 lg:top-auto lg:bottom-4 lg:right-4">
            <Flower2 className="w-6 h-6 text-amber-300/40 rotate-45" />
          </div>
        </div>

        {/* Bottom decorative */}
        <div className="flex justify-center gap-3 mt-12">
          <Leaf className="w-5 h-5 text-stone-300 rotate-12" />
          <Leaf className="w-5 h-5 text-stone-300 -rotate-12" />
          <Leaf className="w-5 h-5 text-stone-300 rotate-45" />
        </div>
      </div>

      {/* Background floral elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-rose-200/30 blur-3xl" />

        <Leaf className="absolute top-40 right-40 w-16 h-16 text-stone-300 -rotate-12" />
        <Flower2 className="absolute bottom-32 left-32 w-12 h-12 text-stone-300 rotate-45" />
      </div>
    </section>
  );
};

export default FeaturedPost;
