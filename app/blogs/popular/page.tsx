import {
  ArrowRight,
  Calendar,
  Flower2,
  Heart,
  Leaf,
  Clock,
  User,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { popularPosts } from "../../data/eachData";

const PopularBlogsPage = () => {
  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80"
            alt="Person reading journal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-50" />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <Heart className="w-5 h-5 text-rose-400/80" />
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight">
            Popular Posts
          </h1>

          <p className="text-xl md:text-2xl text-white/80 font-light italic max-w-2xl mx-auto">
            "Stories that touched the most hearts"
          </p>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
          </div>
        </div>

    
      </section>

      {/* Posts Grid */}
      <section className="relative py-20 px-4 bg-stone-50">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute bottom-40 left-20 w-64 h-64 rounded-full bg-rose-200/30 blur-3xl" />
          <Leaf className="absolute top-32 left-32 w-16 h-16 text-stone-300 rotate-12" />
          <Leaf className="absolute bottom-40 right-40 w-20 h-20 text-stone-300 -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-amber-300/60" />
              <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
                Reader Favorites
              </span>
              <div className="w-12 h-px bg-amber-300/60" />
            </div>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
              "Stories that touched the most hearts"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-stone-200/50 bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-amber-200/50 hover:bg-white hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs uppercase tracking-wider text-amber-700 font-light">
                        {post.category}
                      </span>
                    </div>
                    {/* Heart badge for popular posts */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                      <span className="text-xs text-stone-600 font-light">2.4k</span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-light text-stone-800 transition-colors group-hover:text-amber-700 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-stone-600 font-light leading-relaxed text-sm">
                    {post.subtitle}
                  </p>

                  {post.location && (
                    <div className="flex items-center gap-1.5 mt-3 text-xs text-stone-400">
                      <MapPin className="w-3 h-3" />
                      <span>{post.location}</span>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-stone-200/50 pt-4 text-xs text-stone-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-sm text-amber-600 transition-all hover:gap-3"
                    >
                      Read entry
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Flower2 className="w-4 h-4 text-amber-300 rotate-45" />
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blogs/recent"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-stone-300 px-8 py-4 text-stone-700 transition-all duration-300 hover:border-amber-400 hover:text-amber-700"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-amber-50 transition-transform group-hover:scale-x-100" />
              <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-light">
                View Recent Blogs
              </span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-8 flex justify-center gap-2">
              <div className="h-1 w-1 rounded-full bg-amber-300/60" />
              <div className="h-1 w-1 rounded-full bg-amber-300/80" />
              <div className="h-1 w-1 rounded-full bg-amber-300/60" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PopularBlogsPage;