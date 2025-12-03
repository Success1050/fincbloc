"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Feature {
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  icon: string;
}

const FeaturesCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    {
      title: "Get up to",
      highlight: "5,000 USDT",
      subtitle: "Rewards",
      description: "Welcome Gift",
      icon: "🎁",
    },

    // {
    //   title: "Stay at the top",
    //   highlight: "5,000 USDT",
    //   subtitle: "Rewards",
    //   description: "Welcome Gift",
    //   icon: "🎁",
    // },
    {
      title: "Enjoy",
      highlight: "100% Loss",
      subtitle: "Protection",
      description: "Copy Trading",
      icon: "🔒",
    },
    {
      title: "Who's",
      highlight: "Selling Bitcoin",
      subtitle: "?",
      description: "FincBloc Research",
      icon: "₿",
    },
    {
      title: "Earn Commission",
      highlight: "Up to 50%",
      subtitle: "",
      description: "Join FincBloc Affiliate",
      icon: "👥",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#0f0f0f] text-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Announcement Banner */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-gray-800 rounded">📢</span>
            <span>FincBloc Rewards Hub: Brand-New Upgrade Is Live!</span>
          </div>
        </div>

        {/* Features Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -ml-5 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="hrink-0 w-[280px] bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group/card"
              >
                <div className="space-y-4">
                  {/* Text Content */}
                  <div className="min-h-[100px]">
                    <h3 className="text-white text-lg mb-1">
                      {feature.title}{" "}
                      <span className="text-orange-500 font-bold">
                        {feature.highlight}
                      </span>
                    </h3>
                    {feature.subtitle && (
                      <h3 className="text-orange-500 font-bold text-lg">
                        {feature.subtitle}
                      </h3>
                    )}
                    <p className="text-gray-400 text-sm mt-2">
                      {feature.description}
                    </p>
                  </div>

                  {/* Icon/Illustration */}
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent rounded-lg blur-xl"></div>
                    {index === 0 && (
                      <div className="relative">
                        <div className="w-24 h-24 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-4xl shadow-lg shadow-orange-500/50">
                          {feature.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full border-2 border-orange-500 flex items-center justify-center text-xs">
                          T
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="relative">
                        <div className="w-20 h-20 bg-linear-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-3xl">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-orange-500 rounded-full opacity-50"></div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="relative">
                        <div className="w-24 h-24 bg-linear-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 border-2 border-orange-500/30">
                          <span className="text-5xl text-orange-500 font-bold">
                            {feature.icon}
                          </span>
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-ping"></div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="relative">
                        <div className="w-24 h-24 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-orange-500/50">
                          {feature.icon}
                        </div>
                        <div className="absolute bottom-0 left-0 w-16 h-3 bg-orange-500/30 rounded-full blur-sm"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -mr-5 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturesCarousel;
