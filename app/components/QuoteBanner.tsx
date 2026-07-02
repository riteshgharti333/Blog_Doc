"use client";

import { useEffect, useState } from "react";
import { Flower2, Leaf, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const QuoteBanner = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const quotes = [
    {
      quote: "Not all who wander are lost",
      author: "J.R.R. Tolkien",
      note: "But I'd add: they're just taking the scenic route",
      icon: "🌿"
    },
    {
      quote: "The world is a book, and those who do not travel read only one page",
      author: "Saint Augustine",
      note: "I'm trying to read the whole library",
      icon: "📖"
    },
    {
      quote: "Collect moments, not things",
      author: "Unknown",
      note: "My journal is proof that moments weigh more than souvenirs",
      icon: "✨"
    },
    {
      quote: "To travel is to take a journey into yourself",
      author: "Danny Kaye",
      note: "Every road leads inward eventually",
      icon: "🛤️"
    },
    {
      quote: "Wherever you go becomes a part of you somehow",
      author: "Anita Desai",
      note: "I carry pieces of every place in my pockets",
      icon: "🧳"
    },
    {
      quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes",
      author: "Marcel Proust",
      note: "The secret is learning to see what's already there",
      icon: "👁️"
    },
    {
      quote: "Travel far enough, you meet yourself",
      author: "David Mitchell",
      note: "Found myself in a tea stall in Varanasi",
      icon: "☕"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate quotes
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goToQuote = (index: number) => {
    if (index === currentQuote) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuote(index);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs with different timing */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-rose-200/20 blur-3xl animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-stone-200/20 blur-3xl animate-pulse" 
          style={{ animationDuration: '12s', animationDelay: '1s' }} />

        {/* Shimmer lines */}
        <div className="absolute top-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent animate-shimmer"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite'
            }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent animate-shimmer"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
              animationDelay: '1.5s'
            }} />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-float" style={{ animationDuration: '6s' }}>
          <Leaf className="w-8 h-8 text-stone-300/60 rotate-12" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
          <Flower2 className="w-6 h-6 text-amber-300/50 -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-40 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>
          <Flower2 className="w-7 h-7 text-stone-300/60 rotate-45" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
          <Leaf className="w-10 h-10 text-amber-300/40 -rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-300/60" />
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-300/60" />
          </div>
          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Words to Wander By
          </h2>
          <p className="text-stone-500 text-lg font-light italic">
            "Quotes that feel like home"
          </p>
        </div>

        {/* Quote Display */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
         

          {/* Large opening quote mark */}
          <span className="block text-8xl md:text-9xl text-amber-300/40 font-serif leading-none mb-4">
            "
          </span>

          {/* Quote text with fade transition */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
            <blockquote className="mb-8 px-4">
              <p className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-700 leading-relaxed tracking-wide">
                {quotes[currentQuote].quote}
              </p>
            </blockquote>

            {/* Author */}
            <div className="space-y-2 mb-12">
              <p className="text-xl text-stone-500 font-light italic">
                — {quotes[currentQuote].author}
              </p>
              <p className="text-sm text-stone-400 font-light">
                {quotes[currentQuote].note}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={handlePrev}
              className="group p-3 rounded-full border border-stone-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-5 h-5 text-stone-400 group-hover:text-amber-600 transition-colors" />
            </button>

            <button
              onClick={handleNext}
              className="group p-3 rounded-full border border-stone-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300"
              aria-label="Next quote"
            >
              <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-amber-600 transition-colors" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuote(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentQuote 
                    ? 'w-3 h-3 bg-amber-400' 
                    : 'w-2 h-2 bg-stone-300 hover:bg-amber-300'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-xs text-stone-400 font-light tracking-wider mt-4 uppercase">
            {currentQuote + 1} / {quotes.length}
          </p>
        </div>

        {/* Decorative bottom */}
        <div className="mt-16">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-px bg-amber-300/40" />
            <div className="w-16 h-px bg-amber-300/30" />
            <div className="w-8 h-px bg-amber-300/20" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}

export default QuoteBanner