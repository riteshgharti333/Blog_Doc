import {
  ArrowLeft,
  Calendar,
  Clock,
  Flower2,
  Heart,
  Leaf,
  MapPin,
  User,
  Tag,
  Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recentPosts, popularPosts } from "../../data/eachData";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allPosts = [...recentPosts, ...popularPosts];
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section with Cover Image */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/10 to-stone-50" />

        {/* Back Button */}
        <Link
          href="/blogs/recent"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-stone-700 hover:bg-white hover:shadow-md transition-all text-sm font-light group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to blogs
        </Link>

        {/* Share Button */}
        <button className="absolute top-6 right-6 z-10 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-stone-700 hover:bg-white hover:shadow-md transition-all">
          <Share2 className="w-4 h-4" />
        </button>
      </section>

      {/* Content */}
      <article className="relative max-w-3xl mx-auto px-2 -mt-32 z-10 pb-20">
        {/* Header Card */}
        <div className="bg-white rounded-2xl p-4 md:p-12 shadow-lg border border-stone-100 mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full font-light">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-stone-500 font-light italic mb-8 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500 border-b border-stone-100 pb-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                <User className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <p className="text-stone-700 font-medium text-sm">
                  {post.author}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{post.readTime}</span>
            </div>
            {post.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{post.location}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 bg-stone-50 text-stone-500 rounded-full border border-stone-200 hover:border-amber-300 hover:text-amber-700 transition-colors cursor-pointer font-light"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Decorative */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <Leaf className="w-4 h-4 text-amber-300 rotate-12" />
            <div className="w-8 h-px bg-amber-200" />
            <Flower2 className="w-4 h-4 text-amber-300" />
            <div className="w-8 h-px bg-amber-200" />
            <Leaf className="w-4 h-4 text-amber-300 -rotate-12" />
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-2xl p-4 md:p-12 shadow-sm border border-stone-100">
          <div
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-light prose-headings:text-stone-800 prose-headings:mt-10 prose-headings:mb-4
              prose-h2:text-2xl prose-h2:md:text-3xl
              prose-p:font-light prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:md:text-lg
              prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:bg-amber-50/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-stone-600 prose-blockquote:font-light prose-blockquote:my-8
              prose-strong:text-stone-700 prose-strong:font-medium
              prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Bottom Actions */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stone-200">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 hover:border-rose-300 hover:bg-rose-50 text-stone-500 hover:text-rose-600 transition-all text-sm font-light">
              <Heart className="w-4 h-4" />
              Like this post
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 hover:border-amber-300 hover:bg-amber-50 text-stone-500 hover:text-amber-600 transition-all text-sm font-light">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          <Link
            href="/blogs/recent"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-amber-700 transition-colors font-light group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all blogs
          </Link>
        </div>

        {/* Bottom Decorative */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <div className="flex gap-1.5">
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
            <div className="w-1 h-1 rounded-full bg-amber-300/80" />
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          </div>
        </div>
      </article>
    </main>
  );
}
