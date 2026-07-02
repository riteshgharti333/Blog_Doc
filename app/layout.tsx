import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Leaf, Pen, MapPin, Book, Camera, Compass, Heart, Feather } from "lucide-react";
import NewsletterSignup from "./components/NewsletterSignup";
import ScrollFlower from "./components/ScrollFlower";
import CustomScrollbar from "./components/CustomScrollbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gmaal Diary - Travel Journal",
  description: "Documenting real journeys, one place at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create evenly spaced positions across the viewport
  const positions = [
    // Top row
    { top: "5%", left: "5%", icon: Leaf, size: 32, rotation: 12 },
    { top: "8%", left: "15%", icon: Pen, size: 28, rotation: -8 },
    { top: "12%", left: "28%", icon: MapPin, size: 36, rotation: 0 },
    { top: "7%", left: "45%", icon: Camera, size: 30, rotation: 15 },
    { top: "10%", left: "62%", icon: Heart, size: 34, rotation: -5 },
    { top: "5%", left: "78%", icon: Compass, size: 38, rotation: 20 },
    { top: "9%", left: "92%", icon: Feather, size: 32, rotation: -12 },
    
    // Second row
    { top: "22%", left: "12%", icon: Book, size: 40, rotation: 5 },
    { top: "25%", left: "32%", icon: Leaf, size: 35, rotation: -15 },
    { top: "20%", left: "52%", icon: Camera, size: 32, rotation: 10 },
    { top: "27%", left: "72%", icon: Pen, size: 30, rotation: -20 },
    { top: "23%", left: "88%", icon: Heart, size: 36, rotation: 8 },
    
    // Middle rows
    { top: "38%", left: "8%", icon: MapPin, size: 42, rotation: -10 },
    { top: "42%", left: "22%", icon: Feather, size: 34, rotation: 15 },
    { top: "35%", left: "38%", icon: Compass, size: 44, rotation: -5 },
    { top: "40%", left: "55%", icon: Leaf, size: 38, rotation: 25 },
    { top: "37%", left: "70%", icon: Book, size: 36, rotation: -12 },
    { top: "43%", left: "85%", icon: Camera, size: 32, rotation: 8 },
    { top: "36%", left: "95%", icon: Heart, size: 30, rotation: -8 },
    
    // Fourth row
    { top: "55%", left: "10%", icon: Compass, size: 46, rotation: 15 },
    { top: "58%", left: "25%", icon: Leaf, size: 40, rotation: -20 },
    { top: "52%", left: "42%", icon: Pen, size: 34, rotation: 10 },
    { top: "57%", left: "58%", icon: MapPin, size: 38, rotation: -15 },
    { top: "53%", left: "75%", icon: Feather, size: 36, rotation: 22 },
    { top: "59%", left: "90%", icon: Camera, size: 32, rotation: -8 },
    
    // Bottom rows
    { top: "72%", left: "15%", icon: Heart, size: 40, rotation: 12 },
    { top: "75%", left: "32%", icon: Book, size: 44, rotation: -10 },
    { top: "70%", left: "48%", icon: Leaf, size: 48, rotation: 18 },
    { top: "77%", left: "65%", icon: Compass, size: 42, rotation: -15 },
    { top: "73%", left: "82%", icon: Pen, size: 36, rotation: 8 },
    { top: "78%", left: "95%", icon: MapPin, size: 34, rotation: -5 },
    
    // Very bottom
    { top: "88%", left: "8%", icon: Camera, size: 38, rotation: 12 },
    { top: "92%", left: "28%", icon: Feather, size: 42, rotation: -18 },
    { top: "87%", left: "52%", icon: Heart, size: 36, rotation: 25 },
    { top: "93%", left: "72%", icon: Leaf, size: 44, rotation: -12 },
    { top: "89%", left: "88%", icon: Book, size: 40, rotation: 8 },
  ];

  // Create evenly spaced small dots
  const dots = [];
  for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 20; col++) {
      // Add some randomness to spacing but keep grid pattern
      if (Math.random() > 0.7) {
        dots.push({
          top: `${row * 8 + 2 + Math.random() * 4}%`,
          left: `${col * 5 + Math.random() * 3}%`,
          size: Math.random() > 0.5 ? 4 : 6,
        });
      }
    }
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf7f2] relative">
        {/* Random decorative icons - evenly spaced */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Large icons grid */}
          {positions.map((pos, index) => {
            const Icon = pos.icon;
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: pos.top,
                  left: pos.left,
                }}
              >
                <Icon 
                  size={pos.size} 
                  className="text-amber-200/30 transition-all hover:text-amber-300/40"
                  style={{ 
                    transform: `rotate(${pos.rotation}deg)`,
                  }}
                />
              </div>
            );
          })}

          {/* Medium icons - additional layer for depth */}
          {positions.slice(0, 15).map((pos, index) => {
            const Icon = pos.icon;
            return (
              <div
                key={`medium-${index}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `calc(${pos.top} + 3%)`,
                  left: `calc(${pos.left} + 2%)`,
                }}
              >
                <Icon 
                  size={pos.size * 0.4} 
                  className="text-stone-300/25"
                  style={{ 
                    transform: `rotate(${(pos.rotation || 0) + 45}deg)`,
                  }}
                />
              </div>
            );
          })}

          {/* Small dots grid - evenly spaced */}
          {dots.map((dot, index) => (
            <div
              key={`dot-${index}`}
              className="absolute rounded-full bg-amber-200/30"
              style={{
                top: dot.top,
                left: dot.left,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
              }}
            />
          ))}

          {/* Diagonal lines of micro dots */}
          <div className="absolute top-[15%] left-[20%] flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={`diag1-${i}`}
                className="w-1 h-1 rounded-full bg-stone-300/30"
                style={{ marginTop: i * 4 }}
              />
            ))}
          </div>
          
          <div className="absolute bottom-[25%] right-[15%] flex gap-1 rotate-45">
            {[...Array(5)].map((_, i) => (
              <div
                key={`diag2-${i}`}
                className="w-1.5 h-1.5 rounded-full bg-amber-200/30"
                style={{ marginLeft: i * 6 }}
              />
            ))}
          </div>
        </div>

        {/* Main content with relative z-index to appear above icons */}
        <div className="relative z-10 flex flex-col min-h-full">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <NewsletterSignup />
          <ScrollFlower />
          <CustomScrollbar />
          <Footer />
        </div>
      </body>
    </html>
  );
}