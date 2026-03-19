"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BookHeart, MapPin, Menu, X } from 'lucide-react'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/blog', label: 'Blogs' },
    { href: '/about', label: 'About Me' },
    { href: '/contact', label: 'Contact Me' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl  border-stone-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left side */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl md:text-3xl font-semibold tracking-tight group"
          >
            <BookHeart className="w-7 h-7 md:w-8 md:h-8 text-amber-600 transition-transform group-hover:rotate-12" />
            <span className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
              Gmaal Diary
            </span>
          </Link>

          {/* Desktop Navigation - RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-base font-medium text-stone-600 transition-colors hover:text-amber-700"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-600" />
            ) : (
              <Menu className="w-6 h-6 text-stone-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium px-2 py-2 rounded-lg text-stone-600 hover:bg-stone-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar