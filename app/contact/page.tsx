// app/contact/page.tsx
import { Leaf, Mail, MapPin, Phone, Send, Instagram, Youtube, Linkedin } from 'lucide-react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Decorative Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <span className="text-amber-500/80 text-sm uppercase tracking-[0.2em] font-light">
              Get in Touch
            </span>
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h1 className="text-5xl md:text-8xl font-light text-stone-800 mb-6">
            Contact Me
          </h1>

          {/* Floral decoration */}
          <div className="flex justify-center gap-4">
            <Leaf className="w-5 h-5 text-amber-400/60 rotate-12" />
            <Leaf className="w-5 h-5 text-amber-400/60 -rotate-12" />
            <Leaf className="w-5 h-5 text-amber-400/60 rotate-45" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div className="relative">
            {/* Background floral elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <Leaf className="absolute -top-10 -left-10 w-32 h-32 text-stone-400 rotate-12" />
            </div>

            {/* Form Card */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-stone-200/50 shadow-sm">
              {/* Decorative corner elements */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-amber-300/40 rounded-tl-2xl" />
              
              <h2 className="text-2xl font-light text-stone-800 mb-8 flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500" />
                Send a Message
              </h2>

              <form className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm text-stone-500 font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors text-stone-700 placeholder-stone-400 font-light"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm text-stone-500 font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors text-stone-700 placeholder-stone-400 font-light"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm text-stone-500 font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Share your thoughts, questions, or just say hello..."
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors text-stone-700 placeholder-stone-400 font-light resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button className="group w-full px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Decorative dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-1 h-1 rounded-full bg-amber-300/40" />
                <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                <div className="w-1 h-1 rounded-full bg-amber-300/40" />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info & Follow */}
          <div className="relative">
           

            {/* Info Card */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-stone-200/50 shadow-sm h-full flex flex-col">
              {/* Decorative corner elements */}
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-amber-300/40 rounded-br-2xl" />

              {/* Logo/Icon at top */}
              {/* <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
              </div>  */}

              <h2 className="text-2xl font-light text-stone-800 mb-8 ">
                Let's Connect
              </h2>

              {/* Contact Info */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 group-hover:border-amber-400 transition-colors">
                    <Mail className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-light">Email</p>
                    <p className="text-stone-700 font-light">hello@cherrydiary.com</p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 group-hover:border-amber-400 transition-colors">
                    <Phone className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-light">Phone</p>
                    <p className="text-stone-700 font-light">+91 98765 43210</p>
                  </div>
                </div> */}

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 group-hover:border-amber-400 transition-colors">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 font-light">Location</p>
                    <p className="text-stone-700 font-light">India / World</p>
                  </div>
                </div>
              </div>

              {/* Divider with floral touch */}
              <div className="relative my-8">
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
                <h3 className="text-xl font-light text-stone-700 mb-6">
                  Follow the Journey
                </h3>

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

                {/* Quick response text */}
                <p className="text-sm text-stone-400 font-light mt-8">
                  Usually responds within 24 hours
                </p>

                {/* Decorative dots */}
                <div className="flex justify-center gap-2 mt-6">
                  <div className="w-1 h-1 rounded-full bg-amber-300/40" />
                  <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                  <div className="w-1 h-1 rounded-full bg-amber-300/40" />
                  <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                  <div className="w-1 h-1 rounded-full bg-amber-300/40" />
                </div>
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

export default ContactPage