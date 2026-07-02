import { ArrowRight, Calendar, Leaf, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { recentPosts } from "../data/eachData";

const Blogs = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Journal Entries
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Blogs
          </h2>

          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "Writing to remember, sharing to connect"
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recentPosts.slice(0, 3).map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-2xl border border-stone-200/50 bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-amber-200/50 hover:bg-white hover:shadow-md"
            >
              {/* Image with Link */}
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative h-48 w-full overflow-hidden cursor-pointer">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-purple-700">
                  {blog.category}
                </span>

                {/* Title with Link */}
                <Link href={`/blog/${blog.slug}`}>
                  <h3 className="mt-3 text-xl font-light text-stone-800 transition-colors group-hover:text-amber-700 line-clamp-2 cursor-pointer">
                    {blog.title}
                  </h3>
                </Link>

                <p className="mt-3 text-stone-600 leading-relaxed line-clamp-2">
                  {blog.subtitle}
                </p>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-stone-200/50 pt-4 text-sm text-stone-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{blog.author}</span>
                  </div>

                  <span>{blog.readTime}</span>
                </div>

                {/* Read More - already has correct link */}
                <div className="mt-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex items-center gap-2 text-sm text-amber-600 transition-all hover:gap-3"
                  >
                    Read entry
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <Link
            href="/blogs/recent"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-stone-300 px-8 py-4 text-stone-700 transition-all duration-300 hover:border-amber-400 hover:text-amber-700"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-amber-50 transition-transform group-hover:scale-x-100" />

            <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-light">
              Explore more blogs
            </span>

            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-1 rounded-full bg-amber-300/60" />
            <div className="h-1 w-1 rounded-full bg-amber-300/60" />
            <div className="h-1 w-1 rounded-full bg-amber-300/60" />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Leaf className="absolute left-10 top-10 h-16 w-16 rotate-12 text-stone-300" />
        <Leaf className="absolute bottom-10 right-10 h-20 w-20 -rotate-12 text-stone-300" />
      </div>
    </section>
  );
};

export default Blogs;
