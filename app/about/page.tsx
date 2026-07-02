// app/about/page.tsx
import { Leaf, Heart, Calendar, Compass, Instagram, Youtube, Linkedin, Earth } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Decorative Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Get to Know
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h1 className="text-5xl md:text-8xl font-light text-stone-800 mb-6">
            About Me
          </h1>

          {/* Floral decoration */}
          <div className="flex justify-center gap-4">
            <Leaf className="w-5 h-5 text-amber-400/60 rotate-12" />
            <Leaf className="w-5 h-5 text-amber-400/60 -rotate-12" />
            <Leaf className="w-5 h-5 text-amber-400/60 rotate-45" />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          
          {/* Content Card */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-stone-200/50 shadow-sm">
            {/* Decorative corner elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-amber-300/40 rounded-tl-2xl" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-amber-300/40 rounded-br-2xl" />

            {/* Logo/Icon at top */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                <Earth className="w-8 h-8 text-amber-600" />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-8 text-center">
              {/* First paragraph */}
              <div className="space-y-3 ">
                <p className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed">
                  About Cherry Diary
                </p>
                <div className="w-20 h-px bg-amber-300/60 mx-auto md:mx-0" />
              </div>

              <p className="text-lg text-stone-600 font-light leading-relaxed">
                I started this as a way to document my journey.
              </p>

              <p className="text-stone-600 font-light leading-relaxed">
                I visit places that are not famous, but feel real to me.
                <br />
                Sometimes it's a trip, sometimes just a random day.
              </p>

              <p className="text-stone-600 font-light leading-relaxed">
                This is not a typical blog.
                <br />
                It's just a record of where I went, what I felt, and what I learned.
              </p>

              <p className="text-stone-600 font-light leading-relaxed">
                Some entries may be simple, some detailed — but all of them are real.
              </p>

              {/* Started date with decoration */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span className="text-stone-500 font-light">Started in 2026</span>
                <Heart className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* Divider with floral touch */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200/60" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-[#faf7f2] text-stone-400">
                  <Leaf className="w-4 h-4 text-amber-400/60" />
                </span>
              </div>
            </div>

            {/* Follow Section */}
            <div className="text-center">
              <h3 className="text-xl font-light text-stone-700 mb-4 flex items-center justify-center gap-2">
                <Compass className="w-4 h-4 text-amber-500" />
                Follow the Journey
              </h3>

              <p className="text-stone-500 font-light mb-6 max-w-md mx-auto">
                Connect on social media for updates and behind the scenes
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 group-hover:border-amber-400 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-amber-50">
                    <Instagram className="w-6 h-6 text-stone-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="text-xs text-stone-500 group-hover:text-amber-600 transition-colors">
                    Instagram
                  </span>
                </Link>

                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 group-hover:border-amber-400 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-amber-50">
                    <Youtube className="w-6 h-6 text-stone-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="text-xs text-stone-500 group-hover:text-amber-600 transition-colors">
                    YouTube
                  </span>
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 group-hover:border-amber-400 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-amber-50">
                    <Linkedin className="w-6 h-6 text-stone-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="text-xs text-stone-500 group-hover:text-amber-600 transition-colors">
                    LinkedIn
                  </span>
                </Link>
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
          </div>
        </div>

        {/* Bottom floral decoration */}
        <div className="flex justify-center gap-4 mt-12">
          <Leaf className="w-4 h-4 text-amber-300/60 rotate-12" />
          <Leaf className="w-4 h-4 text-amber-300/60 -rotate-12" />
          <Leaf className="w-4 h-4 text-amber-300/60 rotate-45" />
          <Leaf className="w-4 h-4 text-amber-300/60 -rotate-45" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage