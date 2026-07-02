import { ArrowRight, Calendar, Flower2, Heart, Leaf, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { popularPosts } from "../data/eachData";

const PopularPosts = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Reader Favorites
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Popular Posts
          </h2>

          {/* Subtitle */}
          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "Stories that touched the most hearts"
          </p>
        </div>

        {/* Posts Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {popularPosts.slice(0, 3).map((post) => (
            <article
              className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-200/50 hover:border-amber-200/50 shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              {/* Image Container */}
              <Link href={`/blogs/${post.slug}`}>
                <div className="relative w-full h-52 overflow-hidden cursor-pointer">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs uppercase tracking-wider text-amber-700 font-light">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Title - now wrapped in Link */}
                <Link href={`/blogs/${post.slug}`}>
                  <h3 className="text-xl font-light text-stone-800 mb-3 group-hover:text-amber-700 transition-colors leading-snug cursor-pointer">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-stone-500 font-light leading-relaxed mb-6 text-sm">
                  {post.subtitle}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-stone-400 border-t border-stone-200/50 pt-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-amber-300">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More - updated to use post.slug */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-amber-600 text-sm font-light hover:gap-3 transition-all cursor-pointer"
                >
                  Read full story <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Flower2 className="w-4 h-4 text-amber-300 rotate-45" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/blog"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-stone-300 rounded-full text-stone-700 hover:border-amber-400 hover:text-amber-700 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-amber-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-light">
              View All Posts
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          </div>
        </div>
      </div>

      {/* Background floral elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-rose-200/30 blur-3xl" />

        <Leaf className="absolute top-32 right-32 w-16 h-16 text-stone-300 -rotate-12" />
        <Flower2 className="absolute bottom-40 left-40 w-14 h-14 text-stone-300 rotate-45" />
        <Leaf className="absolute top-1/2 right-20 w-12 h-12 text-stone-300 rotate-12" />
      </div>
    </section>
  );
};

export default PopularPosts;
