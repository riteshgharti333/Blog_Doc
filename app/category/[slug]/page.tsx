import {
  ArrowLeft,
  Calendar,
  Clock,
  Flower2,
  Leaf,
  MapPin,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { popularPosts, recentPosts } from "@/app/data/eachData";

// Category display names
const categories: Record<string, string> = {
  tips: "Tips",
  china: "China",
  india: "India",
  personal: "Personal",
  traveling: "Traveling",
  hack: "Hack",
  japan: "Japan",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = categories[slug];

  if (!categoryName) {
    notFound();
  }

  // Filter posts by matching category name (case-insensitive)
  const allPosts = [...popularPosts, ...recentPosts];
  const categoryPosts = allPosts.filter((post) => post.category === slug);

  // const categoryPosts = popularPosts.filter(
  //   (post) => post.category.toLowerCase() === categoryName.toLowerCase(),
  // );

  // Related posts (different categories, limit 3)
  const relatedPosts = popularPosts
    .filter(
      (post) => post.category.toLowerCase() !== categoryName.toLowerCase(),
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-stone-100">
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <Flower2 className="w-5 h-5 text-amber-400/80" />
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-stone-800 mb-4">
            {categoryName}
          </h1>

          <p className="text-stone-500 text-lg font-light italic">
            {categoryPosts.length}{" "}
            {categoryPosts.length === 1 ? "story" : "stories"}
          </p>
        </div>

        <Link
          href="/"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-stone-700 hover:bg-white hover:shadow-md transition-all text-sm font-light group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back home
        </Link>
      </section>

      {/* Category Posts */}
      <section className="relative py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          {categoryPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post) => (
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
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs uppercase tracking-wider text-amber-700 font-light">
                            {post.category}
                          </span>
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
                      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-stone-200/50 pt-4 text-xs text-stone-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-24">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-px bg-amber-300/60" />
                    <span className="text-sm uppercase tracking-[0.2em] text-stone-400 font-light">
                      Related Articles
                    </span>
                    <div className="flex-1 h-px bg-stone-200" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-stone-200/50 hover:border-amber-200/50 hover:bg-white transition-all shadow-sm hover:shadow-md"
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs uppercase tracking-wider text-amber-700 font-light mb-1">
                            {post.category}
                          </p>
                          <h4 className="text-sm font-light text-stone-700 group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-stone-400 mt-1.5">
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Decorative */}
              <div className="flex justify-center items-center gap-3 mt-16">
                <Leaf className="w-4 h-4 text-stone-300 -rotate-12" />
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                  <div className="w-1 h-1 rounded-full bg-amber-300/80" />
                  <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                </div>
                <Leaf className="w-4 h-4 text-stone-300 rotate-12" />
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Leaf className="w-16 h-16 text-stone-300 mx-auto rotate-12 mb-6" />
              <h3 className="text-2xl font-light text-stone-500 mb-2">
                No posts yet
              </h3>
              <p className="text-stone-400 font-light">
                Stories coming soon in {categoryName}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-6 text-sm text-amber-600 hover:text-amber-700 transition-colors font-light"
              >
                <ArrowLeft className="w-3 h-3" />
                Back home
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
