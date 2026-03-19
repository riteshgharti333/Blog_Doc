// app/blog/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, MapPin, Tag, Heart, Share2, Bookmark, ChevronLeft, Leaf } from 'lucide-react'

// This would normally come from a CMS or database
const blogData = {
  title: "Hidden Valleys of Himachal",
  subtitle: "Finding peace in the lesser-known trails of Tirthan Valley",
  date: "March 15, 2024",
  author: "Gmaal",
  location: "Tirthan Valley, Himachal Pradesh",
  category: "Mountain Escapes",
  readTime: "8 min read",
  content: `
    <p class="text-lg leading-relaxed mb-6">The bus dropped me at a crossroads that didn't look like much. Just a tea stall, a few parked jeeps, and the sound of a river somewhere below. This was it—the entrance to Tirthan Valley, a place I'd only seen in grainy YouTube videos and whispered about by fellow travelers who'd "rather not say too much."</p>
    
    <p class="mb-6">I found a jeep going my way, or at least in the general direction. The road narrowed until it was barely a road at all—just stones and mud and the occasional brave chicken. My backpack dug into my shoulders as we bounced along, but every time I looked out the window, I forgot about the discomfort. The valley was unfolding like a secret.</p>
    
    <h2 class="text-2xl font-light text-stone-800 mt-10 mb-4">The First Morning</h2>
    
    <p class="mb-6">I woke up to mist so thick I couldn't see the pine tree ten feet from my window. The only sound was the river—that constant, reassuring presence that would become the background music of my days here. I made tea on a small stove, wrapped myself in a blanket, and sat on the wooden balcony. No phone signal. No plans. Just the mist slowly burning off to reveal mountains I hadn't known were there.</p>
    
    <blockquote class="italic text-stone-600 border-l-4 border-amber-400 pl-6 my-8 text-lg font-light">
      "Sometimes the best thing you can do is wake up somewhere you've never been, with no agenda except to be there."
    </blockquote>
    
    <p class="mb-6">Later that day, I met an old man who invited me to his apple orchard. We didn't share a language, but we shared chai and silence and the satisfaction of watching clouds drift through the valley. He pointed at a distant peak and said something I couldn't understand, but the pride in his voice was universal. His mountains. His home.</p>
    
    <h2 class="text-2xl font-light text-stone-800 mt-10 mb-4">The Hidden Waterfall</h2>
    
    <p class="mb-6">On the third day, I followed a trail that wasn't on any map. A local boy had drawn it for me in the dirt with a stick: "River, then left, then up." It took three hours of scrambling over rocks and through rhododendron forests, but I found it—a waterfall dropping into a pool so clear I could see every stone at the bottom. I swam until my fingers pruned and then lay on a warm rock like a lizard, listening to water and wind and nothing else.</p>
    
    <p class="mb-6">That night, back at the homestay, the family served dinner on the floor—dal, rice, roti, and a simple pumpkin preparation that tasted like comfort. They asked about my life in the city with genuine curiosity, not judgment. When I mentioned the waterfall, the grandmother nodded like she'd known it was there all along. Of course she had.</p>
    
    <p class="mb-6">On my last morning, I hiked up to a ridge above the valley. The sun was just hitting the higher peaks, turning them gold against a sky still purple with dawn. I sat there for an hour, maybe more, trying to memorize every detail—the way the light moved, the smell of pine, the feeling of being exactly where I was supposed to be.</p>
    
    <p class="italic text-stone-600 mt-8">No crowds. Just pure mountain air and the kind of peace you can't manufacture.</p>
  `,
  coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80"
  ]
}

// Related articles data
const relatedArticles = [
  {
    id: 2,
    title: "Chai & Conversations",
    excerpt: "Sometimes the best stories are shared on roadside tea stalls.",
    category: "Local Stories",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Desert Nights in Jaisalmer",
    excerpt: "Sleeping under a million stars, listening to folk songs.",
    category: "Desert Tales",
    image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Monsoon in Meghalaya",
    excerpt: "Living in the wettest place on earth. Rain and endless greens.",
    category: "Nature's Magic",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80"
  }
]

// Categories data for sidebar
const categories = [
  { name: "Personal", count: 12 },
  { name: "Traveling", count: 24 },
  { name: "Hack", count: 8 },
  { name: "Tips", count: 15 },
  { name: "India", count: 18 },
  { name: "China", count: 6 },
  { name: "Japan", count: 9 }
]

const SingleBlogPage = () => {
  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all entries</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8">
            <article className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm">
              {/* Cover Image */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src={blogData.coverImage}
                  alt={blogData.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-wider bg-amber-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {blogData.category}
                    </span>
                    <span className="text-xs bg-stone-800/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      {blogData.readTime}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">{blogData.title}</h1>
                  <p className="text-lg text-white/80 font-light">{blogData.subtitle}</p>
                </div>
              </div>

              {/* Article Meta */}
              <div className="p-8 border-b border-stone-200/50">
                <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogData.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogData.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{blogData.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-6">
                  <button className="flex items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">128 likes</span>
                  </button>
                  <button className="flex items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                  <button className="flex items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 prose prose-stone max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
              </div>

              {/* Tags */}
              <div className="px-8 pb-8 flex items-center gap-3">
                <Tag className="w-4 h-4 text-stone-400" />
                <div className="flex flex-wrap gap-2">
                  {['Himachal', 'Mountains', 'Solo Travel', 'Hidden Gems'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-stone-100 hover:bg-amber-50 rounded-full text-sm text-stone-600 hover:text-amber-700 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio
              <div className="mx-8 mb-8 p-6 bg-amber-50/50 rounded-2xl border border-amber-100/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                    <User className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-1">About Gmaal</h3>
                    <p className="text-sm text-stone-600 font-light">
                      A traveler documenting real experiences, one place at a time. No filters, just authentic stories from the road.
                    </p>
                  </div>
                </div>
              </div> */}
            </article>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-4 space-y-8">
            {/* Author Card */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-200/50 shadow-sm">
              <h3 className="text-lg font-light text-stone-700 mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" />
                About the Author
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-stone-800 font-medium">Gmaal</p>
                  <p className="text-sm text-stone-500"> wandering soul</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 font-light mb-4">
                Documenting real journeys, one place at a time. Currently somewhere in the mountains.
              </p>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-amber-300" />
                <div className="w-2 h-2 rounded-full bg-amber-200" />
              </div>
            </div>

            {/* Categories Sidebar */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-200/50 shadow-sm">
              <h3 className="text-lg font-light text-stone-700 mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-600" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/category/${cat.name.toLowerCase()}`}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-stone-600 group-hover:text-amber-700 transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-sm text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-stone-200/50 shadow-sm">
              <h3 className="text-lg font-light text-stone-700 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Mountains', 'Solo', 'India', 'Tea', 'Monsoon', 'Hidden', 'Local', 'Stories', 'Roadtrip'].map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-stone-100 hover:bg-amber-50 rounded-full text-sm text-stone-600 hover:text-amber-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-amber-50/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-sm">
              <h3 className="text-lg font-light text-stone-700 mb-2">Join the Journey</h3>
              <p className="text-sm text-stone-500 font-light mb-4">
                Get new entries delivered to your inbox. No spam, just real stories.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/80 rounded-lg border border-stone-200 focus:border-amber-400 focus:outline-none text-sm mb-2"
              />
              <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-16">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-amber-300/60" />
              <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
                Continue Reading
              </span>
              <div className="w-12 h-px bg-amber-300/60" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">Related Articles</h2>
          </div>

          {/* Related Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white transition-all duration-300 border border-stone-200/50 hover:border-amber-200/50 shadow-sm hover:shadow-md"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs uppercase tracking-wider bg-amber-600/90 text-white px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-light text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-stone-500 font-light line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-amber-600 text-sm">
                    <span>Read more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mt-12">
            <Leaf className="w-4 h-4 text-amber-300/60 rotate-12" />
            <Leaf className="w-4 h-4 text-amber-300/60 -rotate-12" />
            <Leaf className="w-4 h-4 text-amber-300/60 rotate-45" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage