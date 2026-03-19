// components/Footer.tsx
import { Heart, Leaf, MapPin, Compass, Camera, Twitter, Instagram, Github } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4  border-t border-stone-200/50">
      {/* Background floral elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Leaf className="absolute top-10 left-10 w-16 h-16 text-stone-400 rotate-12" />
        <Leaf className="absolute bottom-10 right-10 w-20 h-20 text-stone-400 -rotate-12" />
        <Leaf className="absolute top-1/2 left-1/4 w-12 h-12 text-stone-400 rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-600" />
              <span className="text-2xl font-light text-stone-800">Gmaal Diary</span>
            </div>
            <p className="text-stone-500 font-light leading-relaxed">
              Documenting real journeys, one place at a time. No filters, just authentic experiences.
            </p>
            {/* Decorative line */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-8 h-px bg-amber-300/60" />
              <Heart className="w-3 h-3 text-amber-400" />
              <div className="w-8 h-px bg-amber-300/60" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-stone-700 tracking-wide">Explore</h3>
            <ul className="space-y-3">
              {['Blogs', 'About Me', 'Contact Me', 'Categories'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-stone-500 hover:text-amber-700 transition-colors font-light flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Mini */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-stone-700 tracking-wide">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Personal', 'Traveling', 'Hack', 'Tips', 'India', 'China', 'Japan'].map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="px-3 py-1 bg-white/40 backdrop-blur-sm rounded-full text-sm text-stone-600 hover:text-amber-700 hover:bg-white border border-stone-200/50 transition-all"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-stone-700 tracking-wide">Connect</h3>
            <p className="text-stone-500 font-light text-sm">
              Follow along for real-time updates and behind the scenes.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Github, href: '#' },
                { icon: Camera, href: '#' }
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-2 bg-white/40 backdrop-blur-sm rounded-full text-stone-600 hover:text-amber-700 hover:bg-white border border-stone-200/50 transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
            {/* Compass decoration */}
            <div className="flex items-center gap-2 pt-4">
              <Compass className="w-4 h-4 text-amber-400/60" />
              <span className="text-xs text-stone-400 font-light">Lost somewhere good</span>
            </div>
          </div>
        </div>

        {/* Divider with floral touch */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200/60" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[#faf7f2] text-stone-400">
              <Leaf className="w-4 h-4 text-amber-400/60" />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500 font-light">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Gmaal Diary</span>
            <span className="w-1 h-1 rounded-full bg-amber-300/60" />
            <span>All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-amber-700 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-xs">
            <span>crafted with</span>
            <Heart className="w-3 h-3 text-amber-400" />
            <span>for real stories</span>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-1 h-1 rounded-full bg-amber-300/40" />
          <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          <div className="w-1 h-1 rounded-full bg-amber-300/40" />
          <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          <div className="w-1 h-1 rounded-full bg-amber-300/40" />
        </div>
      </div>
    </footer>
  )
}

export default Footer