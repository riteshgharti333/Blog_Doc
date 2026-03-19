// components/Blogs.tsx
import { ArrowRight, Calendar, Leaf, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Blogs = () => {
  // Sample blog data with image references
  const blogs = [
    {
      id: 1,
      title: "Hidden Valleys of Himachal",
      excerpt: "Finding peace in the lesser-known trails of Tirthan Valley. No crowds, just pure mountain air.",
      date: "March 2024",
      author: "Gmaal",
      category: "Mountain Escapes",
      // Using a reliable, aesthetic mountain image
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Chai & Conversations",
      excerpt: "Sometimes the best stories are shared on roadside tea stalls. A collection of small moments.",
      date: "February 2024",
      author: "Gmaal",
      category: "Local Stories",
      imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Wandering Varanasi",
      excerpt: "Losing myself in the narrow lanes of the oldest city. Where every corner has a tale.",
      date: "January 2024",
      author: "Gmaal",
      category: "City Diaries",
      imageUrl: "https://images.unsplash.com/photo-1561361058-c24776a8d29c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Desert Nights in Jaisalmer",
      excerpt: "Sleeping under a million stars, listening to folk songs that echo through the sand.",
      date: "December 2023",
      author: "Gmaal",
      category: "Desert Tales",
      imageUrl: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Monsoon in Meghalaya",
      excerpt: "Living in the wettest place on earth. Rain, roots bridges, and endless greens.",
      date: "November 2023",
      author: "Gmaal",
      category: "Nature's Magic",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Fishermen of Kochi",
      excerpt: "Watching the Chinese fishing nets at sunrise. A dance between man and sea.",
      date: "October 2023",
      author: "Gmaal",
      category: "Coastal Life",
      imageUrl: "https://images.unsplash.com/photo-1589803541009-8c744d836eda?auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Journal Entries
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          {/* Main Title */}
          <h2 className="text-7xl md:text-8xl font-ligh  text-stone-800 mb-4">
            Blogs
          </h2>

          {/* Subtitle with floral decorative */}
          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "Writing to remember, sharing to connect"
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white transition-all duration-300 border border-stone-200/50 hover:border-amber-200/50 shadow-sm hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-purple-700 ">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-light text-stone-800 mb-3 group-hover:text-amber-700 transition-colors cursor-pointer">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-stone-600 font-light leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-stone-500 border-t border-stone-200/50 pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href="blog" className="text-amber-600 text-sm flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                    Read entry <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-stone-300 rounded-full text-stone-700 hover:border-amber-400 hover:text-amber-700 transition-all duration-300 overflow-hidden">
            {/* Background hover effect */}
            <span className="absolute inset-0 bg-amber-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            
            {/* Content */}
            <span className="relative z-10 text-sm uppercase tracking-[0.2em] font-light">
              Explore more blogs
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
            <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          </div>
        </div>
      </div>

      {/* Background floral elements */}
      <div className="absolute left-0 right-0 pointer-events-none opacity-20">
        <div className="relative">
          <Leaf className="absolute -top-20 left-10 w-16 h-16 text-stone-300 rotate-12" />
          <Leaf className="absolute -bottom-20 right-10 w-20 h-20 text-stone-300 -rotate-12" />
        </div>
      </div>
    </section>
  )
}

export default Blogs