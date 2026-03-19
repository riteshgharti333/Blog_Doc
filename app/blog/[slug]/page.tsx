import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, MapPin, Tag, Heart, Share2, Bookmark, ChevronLeft, Leaf } from 'lucide-react'

// Custom components for MDX to match your design - COMPLETE VERSION
const components = {
  // ===== TEXT STYLES =====
  // Paragraphs
  p: (props: any) => <p className="text-lg leading-relaxed mb-6 text-stone-700" {...props} />,
  
  // Headings
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-light text-stone-800 mt-16 mb-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-14 mb-6" {...props} />,
  h3: (props: any) => <h3 className="text-2xl md:text-3xl font-light text-stone-800 mt-12 mb-5" {...props} />,
  h4: (props: any) => <h4 className="text-xl md:text-2xl font-light text-stone-800 mt-10 mb-4" {...props} />,
  h5: (props: any) => <h5 className="text-lg md:text-xl font-light text-stone-800 mt-8 mb-3" {...props} />,
  h6: (props: any) => <h6 className="text-base md:text-lg font-light text-stone-800 mt-6 mb-3 uppercase tracking-wider" {...props} />,
  
  // Bold, Italic, Strikethrough
  strong: (props: any) => <strong className="font-semibold text-stone-900" {...props} />,
  em: (props: any) => <em className="italic text-stone-600" {...props} />,
  del: (props: any) => <del className="line-through text-stone-400" {...props} />,
  
  // Inline code
  inlineCode: (props: any) => (
    <code className="bg-stone-100 text-amber-700 px-1.5 py-0.5 rounded-md text-sm font-mono" {...props} />
  ),
  
  // Links
  a: (props: any) => (
    <a 
      className="text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors font-medium" 
      {...props} 
    />
  ),
  
  // ===== LISTS =====
  // Unordered lists
  ul: (props: any) => <ul className="list-disc pl-8 mb-6 text-stone-700 space-y-2 marker:text-amber-500" {...props} />,
  
  // Ordered lists
  ol: (props: any) => <ol className="list-decimal pl-8 mb-6 text-stone-700 space-y-2 marker:text-amber-500" {...props} />,
  
  // List items
  li: (props: any) => <li className="text-lg leading-relaxed pl-1" {...props} />,
  
  // ===== BLOCKQUOTES =====
  blockquote: (props: any) => (
    <blockquote className="relative italic text-stone-600 border-l-4 border-amber-400 pl-6 py-2 my-8 text-lg font-light bg-amber-50/30 rounded-r-2xl" {...props} />
  ),
  
  // ===== CODE BLOCKS =====
  code: (props: any) => {
    // Check if it's a code block (has className with language)
    if (props.className) {
      return (
        <div className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-sm">
          <div className="bg-stone-800 px-4 py-2 text-xs text-stone-400 font-mono">
            {props.className.replace('language-', '')}
          </div>
          <pre className="bg-stone-900 p-4 overflow-x-auto">
            <code className="text-sm text-stone-200 font-mono" {...props} />
          </pre>
        </div>
      )
    }
    // Inline code
    return (
      <code className="bg-stone-100 text-amber-700 px-1.5 py-0.5 rounded-md text-sm font-mono" {...props} />
    )
  },
  
  pre: (props: any) => <pre className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-900 p-4 overflow-x-auto" {...props} />,
  
  // ===== TABLES =====
  table: (props: any) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
      <table className="min-w-full divide-y divide-stone-200" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-stone-50" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-stone-200 bg-white" {...props} />,
  tr: (props: any) => <tr className="hover:bg-stone-50 transition-colors" {...props} />,
  th: (props: any) => (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 text-sm text-stone-600 whitespace-nowrap" {...props} />
  ),
  
  // ===== HORIZONTAL RULES =====
  hr: (props: any) => <hr className="my-12 border-t border-stone-200" {...props} />,
  
  // ===== IMAGES =====
  img: (props: any) => (
    <div className="my-8 rounded-xl overflow-hidden border border-stone-200 shadow-sm">
      <Image 
        src={props.src} 
        alt={props.alt || 'Blog image'} 
        width={800} 
        height={400} 
        className="w-full h-auto object-cover"
      />
      {props.alt && (
        <p className="text-center text-sm text-stone-500 py-2 bg-stone-50">{props.alt}</p>
      )}
    </div>
  ),
  
  // ===== DIV (for HTML blocks) =====
  div: (props: any) => {
    // Check if it's a special component
    if (props.className?.includes('callout')) {
      return <div className="my-6 p-4 rounded-lg bg-amber-50 border-l-4 border-amber-400" {...props} />
    }
    return <div className="my-4" {...props} />
  },
  
  // ===== CUSTOM COMPONENTS =====
  // For keyboard shortcuts
  kbd: (props: any) => (
    <kbd className="px-2 py-1 bg-stone-100 border border-stone-300 rounded-md text-sm font-mono shadow-sm" {...props} />
  ),
  
  // For details/summary (accordion)
  details: (props: any) => (
    <details className="my-6 rounded-xl border border-stone-200 overflow-hidden bg-white shadow-sm" {...props} />
  ),
  summary: (props: any) => (
    <summary className="px-4 py-3 bg-stone-50 text-stone-700 font-medium cursor-pointer hover:bg-amber-50 transition-colors" {...props} />
  ),
  
  // For mark (highlighted text)
  mark: (props: any) => <mark className="bg-amber-100 text-stone-800 px-1 rounded" {...props} />,
  
  // For superscript/subscript
  sup: (props: any) => <sup className="text-xs align-super" {...props} />,
  sub: (props: any) => <sub className="text-xs align-sub" {...props} />,
  
  // For definition lists
  dl: (props: any) => <dl className="my-6 divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden" {...props} />,
  dt: (props: any) => <dt className="px-4 py-3 bg-stone-50 font-medium text-stone-700" {...props} />,
  dd: (props: any) => <dd className="px-4 py-3 text-stone-600 bg-white" {...props} />,
  
  // For footnotes section
  section: (props: any) => <section className="my-8 p-6 bg-stone-50 rounded-xl border border-stone-200" {...props} />,
  
  // For math blocks (if you enable math)
  math: (props: any) => <div className="my-6 p-4 bg-stone-50 rounded-lg text-center font-mono" {...props} />,
}

// Helper function to get all posts (for related articles)
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'app/content/posts')
  const files = fs.readdirSync(postsDirectory)

  return files.map((file) => {
    const slug = file.replace('.mdx', '')
    const fullPath = path.join(postsDirectory, file)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      image: data.image || '',
      location: data.location || '',
      category: data.category || '',
      readTime: data.readTime || '',
      author: data.author || 'Gmaal',
      tags: data.tags || [],
    }
  })
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  // Read the MDX file
  const filePath = path.join(process.cwd(), 'app/content/posts', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  
  // Parse frontmatter and content
  const { content, data } = matter(source)
  
  // Get all posts for related articles
  const allPosts = getAllPosts()
  const relatedArticles = allPosts
    .filter(post => post.slug !== slug)
    .slice(0, 3)
    .map(post => ({
      id: post.slug,
      title: post.title,
      excerpt: post.description || 'Read more about this journey...',
      category: post.category || 'Travel Stories',
      image: post.image || 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
    }))

  const categories = [
    { name: "Personal", count: 12 },
    { name: "Traveling", count: 24 },
    { name: "Hack", count: 8 },
    { name: "Tips", count: 15 },
    { name: "India", count: 18 },
    { name: "China", count: 6 },
    { name: "Japan", count: 9 }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
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
                  src={data.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80'}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-wider bg-amber-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {data.category || 'Travel Stories'}
                    </span>
                    <span className="text-xs bg-stone-800/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      {data.readTime || '5 min read'}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">{data.title}</h1>
                  <p className="text-lg text-white/80 font-light">{data.description}</p>
                </div>
              </div>

              {/* Article Meta */}
              <div className="p-8 border-b border-stone-200/50">
                <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{data.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{data.author || 'Gmaal'}</span>
                  </div>
                  {data.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{data.location}</span>
                    </div>
                  )}
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

              {/* Article Content - WITH COMPLETE CUSTOM STYLES! */}
              <div className="p-8">
                <MDXRemote 
                  source={content} 
                  components={components}
                />
              </div>

              {/* Tags */}
              <div className="px-8 pb-8 flex items-center gap-3">
                <Tag className="w-4 h-4 text-stone-400" />
                <div className="flex flex-wrap gap-2">
                  {(data.tags || ['Himachal', 'Mountains', 'Solo Travel', 'Hidden Gems']).map((tag: string) => (
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
                  <p className="text-stone-800 font-medium">{data.author || 'Gmaal'}</p>
                  <p className="text-sm text-stone-500">wandering soul</p>
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