"use client";

import { useState } from "react";
import {
  Flower2,
  Leaf,
  Sparkles,
  Mail,
  Send,
  Heart,
  ArrowRight,
} from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-200/20 blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-rose-200/20 blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "3s" }}
        />

        {/* Scattered botanical elements */}
        <div
          className="absolute top-20 left-20 animate-float"
          style={{ animationDuration: "7s" }}
        >
          <Leaf className="w-8 h-8 text-stone-300/50 rotate-12" />
        </div>
        <div
          className="absolute top-32 right-40 animate-float"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        >
          <Flower2 className="w-6 h-6 text-amber-300/40 -rotate-12" />
        </div>
        <div
          className="absolute bottom-40 left-40 animate-float"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        >
          <Flower2 className="w-7 h-7 text-stone-300/50 rotate-45" />
        </div>
        <div
          className="absolute bottom-20 right-20 animate-float"
          style={{ animationDuration: "9s", animationDelay: "0.5s" }}
        >
          <Leaf className="w-10 h-10 text-amber-300/30 -rotate-45" />
        </div>

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        </div>
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-300/60" />
            <Sparkles
              className="w-5 h-5 text-amber-400 animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <div className="w-12 h-px bg-amber-300/60" />
          </div>

          <h2 className="text-5xl md:text-8xl font-light text-stone-800 mb-4">
            Stay in Touch
          </h2>

          <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light italic">
            "Letters from the road, delivered to your inbox"
          </p>
        </div>

        {/* Main Card */}
        <div
          className="relative bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-14 border border-stone-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-px bg-amber-300/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
            </div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
              <div className="w-8 h-px bg-amber-300/50" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-px bg-amber-300/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300/60" />
              <div className="w-8 h-px bg-amber-300/50" />
            </div>
          </div>

          {/* Envelope icon */}
          <div
            className={`flex justify-center mb-8 transition-transform duration-500 ${isHovering ? "scale-110" : "scale-100"}`}
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
                <Mail className="w-8 h-8 text-amber-400" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Heart
                  className="w-5 h-5 text-rose-400 animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
              </div>
            </div>
          </div>

          {!subscribed ? (
            <>
              {/* Description */}
              <div className="text-center mb-10">
                <p className="text-stone-600 font-light text-lg leading-relaxed mb-4">
                  No spam, no algorithms. Just personal stories, travel tips,
                  and the occasional poem — straight to your inbox.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-stone-400 font-light">
                  <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                    Monthly letters
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-amber-300/60" />
                    Unsubscribe anytime
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative group">
                  {/* Input field with decorative border */}
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-6 py-4 pr-14 bg-white/60 backdrop-blur-sm rounded-full border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-100 outline-none text-stone-700 placeholder-stone-400 font-light transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-amber-400 hover:bg-amber-500 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Decorative underline */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Leaf className="w-3 h-3 text-amber-300 rotate-12" />
                    <div className="w-12 h-px bg-amber-300/40" />
                    <Leaf className="w-3 h-3 text-amber-300 -rotate-12" />
                  </div>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center animate-fadeIn">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-light text-stone-700 mb-2">
                  You're in!
                </h3>
                <p className="text-stone-500 font-light">
                  Check your inbox for a little welcome note. 🌿
                </p>
              </div>
              <button
                onClick={() => setSubscribed(false)}
                className="text-sm text-amber-600 hover:text-amber-700 font-light underline underline-offset-4 transition-colors"
              >
                Subscribe another email
              </button>
            </div>
          )}
        </div>

        {/* Social proof */}
        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Flower2 key={star} className="w-4 h-4 text-amber-300/60" />
            ))}
          </div>
          <p className="text-stone-400 text-sm font-light italic">
            "Joined by 2,400+ gentle souls"
          </p>
        </div>

        {/* Bottom decorative */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <Leaf className="w-4 h-4 text-stone-300 -rotate-12" />
          <div className="w-8 h-px bg-amber-300/40" />
          <Flower2 className="w-4 h-4 text-stone-300 rotate-45" />
          <div className="w-8 h-px bg-amber-300/40" />
          <Leaf className="w-4 h-4 text-stone-300 rotate-12" />
        </div>
      </div>

      {/* CSS Animation for success state */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSignup;
